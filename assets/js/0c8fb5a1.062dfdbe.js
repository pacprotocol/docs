(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5319],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return h},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},h=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return t?a.createElement(m,i(i({ref:n},h),{},{components:t})):a.createElement(m,i({ref:n},h))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6926:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:69},c={unversionedId:"pac-protocol-core/client-commands/getrawtransaction",id:"pac-protocol-core/client-commands/getrawtransaction",isDocsHomePage:!1,title:"getrawtransaction",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getrawtransaction.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getrawtransaction",permalink:"/pac-protocol-core/client-commands/getrawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getrawtransaction.mdx",version:"current",sidebarPosition:69,frontMatter:{sidebar_position:69},sidebar:"coreSidebar",previous:{title:"getrawmempool",permalink:"/pac-protocol-core/client-commands/getrawmempool"},next:{title:"getreceivedbyaccount",permalink:"/pac-protocol-core/client-commands/getreceivedbyaccount"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]},{value:"<code>verbose</code>",id:"verbose",children:[]},{value:"<code>blockhash</code>",id:"blockhash",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],h={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getrawtransaction "txid" ( verbose "blockhash" )\n')),(0,o.kt)("p",null,"NOTE: By default this function only works for mempool transactions. If the -txindex option is\nenabled, it also works for blockchain transactions. If the block which contains the transaction\nis known, its hash can be provided even for nodes without -txindex. Note that if a blockhash is\nprovided, only that block will be searched and if the transaction is in the mempool or other\nblocks, or if this node does not have the given block available, the transaction will not be found.\nDEPRECATED: for now, it also works for transactions with unspent outputs."),(0,o.kt)("p",null,"Return the raw transaction data."),(0,o.kt)("p",null,"If verbose is 'true', returns an Object with information about 'txid'.\nIf verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"txid-"},(0,o.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The transaction id"),(0,o.kt)("h3",{id:"verbose"},(0,o.kt)("inlineCode",{parentName:"h3"},"verbose")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(bool, optional, default=false)")),(0,o.kt)("p",null,"If false, return a string, otherwise return a json object"),(0,o.kt)("h3",{id:"blockhash"},(0,o.kt)("inlineCode",{parentName:"h3"},"blockhash")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"( string, optional)")),(0,o.kt)("p",null,"The block in which to look for the transaction"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getrawtransaction "mytxid"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getrawtransaction "mytxid" true\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getrawtransaction", "params": ["mytxid", true] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getrawtransaction "mytxid" false "myblockhash"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getrawtransaction "mytxid" true "myblockhash"\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Result #(if verbose is not set or set to false):\n"data"      #(string) The serialized, hex-encoded data for \'txid\'\n\nResult #(if verbose is set to true):\n{\n  "in_active_chain": b, #(bool) Whether specified block is in the active chain or not #(only present with explicit "blockhash" argument)\n  "txid" : "id",        #(string) The transaction id #(same as provided)\n  "size" : n,             #(numeric) The transaction size\n  "version" : n,          #(numeric) The version\n  "locktime" : ttt,       #(numeric) The lock time\n  "vin" : [               #(array of json objects)\n     {\n       "txid": "id",    #(string) The transaction id\n       "vout": n,         #(numeric) \n       "scriptSig": {     #(json object) The script\n         "asm": "asm",  #(string) asm\n         "hex": "hex"   #(string) hex\n       },\n       "sequence": n      #(numeric) The script sequence number\n     }\n     ,...\n  ],\n  "vout" : [              #(array of json objects)\n     {\n       "value" : x.xxx,            #(numeric) The value in PAC\n       "n" : n,                    #(numeric) index\n       "scriptPubKey" : {          #(json object)\n         "asm" : "asm",          #(string) the asm\n         "hex" : "hex",          #(string) the hex\n         "reqSigs" : n,            #(numeric) The required sigs\n         "type" : "pubkeyhash",  #(string) The type, eg \'pubkeyhash\'\n         "addresses" : [           #(json array of string)\n           "address"        #(string) PAC address\n           ,...\n         ]\n       }\n     }\n     ,...\n  ],\n  "extraPayloadSize" : n    #(numeric) Size of DIP2 extra payload. Only present if it\'s a special TX\n  "extraPayload" : "hex"    #(string) Hex encoded DIP2 extra payload data. Only present if it\'s a special TX\n  "hex" : "data",         #(string) The serialized, hex-encoded data for \'txid\'\n  "blockhash" : "hash",   #(string) the block hash\n  "height" : n,             #(numeric) The block height\n  "confirmations" : n,      #(numeric) The confirmations\n  "time" : ttt,             #(numeric) The transaction time in seconds since epoch #(Jan 1 1970 GMT)\n  "blocktime" : ttt         #(numeric) The block time in seconds since epoch #(Jan 1 1970 GMT)\n  "instantlock" : true|false, #(bool) Current transaction lock state\n  "instantlock_internal" : true|false, #(bool) Current internal transaction lock state\n  "chainlock" : true|false, #(bool) The state of the corresponding block chainlock\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getrawtransaction\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'getrawtransaction "txid" ( verbose "blockhash" )\n\nNOTE: By default this function only works for mempool transactions. If the -txindex option is\nenabled, it also works for blockchain transactions. If the block which contains the transaction\nis known, its hash can be provided even for nodes without -txindex. Note that if a blockhash is\nprovided, only that block will be searched and if the transaction is in the mempool or other\nblocks, or if this node does not have the given block available, the transaction will not be found.\nDEPRECATED: for now, it also works for transactions with unspent outputs.\n\nReturn the raw transaction data.\n\nIf verbose is \'true\', returns an Object with information about \'txid\'.\nIf verbose is \'false\' or omitted, returns a string that is serialized, hex-encoded data for \'txid\'.\n\nArguments:\n1. "txid"      (string, required) The transaction id\n2. verbose     (bool, optional, default=false) If false, return a string, otherwise return a json object\n3. "blockhash" (string, optional) The block in which to look for the transaction\n\nResult (if verbose is not set or set to false):\n"data"      (string) The serialized, hex-encoded data for \'txid\'\n\nResult (if verbose is set to true):\n{\n  "in_active_chain": b, (bool) Whether specified block is in the active chain or not (only present with explicit "blockhash" argument)\n  "txid" : "id",        (string) The transaction id (same as provided)\n  "size" : n,             (numeric) The transaction size\n  "version" : n,          (numeric) The version\n  "locktime" : ttt,       (numeric) The lock time\n  "vin" : [               (array of json objects)\n     {\n       "txid": "id",    (string) The transaction id\n       "vout": n,         (numeric) \n       "scriptSig": {     (json object) The script\n         "asm": "asm",  (string) asm\n         "hex": "hex"   (string) hex\n       },\n       "sequence": n      (numeric) The script sequence number\n     }\n     ,...\n  ],\n  "vout" : [              (array of json objects)\n     {\n       "value" : x.xxx,            (numeric) The value in PAC\n       "n" : n,                    (numeric) index\n       "scriptPubKey" : {          (json object)\n         "asm" : "asm",          (string) the asm\n         "hex" : "hex",          (string) the hex\n         "reqSigs" : n,            (numeric) The required sigs\n         "type" : "pubkeyhash",  (string) The type, eg \'pubkeyhash\'\n         "addresses" : [           (json array of string)\n           "address"        (string) PAC address\n           ,...\n         ]\n       }\n     }\n     ,...\n  ],\n  "extraPayloadSize" : n    (numeric) Size of DIP2 extra payload. Only present if it\'s a special TX\n  "extraPayload" : "hex"    (string) Hex encoded DIP2 extra payload data. Only present if it\'s a special TX\n  "hex" : "data",         (string) The serialized, hex-encoded data for \'txid\'\n  "blockhash" : "hash",   (string) the block hash\n  "height" : n,             (numeric) The block height\n  "confirmations" : n,      (numeric) The confirmations\n  "time" : ttt,             (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)\n  "blocktime" : ttt         (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n  "instantlock" : true|false, (bool) Current transaction lock state\n  "instantlock_internal" : true|false, (bool) Current internal transaction lock state\n  "chainlock" : true|false, (bool) The state of the corresponding block chainlock\n}\n\nExamples:\n> pacprotocol-cli getrawtransaction "mytxid"\n> pacprotocol-cli getrawtransaction "mytxid" true\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getrawtransaction", "params": ["mytxid", true] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n> pacprotocol-cli getrawtransaction "mytxid" false "myblockhash"\n> pacprotocol-cli getrawtransaction "mytxid" true "myblockhash"\n\n')))}d.isMDXComponent=!0}}]);