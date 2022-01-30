(()=>{"use strict";var e={806:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractOrbitsWithTag=t.extractIdsWithIndex=t.extractIdsWithTag=void 0;const r=n(650),i=n(944);function o(e){const t=[];for(const n of e)for(const e of n){if("string"==typeof e)continue;const{id:n}=e.options;"string"==typeof n&&n.length>0&&t.push({value:n,tag:e.tag,type:"id",originalString:n});const r=e.options["ref-id"];"string"==typeof r&&r.length>0&&t.push({value:r,tag:e.tag,type:"ref-id",originalString:r});const{href:i}=e.options;"string"==typeof i&&i.startsWith("#")&&t.push({value:decodeURIComponent(i.slice(1)),tag:e.tag,type:"href",originalString:i});for(const n in e.options){const r=e.options[n];"object"==typeof r&&t.push(...o(r))}t.push(...o(e.children))}return t}function a(e){const t=[];for(const{value:n}of e)"object"==typeof n&&(Array.isArray(n)?t.push(...a(n)):t.push(...s(n)));return t}function s(e){const t=[],{id:n}=e;void 0!==n&&"string"==typeof n.value&&n.value.length>0&&t.push({value:n.value,index:n.index,type:"id",originalString:n.value});const r=e["ref-id"];void 0!==r&&"string"==typeof r.value&&r.value.length>0&&t.push({value:r.value,index:r.index,type:"ref-id",originalString:r.value});const{href:i}=e;void 0!==i&&"string"==typeof i.value&&i.value.startsWith("#")&&t.push({value:decodeURIComponent(i.value.slice(1)),index:i.index,type:"href",originalString:i.value});for(const n in e){const r=e[n];void 0!==r&&"object"==typeof r.value&&(Array.isArray(r.value)?t.push(...a(r.value)):t.push(...s(r.value)))}return t}function l(e){const t=[],n={};for(const r of e)for(const e of r){if("string"==typeof e)continue;const{orbit:r}=e.options;"string"==typeof r&&r.length>0&&void 0===n[r]&&(t.push({value:r,tag:e.tag}),n[r]=!0);for(const n in e.options){const r=e.options[n];"object"==typeof r&&t.push(...l(r))}t.push(...l(e.children))}return t}t.extractIdsWithTag=function(e){const t=(0,i.parse)(e);return void 0===t?[]:o(t)},t.extractIdsWithIndex=function(e){const t=r.parseWithIndex(`[${e}]`,-1);return void 0!==t&&Array.isArray(t.value)?a(t.value):[]},t.extractOrbitsWithTag=function(e){const t=(0,i.parse)(e);return void 0===t?[]:l(t)}},936:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cmds=void 0,t.cmds=["AA","aa","above","abovewithdelims","acute","AE","ae","alef","alefsym","aleph","allowbreak","Alpha","alpha","amalg","And","and","ang","angl","angle","approx","approxeq","arccos","arcctg","arcsin","arctan","arctg","arg","argmax","argmin","array","arraystretch","Arrowvert","arrowvert","ast","asymp","atop","atopwithdelims","backepsilon","backprime","backsim","backsimeq","backslash","bar","barwedge","Bbb","Bbbk","bbox","bcancel","because","begin","begingroup","Beta","beta","beth","between","bf","bfseries","big","Big","bigcap","bigcirc","bigcup","bigg","Bigg","biggl","Biggl","biggm","Biggm","biggr","Biggr","bigl","Bigl","bigm","Bigm","bigodot","bigominus","bigoplus","bigoslash","bigotimes","bigr","Bigr","bigsqcap","bigsqcup","bigstar","bigtriangledown","bigtriangleup","biguplus","bigvee","bigwedge","binom","blacklozenge","blacksquare","blacktriangle","blacktriangledown","blacktriangleleft","blacktriangleright","bm","bmod","bold","boldsymbol","bot","bowtie","Box","boxdot","boxed","boxminus","boxplus","boxtimes","Bra","bra","braket","brace","bracevert","brack","breve","buildrel","bull","bullet","Bumpeq","bumpeq","cal","cancel","cancelto","Cap","cap","cases","cdot","cdotp","cdots","ce","cee","centerdot","cf","cfrac","check","ch","checkmark","Chi","chi","choose","circ","circeq","circlearrowleft","circlearrowright","circledast","circledcirc","circleddash","circledR","circledS","class","cline","clubs","clubsuit","cnums","colon","Colonapprox","colonapprox","Coloneq","coloneq","Coloneqq","coloneqq","Colonsim","colonsim","color","colorbox","complement","Complex","cong","Coppa","coppa","coprod","copyright","cos","cosec","cosh","cot","cotg","coth","cr","csc","cssId","ctg","cth","Cup","cup","curlyeqprec","curlyeqsucc","curlyvee","curlywedge","curvearrowleft","curvearrowright","dag","Dagger","dagger","daleth","Darr","dArr","darr","dashleftarrow","dashrightarrow","dashv","dbinom","dblcolon","ddag","ddagger","ddddot","dddot","ddot","ddots","DeclareMathOperator","def","definecolor","deg","degree","delta","Delta","det","Digamma","digamma","dfrac","diagdown","diagup","Diamond","diamond","diamonds","diamondsuit","dim","displaylines","displaystyle","div","divideontimes","dot","Doteq","doteq","doteqdot","dotplus","dots","dotsb","dotsc","dotsi","dotsm","dotso","doublebarwedge","doublecap","doublecup","Downarrow","downarrow","downdownarrows","downharpoonleft","downharpoonright","edef","ell","else","em","emph","empty","emptyset","enclose","end","endgroup","enspace","Epsilon","epsilon","eqalign","eqalignno","eqcirc","Eqcolon","eqcolon","Eqqcolon","eqqcolon","eqref","eqsim","eqslantgtr","eqslantless","equiv","Eta","eta","eth","euro","exist","exists","exp","expandafter","fallingdotseq","fbox","fcolorbox","fi","Finv","flat","footnotesize","forall","frac","frak","frown","futurelet","Game","Gamma","gamma","gcd","gdef","ge","geneuro","geneuronarrow","geneurowide","genfrac","geq","geqq","geqslant","gets","gg","ggg","gggtr","gimel","global","gnapprox","gneq","gneqq","gnsim","grave","gt","gtrdot","gtrapprox","gtreqless","gtreqqless","gtrless","gtrsim","gvertneqq","Harr","hArr","harr","hat","hbar","hbox","hdashline","hearts","heartsuit","hfil","hfill","hline","hom","hookleftarrow","hookrightarrow","hphantom","href","hskip","hslash","hspace","htmlClass","htmlData","htmlId","htmlStyle","huge","Huge","idotsint","iddots","if","iff","ifmode","ifx","iiiint","iiint","iint","Im","image","imath","impliedby","implies","in","includegraphics","inf","infin","infty","injlim","int","intercal","intop","Iota","iota","isin","it","itshape","jmath","Join","Kappa","kappa","KaTeX","ker","kern","Ket","ket","Koppa","koppa","Lambda","lambda","label","land","lang","langle","Larr","lArr","larr","large","Large","LARGE","LaTeX","lBrace","lbrace","lbrack","lceil","ldotp","ldots","le","leadsto","left","leftarrow","Leftarrow","LeftArrow","leftarrowtail","leftharpoondown","leftharpoonup","leftleftarrows","Leftrightarrow","leftrightarrow","leftrightarrows","leftrightharpoons","leftrightsquigarrow","leftroot","leftthreetimes","leq","leqalignno","leqq","leqslant","lessapprox","lessdot","lesseqgtr","lesseqqgtr","lessgtr","lesssim","let","lfloor","lg","lgroup","lhd","lim","liminf","limits","limsup","ll","llap","llbracket","llcorner","Lleftarrow","lll","llless","lmoustache","ln","lnapprox","lneq","lneqq","lnot","lnsim","log","long","Longleftarrow","longleftarrow","Longleftrightarrow","longleftrightarrow","longmapsto","Longrightarrow","longrightarrow","looparrowleft","looparrowright","lor","lower","lozenge","lparen","Lrarr","lrArr","lrarr","lrcorner","lq","Lsh","lt","ltimes","lVert","lvert","lvertneqq","maltese","mapsto","mathbb","mathbf","mathbin","mathcal","mathchoice","mathclap","mathclose","mathellipsis","mathfrak","mathinner","mathit","mathllap","mathnormal","mathop","mathopen","mathord","mathpunct","mathrel","mathrlap","mathring","mathrm","mathscr","mathsf","mathsterling","mathstrut","mathtip","mathtt","matrix","max","mbox","md","mdseries","measuredangle","medspace","mho","mid","middle","min","minuso","mit","mkern","mmlToken","mod","models","moveleft","moveright","mp","mskip","mspace","Mu","mu","multicolumn","multimap","nabla","natnums","natural","negmedspace","ncong","ne","nearrow","neg","negthickspace","negthinspace","neq","newcommand","newenvironment","Newextarrow","newline","nexists","ngeq","ngeqq","ngeqslant","ngtr","ni","nleftarrow","nLeftarrow","nLeftrightarrow","nleftrightarrow","nleq","nleqq","nleqslant","nless","nmid","nobreak","nobreakspace","noexpand","nolimits","normalfont","normalsize","not","notag","notin","notni","nparallel","nprec","npreceq","nRightarrow","nrightarrow","nshortmid","nshortparallel","nsim","nsubseteq","nsubseteqq","nsucc","nsucceq","nsupseteq","nsupseteqq","ntriangleleft","ntrianglelefteq","ntriangleright","ntrianglerighteq","Nu","nu","nVDash","nVdash","nvDash","nvdash","nwarrow","odot","OE","oe","officialeuro","oiiint","oiint","oint","oldstyle","omega","Omega","Omicron","omicron","ominus","operatorname","operatorname*","oplus","or","oslash","otimes","over","overbrace","overbracket","overgroup","overleftarrow","overleftharpoon","overleftrightarrow","overline","overlinesegment","overparen","Overrightarrow","overrightarrow","overrightharpoon","overset","overwithdelims","owns","pagecolor","parallel","part","partial","perp","phantom","phase","Phi","phi","Pi","pi","pitchfork","plim","plusmn","pm","pmatrix","pmb","pmod","pod","pounds","Pr","prec","precapprox","preccurlyeq","preceq","precnapprox","precneqq","precnsim","precsim","prime","prod","projlim","propto","providecommand","psi","Psi","pu","qquad","quad","raise","raisebox","rang","rangle","Rarr","rArr","rarr","rBrace","rbrace","rbrack","rceil","Re","real","Reals","reals","ref","relax","renewcommand","renewenvironment","require","restriction","rfloor","rgroup","rhd","Rho","rho","right","Rightarrow","rightarrow","rightarrowtail","rightharpoondown","rightharpoonup","rightleftarrows","rightleftharpoons","rightrightarrows","rightsquigarrow","rightthreetimes","risingdotseq","rlap","rm","rmoustache","root","rotatebox","rparen","rq","rrbracket","Rrightarrow","Rsh","rtimes","Rule","rule","rVert","rvert","Sampi","sampi","sc","scalebox","scr","scriptscriptstyle","scriptsize","scriptstyle","sdot","searrow","sec","sect","setlength","setminus","sf","sharp","shortmid","shortparallel","shoveleft","shoveright","sideset","Sigma","sigma","sim","simeq","sin","sinh","sixptsize","sh","skew","skip","sl","small","smallfrown","smallint","smallsetminus","smallsmile","smash","smile","smiley","sout","Space","space","spades","spadesuit","sphericalangle","sqcap","sqcup","square","sqrt","sqsubset","sqsubseteq","sqsupset","sqsupseteq","ss","stackrel","star","Stigma","stigma","strut","style","sub","sube","Subset","subset","subseteq","subseteqq","subsetneq","subsetneqq","substack","succ","succapprox","succcurlyeq","succeq","succnapprox","succneqq","succnsim","succsim","sum","sup","supe","Supset","supset","supseteq","supseteqq","supsetneq","supsetneqq","surd","swarrow","tag","tag*","tan","tanh","Tau","tau","tbinom","TeX","text","textasciitilde","textasciicircum","textbackslash","textbar","textbardbl","textbf","textbraceleft","textbraceright","textcircled","textcolor","textdagger","textdaggerdbl","textdegree","textdollar","textellipsis","textemdash","textendash","textgreater","textit","textless","textmd","textnormal","textquotedblleft","textquotedblright","textquoteleft","textquoteright","textregistered","textrm","textsc","textsf","textsl","textsterling","textstyle","texttip","texttt","textunderscore","textup","textvisiblespace","tfrac","tg","th","therefore","Theta","theta","thetasym","thickapprox","thicksim","thickspace","thinspace","tilde","times","Tiny","tiny","to","toggle","top","triangle","triangledown","triangleleft","trianglelefteq","triangleq","triangleright","trianglerighteq","tt","twoheadleftarrow","twoheadrightarrow","Uarr","uArr","uarr","ulcorner","underbrace","underbracket","undergroup","underleftarrow","underleftrightarrow","underrightarrow","underline","underlinesegment","underparen","underrightarrow","underset","unicode","unlhd","unrhd","up","Uparrow","uparrow","Updownarrow","updownarrow","upharpoonleft","upharpoonright","uplus","uproot","upshape","Upsilon","upsilon","upuparrows","urcorner","url","utilde","varcoppa","varDelta","varepsilon","varGamma","varinjlim","varkappa","varLambda","varliminf","varlimsup","varnothing","varOmega","varPhi","varphi","varPi","varpi","varprojlim","varpropto","varPsi","varPsi","varrho","varSigma","varsigma","varstigma","varsubsetneq","varsubsetneqq","varsupsetneq","varsupsetneqq","varTheta","vartheta","vartriangle","vartriangleleft","vartriangleright","varUpsilon","varXi","vcentcolon","vcenter","Vdash","vDash","vdash","vdots","vec","vee","veebar","verb","Vert","vert","vfil","vfill","vline","vphantom","Vvdash","wedge","weierp","widecheck","widehat","wideparen","widetilde","wp","wr","xcancel","xdef","Xi","xi","xhookleftarrow","xhookrightarrow","xLeftarrow","xleftarrow","xleftharpoondown","xleftharpoonup","xLeftrightarrow","xleftrightarrow","xleftrightharpoons","xlongequal","xmapsto","xRightarrow","xrightarrow","xrightharpoondown","xrightharpoonup","xrightleftharpoons","xtofrom","xtwoheadleftarrow","xtwoheadrightarrow","yen","Zeta","zeta"]},256:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const i=n(650),o=n(944),a=n(825),s=n(496),l=n(936),c=n(806);function d(e,t,n,r){const i=[];return void 0!==t&&i.push(`data-focus-url=${JSON.stringify(t)}`),void 0!==n&&i.push(`data-focus-position=${JSON.stringify(n)}`),void 0!==r&&i.push(`data-focus-id=${JSON.stringify(r)}`),`<!DOCTYPE html>\n<html data-src=${JSON.stringify(`${e}?r=${Math.random()}`)} ${i.join(" ")}>\n\n<head>\n    <style>\n        html:not([data-color-scheme=light])>body.vscode-dark {\n    --color-text: rgb(204 204 204);\n    --color-light: rgb(110 110 110);\n    --color-border: rgb(43 43 43);\n    --color-pre: rgb(24 24 24);\n    --color-background: rgb(17 17 17);\n    --color-warn: rgb(204 111 111);\n    --color-string: rgb(204 162 111);\n    --color-function: rgb(190 171 122);\n    --color-number: rgb(111 157 111);\n    --color-comment: rgb(129 186 129);\n    --color-class: rgb(133 176 152);\n    --color-modifier: rgb(122 163 204);\n    --color-variable: rgb(111 181 204);\n    --color-keyword: rgb(183 118 159);\n    --color-slice: rgb(94 94 94 / .5);\n    --color-selection: rgb(67 93 103 / .5);\n    background-color: var(--color-background);\n    color: var(--color-text);\n}\n\nhtml:not([data-color-scheme=light])>body.vscode-dark .invert {\n    filter: brightness(calc(11 / 12)) invert(1) brightness(.8);\n}\n\nhtml:not([data-color-scheme=light])>body.vscode-dark .light {\n    filter: brightness(calc(11 / 14)) invert(.325) brightness(calc(4 / 3));\n}\n\nhtml:not([data-color-scheme=light])>body.vscode-dark .dark {\n    filter: brightness(.6875) invert(.1) brightness(calc(2 / 3));\n}\n\nbody {\n    color: inherit;\n    font: inherit;\n    padding: 0;\n}\n\nblockquote {\n    background-color: transparent;\n}\n\ncode,\na code {\n    color: inherit;\n}\n\nimg {\n    max-height: none;\n}\n\nkbd,\n.vscode-light kbd {\n    background-color: transparent;\n    border: 1px solid var(--color-border);\n    box-shadow: none;\n    color: inherit;\n    vertical-align: baseline;\n}\n    </style>\n</head>\n\n<body>\n    <script type="module">\n        import "https://cdn.jsdelivr.net/gh/st-org/st-view@0.28.3/main.js"\n        const vscode = acquireVsCodeApi()\n        window.viewer.dblClickLineListeners.push((...data) => {\n            vscode.postMessage({\n                type: 'reverse-focus',\n                data\n            })\n        })\n    <\/script>\n</body>\n\n</html>`}function u(e,t){let n=t;for(const t of e){if("number"==typeof t){if(Array.isArray(n.value)){const e=n.value[t];if(void 0===e||"string"==typeof e.value)break;n=e;continue}const e=n.value.children.value[t];if(void 0===e)break;n=e;continue}if(Array.isArray(n.value))break;const e=n.value.options.value[t];if(void 0===e||"object"!=typeof e.value)break;n=e}return n}function g(e,t,n,i,a){const l=s.window.createWebviewPanel("st-lang.preview",e.path.replace(/^.*\//,""),s.ViewColumn.Beside,{enableScripts:!0,enableFindWidget:!0,enableCommandUris:!0}),c=l.webview.asWebviewUri(e).toString();l.webview.html=d(c,t,n,i);const g=s.workspace.onDidSaveTextDocument((e=>{const t=s.window.activeTextEditor;if(void 0===t||t.document!==e)return;let n,r;"stdn"===e.languageId&&(n=l.webview.asWebviewUri(e.uri).toString(),r=p(t).join(" ")),l.webview.html=d(c,n,r,void 0)}),void 0,a.subscriptions);l.onDidDispose((()=>{g.dispose()}),void 0,a.subscriptions),l.webview.onDidReceiveMessage((e=>r(this,void 0,void 0,(function*(){if("reverse-focus"!==e.type);else{const{authority:t,path:n}=s.Uri.parse(e.data[0].url);for(const r of s.window.visibleTextEditors){if("stdn"!==r.document.languageId)continue;const i=l.webview.asWebviewUri(r.document.uri);if(i.authority!==t||i.path!==n)continue;const a=o.parseWithIndex(r.document.getText());if(void 0===a)return;const c=e.data[1],d=e.data[2].slice();let g=d[0];if("number"!=typeof g)return;d[0]=g-c;const{index:p}=u(d,a),h=r.document.positionAt(p);r.revealRange(new s.Range(h,h),3)}}}))),void 0,a.subscriptions)}function p(e){const t=[],n=e.document.offsetAt(e.visibleRanges[0].start),r=o.parseWithIndex(e.document.getText());if(void 0===r)return t;let i=r;for(;;){let e,r=0;for(let t=0;t<i.value.length;t++){const o=i.value[t];if(o.index>n)break;Array.isArray(o.value)?(e=o,r=t):"object"==typeof o.value&&(e=o.value.children,r=t)}if(void 0===e)break;i=e,t.push(r)}return t}function h(e,t,n){const r=e.positionAt(t);let o=new s.Range(r,e.positionAt(t+1));if("'"!==e.getText(o))return new s.Range(r,e.positionAt(t+n.length));const a=2*n.length+2+t;for(let n=t+1;n<a;n++){if("'"!==e.getText(new s.Range(e.positionAt(n),e.positionAt(n+1))))continue;o=new s.Range(r,e.positionAt(n+1));const t=e.getText(o);if(i.parse(t)===t)break}return o}function f(e,t){const n=e.getText(),r=(0,c.extractIdsWithIndex)(n);let i="",o=0,a="id",s="";for(const n of r){const r=e.positionAt(n.index);if(!(r.line>t.line||r.line<t.line)){if(r.character>t.character)break;i=n.value,o=n.index,a=n.type,s=n.originalString}}return{id:i,index:o,type:a,originalString:s,idsWithIndex:r}}t.activate=function(e){const t=s.languages.registerCompletionItemProvider("stdn",{provideCompletionItems:(e,t)=>void 0!==e.getWordRangeAtPosition(t,/\\\\/)?[]:l.cmds.map((e=>new s.CompletionItem(e,2)))},"\\"),n=s.languages.registerHoverProvider("stdn",{provideHover(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return;const{id:n,index:r,originalString:i}=f(e,t);if(0===n.length)return;const o=(0,c.extractIdsWithTag)(e.getText()).filter((e=>e.value===n)).map((e=>e.tag));for(const t of yield s.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield s.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&o.push(...(0,c.extractIdsWithTag)(r.getText()).filter((e=>e.value===n)).map((e=>`${e.tag} ${t.path}`)))}return new s.Hover(o,h(e,r,i))}))}}),d=s.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/ref-id[ ]/))return[];const n=(0,c.extractIdsWithTag)(e.getText()).filter((e=>"id"===e.type)).map((e=>new s.CompletionItem({label:i.stringify(e.value,{useUnquotedString:!0}),detail:e.tag},17)));for(const t of yield s.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield s.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&n.push(...(0,c.extractIdsWithTag)(r.getText()).filter((e=>"id"===e.type)).map((e=>new s.CompletionItem({label:i.stringify(e.value,{useUnquotedString:!0}),detail:e.tag,description:t.path},17))))}return n}))}}," "),u=s.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/href[ ]/))return[];const n=(0,c.extractIdsWithTag)(e.getText()).filter((e=>"id"===e.type)).map((e=>new s.CompletionItem({label:i.stringify(`#${encodeURIComponent(e.value)}`,{useUnquotedString:!0}),detail:e.tag},17)));for(const t of yield s.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield s.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&n.push(...(0,c.extractIdsWithTag)(r.getText()).filter((e=>"id"===e.type)).map((e=>new s.CompletionItem({label:i.stringify(`#${encodeURIComponent(e.value)}`,{useUnquotedString:!0}),detail:e.tag,description:t.path},17))))}return n}))}}," "),m=s.languages.registerCompletionItemProvider("stdn",{provideCompletionItems(e,t){return r(this,void 0,void 0,(function*(){return void 0===e.getWordRangeAtPosition(t,/orbit[ ]/)?[]:["heading","equation","figure","conjecture","corollary","definition","example","exercise","lemma","notation","proposition","remark","theorem"].map((e=>new s.CompletionItem({label:e},11))).concat((0,c.extractOrbitsWithTag)(e.getText()).map((e=>new s.CompletionItem({label:i.stringify(e.value,{useUnquotedString:!0}),detail:e.tag},11))))}))}}," "),v=s.languages.registerReferenceProvider("stdn",{provideReferences(e,t){return r(this,void 0,void 0,(function*(){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return[];const{id:n,idsWithIndex:r}=f(e,t);if(0===n.length)return[];const i=r.filter((e=>e.value===n)).map((t=>new s.Location(e.uri,h(e,t.index,t.originalString))));for(const t of yield s.workspace.findFiles("**/*.{stdn,stdn.txt}")){const r=yield s.workspace.openTextDocument(t);"stdn"===r.languageId&&r.uri!==e.uri&&i.push(...(0,c.extractIdsWithIndex)(r.getText()).filter((e=>e.value===n)).map((e=>new s.Location(r.uri,h(r,e.index,e.originalString)))))}return i}))}}),b=s.languages.registerRenameProvider("stdn",{prepareRename(e,t){if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return;const{id:n,index:r,originalString:i}=f(e,t);return 0!==n.length?{range:h(e,r,i),placeholder:n}:void 0},provideRenameEdits(e,t,n){return r(this,void 0,void 0,(function*(){const r=new s.WorkspaceEdit;if(void 0===e.getWordRangeAtPosition(t,/(?:id|ref-id|href)[ ]*'.+'|(?:id|ref-id|href)[ ][^'{}\[\],]+/))return r;const{id:o,idsWithIndex:a}=f(e,t);if(0===o.length)return r;const l=i.stringify(n,{useUnquotedString:!0}),c=i.stringify(`#${encodeURIComponent(n)}`,{useUnquotedString:!0});return a.filter((e=>e.value===o)).forEach((t=>{r.replace(e.uri,h(e,t.index,t.originalString),"href"===t.type?c:l)})),r}))}}),x=s.languages.registerDocumentFormattingEditProvider("stdn",{provideDocumentFormattingEdits(e){const t=e.getText();return[s.TextEdit.replace(new s.Range(new s.Position(0,0),e.positionAt(t.length)),o.format(t))]}}),y=s.languages.registerDocumentFormattingEditProvider("urls",{provideDocumentFormattingEdits(e){const t=e.getText(),n=i.parseWithIndex(`[${t}]`);return void 0===n?[]:[s.TextEdit.replace(new s.Range(new s.Position(0,0),e.positionAt(t.length)),i.stringifyWithComment(n.value,{indentLevel:-1,indentTarget:"all",useUnquotedString:!0}).slice(1,-1).trim())]}}),w=s.languages.registerDocumentFormattingEditProvider("ston",{provideDocumentFormattingEdits(e){const t=e.getText(),n=i.parseWithIndex(t);return void 0===n?[]:[s.TextEdit.replace(new s.Range(new s.Position(0,0),e.positionAt(t.length)),i.stringifyWithComment(n.value,{indentTarget:"all",addDecorativeSpace:"always",useUnquotedString:!0}))]}}),q=s.commands.registerTextEditorCommand("st-lang.preview",(t=>{if("stdn"!==t.document.languageId&&"urls"!==t.document.languageId)return;let n;"stdn"===t.document.languageId&&(n=p(t).join(" ")),g(t.document.uri,void 0,n,void 0,e)})),k=s.commands.registerCommand("st-lang.preview-path",((t,n,r,i)=>{g(s.Uri.file(t),n,r,i,e)})),A=s.commands.registerTextEditorCommand("st-lang.stringify",((e,t)=>{"stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty||t.replace(e.selection,e.document.getText(e.selection).split("\n").map((e=>i.stringify(e,{useUnquotedString:!0}))).join("\n"))})),T=s.commands.registerTextEditorCommand("st-lang.copy-stringify-result",(e=>{"stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty||s.env.clipboard.writeText(e.document.getText(e.selection).split("\n").map((e=>i.stringify(e,{useUnquotedString:!0}))).join("\n"))})),I=s.commands.registerTextEditorCommand("st-lang.copy-id",(e=>{if("stdn"!==e.document.languageId&&"urls"!==e.document.languageId&&"ston"!==e.document.languageId||e.selection.isEmpty)return;let t=e.document.getText(e.selection);const n=o.parse(t);void 0!==n&&(t=(0,a.stdnToInlinePlainString)(n)),s.env.clipboard.writeText((0,a.stringToId)(t))}));e.subscriptions.push(t,n,d,u,m,v,b,x,y,w,q,k,A,T,I)},t.deactivate=function(){}},825:(e,t,n)=>{function r(e){const t=[];for(const n of e)t.push(i(n));return t.join("\n")}function i(e){let t="";for(const n of e)t+="string"!=typeof n?o(n):n;return t}function o(e){return r(e.children)}function a(e){for(const t of e){const e=s(t);if(e.length>0)return e}return""}function s(e){let t="";for(const n of e)t+="string"!=typeof n?l(n):n;return t}function l(e){return a(e.children)}function c(e){return Array.from(e.slice(0,100).matchAll(/[a-zA-Z0-9]+/g)).join("-").toLowerCase()}n.r(t),n.d(t,{stdnToPlainString:()=>r,lineToPlainString:()=>i,unitToPlainString:()=>o,stdnToInlinePlainString:()=>a,lineToInlinePlainString:()=>s,unitToInlinePlainString:()=>l,stringToId:()=>c})},944:(e,t,n)=>{n.r(t),n.d(t,{format:()=>y,parse:()=>s,parseWithIndex:()=>b,stringify:()=>p});var r=n(673);function i(e){let t="div",n=[];const r={};for(const i in e){const o=e[i];if(void 0!==o)if("__"!==i)if(Array.isArray(o))t=i,n=a(o);else if("object"!=typeof o)r[i]=o;else{const{__:e}=o;if(void 0===e)continue;if("string"==typeof e){r[i]=a([{__:e}]);continue}if(!Array.isArray(e)){r[i]=a([e]);continue}r[i]=a(e)}else{if(t="katex",!Array.isArray(o)){n=a([o]);continue}n=a(o)}}return{tag:t,options:r,children:n}}function o(e){const t=[];for(const n of e)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||t.push(i(n));else for(const e of n)e>=" "&&t.push(e);return t}function a(e){const t=[];for(const n of e)Array.isArray(n)?t.push(o(n)):t.push(o([n]));return t}function s(e){const t=r.Q(`[${e}]`);if(Array.isArray(t))return a(t)}var l=n(890);function c(e){const t={},{tag:n,children:r,options:i}=e;for(const e in i){let n=i[e];t[e]="object"==typeof n?{__:g(n)}:n}return"katex"===n?t.__=function(e){const t=u(e);if(1===t.length){const e=t[0];if("string"==typeof e)return e}return t}(r):("div"!==n||r.length>0)&&(t[n]=u(r)),t}function d(e){const t=[];let n="";for(const r of e)"object"!=typeof r?n+=r:(n.length>0&&(t.push(n),n=""),t.push(c(r)));return n.length>0&&t.push(n),1===t.length?t[0]:t}function u(e){const t=[];for(const n of e)t.push(d(n));return t}function g(e){const t=u(e);if(1===t.length){const e=t[0];if("object"==typeof e&&!Array.isArray(e)){const t=Object.keys(e);if(1===t.length&&"__"===t[0]){const{__:t}=e;if("string"==typeof t)return t}}}return t}function p(e){return void 0===e?"":e.length<2?l.P(u(e),{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():l.P(u(e),{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim()}var h=n(440);function f(e,t){let n="div";const r={value:[],index:t,comment:""},i={value:{},index:t,comment:""};for(const t in e){let o=e[t];if(void 0===o)continue;const{value:a,index:s,comment:l}=o;if("__"!==t)if(Array.isArray(a))n=t,r.value=v(a,s),r.index=s,r.comment=l;else if("object"!=typeof a)i.value[t]={value:a,index:s,comment:l};else{const{__:e}=a;if(void 0===e)continue;if("string"==typeof e.value){i.value[t]={value:v([{value:{__:e},index:s,comment:""}],s),index:s,comment:l};continue}if(!Array.isArray(e.value)){i.value[t]={value:v([e],s),index:s,comment:l};continue}i.value[t]={value:v(e.value,s),index:s,comment:l}}else{if(n="katex",r.index=s,!Array.isArray(a)){r.value=v([o],s);continue}r.value=v(a,s),r.comment=l}}return{tag:{value:n,index:t,comment:""},options:i,children:r}}function m(e){const t=[];for(const{value:n,index:r,comment:i}of e)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||t.push({value:f(n,r),index:r,comment:i});else for(const e of n)e>=" "&&t.push({value:e,index:r,comment:""});return t}function v(e,t){const n=[];for(const r of e)if(Array.isArray(r.value))n.push({value:m(r.value),index:r.index,comment:r.comment});else{const e=m([r]);e.length>0&&(t=e[0].index),n.push({value:e,index:t,comment:""})}return n}function b(e){const t=h.M(`[${e}]`,-1);if(void 0!==t&&Array.isArray(t.value))return{value:v(t.value,0),index:0,comment:t.comment}}var x=n(44);function y(e){const t=(0,h.M)(`[${e}]`);return void 0!==t&&Array.isArray(t.value)?t.value.length<2?(0,x.k)(t.value,{indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():(0,x.k)(t.value,{indentLevel:-1,indentTarget:"arrayInObjectAndThis",addDecorativeComma:"inObject",addDecorativeSpace:"always",useUnquotedString:!0}).slice(1,-1).trim():e}},650:(e,t,n)=>{n.r(t),n.d(t,{parse:()=>r.Q,stringify:()=>i.P,parseWithIndex:()=>o.M,stringifyWithComment:()=>a.k});var r=n(673),i=n(890),o=n(440),a=n(44)},440:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(884);function i(e,t,n=!1){let r=0,i=!1,o=!1,a=0,s=!1,l=[];const c=[];for(let d=0;d<e.length;d++){if(!0===o){o=!1;continue}const u=e[d];if("line"!==s)if("block"!==s)if("'"!==u){if(i)"\\"===u&&(o=!0);else if("{"!==u&&"["!==u)if("}"!==u&&"]"!==u){if(!(r>0))if(","!==u&&"\n"!==u){if(!(a<d))if(0!==u.trimEnd().length){if("/"===u){const t=e[d+1];if("/"===t){a=d,d++,s="line";continue}if("*"===t){a=d,d++,s="block";continue}}}else a=d+1}else{const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d+1}}else{if(r--,r<0){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]);break}0===r&&(c.push({value:e.slice(a,d+1),index:t+a,comment:l.join("\n")}),l=[],a=d+1)}else if(r++,1===r&&!n){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d}}else{if(!i){if(i=!0,0===r&&!n){const n=e.slice(a,d).trimEnd();n.length>0&&(c.push({value:n,index:t+a,comment:l.join("\n")}),l=[]),a=d}continue}i=!1,0===r&&(c.push({value:e.slice(a,d+1),index:t+a,comment:l.join("\n")}),l=[],a=d+1)}else"*"===u&&"/"===e[d+1]&&(d++,s=!1,l.push(e.slice(a,d+1).replace(/\n[ ]*/g,"\n ")),a=d+1);else"\n"===u&&(s=!1,l.push(e.slice(a,d).trimEnd()),a=d+1)}if(!i&&0===r&&!1===s){const n=e.slice(a).trimEnd();n.length>0&&c.push({value:n,index:t+a,comment:l.join("\n")})}return c}function o(e,t=0,n=""){t+=e.length;const a=function(e,t){if(0===e.length)return;const n=e[0];return"'"===n?(0,r.o)(e.slice(1)):"["===n?function(e,t){const n=[];for(const{value:r,index:a,comment:s}of i(e,t)){const e=o(r,a,s);if(void 0===e)return;n.push(e)}return n}(e.slice(1),t+1):"{"===n?function(e,t){const n={};for(const{value:r,index:a,comment:s}of i(e,t,!0)){const e=r.match(/^\s*([\w-]+)/);if(null===e){const e=o(r,a,s);if(void 0===e)return;n.__=e;continue}const t=e[1],i=e[0].length;let l=r.slice(i).trimEnd();if(0===l.length)n[t]={value:!0,index:a+i,comment:s};else{const e=o(l,a+i,s);if(void 0===e)return;n[t]=e}}return n}(e.slice(1),t+1):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}(e=e.trimStart(),t-=e.length);if(void 0!==a)return{value:a,index:t,comment:n}}},673:(e,t,n)=>{n.d(t,{Q:()=>o});var r=n(884);function i(e,t=!1){let n=0,r=!1,i=!1,o=0,a=!1;const s=[];for(let l=0;l<e.length;l++){if(!0===i){i=!1;continue}const c=e[l];if("line"!==a)if("block"!==a)if("'"!==c){if(r)"\\"===c&&(i=!0);else if("{"!==c&&"["!==c)if("}"!==c&&"]"!==c){if(!(n>0))if(","!==c&&"\n"!==c){if(!(o<l))if(0!==c.trimEnd().length){if("/"===c){const t=e[l+1];if("/"===t){l++,a="line",o=l+1;continue}if("*"===t){l++,a="block",o=l+1;continue}}}else o=l+1}else{const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l+1}}else{if(n--,n<0){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t);break}0===n&&(s.push(e.slice(o,l+1)),o=l+1)}else if(n++,1===n&&!t){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l}}else{if(!r){if(r=!0,0===n&&!t){const t=e.slice(o,l).trimEnd();t.length>0&&s.push(t),o=l}continue}r=!1,0===n&&(s.push(e.slice(o,l+1)),o=l+1)}else"*"===c&&"/"===e[l+1]&&(l++,a=!1),o=l+1;else"\n"===c&&(a=!1),o=l+1}if(!r&&0===n){const t=e.slice(o).trimEnd();t.length>0&&s.push(t)}return s}function o(e){if(0===(e=e.trimStart()).length)return;const t=e[0];return"'"===t?(0,r.o)(e.slice(1)):"["===t?function(e){const t=[];for(const n of i(e)){const e=o(n);if(void 0===e)return;t.push(e)}return t}(e.slice(1)):"{"===t?function(e){const t={};for(const n of i(e,!0)){const e=n.match(/^\s*([\w-]+)/);if(null===e){const e=o(n);if(void 0===e)return;t.__=e;continue}const r=e[1],i=e[0].length;let a=n.slice(i).trimEnd();if(0===a.length)t[r]=!0;else{const e=o(a);if(void 0===e)return;t[r]=e}}return t}(e.slice(1)):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}},884:(e,t,n)=>{function r(e){const t=[];let n=!1;for(const r of e)if(!0!==n)if("\\"!==r){if("'"===r)break;t.push(r)}else n=!0;else n=!1,"\\"!==r&&"'"!==r&&t.push("\\"),t.push(r);return t.join("")}function i(e,t){if(t&&e.length>0&&e[0].trim().length>0&&(1===e.length||e[e.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(e)&&"true"!==e&&"false"!==e&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)&&!e.startsWith("//")&&!e.startsWith("/*"))return e;const n=["'"];for(let t=0;t<e.length;t++){const r=e[t];if("\\"!==r)"'"!==r?n.push(r):n.push("\\'");else{if(t===e.length-1){n.push("\\\\");break}const i=e[t+1];if("\\"===i||"'"===i){n.push("\\\\");continue}n.push(r)}}return n.push("'"),n.join("")}n.d(t,{o:()=>r,n:()=>i})},44:(e,t,n)=>{n.d(t,{k:()=>i});var r=n(884);function i(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:r,indentTarget:o,useUnquotedString:a}){o=o??"none",r=r??0,t=t??"never";const s=[],l=e.length>1&&("all"===o||"array"===o||"arrayInObjectAndThis"===o)||void 0!==e.find((e=>e.comment.length>0)),c=r+(l?1:0);"arrayInObjectAndThis"===o&&(o="arrayInObject");const d="always"===n||"afterComma"===n?", ":",";let u;for(let r=0;r<e.length;r++){const{value:g,comment:p}=e[r];let h;h=void 0===u?i(g,{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:a}):u,r!==e.length-1&&(u=i(e[r+1].value,{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:a})),l||r===e.length-1||"always"!==t&&(h.endsWith("'")||h.endsWith("}")||h.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?(p.length>0&&s.push(...p.split("\n")),s.push(h)):s.push(h+d)}if(l){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`[${t}${s.join(t)}${e}]`}return`[${s.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:r,indentTarget:o,useUnquotedString:a}){o=o??"none",r=r??0,t=t??"never";const s=[],l=Object.keys(e);let c=l.length>1&&("all"===o||"object"===o);if(!c)for(const t of l){const n=e[t];if(void 0!==n&&n.comment.length>0){c=!0;break}}const d=r+(c?1:0);"arrayInObject"===o&&(o="arrayInObjectAndThis");const u="always"===n||"afterComma"===n?", ":",",g="always"===n||"afterKey"===n?" ":"";for(let r=0;r<l.length;r++){const p=l[r];if(null===p.match(/^[\w-]+$/))continue;const h=e[p];if(void 0===h)continue;const{value:f,comment:m}=h,v=i(f,{indentTarget:o,indentLevel:d,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:"__"===p&&"string"==typeof f?void 0:a});m.length>0&&s.push(...m.split("\n")),v.startsWith("'")||v.startsWith("[")||v.startsWith("{")?c||r===l.length-1||"always"!==t&&"inObject"!==t?s.push(("__"===p?"":p+g)+v):s.push(("__"===p?"":p+g)+v+u):"true"===v?c||r===l.length-1?s.push(p):s.push(p+u):c||r===l.length-1?s.push(`${p} ${v}`):s.push(`${p} ${v}${u}`)}if(c){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`{${t}${s.join(t)}${e}}`}return`{${s.join("")}}`}(e,t):"string"==typeof e?(0,r.n)(e,t.useUnquotedString):"number"==typeof e?e.toString():!0===e?"true":!1===e?"false":""}},890:(e,t,n)=>{n.d(t,{P:()=>i});var r=n(884);function i(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:r,indentTarget:o,useUnquotedString:a}){o=o??"none",r=r??0,t=t??"never";const s=[],l=e.length>1&&("all"===o||"array"===o||"arrayInObjectAndThis"===o),c=r+(l?1:0);"arrayInObjectAndThis"===o&&(o="arrayInObject");const d="always"===n||"afterComma"===n?", ":",";let u;for(let r=0;r<e.length;r++){let g;g=void 0===u?i(e[r],{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:a}):u,r!==e.length-1&&(u=i(e[r+1],{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:a})),l||r===e.length-1||"always"!==t&&(g.endsWith("'")||g.endsWith("}")||g.endsWith("]")||void 0!==u&&(u.endsWith("'")||u.endsWith("}")||u.endsWith("]")))?s.push(g):s.push(g+d)}if(l){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`[${t}${s.join(t)}${e}]`}return`[${s.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:r,indentTarget:o,useUnquotedString:a}){o=o??"none",r=r??0,t=t??"never";const s=[],l=Object.keys(e),c=l.length>1&&("all"===o||"object"===o),d=r+(c?1:0);"arrayInObject"===o&&(o="arrayInObjectAndThis");const u="always"===n||"afterComma"===n?", ":",",g="always"===n||"afterKey"===n?" ":"";for(let r=0;r<l.length;r++){const p=l[r];if(null===p.match(/^[\w-]+$/))continue;const h=e[p];if(void 0===h)continue;const f=i(h,{indentTarget:o,indentLevel:d,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:"__"===p&&"string"==typeof h?void 0:a});f.startsWith("'")||f.startsWith("[")||f.startsWith("{")?c||r===l.length-1||"always"!==t&&"inObject"!==t?s.push(("__"===p?"":p+g)+f):s.push(("__"===p?"":p+g)+f+u):"true"===f?c||r===l.length-1?s.push(p):s.push(p+u):c||r===l.length-1?s.push(`${p} ${f}`):s.push(`${p} ${f}${u}`)}if(c){let e="\n";for(let t=0;t<r;t++)e+="    ";let t=e;return r>=0&&(t+="    "),`{${t}${s.join(t)}${e}}'`}return`{${s.join("")}}`}(e,t):"number"==typeof e?e.toString():"string"==typeof e?(0,r.n)(e,t.useUnquotedString):!0===e?"true":!1===e?"false":""}},496:e=>{e.exports=require("vscode")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=n(256);module.exports=r})();