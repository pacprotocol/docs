(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7071],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=o,m=p["".concat(i,".").concat(u)]||p[u]||h[u]||a;return t?r.createElement(m,c(c({ref:n},d),{},{components:t})):r.createElement(m,c({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},841:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c={sidebar_position:16},s={unversionedId:"core/developers/pac-protocol-core/client-commands/getblockheader",id:"core/developers/pac-protocol-core/client-commands/getblockheader",isDocsHomePage:!1,title:"getblockheader",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getblockheader.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getblockheader",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockheader",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getblockheader.mdx",version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"coreSidebar",previous:{title:"getblockhashes",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockhashes"},next:{title:"getblockheaders",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockheaders"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hash</code> <span class='asterisk'>*</span>",id:"hash-",children:[]},{value:"<code>verbose</code>",id:"verbose",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:i};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getblockheader "hash" ( verbose )\n')),(0,a.kt)("p",null,"If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.\nIf verbose is true, returns an Object with information about blockheader ","<","hash",">","."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"hash-"},(0,a.kt)("inlineCode",{parentName:"h3"},"hash")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The block hash"),(0,a.kt)("h3",{id:"verbose"},(0,a.kt)("inlineCode",{parentName:"h3"},"verbose")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(boolean, optional, default=true)")),(0,a.kt)("p",null,"true for a json object, false for the hex encoded data"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getblockheader "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockheader", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result #(for verbose = true):\n{\n  "hash" : "hash",     #(string) the block hash #(same as provided)\n  "confirmations" : n,   #(numeric) The number of confirmations, or -1 if the block is not on the main chain\n  "height" : n,          #(numeric) The block height or index\n  "version" : n,         #(numeric) The block version\n  "versionHex" : "00000000", #(string) The block version formatted in hexadecimal\n  "merkleroot" : "xxxx", #(string) The merkle root\n  "time" : ttt,          #(numeric) The block time in seconds since epoch #(Jan 1 1970 GMT)\n  "mediantime" : ttt,    #(numeric) The median block time in seconds since epoch #(Jan 1 1970 GMT)\n  "nonce" : n,           #(numeric) The nonce\n  "bits" : "1d00ffff", #(string) The bits\n  "difficulty" : x.xxx,  #(numeric) The difficulty\n  "chainwork" : "0000...1f3"     #(string) Expected number of hashes required to produce the current chain #(in hex)\n  "previousblockhash" : "hash",  #(string) The hash of the previous block\n  "nextblockhash" : "hash",      #(string) The hash of the next block\n}\n\nResult #(for verbose=false):\n"data"             #(string) A string that is serialized, hex-encoded data for block \'hash\'.\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getblockheader\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getblockheader "hash" ( verbose )\n\nIf verbose is false, returns a string that is serialized, hex-encoded data for blockheader \'hash\'.\nIf verbose is true, returns an Object with information about blockheader <hash>.\n\nArguments:\n1. "hash"          (string, required) The block hash\n2. verbose           (boolean, optional, default=true) true for a json object, false for the hex encoded data\n\nResult (for verbose = true):\n{\n  "hash" : "hash",     (string) the block hash (same as provided)\n  "confirmations" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain\n  "height" : n,          (numeric) The block height or index\n  "version" : n,         (numeric) The block version\n  "versionHex" : "00000000", (string) The block version formatted in hexadecimal\n  "merkleroot" : "xxxx", (string) The merkle root\n  "time" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n  "mediantime" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)\n  "nonce" : n,           (numeric) The nonce\n  "bits" : "1d00ffff", (string) The bits\n  "difficulty" : x.xxx,  (numeric) The difficulty\n  "chainwork" : "0000...1f3"     (string) Expected number of hashes required to produce the current chain (in hex)\n  "previousblockhash" : "hash",  (string) The hash of the previous block\n  "nextblockhash" : "hash",      (string) The hash of the next block\n}\n\nResult (for verbose=false):\n"data"             (string) A string that is serialized, hex-encoded data for block \'hash\'.\n\nExamples:\n> pacglobal-cli getblockheader "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockheader", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);