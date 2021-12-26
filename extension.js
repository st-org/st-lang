(()=>{"use strict";var e={400:(e,t,n)=>{n.r(t),n.d(t,{parse:()=>s,stringify:()=>g,format:()=>p});var r=n(650);function i(e){let t="div",n=[],r={};for(const i of Object.keys(e)){let o=e[i];if(void 0!==o)if("__"!==i)if(Array.isArray(o))t=i,n=a(o);else if("object"!=typeof o)r[i]=o;else{if(o=o.__,void 0===o)continue;"string"==typeof o?o=[{__:o}]:Array.isArray(o)||(o=[o]),r[i]=a(o)}else Array.isArray(o)||(o=[o]),t="katex",n=a(o)}return{tag:t,children:n,options:r}}function o(e){const t=[];for(const n of e)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||t.push(i(n));else for(const e of n)e>=" "&&t.push(e);return t}function a(e){const t=[];for(const n of e)Array.isArray(n)?t.push(o(n)):t.push(o([n]));return t}function s(e){const t=r.parse("["+e+"]");if(Array.isArray(t))return a(t)}function l(e){const t={},{tag:n,children:r,options:i}=e;for(const e of Object.keys(i)){let n=i[e];t[e]="object"==typeof n?{__:u(n)}:n}return"katex"===n?t.__=function(e){const t=d(e);if(1===t.length){const e=t[0];if("string"==typeof e)return e}return t}(r):("div"!==n||r.length>0)&&(t[n]=d(r)),t}function c(e){const t=[];let n="";for(const r of e)"object"!=typeof r?n+=r:(n.length>0&&(t.push(n),n=""),t.push(l(r)));return n.length>0&&t.push(n),1===t.length?t[0]:t}function d(e){const t=[];for(const n of e)t.push(c(n));return t}function u(e){const t=d(e);if(1===t.length){const e=t[0];if("object"==typeof e&&!Array.isArray(e)){const t=Object.keys(e);if(1===t.length&&"__"===t[0]){const t=e.__;if("string"==typeof t)return t}}}return t}function g(e){return void 0===e?"":e.length<2?r.stringify(d(e),{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():r.stringify(d(e),{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim()}function p(e){const t=r.parseWithIndex("["+e+"]");return void 0!==t&&Array.isArray(t.value)?t.value.length<2?r.stringifyWithComment(t.value,{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():r.stringifyWithComment(t.value,{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():e}},650:(e,t,n)=>{function r(e,t,n=!1){let r=0,i=!1,o=!1,a=0,s=!1,l=[];const c=[];for(let d=0;d<e.length;d++){if(!0===o){o=!1;continue}const u=e[d];if("line"!==s)if("block"!==s)if("'"!==u){if(i){if("\\"===u){o=!0;continue}}else if("{"!==u&&"["!==u)if("}"!==u&&"]"!==u){if(!(r>0))if(","!==u&&"\n"!==u){if(!(a<d))if(0!==u.trimEnd().length){if("/"===u){const t=e[d+1];if("/"===t){a=d,d++,s="line";continue}if("*"===t){a=d,d++,s="block";continue}}}else a=d+1}else{const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d+1}}else{if(r--,r<0){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]);break}0===r&&(c.push({value:e.slice(a,d+1),index:t+a,comment:l.join("\n")}),l=[],a=d+1)}else if(r++,1===r&&!n){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d}}else{if(!i){if(i=!0,0===r&&!n){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d}continue}i=!1,0===r&&(c.push({value:e.slice(a,d+1),index:t+a,comment:l.join("\n")}),l=[],a=d+1)}else"*"===u&&"/"===e[d+1]&&(d++,s=!1,l.push(e.slice(a,d+1).replace(/\n[ ]*/g,"\n ")),a=d+1);else"\n"===u&&(s=!1,l.push(e.slice(a,d).trimEnd()),a=d+1)}if(!i&&0===r&&!1===s){const n=e.slice(a).trimEnd();n.length>0&&c.push({value:n,index:t+a,comment:l.join("\n")})}return c}function i(e,t=!1){let n=0,r=!1,i=!1,o=0,a=!1;const s=[];for(let l=0;l<e.length;l++){if(!0===i){i=!1;continue}const c=e[l];if("line"!==a)if("block"!==a)if("'"!==c){if(r){if("\\"===c){i=!0;continue}}else if("{"!==c&&"["!==c)if("}"!==c&&"]"!==c){if(!(n>0))if(","!==c&&"\n"!==c){if(!(o<l))if(0!==c.trimEnd().length){if("/"===c){const t=e[l+1];if("/"===t){l++,a="line",o=l+1;continue}if("*"===t){l++,a="block",o=l+1;continue}}}else o=l+1}else{const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l+1}}else{if(n--,n<0){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t);break}0===n&&(s.push(e.slice(o,l+1)),o=l+1)}else if(n++,1===n&&!t){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l}}else{if(!r){if(r=!0,0===n&&!t){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l}continue}r=!1,0===n&&(s.push(e.slice(o,l+1)),o=l+1)}else"*"===c&&"/"===e[l+1]&&(l++,a=!1),o=l+1;else"\n"===c&&(a=!1),o=l+1}if(!r&&0===n){const t=e.slice(o).trimEnd();t.length>0&&s.push(t)}return s}function o(e){const t=[];let n=!1;for(const r of e)if(!0!==n)if("\\"!==r){if("'"===r)break;t.push(r)}else n=!0;else n=!1,"\\"!==r&&"'"!==r&&t.push("\\"),t.push(r);return t.join("")}function a(e,t=0,n=""){t+=e.length;const i=function(e,t){if(0===e.length)return;const n=e[0];return"'"===n?o(e.slice(1)):"["===n?function(e,t){return function(e){const t=[];for(const{value:n,index:r,comment:i}of e){const e=a(n,r,i);if(void 0===e)return;t.push(e)}return t}(r(e,t))}(e.slice(1),t+1):"{"===n?function(e,t){return function(e){const t={};for(const{value:n,index:r,comment:i}of e){const e=n.match(/^\s*([\w-]+)/);if(null===e){const e=a(n,r,i);if(void 0===e)return;t.__=e;continue}const o=e[1],s=e[0].length;let l=n.slice(s).trimEnd();if(0===l.length)t[o]={value:!0,index:r+s,comment:i};else{const e=a(l,r+s,i);if(void 0===e)return;t[o]=e}}return t}(r(e,t,!0))}(e.slice(1),t+1):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}(e=e.trimStart(),t-=e.length);if(void 0!==i)return{value:i,index:t,comment:n}}function s(e){if(0===(e=e.trimStart()).length)return;const t=e[0];return"'"===t?o(e.slice(1)):"["===t?function(e){return function(e){const t=[];for(const n of e){const e=s(n);if(void 0===e)return;t.push(e)}return t}(i(e))}(e.slice(1)):"{"===t?function(e){return function(e){const t={};for(const n of e){const e=n.match(/^\s*([\w-]+)/);if(null===e){const e=s(n);if(void 0===e)return;t.__=e;continue}const r=e[1],i=e[0].length;let o=n.slice(i).trimEnd();if(0===o.length)t[r]=!0;else{const e=s(o);if(void 0===e)return;t[r]=e}}return t}(i(e,!0))}(e.slice(1)):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}function l(e,t){if(t&&e.length>0&&e[0].trim().length>0&&(1===e.length||e[e.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(e)&&"true"!==e&&"false"!==e&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)&&!e.startsWith("//")&&!e.startsWith("/*"))return e;const n=["'"];for(let t=0;t<e.length;t++){const r=e[t];if("\\"!==r)"'"!==r?n.push(r):n.push("\\'");else{if(t===e.length-1){n.push("\\\\");break}const i=e[t+1];if("\\"===i||"'"===i){n.push("\\\\");continue}n.push(r)}}return n.push("'"),n.join("")}function c(e,t={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?l(e,t.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:t,indentLevel:n,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}){t=t??"none",n=n??0,r=r??"never";const a=[],s=e.length>1&&("all"===t||"array"===t||"arrayInObjectAndThis"===t)||void 0!==e.find((e=>e.comment.length>0)),l=n+(s?1:0);"arrayInObjectAndThis"===t&&(t="arrayInObject");const d="always"===i||"afterComma"===i?", ":",";let u;for(let n=0;n<e.length;n++){const{value:g,comment:p}=e[n];let h;h=void 0===u?c(g,{indentTarget:t,indentLevel:l,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}):u,n!==e.length-1&&(u=c(e[n+1].value,{indentTarget:t,indentLevel:l,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o})),s||n===e.length-1||"always"!==r&&(h.endsWith("'")||h.endsWith("}")||h.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?(p.length>0&&a.push(...p.split("\n")),a.push(h)):a.push(h+d)}let g="\n";for(let e=0;e<n;e++)g+="    ";let p=g;return n>=0&&(p+="    "),s?"["+p+a.join(p)+g+"]":"["+a.join("")+"]"}(e,t):function(e,{indentTarget:t,indentLevel:n,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}){t=t??"none",n=n??0,r=r??"never";const a=[],s=Object.keys(e);let l=s.length>1&&("all"===t||"object"===t);if(!l)for(const t of s){const n=e[t];if(void 0!==n&&n.comment.length>0){l=!0;break}}const d=n+(l?1:0);"arrayInObject"===t&&(t="arrayInObjectAndThis");const u="always"===i||"afterComma"===i?", ":",",g="always"===i||"afterKey"===i?" ":"";for(let n=0;n<s.length;n++){const p=s[n];if(null===p.match(/^[\w-]+$/))continue;const h=e[p];if(void 0===h)continue;const{value:f,comment:m}=h,v=c(f,{indentTarget:t,indentLevel:d,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:"__"===p&&"string"==typeof f?void 0:o});m.length>0&&a.push(...m.split("\n")),v.startsWith("'")||v.startsWith("[")||v.startsWith("{")?l||n===s.length-1||"always"!==r&&"inObject"!==r?a.push(("__"===p?"":p+g)+v):a.push(("__"===p?"":p+g)+v+u):"true"===v?l||n===s.length-1?a.push(p):a.push(p+u):l||n===s.length-1?a.push(p+" "+v):a.push(p+" "+v+u)}let p="\n";for(let e=0;e<n;e++)p+="    ";let h=p;return n>=0&&(h+="    "),l?"{"+h+a.join(h)+p+"}":"{"+a.join("")+"}"}(e,t)}function d(e,t={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?l(e,t.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:t,indentLevel:n,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}){t=t??"none",n=n??0,r=r??"never";const a=[],s=e.length>1&&("all"===t||"array"===t||"arrayInObjectAndThis"===t),l=n+(s?1:0);"arrayInObjectAndThis"===t&&(t="arrayInObject");const c="always"===i||"afterComma"===i?", ":",";let u;for(let n=0;n<e.length;n++){let g;g=void 0===u?d(e[n],{indentTarget:t,indentLevel:l,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}):u,n!==e.length-1&&(u=d(e[n+1],{indentTarget:t,indentLevel:l,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o})),s||n===e.length-1||"always"!==r&&(g.endsWith("'")||g.endsWith("}")||g.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?a.push(g):a.push(g+c)}let g="\n";for(let e=0;e<n;e++)g+="    ";let p=g;return n>=0&&(p+="    "),s?"["+p+a.join(p)+g+"]":"["+a.join("")+"]"}(e,t):function(e,{indentTarget:t,indentLevel:n,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:o}){t=t??"none",n=n??0,r=r??"never";const a=[],s=Object.keys(e),l=s.length>1&&("all"===t||"object"===t),c=n+(l?1:0);"arrayInObject"===t&&(t="arrayInObjectAndThis");const u="always"===i||"afterComma"===i?", ":",",g="always"===i||"afterKey"===i?" ":"";for(let n=0;n<s.length;n++){const p=s[n];if(null===p.match(/^[\w-]+$/))continue;const h=e[p];if(void 0===h)continue;const f=d(h,{indentTarget:t,indentLevel:c,addDecorativeComma:r,addDecorativeSpace:i,useUnquotedString:"__"===p&&"string"==typeof h?void 0:o});f.startsWith("'")||f.startsWith("[")||f.startsWith("{")?l||n===s.length-1||"always"!==r&&"inObject"!==r?a.push(("__"===p?"":p+g)+f):a.push(("__"===p?"":p+g)+f+u):"true"===f?l||n===s.length-1?a.push(p):a.push(p+u):l||n===s.length-1?a.push(p+" "+f):a.push(p+" "+f+u)}let p="\n";for(let e=0;e<n;e++)p+="    ";let h=p;return n>=0&&(h+="    "),l?"{"+h+a.join(h)+p+"}":"{"+a.join("")+"}"}(e,t)}n.r(t),n.d(t,{parseWithIndex:()=>a,parse:()=>s,stringifyWithComment:()=>c,stringify:()=>d})},669:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const i=n(496),o=n(464),a=n(650),s=n(400),l=n(379);function c(e,t,n,r){return`<!DOCTYPE html>\n    <html style="background:black" data-src=${JSON.stringify(e+"?r="+Math.random())} data-focus-url=${JSON.stringify(t)} data-focus-line=${n} data-focus-id=${JSON.stringify(r)}>\n        <head>\n            <style>\n                html:not([data-color-scheme=light])>body.vscode-dark{\n    --color-text: #cccccc;\n    --color-light: #8f8f8f;\n    --color-string: #df9e61;\n    --color-number: #B5CEA8;\n    --color-keyword: #cc80c6;\n    --color-function: #DCDCAA;\n    --color-variable: #6ec0ec;\n    --color-modifier: #3074ac;\n    --color-class: #4EC9B0;\n    --color-warn: #F44747;\n    --color-comment: #6A9955;\n    --color-border: #2e3133;\n    --color-bg: #131313;\n    --color-area: #161616;\n    --color-pre: #191b1d;\n    --color-slice: rgba(88, 88, 88, .5);\n    --color-selection: rgba(95, 144, 163, .5);\n    --color-span: rgba(58, 61, 65, .5);\n    color: var(--color-text);\n    background-color: var(--color-bg);\n}\nhtml:not([data-color-scheme=light])>body.vscode-dark .dark{\n    filter: brightness(.5);\n}\nhtml:not([data-color-scheme=light])>body.vscode-dark .invert{\n    filter: invert(.9147982) brightness(.8745098);\n}\nbody{\n    color:inherit;\n    font:inherit;\n    padding:0;\n}\nblockquote{\n    background:inherit;\n}\ncode{\n    color:inherit;\n}\nkbd{\n    background:inherit;\n    color:inherit;\n    vertical-align:baseline;\n}\n            </style>\n        </head>\n        <body>\n            <script type="module" src="https://cdn.jsdelivr.net/gh/st-org/st-view@0.10.0/main.js"><\/script>\n            <script type="module">\n                const vscode = acquireVsCodeApi()\n                window.viewer.dblClickLineListeners.push((line,url,partialLine)=>{\n                    vscode.postMessage({\n                        type:'reverse-focus',\n                        line,\n                        url,\n                        partialLine,\n                    })\n                })\n            <\/script>\n        </body>\n    </html>`}function d(e,t,n,o,s){const l=i.window.createWebviewPanel("st-lang.preview",e.path.replace(/^.*\//,""),i.ViewColumn.Beside,{enableScripts:!0,enableFindWidget:!0,enableCommandUris:!0}),d=l.webview.asWebviewUri(e).toString();l.webview.html=c(d,t,n,o);const g=i.workspace.onDidSaveTextDocument((e=>{let t="",n=0;const r=i.window.activeTextEditor;void 0!==r&&r.document===e&&("stdn"===e.languageId&&(t=l.webview.asWebviewUri(e.uri).toString(),n=u(r)),l.webview.html=c(d,t,n,""))}),void 0,s.subscriptions);l.onDidDispose((()=>{g.dispose()}),void 0,s.subscriptions),l.webview.onDidReceiveMessage((e=>r(this,void 0,void 0,(function*(){if("reverse-focus"!==e.type);else{const t=i.Uri.parse(e.url);for(const n of i.window.visibleTextEditors){if("stdn"!==n.document.languageId)continue;const r=l.webview.asWebviewUri(n.document.uri);if(r.authority!==t.authority||r.path!==t.path)continue;const o=a.parseWithIndex("["+n.document.getText()+"]",-1);if(void 0===o||!Array.isArray(o.value))return;let s=0;for(const{value:t,index:r}of o.value){if("object"!=typeof t&&"string"!=typeof t||s++,s<=e.partialLine)continue;const o=n.document.positionAt(r);return void n.revealRange(new i.Range(o,o),3)}}}}))),void 0,s.subscriptions)}function u(e){var t;return Math.max(0,(null!==(t=s.parse(e.document.getText(new i.Range(new i.Position(0,0),e.visibleRanges[0].start))))&&void 0!==t?t:[]).length)}function g(e,t,n){const r=e.positionAt(t);let o=new i.Range(r,e.positionAt(t+1));if("'"!==e.getText(o))return new i.Range(r,e.positionAt(t+n.length));const s=2*n.length+2+t;for(let n=t+1;n<s;n++){if("'"!==e.getText(new i.Range(e.positionAt(n),e.positionAt(n+1))))continue;o=new i.Range(r,e.positionAt(n+1));const t=e.getText(o);if(a.parse(t)===t)break}return o}function p(e,t){const n=e.getText(),r=(0,l.extractIdsWithIndex)(n);let i="",o=0,a="id",s="";for(const n of r){const r=e.positionAt(n.index);if(!(r.line>t.line||r.line<t.line)){if(r.character>t.character)break;i=n.value,o=n.index,a=n.type,s=n.originalString}}return{id:i,index:o,type:a,originalString:s,idsWithIndex:r}}function h(e){for(const t of e){let e="";for(const n of t)e+="string"!=typeof n?h(n.children):n;if(e.length>0)return e}return""}t.activate=function(e){const t=i.languages.registerCompletionItemProvider("stdn",{provideCompletionItems:(e,t)=>void 0===e.getWordRangeAtPosition(t,/\\[a-zA-Z]*/)?[]:o.cmds.map((e=>new i.CompletionItem(e,2)))},"\\"),n=i.languages.registerHoverProvider("stdn",{provideHover(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return;const{id:n,index:r,originalString:o}=p(e,t);if(0===n.length)return;const a=(0,l.extractIdsWithTag)(e.getText()).filter((e=>e.value===n)).map((e=>e.tag));for(const t of yield i.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield i.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&a.push(...(0,l.extractIdsWithTag)(r.getText()).filter((e=>e.value===n)).map((e=>`${e.tag} ${t.path}`)))}return new i.Hover(a,g(e,r,o))}))}}),c=i.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/ref-id[ ]/))return[];const n=(0,l.extractIdsWithTag)(e.getText()).filter((e=>"id"===e.type)).map((e=>new i.CompletionItem({label:a.stringify(e.value,{useUnquotedString:!0}),detail:e.tag},17)));for(const t of yield i.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield i.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&n.push(...(0,l.extractIdsWithTag)(r.getText()).filter((e=>"id"===e.type)).map((e=>new i.CompletionItem({label:a.stringify(e.value,{useUnquotedString:!0}),detail:e.tag,description:t.path},17))))}return n}))}}," "),f=i.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/href[ ]/))return[];const n=(0,l.extractIdsWithTag)(e.getText()).filter((e=>"id"===e.type)).map((e=>new i.CompletionItem({label:a.stringify("#"+encodeURIComponent(e.value),{useUnquotedString:!0}),detail:e.tag},17)));for(const t of yield i.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield i.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&n.push(...(0,l.extractIdsWithTag)(r.getText()).filter((e=>"id"===e.type)).map((e=>new i.CompletionItem({label:a.stringify("#"+encodeURIComponent(e.value),{useUnquotedString:!0}),detail:e.tag,description:t.path},17))))}return n}))}}," "),m=i.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){return void 0===e.getWordRangeAtPosition(t,/orbit[ ]/)?[]:["heading","equation","figure","conjecture","corollary","definition","example","exercise","lemma","notation","proposition","remark","theorem"].map((e=>new i.CompletionItem({label:e},11))).concat((0,l.extractOrbitsWithTag)(e.getText()).map((e=>new i.CompletionItem({label:a.stringify(e.value,{useUnquotedString:!0}),detail:e.tag},11))))}))}}," "),v=i.languages.registerReferenceProvider("stdn",{provideReferences(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return[];const{id:n,idsWithIndex:r}=p(e,t);if(0===n.length)return[];const o=r.filter((e=>e.value===n)).map((t=>new i.Location(e.uri,g(e,t.index,t.originalString))));for(const t of yield i.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield i.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&o.push(...(0,l.extractIdsWithIndex)(r.getText()).filter((e=>e.value===n)).map((e=>new i.Location(r.uri,g(r,e.index,e.originalString)))))}return o}))}}),b=i.languages.registerRenameProvider("stdn",{prepareRename(e,t){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return;const{id:n,index:r,originalString:i}=p(e,t);return 0!==n.length?{range:g(e,r,i),placeholder:n}:void 0},provideRenameEdits(e,t,n){return r(this,void 0,void 0,(function*(){const r=new i.WorkspaceEdit;if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return r;const{id:o,idsWithIndex:s}=p(e,t);if(0===o.length)return r;const l=a.stringify(n,{useUnquotedString:!0}),c=a.stringify("#"+encodeURIComponent(n),{useUnquotedString:!0});return s.filter((e=>e.value===o)).forEach((t=>{r.replace(e.uri,g(e,t.index,t.originalString),"href"===t.type?c:l)})),r}))}}),w=i.languages.registerDocumentFormattingEditProvider("stdn",{provideDocumentFormattingEdits(e){const t=e.getText();return[i.TextEdit.replace(new i.Range(new i.Position(0,0),e.positionAt(t.length)),s.format(t))]}}),x=i.languages.registerDocumentFormattingEditProvider("urls",{provideDocumentFormattingEdits(e){const t=e.getText(),n=a.parseWithIndex("["+t+"]");return void 0===n?[]:[i.TextEdit.replace(new i.Range(new i.Position(0,0),e.positionAt(t.length)),a.stringifyWithComment(n.value,{indentLevel:-1,indentTarget:"all",useUnquotedString:!0}).slice(2,-2))]}}),y=i.languages.registerDocumentFormattingEditProvider("ston",{provideDocumentFormattingEdits(e){const t=e.getText(),n=a.parseWithIndex(t);return void 0===n?[]:[i.TextEdit.replace(new i.Range(new i.Position(0,0),e.positionAt(t.length)),a.stringifyWithComment(n.value,{indentTarget:"all",addDecorativeSpace:"always",useUnquotedString:!0}))]}}),q=i.commands.registerTextEditorCommand("st-lang.preview",(t=>{if("stdn"!==t.document.languageId&&"urls"!==t.document.languageId)return;let n=0;"stdn"===t.document.languageId&&(n=u(t)),d(t.document.uri,"",n,"",e)})),k=i.commands.registerCommand("st-lang.preview-path",((t,n="",r=0,o="")=>{d(i.Uri.file(t),n,r,o,e)})),I=i.commands.registerTextEditorCommand("st-lang.stringify",((e,t)=>{"stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty||t.replace(e.selection,e.document.getText(e.selection).split("\n").map((e=>a.stringify(e,{useUnquotedString:!0}))).join("\n"))})),T=i.commands.registerTextEditorCommand("st-lang.copy-stringify-result",(e=>{"stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty||i.env.clipboard.writeText(e.document.getText(e.selection).split("\n").map((e=>a.stringify(e,{useUnquotedString:!0}))).join("\n"))})),A=i.commands.registerTextEditorCommand("st-lang.copy-id",(e=>{if("stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty)return;let t=e.document.getText(e.selection);const n=s.parse(t);void 0!==n&&(t=h(n)),i.env.clipboard.writeText(function(e){return Array.from(e.slice(0,100).matchAll(/[a-zA-Z0-9]+/g)).join("-").toLowerCase()}(t))}));e.subscriptions.push(t,n,c,f,m,v,b,w,x,y,q,k,I,T,A)},t.deactivate=function(){}},379:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractOrbitsWithTag=t.extractIdsWithIndex=t.extractIdsWithTag=void 0;const r=n(650),i=n(400);function o(e){const t=[];for(const n of e)for(const e of n){if("string"==typeof e)continue;const{id:n}=e.options;"string"==typeof n&&n.length>0&&t.push({value:n,tag:e.tag,type:"id",originalString:n});const r=e.options["ref-id"];"string"==typeof r&&r.length>0&&t.push({value:r,tag:e.tag,type:"ref-id",originalString:r});const{href:i}=e.options;"string"==typeof i&&i.startsWith("#")&&t.push({value:decodeURIComponent(i.slice(1)),tag:e.tag,type:"href",originalString:i});for(const n of Object.keys(e.options)){const r=e.options[n];"object"==typeof r&&t.push(...o(r))}t.push(...o(e.children))}return t}function a(e){const t=[];for(const{value:n}of e)"object"==typeof n&&(Array.isArray(n)?t.push(...a(n)):t.push(...s(n)));return t}function s(e){var t;const n=[],{id:r}=e;void 0!==r&&"string"==typeof r.value&&r.value.length>0&&n.push({value:r.value,index:r.index,type:"id",originalString:r.value});const i=e["ref-id"];void 0!==i&&"string"==typeof i.value&&i.value.length>0&&n.push({value:i.value,index:i.index,type:"ref-id",originalString:i.value});const{href:o}=e;void 0!==o&&"string"==typeof o.value&&o.value.startsWith("#")&&n.push({value:decodeURIComponent(o.value.slice(1)),index:o.index,type:"href",originalString:o.value});for(const r of Object.keys(e)){const i=(null!==(t=e[r])&&void 0!==t?t:{}).value;"object"==typeof i&&(Array.isArray(i)?n.push(...a(i)):n.push(...s(i)))}return n}function l(e){const t=[],n={};for(const r of e)for(const e of r){if("string"==typeof e)continue;const{orbit:r}=e.options;"string"==typeof r&&r.length>0&&void 0===n[r]&&(t.push({value:r,tag:e.tag}),n[r]=!0);for(const n of Object.keys(e.options)){const r=e.options[n];"object"==typeof r&&t.push(...l(r))}t.push(...l(e.children))}return t}t.extractIdsWithTag=function(e){const t=i.parse(e);return void 0===t?[]:o(t)},t.extractIdsWithIndex=function(e){const t=r.parseWithIndex("["+e+"]",-1);return void 0!==t&&Array.isArray(t.value)?a(t.value):[]},t.extractOrbitsWithTag=function(e){const t=i.parse(e);return void 0===t?[]:l(t)}},464:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cmds=void 0,t.cmds=["AA","aa","above","abovewithdelims","acute","AE","ae","alef","alefsym","aleph","allowbreak","Alpha","alpha","amalg","And","and","ang","angl","angle","approx","approxeq","arccos","arcctg","arcsin","arctan","arctg","arg","argmax","argmin","array","arraystretch","Arrowvert","arrowvert","ast","asymp","atop","atopwithdelims","backepsilon","backprime","backsim","backsimeq","backslash","bar","barwedge","Bbb","Bbbk","bbox","bcancel","because","begin","begingroup","Beta","beta","beth","between","bf","bfseries","big","Big","bigcap","bigcirc","bigcup","bigg","Bigg","biggl","Biggl","biggm","Biggm","biggr","Biggr","bigl","Bigl","bigm","Bigm","bigodot","bigominus","bigoplus","bigoslash","bigotimes","bigr","Bigr","bigsqcap","bigsqcup","bigstar","bigtriangledown","bigtriangleup","biguplus","bigvee","bigwedge","binom","blacklozenge","blacksquare","blacktriangle","blacktriangledown","blacktriangleleft","blacktriangleright","bm","bmod","bold","boldsymbol","bot","bowtie","Box","boxdot","boxed","boxminus","boxplus","boxtimes","Bra","bra","braket","brace","bracevert","brack","breve","buildrel","bull","bullet","Bumpeq","bumpeq","cal","cancel","cancelto","Cap","cap","cases","cdot","cdotp","cdots","ce","cee","centerdot","cf","cfrac","check","ch","checkmark","Chi","chi","choose","circ","circeq","circlearrowleft","circlearrowright","circledast","circledcirc","circleddash","circledR","circledS","class","cline","clubs","clubsuit","cnums","colon","Colonapprox","colonapprox","Coloneq","coloneq","Coloneqq","coloneqq","Colonsim","colonsim","color","colorbox","complement","Complex","cong","Coppa","coppa","coprod","copyright","cos","cosec","cosh","cot","cotg","coth","cr","csc","cssId","ctg","cth","Cup","cup","curlyeqprec","curlyeqsucc","curlyvee","curlywedge","curvearrowleft","curvearrowright","dag","Dagger","dagger","daleth","Darr","dArr","darr","dashleftarrow","dashrightarrow","dashv","dbinom","dblcolon","ddag","ddagger","ddddot","dddot","ddot","ddots","DeclareMathOperator","def","definecolor","deg","degree","delta","Delta","det","Digamma","digamma","dfrac","diagdown","diagup","Diamond","diamond","diamonds","diamondsuit","dim","displaylines","displaystyle","div","divideontimes","dot","Doteq","doteq","doteqdot","dotplus","dots","dotsb","dotsc","dotsi","dotsm","dotso","doublebarwedge","doublecap","doublecup","Downarrow","downarrow","downdownarrows","downharpoonleft","downharpoonright","edef","ell","else","em","emph","empty","emptyset","enclose","end","endgroup","enspace","Epsilon","epsilon","eqalign","eqalignno","eqcirc","Eqcolon","eqcolon","Eqqcolon","eqqcolon","eqref","eqsim","eqslantgtr","eqslantless","equiv","Eta","eta","eth","euro","exist","exists","exp","expandafter","fallingdotseq","fbox","fcolorbox","fi","Finv","flat","footnotesize","forall","frac","frak","frown","futurelet","Game","Gamma","gamma","gcd","gdef","ge","geneuro","geneuronarrow","geneurowide","genfrac","geq","geqq","geqslant","gets","gg","ggg","gggtr","gimel","global","gnapprox","gneq","gneqq","gnsim","grave","gt","gtrdot","gtrapprox","gtreqless","gtreqqless","gtrless","gtrsim","gvertneqq","Harr","hArr","harr","hat","hbar","hbox","hdashline","hearts","heartsuit","hfil","hfill","hline","hom","hookleftarrow","hookrightarrow","hphantom","href","hskip","hslash","hspace","htmlClass","htmlData","htmlId","htmlStyle","huge","Huge","idotsint","iddots","if","iff","ifmode","ifx","iiiint","iiint","iint","Im","image","imath","impliedby","implies","in","includegraphics","inf","infin","infty","injlim","int","intercal","intop","Iota","iota","isin","it","itshape","jmath","Join","Kappa","kappa","KaTeX","ker","kern","Ket","ket","Koppa","koppa","Lambda","lambda","label","land","lang","langle","Larr","lArr","larr","large","Large","LARGE","LaTeX","lBrace","lbrace","lbrack","lceil","ldotp","ldots","le","leadsto","left","leftarrow","Leftarrow","LeftArrow","leftarrowtail","leftharpoondown","leftharpoonup","leftleftarrows","Leftrightarrow","leftrightarrow","leftrightarrows","leftrightharpoons","leftrightsquigarrow","leftroot","leftthreetimes","leq","leqalignno","leqq","leqslant","lessapprox","lessdot","lesseqgtr","lesseqqgtr","lessgtr","lesssim","let","lfloor","lg","lgroup","lhd","lim","liminf","limits","limsup","ll","llap","llbracket","llcorner","Lleftarrow","lll","llless","lmoustache","ln","lnapprox","lneq","lneqq","lnot","lnsim","log","long","Longleftarrow","longleftarrow","Longleftrightarrow","longleftrightarrow","longmapsto","Longrightarrow","longrightarrow","looparrowleft","looparrowright","lor","lower","lozenge","lparen","Lrarr","lrArr","lrarr","lrcorner","lq","Lsh","lt","ltimes","lVert","lvert","lvertneqq","maltese","mapsto","mathbb","mathbf","mathbin","mathcal","mathchoice","mathclap","mathclose","mathellipsis","mathfrak","mathinner","mathit","mathllap","mathnormal","mathop","mathopen","mathord","mathpunct","mathrel","mathrlap","mathring","mathrm","mathscr","mathsf","mathsterling","mathstrut","mathtip","mathtt","matrix","max","mbox","md","mdseries","measuredangle","medspace","mho","mid","middle","min","minuso","mit","mkern","mmlToken","mod","models","moveleft","moveright","mp","mskip","mspace","Mu","mu","multicolumn","multimap","nabla","natnums","natural","negmedspace","ncong","ne","nearrow","neg","negthickspace","negthinspace","neq","newcommand","newenvironment","Newextarrow","newline","nexists","ngeq","ngeqq","ngeqslant","ngtr","ni","nleftarrow","nLeftarrow","nLeftrightarrow","nleftrightarrow","nleq","nleqq","nleqslant","nless","nmid","nobreak","nobreakspace","noexpand","nolimits","normalfont","normalsize","not","notag","notin","notni","nparallel","nprec","npreceq","nRightarrow","nrightarrow","nshortmid","nshortparallel","nsim","nsubseteq","nsubseteqq","nsucc","nsucceq","nsupseteq","nsupseteqq","ntriangleleft","ntrianglelefteq","ntriangleright","ntrianglerighteq","Nu","nu","nVDash","nVdash","nvDash","nvdash","nwarrow","odot","OE","oe","officialeuro","oiiint","oiint","oint","oldstyle","omega","Omega","Omicron","omicron","ominus","operatorname","operatorname*","oplus","or","oslash","otimes","over","overbrace","overbracket","overgroup","overleftarrow","overleftharpoon","overleftrightarrow","overline","overlinesegment","overparen","Overrightarrow","overrightarrow","overrightharpoon","overset","overwithdelims","owns","pagecolor","parallel","part","partial","perp","phantom","phase","Phi","phi","Pi","pi","pitchfork","plim","plusmn","pm","pmatrix","pmb","pmod","pod","pounds","Pr","prec","precapprox","preccurlyeq","preceq","precnapprox","precneqq","precnsim","precsim","prime","prod","projlim","propto","providecommand","psi","Psi","pu","qquad","quad","raise","raisebox","rang","rangle","Rarr","rArr","rarr","rBrace","rbrace","rbrack","rceil","Re","real","Reals","reals","ref","relax","renewcommand","renewenvironment","require","restriction","rfloor","rgroup","rhd","Rho","rho","right","Rightarrow","rightarrow","rightarrowtail","rightharpoondown","rightharpoonup","rightleftarrows","rightleftharpoons","rightrightarrows","rightsquigarrow","rightthreetimes","risingdotseq","rlap","rm","rmoustache","root","rotatebox","rparen","rq","rrbracket","Rrightarrow","Rsh","rtimes","Rule","rule","rVert","rvert","Sampi","sampi","sc","scalebox","scr","scriptscriptstyle","scriptsize","scriptstyle","sdot","searrow","sec","sect","setlength","setminus","sf","sharp","shortmid","shortparallel","shoveleft","shoveright","sideset","Sigma","sigma","sim","simeq","sin","sinh","sixptsize","sh","skew","skip","sl","small","smallfrown","smallint","smallsetminus","smallsmile","smash","smile","smiley","sout","Space","space","spades","spadesuit","sphericalangle","sqcap","sqcup","square","sqrt","sqsubset","sqsubseteq","sqsupset","sqsupseteq","ss","stackrel","star","Stigma","stigma","strut","style","sub","sube","Subset","subset","subseteq","subseteqq","subsetneq","subsetneqq","substack","succ","succapprox","succcurlyeq","succeq","succnapprox","succneqq","succnsim","succsim","sum","sup","supe","Supset","supset","supseteq","supseteqq","supsetneq","supsetneqq","surd","swarrow","tag","tag*","tan","tanh","Tau","tau","tbinom","TeX","text","textasciitilde","textasciicircum","textbackslash","textbar","textbardbl","textbf","textbraceleft","textbraceright","textcircled","textcolor","textdagger","textdaggerdbl","textdegree","textdollar","textellipsis","textemdash","textendash","textgreater","textit","textless","textmd","textnormal","textquotedblleft","textquotedblright","textquoteleft","textquoteright","textregistered","textrm","textsc","textsf","textsl","textsterling","textstyle","texttip","texttt","textunderscore","textup","textvisiblespace","tfrac","tg","th","therefore","Theta","theta","thetasym","thickapprox","thicksim","thickspace","thinspace","tilde","times","Tiny","tiny","to","toggle","top","triangle","triangledown","triangleleft","trianglelefteq","triangleq","triangleright","trianglerighteq","tt","twoheadleftarrow","twoheadrightarrow","Uarr","uArr","uarr","ulcorner","underbrace","underbracket","undergroup","underleftarrow","underleftrightarrow","underrightarrow","underline","underlinesegment","underparen","underrightarrow","underset","unicode","unlhd","unrhd","up","Uparrow","uparrow","Updownarrow","updownarrow","upharpoonleft","upharpoonright","uplus","uproot","upshape","Upsilon","upsilon","upuparrows","urcorner","url","utilde","varcoppa","varDelta","varepsilon","varGamma","varinjlim","varkappa","varLambda","varliminf","varlimsup","varnothing","varOmega","varPhi","varphi","varPi","varpi","varprojlim","varpropto","varPsi","varPsi","varrho","varSigma","varsigma","varstigma","varsubsetneq","varsubsetneqq","varsupsetneq","varsupsetneqq","varTheta","vartheta","vartriangle","vartriangleleft","vartriangleright","varUpsilon","varXi","vcentcolon","vcenter","Vdash","vDash","vdash","vdots","vec","vee","veebar","verb","Vert","vert","vfil","vfill","vline","vphantom","Vvdash","wedge","weierp","widecheck","widehat","wideparen","widetilde","wp","wr","xcancel","xdef","Xi","xi","xhookleftarrow","xhookrightarrow","xLeftarrow","xleftarrow","xleftharpoondown","xleftharpoonup","xLeftrightarrow","xleftrightarrow","xleftrightharpoons","xlongequal","xmapsto","xRightarrow","xrightarrow","xrightharpoondown","xrightharpoonup","xrightleftharpoons","xtofrom","xtwoheadleftarrow","xtwoheadrightarrow","yen","Zeta","zeta"]},496:e=>{e.exports=require("vscode")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=n(669);module.exports=r})();