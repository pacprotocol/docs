(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6503],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,c(c({ref:n},d),{},{components:t})):a.createElement(h,c({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5758:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return d}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),c={sidebar_position:126},i={unversionedId:"core/developers/pac-protocol-core/client-commands/gettransaction",id:"core/developers/pac-protocol-core/client-commands/gettransaction",isDocsHomePage:!1,title:"gettransaction",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/gettransaction.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/gettransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/gettransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/gettransaction.mdx",version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"coreSidebar",previous:{title:"getreceivedbyaddress",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getreceivedbyaddress"},next:{title:"getunconfirmedbalance",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getunconfirmedbalance"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]},{value:"<code>include_watchonly</code>",id:"include_watchonly",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli gettransaction "txid" ( include_watchonly )\n')),(0,r.kt)("p",null,"Get detailed information about in-wallet transaction ","<","txid",">"),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"txid-"},(0,r.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,r.kt)("span",{class:"asterisk"},"*")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, required)")),(0,r.kt)("p",null,"The transaction id"),(0,r.kt)("h3",{id:"include_watchonly"},(0,r.kt)("inlineCode",{parentName:"h3"},"include_watchonly")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(bool, optional, default=false)")),(0,r.kt)("p",null,"Whether to include watch-only addresses in balance calculation and details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[]\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d" true\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "amount" : x.xxx,        #(numeric) The transaction amount in PAC\n  "fee": x.xxx,            #(numeric) The amount of the fee in PAC. This is negative and only available for the \n                              \'send\' category of transactions.\n  "instantlock" : true|false, #(bool) Current transaction lock state\n  "instantlock_internal" : true|false, #(bool) Current internal transaction lock state\n  "chainlock" : true|false, #(bool) The state of the corresponding block chainlock\n  "confirmations" : n,     #(numeric) The number of blockchain confirmations\n  "blockhash" : "hash",    #(string) The block hash\n  "blockindex" : xx,       #(numeric) The index of the transaction in the block that includes it\n  "blocktime" : ttt,       #(numeric) The time in seconds since epoch #(1 Jan 1970 GMT)\n  "txid" : "transactionid",   #(string) The transaction id.\n  "time" : ttt,            #(numeric) The transaction time in seconds since epoch #(1 Jan 1970 GMT)\n  "timereceived" : ttt,    #(numeric) The time received in seconds since epoch #(1 Jan 1970 GMT)\n  "details" : [\n    {\n      "account" : "accountname",      #(string) DEPRECATED. The account name involved in the transaction, can be "" for the default account.\n      "address" : "address",          #(string) The dash address involved in the transaction\n      "category" : "send|receive",    #(string) The category, either \'send\' or \'receive\'\n      "amount" : x.xxx,               #(numeric) The amount in PAC\n      "label" : "label",              #(string) A comment for the address/transaction, if any\n      "vout" : n,                     #(numeric) the vout value\n      "fee": x.xxx,                     #(numeric) The amount of the fee in PAC. This is negative and only available for the \n                                           \'send\' category of transactions.\n      "abandoned": xxx                  #(bool) \'true\' if the transaction has been abandoned #(inputs are respendable). Only available for the \n                                           \'send\' category of transactions.\n    }\n    ,...\n  ],\n  "hex" : "data"                      #(string) Raw data for transaction\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help gettransaction\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gettransaction "txid" ( include_watchonly )\n\nGet detailed information about in-wallet transaction <txid>\n\nArguments:\n1. "txid"                  (string, required) The transaction id\n2. "include_watchonly"     (bool, optional, default=false) Whether to include watch-only addresses in balance calculation and details[]\n\nResult:\n{\n  "amount" : x.xxx,        (numeric) The transaction amount in PAC\n  "fee": x.xxx,            (numeric) The amount of the fee in PAC. This is negative and only available for the \n                              \'send\' category of transactions.\n  "instantlock" : true|false, (bool) Current transaction lock state\n  "instantlock_internal" : true|false, (bool) Current internal transaction lock state\n  "chainlock" : true|false, (bool) The state of the corresponding block chainlock\n  "confirmations" : n,     (numeric) The number of blockchain confirmations\n  "blockhash" : "hash",    (string) The block hash\n  "blockindex" : xx,       (numeric) The index of the transaction in the block that includes it\n  "blocktime" : ttt,       (numeric) The time in seconds since epoch (1 Jan 1970 GMT)\n  "txid" : "transactionid",   (string) The transaction id.\n  "time" : ttt,            (numeric) The transaction time in seconds since epoch (1 Jan 1970 GMT)\n  "timereceived" : ttt,    (numeric) The time received in seconds since epoch (1 Jan 1970 GMT)\n  "details" : [\n    {\n      "account" : "accountname",      (string) DEPRECATED. The account name involved in the transaction, can be "" for the default account.\n      "address" : "address",          (string) The dash address involved in the transaction\n      "category" : "send|receive",    (string) The category, either \'send\' or \'receive\'\n      "amount" : x.xxx,               (numeric) The amount in PAC\n      "label" : "label",              (string) A comment for the address/transaction, if any\n      "vout" : n,                     (numeric) the vout value\n      "fee": x.xxx,                     (numeric) The amount of the fee in PAC. This is negative and only available for the \n                                           \'send\' category of transactions.\n      "abandoned": xxx                  (bool) \'true\' if the transaction has been abandoned (inputs are respendable). Only available for the \n                                           \'send\' category of transactions.\n    }\n    ,...\n  ],\n  "hex" : "data"                      (string) Raw data for transaction\n}\n\nExamples:\n> pacglobal-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"\n> pacglobal-cli gettransaction "1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d" true\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettransaction", "params": ["1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);