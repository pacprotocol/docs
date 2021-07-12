(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2817],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||h[m]||r;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],c={sidebar_position:102},s={unversionedId:"pac-protocol-core/client-commands/listsinceblock",id:"pac-protocol-core/client-commands/listsinceblock",isDocsHomePage:!1,title:"listsinceblock",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/listsinceblock.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/listsinceblock",permalink:"/pac-protocol-core/client-commands/listsinceblock",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/listsinceblock.mdx",version:"current",sidebarPosition:102,frontMatter:{sidebar_position:102},sidebar:"coreSidebar",previous:{title:"listreceivedbyaddress",permalink:"/pac-protocol-core/client-commands/listreceivedbyaddress"},next:{title:"listtransactions",permalink:"/pac-protocol-core/client-commands/listtransactions"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>blockhash</code>",id:"blockhash",children:[]},{value:"<code>target_confirmations</code>",id:"target_confirmations",children:[]},{value:"<code>include_watchonly</code>",id:"include_watchonly",children:[]},{value:"<code>include_removed</code>",id:"include_removed",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:l};function h(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )\n')),(0,r.kt)("p",null,"Get all transactions in blocks since block ","[blockhash]",', or all transactions if omitted.\nIf "blockhash" is no longer a part of the main chain, transactions from the fork point onward are included.\nAdditionally, if include_removed is set, transactions affecting the wallet which were removed are returned in the "removed" array.'),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"blockhash"},(0,r.kt)("inlineCode",{parentName:"h3"},"blockhash")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, optional)")),(0,r.kt)("p",null,"The block hash to list transactions since"),(0,r.kt)("h3",{id:"target_confirmations"},(0,r.kt)("inlineCode",{parentName:"h3"},"target_confirmations")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(numeric, optional, default=1)")),(0,r.kt)("p",null,"Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects  in the return value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[lastblock]\n")),(0,r.kt)("h3",{id:"include_watchonly"},(0,r.kt)("inlineCode",{parentName:"h3"},"include_watchonly")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(bool, optional, default=false)")),(0,r.kt)("p",null,"Include transactions to watch-only addresses (see 'importaddress')"),(0,r.kt)("h3",{id:"include_removed"},(0,r.kt)("inlineCode",{parentName:"h3"},"include_removed")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(bool, optional, default=true)")),(0,r.kt)("p",null,'Show transactions that were removed due to a reorg in the "removed" array\n(not guaranteed to work on pruned nodes)'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listsinceblock \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli listsinceblock "000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad" 6\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listsinceblock", "params": ["000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transactions": [\n    "account":"accountname",  #(string) DEPRECATED. This field will be removed in V0.18. To see this deprecated field, start pacprotocold with -deprecatedrpc=accounts. The account name associated with the transaction. Will be "" for the default account.\n    "address":"address",    #(string) The PAC address of the transaction. Not present for move transactions #(category = move).\n    "category":"send|receive",  #(string) The transaction category. \'send\' has negative amounts, \'receive\' has positive amounts.\n    "amount": x.xxx,          #(numeric) The amount in PAC. This is negative for the \'send\' category, and for the \'move\' category for moves \n                                          outbound. It is positive for the \'receive\' category, and for the \'move\' category for inbound funds.\n    "vout" : n,               #(numeric) the vout value\n    "fee": x.xxx,             #(numeric) The amount of the fee in PAC. This is negative and only available for the \'send\' category of transactions.\n    "confirmations" : n,      #(numeric) The number of blockchain confirmations for the transaction. Available for \'send\' and \'receive\' category of transactions.\n                                          When it\'s &lt; 0, it means the transaction conflicted that many blocks ago.\n    "instantlock" : true|false, #(bool) Current transaction lock state. Available for \'send\' and \'receive\' category of transactions\n    "instantlock_internal" : true|false, #(bool) Current internal transaction lock state. Available for \'send\' and \'receive\' category of transactions\n    "chainlock" : true|false, #(bool) The state of the corresponding block chainlock\n    "blockhash": "hashvalue", #(string) The block hash containing the transaction. Available for \'send\' and \'receive\' category of transactions.\n    "blockindex": n,          #(numeric) The index of the transaction in the block that includes it. Available for \'send\' and \'receive\' category of transactions.\n    "blocktime": xxx,         #(numeric) The block time in seconds since epoch #(1 Jan 1970 GMT).\n    "txid": "transactionid",  #(string) The transaction id. Available for \'send\' and \'receive\' category of transactions.\n    "time": xxx,              #(numeric) The transaction time in seconds since epoch #(Jan 1 1970 GMT).\n    "timereceived": xxx,      #(numeric) The time received in seconds since epoch #(Jan 1 1970 GMT). Available for \'send\' and \'receive\' category of transactions.\n    "abandoned": xxx,         #(bool) \'true\' if the transaction has been abandoned #(inputs are respendable). Only available for the \'send\' category of transactions.\n    "comment": "...",         #(string) If a comment is associated with the transaction.\n    "label" : "label"         #(string) A comment for the address/transaction, if any\n    "to": "...",              #(string) If a comment to is associated with the transaction.\n  ],\n  "removed": [\n    &lt;structure is the same as "transactions" above, only present if include_removed=true&gt;\n    Note: transactions that were re-added in the active chain will appear as-is in this array, and may thus have a positive confirmation count.\n  ],\n  "lastblock": "lastblockhash"  #(string) The hash of the block #(target_confirmations-1) from the best block on the main chain. This is typically used to feed back into listsinceblock the next time you call it. So you would generally use a target_confirmations of say 6, so you will be continually re-notified of transactions until they\'ve reached 6 confirmations plus any new ones\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listsinceblock\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'listsinceblock ( "blockhash" target_confirmations include_watchonly include_removed )\n\nGet all transactions in blocks since block [blockhash], or all transactions if omitted.\nIf "blockhash" is no longer a part of the main chain, transactions from the fork point onward are included.\nAdditionally, if include_removed is set, transactions affecting the wallet which were removed are returned in the "removed" array.\n\nArguments:\n1. "blockhash"            (string, optional) The block hash to list transactions since\n2. target_confirmations:    (numeric, optional, default=1) Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects [lastblock] in the return value\n3. include_watchonly:       (bool, optional, default=false) Include transactions to watch-only addresses (see \'importaddress\')\n4. include_removed:         (bool, optional, default=true) Show transactions that were removed due to a reorg in the "removed" array\n                                                           (not guaranteed to work on pruned nodes)\n\nResult:\n{\n  "transactions": [\n    "account":"accountname",  (string) DEPRECATED. This field will be removed in V0.18. To see this deprecated field, start pacprotocold with -deprecatedrpc=accounts. The account name associated with the transaction. Will be "" for the default account.\n    "address":"address",    (string) The PAC address of the transaction. Not present for move transactions (category = move).\n    "category":"send|receive",  (string) The transaction category. \'send\' has negative amounts, \'receive\' has positive amounts.\n    "amount": x.xxx,          (numeric) The amount in PAC. This is negative for the \'send\' category, and for the \'move\' category for moves \n                                          outbound. It is positive for the \'receive\' category, and for the \'move\' category for inbound funds.\n    "vout" : n,               (numeric) the vout value\n    "fee": x.xxx,             (numeric) The amount of the fee in PAC. This is negative and only available for the \'send\' category of transactions.\n    "confirmations" : n,      (numeric) The number of blockchain confirmations for the transaction. Available for \'send\' and \'receive\' category of transactions.\n                                          When it\'s < 0, it means the transaction conflicted that many blocks ago.\n    "instantlock" : true|false, (bool) Current transaction lock state. Available for \'send\' and \'receive\' category of transactions\n    "instantlock_internal" : true|false, (bool) Current internal transaction lock state. Available for \'send\' and \'receive\' category of transactions\n    "chainlock" : true|false, (bool) The state of the corresponding block chainlock\n    "blockhash": "hashvalue", (string) The block hash containing the transaction. Available for \'send\' and \'receive\' category of transactions.\n    "blockindex": n,          (numeric) The index of the transaction in the block that includes it. Available for \'send\' and \'receive\' category of transactions.\n    "blocktime": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).\n    "txid": "transactionid",  (string) The transaction id. Available for \'send\' and \'receive\' category of transactions.\n    "time": xxx,              (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT).\n    "timereceived": xxx,      (numeric) The time received in seconds since epoch (Jan 1 1970 GMT). Available for \'send\' and \'receive\' category of transactions.\n    "abandoned": xxx,         (bool) \'true\' if the transaction has been abandoned (inputs are respendable). Only available for the \'send\' category of transactions.\n    "comment": "...",         (string) If a comment is associated with the transaction.\n    "label" : "label"         (string) A comment for the address/transaction, if any\n    "to": "...",              (string) If a comment to is associated with the transaction.\n  ],\n  "removed": [\n    <structure is the same as "transactions" above, only present if include_removed=true>\n    Note: transactions that were re-added in the active chain will appear as-is in this array, and may thus have a positive confirmation count.\n  ],\n  "lastblock": "lastblockhash"  (string) The hash of the block (target_confirmations-1) from the best block on the main chain. This is typically used to feed back into listsinceblock the next time you call it. So you would generally use a target_confirmations of say 6, so you will be continually re-notified of transactions until they\'ve reached 6 confirmations plus any new ones\n}\n\nExamples:\n> pacprotocol-cli listsinceblock \n> pacprotocol-cli listsinceblock "000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad" 6\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listsinceblock", "params": ["000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}h.isMDXComponent=!0}}]);