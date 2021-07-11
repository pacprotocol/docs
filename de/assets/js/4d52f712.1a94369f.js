(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1848],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(b,c(c({ref:n},d),{},{components:t})):a.createElement(b,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9528:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),c={sidebar_position:110},l={unversionedId:"core/developers/pac-protocol-core/client-commands/abandontransaction",id:"core/developers/pac-protocol-core/client-commands/abandontransaction",isDocsHomePage:!1,title:"abandontransaction",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/abandontransaction.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/abandontransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/abandontransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/abandontransaction.mdx",version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"coreSidebar",previous:{title:"verifymessage",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/verifymessage"},next:{title:"abortrescan",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/abortrescan"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:i};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli abandontransaction "txid"\n')),(0,o.kt)("p",null,"Mark in-wallet transaction ","<","txid",">",' as abandoned\nThis will mark this transaction and all its in-wallet descendants as abandoned which will allow\nfor their inputs to be respent.  It can be used to replace "stuck" or evicted transactions.\nIt only works on transactions which are not included in a block and are not currently in the mempool.\nIt has no effect on transactions which are already conflicted or abandoned.'),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"txid-"},(0,o.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The transaction id"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli abandontransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "abandontransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help abandontransaction\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'abandontransaction "txid"\n\nMark in-wallet transaction <txid> as abandoned\nThis will mark this transaction and all its in-wallet descendants as abandoned which will allow\nfor their inputs to be respent.  It can be used to replace "stuck" or evicted transactions.\nIt only works on transactions which are not included in a block and are not currently in the mempool.\nIt has no effect on transactions which are already conflicted or abandoned.\n\nArguments:\n1. "txid"    (string, required) The transaction id\n\nResult:\n\nExamples:\n> pacglobal-cli abandontransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "abandontransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);