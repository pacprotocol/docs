(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2304],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,c(c({ref:n},p),{},{components:t})):r.createElement(h,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8488:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),c={sidebar_position:92},i={unversionedId:"core/developers/pac-protocol-core/client-commands/decoderawtransaction",id:"core/developers/pac-protocol-core/client-commands/decoderawtransaction",isDocsHomePage:!1,title:"decoderawtransaction",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/decoderawtransaction.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/decoderawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/decoderawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/decoderawtransaction.mdx",version:"current",sidebarPosition:92,frontMatter:{sidebar_position:92},sidebar:"coreSidebar",previous:{title:"createrawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/createrawtransaction"},next:{title:"decodescript",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/decodescript"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hexstring</code> <span class='asterisk'>*</span>",id:"hexstring-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli decoderawtransaction "hexstring"\n')),(0,o.kt)("p",null,"Return a JSON object representing the serialized, hex-encoded transaction."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"hexstring-"},(0,o.kt)("inlineCode",{parentName:"h3"},"hexstring")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The transaction hex string"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli decoderawtransaction "hexstring"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "decoderawtransaction", "params": ["hexstring"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "txid" : "id",        #(string) The transaction id\n  "size" : n,             #(numeric) The transaction size\n  "version" : n,          #(numeric) The version\n  "type" : n,             #(numeric) The type\n  "locktime" : ttt,       #(numeric) The lock time\n  "vin" : [               #(array of json objects)\n     {\n       "txid": "id",    #(string) The transaction id\n       "vout": n,         #(numeric) The output number\n       "scriptSig": {     #(json object) The script\n         "asm": "asm",  #(string) asm\n         "hex": "hex"   #(string) hex\n       },\n       "sequence": n     #(numeric) The script sequence number\n     }\n     ,...\n  ],\n  "vout" : [             #(array of json objects)\n     {\n       "value" : x.xxx,            #(numeric) The value in PAC\n       "n" : n,                    #(numeric) index\n       "scriptPubKey" : {          #(json object)\n         "asm" : "asm",          #(string) the asm\n         "hex" : "hex",          #(string) the hex\n         "reqSigs" : n,            #(numeric) The required sigs\n         "type" : "pubkeyhash",  #(string) The type, eg \'pubkeyhash\'\n         "addresses" : [           #(json array of string)\n           "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG"   #(string) PACGlobal address\n           ,...\n         ]\n       }\n     }\n     ,...\n  ],\n  "extraPayloadSize" : n           #(numeric) Size of DIP2 extra payload. Only present if it\'s a special TX\n  "extraPayload" : "hex"           #(string) Hex encoded DIP2 extra payload data. Only present if it\'s a special TX\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help decoderawtransaction\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'decoderawtransaction "hexstring"\n\nReturn a JSON object representing the serialized, hex-encoded transaction.\n\nArguments:\n1. "hexstring"      (string, required) The transaction hex string\n\nResult:\n{\n  "txid" : "id",        (string) The transaction id\n  "size" : n,             (numeric) The transaction size\n  "version" : n,          (numeric) The version\n  "type" : n,             (numeric) The type\n  "locktime" : ttt,       (numeric) The lock time\n  "vin" : [               (array of json objects)\n     {\n       "txid": "id",    (string) The transaction id\n       "vout": n,         (numeric) The output number\n       "scriptSig": {     (json object) The script\n         "asm": "asm",  (string) asm\n         "hex": "hex"   (string) hex\n       },\n       "sequence": n     (numeric) The script sequence number\n     }\n     ,...\n  ],\n  "vout" : [             (array of json objects)\n     {\n       "value" : x.xxx,            (numeric) The value in PAC\n       "n" : n,                    (numeric) index\n       "scriptPubKey" : {          (json object)\n         "asm" : "asm",          (string) the asm\n         "hex" : "hex",          (string) the hex\n         "reqSigs" : n,            (numeric) The required sigs\n         "type" : "pubkeyhash",  (string) The type, eg \'pubkeyhash\'\n         "addresses" : [           (json array of string)\n           "XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwG"   (string) PACGlobal address\n           ,...\n         ]\n       }\n     }\n     ,...\n  ],\n  "extraPayloadSize" : n           (numeric) Size of DIP2 extra payload. Only present if it\'s a special TX\n  "extraPayload" : "hex"           (string) Hex encoded DIP2 extra payload data. Only present if it\'s a special TX\n}\n\nExamples:\n> pacglobal-cli decoderawtransaction "hexstring"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "decoderawtransaction", "params": ["hexstring"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);