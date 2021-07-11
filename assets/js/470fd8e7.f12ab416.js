(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7629],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return t?o.createElement(f,i(i({ref:n},l),{},{components:t})):o.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6149:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i={sidebar_position:146},s={unversionedId:"core/developers/pac-protocol-core/client-commands/listunspent",id:"core/developers/pac-protocol-core/client-commands/listunspent",isDocsHomePage:!1,title:"listunspent",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/listunspent.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/listunspent",permalink:"/docs/core/developers/pac-protocol-core/client-commands/listunspent",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/listunspent.mdx",version:"current",sidebarPosition:146,frontMatter:{sidebar_position:146},sidebar:"coreSidebar",previous:{title:"listtransactions",permalink:"/docs/core/developers/pac-protocol-core/client-commands/listtransactions"},next:{title:"listwallets",permalink:"/docs/core/developers/pac-protocol-core/client-commands/listwallets"}},u=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>minconf</code>",id:"minconf",children:[]},{value:"<code>maxconf</code>",id:"maxconf",children:[]},{value:"<code>addresses</code>",id:"addresses",children:[]},{value:"<code>include_unsafe</code>",id:"include_unsafe",children:[]},{value:"<code>query_options</code>",id:"query_options",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],c={toc:u};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] [query_options])\n')),(0,a.kt)("p",null,"Returns array of unspent transaction outputs\nwith between minconf and maxconf (inclusive) confirmations.\nOptionally filter to only include txouts paid to specified addresses."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"minconf"},(0,a.kt)("inlineCode",{parentName:"h3"},"minconf")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional, default=1)")),(0,a.kt)("p",null,"The minimum confirmations to filter"),(0,a.kt)("h3",{id:"maxconf"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxconf")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional, default=9999999)")),(0,a.kt)("p",null,"The maximum confirmations to filter"),(0,a.kt)("h3",{id:"addresses"},(0,a.kt)("inlineCode",{parentName:"h3"},"addresses")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string)")),(0,a.kt)("p",null,"A json array of dash addresses to filter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "address"     (string) dash address\n    ,...\n]\n')),(0,a.kt)("h3",{id:"include_unsafe"},(0,a.kt)("inlineCode",{parentName:"h3"},"include_unsafe")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"( bool, optional, default=true)")),(0,a.kt)("p",null,'Include outputs that are not safe to spend\nSee description of "safe" attribute below.'),(0,a.kt)("h3",{id:"query_options"},(0,a.kt)("inlineCode",{parentName:"h3"},"query_options")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(json, optional)")),(0,a.kt)("p",null,"JSON with query options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "minimumAmount"    (numeric or string, default=0) Minimum value of each UTXO in PAC\n    "maximumAmount"    (numeric or string, default=unlimited) Maximum value of each UTXO in PAC\n    "maximumCount"     (numeric or string, default=unlimited) Maximum number of UTXOs\n    "minimumSumAmount" (numeric or string, default=unlimited) Minimum sum value of all UTXOs in PAC\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listunspent \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli listunspent 6 9999999 "[\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg\\",\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcg\\"]"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999 "[\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg\\",\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcg\\"]"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listunspent 6 9999999 '[]' true '{ \"minimumAmount\": 0.005 }'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result\n[                   #(array of json object)\n  {\n    "txid" : "txid",          #(string) the transaction id \n    "vout" : n,               #(numeric) the vout value\n    "address" : "address",    #(string) the dash address\n    "account" : "account",    #(string) DEPRECATED. The associated account, or "" for the default account\n    "scriptPubKey" : "key",   #(string) the script key\n    "amount" : x.xxx,         #(numeric) the transaction output amount in PAC\n    "confirmations" : n,      #(numeric) The number of confirmations\n    "redeemScript" : n        #(string) The redeemScript if scriptPubKey is P2SH\n    "spendable" : xxx,        #(bool) Whether we have the private keys to spend this output\n    "solvable" : xxx,         #(bool) Whether we know how to spend this output, ignoring the lack of keys\n    "safe" : xxx              #(bool) Whether this output is considered safe to spend. Unconfirmed transactions\n                              from outside keys and unconfirmed replacement transactions are considered unsafe\n                              and are not eligible for spending by fundrawtransaction and sendtoaddress.\n    "ps_rounds" : n           #(numeric) The number of PS rounds\n  }\n  ,...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listunspent\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'listunspent ( minconf maxconf  ["addresses",...] [include_unsafe] [query_options])\n\nReturns array of unspent transaction outputs\nwith between minconf and maxconf (inclusive) confirmations.\nOptionally filter to only include txouts paid to specified addresses.\n\nArguments:\n1. minconf          (numeric, optional, default=1) The minimum confirmations to filter\n2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter\n3. "addresses"      (string) A json array of dash addresses to filter\n    [\n      "address"     (string) dash address\n      ,...\n    ]\n4. include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend\n                  See description of "safe" attribute below.\n5. query_options    (json, optional) JSON with query options\n    {\n      "minimumAmount"    (numeric or string, default=0) Minimum value of each UTXO in PAC\n      "maximumAmount"    (numeric or string, default=unlimited) Maximum value of each UTXO in PAC\n      "maximumCount"     (numeric or string, default=unlimited) Maximum number of UTXOs\n      "minimumSumAmount" (numeric or string, default=unlimited) Minimum sum value of all UTXOs in PAC\n    }\n\nResult\n[                   (array of json object)\n  {\n    "txid" : "txid",          (string) the transaction id \n    "vout" : n,               (numeric) the vout value\n    "address" : "address",    (string) the dash address\n    "account" : "account",    (string) DEPRECATED. The associated account, or "" for the default account\n    "scriptPubKey" : "key",   (string) the script key\n    "amount" : x.xxx,         (numeric) the transaction output amount in PAC\n    "confirmations" : n,      (numeric) The number of confirmations\n    "redeemScript" : n        (string) The redeemScript if scriptPubKey is P2SH\n    "spendable" : xxx,        (bool) Whether we have the private keys to spend this output\n    "solvable" : xxx,         (bool) Whether we know how to spend this output, ignoring the lack of keys\n    "safe" : xxx              (bool) Whether this output is considered safe to spend. Unconfirmed transactions\n                              from outside keys and unconfirmed replacement transactions are considered unsafe\n                              and are not eligible for spending by fundrawtransaction and sendtoaddress.\n    "ps_rounds" : n           (numeric) The number of PS rounds\n  }\n  ,...\n]\n\nExamples:\n> pacglobal-cli listunspent \n> pacglobal-cli listunspent 6 9999999 "[\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg\\",\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcg\\"]"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999 "[\\"XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg\\",\\"XuQQkwA4FYkq2XERzMY2CiAZhJTEDAbtcg\\"]"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n> pacglobal-cli listunspent 6 9999999 \'[]\' true \'{ "minimumAmount": 0.005 }\'\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [6, 9999999, [] , true, { "minimumAmount": 0.005 } ] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}l.isMDXComponent=!0}}]);