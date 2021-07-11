(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6686],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,f=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?o.createElement(f,a(a({ref:n},m),{},{components:t})):o.createElement(f,a({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3847:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a={sidebar_position:24},c={unversionedId:"core/developers/pac-protocol-core/client-commands/getmempoolentry",id:"core/developers/pac-protocol-core/client-commands/getmempoolentry",isDocsHomePage:!1,title:"getmempoolentry",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getmempoolentry.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getmempoolentry",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getmempoolentry",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getmempoolentry.mdx",version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"coreSidebar",previous:{title:"getmempooldescendants",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getmempooldescendants"},next:{title:"getmempoolinfo",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getmempoolinfo"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getmempoolentry txid\n")),(0,i.kt)("p",null,"Returns mempool data for given transaction"),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"txid-"},(0,i.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,i.kt)("span",{class:"asterisk"},"*")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(string, required)")),(0,i.kt)("p",null,"The transaction id (must be in mempool)"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getmempoolentry "mytxid"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolentry", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{                           #(json object)\n    "size" : n,                 #(numeric) transaction size in bytes\n    "fee" : n,                  #(numeric) transaction fee in PAC\n    "modifiedfee" : n,          #(numeric) transaction fee with fee deltas used for mining priority\n    "time" : n,                 #(numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               #(numeric) block height when transaction entered pool\n    "descendantcount" : n,      #(numeric) number of in-mempool descendant transactions #(including this one)\n    "descendantsize" : n,       #(numeric) size of in-mempool descendants #(including this one)\n    "descendantfees" : n,       #(numeric) modified fees #(see above) of in-mempool descendants #(including this one)\n    "ancestorcount" : n,        #(numeric) number of in-mempool ancestor transactions #(including this one)\n    "ancestorsize" : n,         #(numeric) size of in-mempool ancestors #(including this one)\n    "ancestorfees" : n,         #(numeric) modified fees #(see above) of in-mempool ancestors #(including this one)\n    "depends" : [               #(array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        #(string) parent transaction id\n       ... ],\n    "instantlock" : true|false  #(boolean) True if this transaction was locked via InstaPAC\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getmempoolentry\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getmempoolentry txid\n\nReturns mempool data for given transaction\n\nArguments:\n1. "txid"                   (string, required) The transaction id (must be in mempool)\n\nResult:\n{                           (json object)\n    "size" : n,                 (numeric) transaction size in bytes\n    "fee" : n,                  (numeric) transaction fee in PAC\n    "modifiedfee" : n,          (numeric) transaction fee with fee deltas used for mining priority\n    "time" : n,                 (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               (numeric) block height when transaction entered pool\n    "descendantcount" : n,      (numeric) number of in-mempool descendant transactions (including this one)\n    "descendantsize" : n,       (numeric) size of in-mempool descendants (including this one)\n    "descendantfees" : n,       (numeric) modified fees (see above) of in-mempool descendants (including this one)\n    "ancestorcount" : n,        (numeric) number of in-mempool ancestor transactions (including this one)\n    "ancestorsize" : n,         (numeric) size of in-mempool ancestors (including this one)\n    "ancestorfees" : n,         (numeric) modified fees (see above) of in-mempool ancestors (including this one)\n    "depends" : [               (array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        (string) parent transaction id\n       ... ],\n    "instantlock" : true|false  (boolean) True if this transaction was locked via InstaPAC\n}\n\nExamples:\n> pacglobal-cli getmempoolentry "mytxid"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolentry", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);