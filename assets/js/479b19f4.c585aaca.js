(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2818],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return m},kt:function(){return u}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=o.createContext({}),l=function(n){var e=o.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},m=function(n){var e=l(n.components);return o.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,c=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),p=l(t),u=r,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?o.createElement(f,a(a({ref:e},m),{},{components:t})):o.createElement(f,a({ref:e},m))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7853:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:55},c={unversionedId:"pac-protocol-core/client-commands/getmempoolancestors",id:"pac-protocol-core/client-commands/getmempoolancestors",isDocsHomePage:!1,title:"getmempoolancestors",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getmempoolancestors.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getmempoolancestors",permalink:"/pac-protocol-core/client-commands/getmempoolancestors",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getmempoolancestors.mdx",version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"coreSidebar",previous:{title:"getmemoryinfo",permalink:"/pac-protocol-core/client-commands/getmemoryinfo"},next:{title:"getmempooldescendants",permalink:"/pac-protocol-core/client-commands/getmempooldescendants"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]},{value:"<code>verbose</code>",id:"verbose",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],m={toc:l};function d(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getmempoolancestors txid (verbose)\n")),(0,i.kt)("p",null,"If txid is in the mempool, returns all in-mempool ancestors."),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"txid-"},(0,i.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,i.kt)("span",{class:"asterisk"},"*")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(string, required)")),(0,i.kt)("p",null,"The transaction id (must be in mempool)"),(0,i.kt)("h3",{id:"verbose"},(0,i.kt)("inlineCode",{parentName:"h3"},"verbose")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,i.kt)("p",null,"True for a json object, false for array of transaction ids"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getmempoolancestors "mytxid"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolancestors", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Result #(for verbose=false):\n[                       #(json array of strings)\n  "transactionid"           #(string) The transaction id of an in-mempool ancestor transaction\n  ,...\n]\n\nResult #(for verbose=true):\n{                           #(json object)\n  "transactionid" : {       #(json object)\n    "size" : n,                 #(numeric) transaction size in bytes\n    "fee" : n,                  #(numeric) transaction fee in PAC #(DEPRECATED)\n    "modifiedfee" : n,          #(numeric) transaction fee with fee deltas used for mining priority #(DEPRECATED)\n    "time" : n,                 #(numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               #(numeric) block height when transaction entered pool\n    "descendantcount" : n,      #(numeric) number of in-mempool descendant transactions #(including this one)\n    "descendantsize" : n,       #(numeric) size of in-mempool descendants #(including this one)\n    "descendantfees" : n,       #(numeric) modified fees #(see above) of in-mempool descendants #(including this one) #(DEPRECATED)\n    "ancestorcount" : n,        #(numeric) number of in-mempool ancestor transactions #(including this one)\n    "ancestorsize" : n,         #(numeric) size of in-mempool ancestors #(including this one)\n    "ancestorfees" : n,         #(numeric) modified fees #(see above) of in-mempool ancestors #(including this one) #(DEPRECATED)\n    "fees" : {\n        "base" : n,         #(numeric) transaction fee in PAC\n        "modified" : n,     #(numeric) transaction fee with fee deltas used for mining priority in PAC\n        "ancestor" : n,     #(numeric) modified fees #(see above) of in-mempool ancestors #(including this one) in PAC\n        "descendent" : n,   #(numeric) number of in-mempool ancestor transactions #(including this one) in PAC\n    }\n    "depends" : [               #(array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        #(string) parent transaction id\n       ... ],\n    "spentby" : [           #(array) unconfirmed transactions spending outputs from this transaction\n        "transactionid",    #(string) child transaction id\n       ... ]\n    "instantlock" : true|false  #(boolean) True if this transaction was locked via InstantSend\n  }, ...\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getmempoolancestors\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getmempoolancestors txid (verbose)\n\nIf txid is in the mempool, returns all in-mempool ancestors.\n\nArguments:\n1. "txid"                 (string, required) The transaction id (must be in mempool)\n2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids\n\nResult (for verbose=false):\n[                       (json array of strings)\n  "transactionid"           (string) The transaction id of an in-mempool ancestor transaction\n  ,...\n]\n\nResult (for verbose=true):\n{                           (json object)\n  "transactionid" : {       (json object)\n    "size" : n,                 (numeric) transaction size in bytes\n    "fee" : n,                  (numeric) transaction fee in PAC (DEPRECATED)\n    "modifiedfee" : n,          (numeric) transaction fee with fee deltas used for mining priority (DEPRECATED)\n    "time" : n,                 (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT\n    "height" : n,               (numeric) block height when transaction entered pool\n    "descendantcount" : n,      (numeric) number of in-mempool descendant transactions (including this one)\n    "descendantsize" : n,       (numeric) size of in-mempool descendants (including this one)\n    "descendantfees" : n,       (numeric) modified fees (see above) of in-mempool descendants (including this one) (DEPRECATED)\n    "ancestorcount" : n,        (numeric) number of in-mempool ancestor transactions (including this one)\n    "ancestorsize" : n,         (numeric) size of in-mempool ancestors (including this one)\n    "ancestorfees" : n,         (numeric) modified fees (see above) of in-mempool ancestors (including this one) (DEPRECATED)\n    "fees" : {\n        "base" : n,         (numeric) transaction fee in PAC\n        "modified" : n,     (numeric) transaction fee with fee deltas used for mining priority in PAC\n        "ancestor" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one) in PAC\n        "descendent" : n,   (numeric) number of in-mempool ancestor transactions (including this one) in PAC\n    }\n    "depends" : [               (array) unconfirmed transactions used as inputs for this transaction\n        "transactionid",        (string) parent transaction id\n       ... ],\n    "spentby" : [           (array) unconfirmed transactions spending outputs from this transaction\n        "transactionid",    (string) child transaction id\n       ... ]\n    "instantlock" : true|false  (boolean) True if this transaction was locked via InstantSend\n  }, ...\n}\n\nExamples:\n> pacprotocol-cli getmempoolancestors "mytxid"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmempoolancestors", "params": ["mytxid"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);