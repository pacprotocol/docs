(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1057],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1064:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l={sidebar_position:30},c={unversionedId:"core/developers/pac-protocol-core/client-commands/gettxout",id:"core/developers/pac-protocol-core/client-commands/gettxout",isDocsHomePage:!1,title:"gettxout",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/gettxout.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/gettxout",permalink:"/docs/core/developers/pac-protocol-core/client-commands/gettxout",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/gettxout.mdx",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"coreSidebar",previous:{title:"getspentinfo",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getspentinfo"},next:{title:"gettxoutproof",permalink:"/docs/core/developers/pac-protocol-core/client-commands/gettxoutproof"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txid</code> <span class='asterisk'>*</span>",id:"txid-",children:[]},{value:"<code>n</code> <span class='asterisk'>*</span>",id:"n-",children:[]},{value:"<code>include_mempool</code>",id:"include_mempool",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli gettxout "txid" n ( include_mempool )\n')),(0,a.kt)("p",null,"Returns details about an unspent transaction output."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"txid-"},(0,a.kt)("inlineCode",{parentName:"h3"},"txid")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The transaction id"),(0,a.kt)("h3",{id:"n-"},(0,a.kt)("inlineCode",{parentName:"h3"},"n")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, required)")),(0,a.kt)("p",null,"vout number"),(0,a.kt)("h3",{id:"include_mempool"},(0,a.kt)("inlineCode",{parentName:"h3"},"include_mempool")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(boolean, optional)")),(0,a.kt)("p",null,"Whether to include the mempool. Default: true.     Note that an unspent output that is spent in the mempool won't appear."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Get unspent transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listunspent \n")),(0,a.kt)("p",null,"View the details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli gettxout "txid" 1\n')),(0,a.kt)("p",null,"As a json rpc call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettxout", "params": ["txid", 1] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bestblock" : "hash",    #(string) the block hash\n  "confirmations" : n,       #(numeric) The number of confirmations\n  "value" : x.xxx,           #(numeric) The transaction value in PAC\n  "scriptPubKey" : {         #(json object)\n     "asm" : "code",       #(string) \n     "hex" : "hex",        #(string) \n     "reqSigs" : n,          #(numeric) Number of required signatures\n     "type" : "pubkeyhash", #(string) The type, eg pubkeyhash\n     "addresses" : [          #(array of string) array of pacglobal addresses\n        "address"     #(string) pacglobal address\n        ,...\n     ]\n  },\n  "coinbase" : true|false   #(boolean) Coinbase or not\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help gettxout\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gettxout "txid" n ( include_mempool )\n\nReturns details about an unspent transaction output.\n\nArguments:\n1. "txid"             (string, required) The transaction id\n2. "n"                (numeric, required) vout number\n3. "include_mempool"  (boolean, optional) Whether to include the mempool. Default: true.     Note that an unspent output that is spent in the mempool won\'t appear.\n\nResult:\n{\n  "bestblock" : "hash",    (string) the block hash\n  "confirmations" : n,       (numeric) The number of confirmations\n  "value" : x.xxx,           (numeric) The transaction value in PAC\n  "scriptPubKey" : {         (json object)\n     "asm" : "code",       (string) \n     "hex" : "hex",        (string) \n     "reqSigs" : n,          (numeric) Number of required signatures\n     "type" : "pubkeyhash", (string) The type, eg pubkeyhash\n     "addresses" : [          (array of string) array of pacglobal addresses\n        "address"     (string) pacglobal address\n        ,...\n     ]\n  },\n  "coinbase" : true|false   (boolean) Coinbase or not\n}\n\nExamples:\n\nGet unspent transactions\n> pacglobal-cli listunspent \n\nView the details\n> pacglobal-cli gettxout "txid" 1\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "gettxout", "params": ["txid", 1] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);