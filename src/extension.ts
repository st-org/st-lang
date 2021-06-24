import * as vscode from 'vscode'
import {cmds} from './katex'
import {stringify,parse} from './json'
export function activate(context: vscode.ExtensionContext) {
	const backslash = vscode.languages.registerCompletionItemProvider('st', {
        provideCompletionItems(document,position) {
            if(document.getWordRangeAtPosition(position,/\\[a-zA-Z]*/)===undefined)return []
            return cmds.map(val=>new vscode.CompletionItem(val))
        }
    },'\\')
    const labelCompletion = vscode.languages.registerCompletionItemProvider('st', {
        provideCompletionItems(document,position) {
            if(document.getWordRangeAtPosition(position,/label:?[ ]*'/)===undefined)return []
            const labels:Record<string,boolean>={}
            return Array.from(document.getText().matchAll(/label:?[ ]*'([^'\\\n]+)'/g)).filter(val=>{
                if(labels[val[1]])return false
                return labels[val[1]]=true
            }).map(val=>new vscode.CompletionItem(val[1],17))
        }
    },"'")
    const labelReference=vscode.languages.registerReferenceProvider('st',{
        provideReferences(document,position){
            const range=document.getWordRangeAtPosition(position,/label:?[ ]*'[^'\\\n]+'/)
            if(range===undefined)return []
            const label=document.getText(range).replace(/^label:?[ ]*'/,'').slice(0,-1)
            return Array.from(document.getText().matchAll(/label:?[ ]*'([^'\\\n]+)'/g)).filter(val=>val[1]===label).map(val=>{
                const end=(val.index??0)+val[0].length-1
                const start=end-val[1].length
                return new vscode.Location(document.uri,new vscode.Range(document.positionAt(start),document.positionAt(end)))
            })
        }
    })
    const labelRename=vscode.languages.registerRenameProvider('st',{
        prepareRename(document,position){
            const range=document.getWordRangeAtPosition(position,/label:?[ ]*'[^'\\\n]+'/)
            if(range===undefined)return undefined
            const label=document.getText(range).replace(/^label:?[ ]*'/,'').slice(0,-1)
            return new vscode.Range(new vscode.Position(range.end.line,range.end.character-label.length-1),new vscode.Position(range.end.line,range.end.character-1))
        },
        provideRenameEdits(document,position,newName){
            const edit=new vscode.WorkspaceEdit()
            const range=document.getWordRangeAtPosition(position,/label:?[ ]*'[^'\\\n]+'/)
            if(range===undefined)return edit
            const label=document.getText(range).replace(/^label:?[ ]*'/,'').slice(0,-1)
            Array.from(document.getText().matchAll(/label:?[ ]*'([^'\\\n]+)'/g)).filter(val=>val[1]===label).forEach(val=>{
                const end=(val.index??0)+val[0].length-1
                const start=end-val[1].length
                edit.replace(document.uri,new vscode.Range(document.positionAt(start),document.positionAt(end)),newName)
            })
            return edit
        }
    })
    const format=vscode.languages.registerDocumentFormattingEditProvider('st',{
        provideDocumentFormattingEdits(document){
            const string=document.getText()
            const json=parse('['+string.replace(/\r/g,'').split('\nhistory\n',2)[0]+']')
            if(!Array.isArray(json))return []
            return [vscode.TextEdit.replace(new vscode.Range(new vscode.Position(0,0),document.positionAt(string.length)),json.map(val=>stringify(val,'arrayInObject')).join('\n'))]
        }
    })
	context.subscriptions.push(backslash,labelCompletion,labelReference,labelRename,format)
}
export function deactivate() {}