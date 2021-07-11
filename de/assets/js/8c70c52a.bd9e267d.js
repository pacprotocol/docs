(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8245],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2799:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c={sidebar_position:26},l={unversionedId:"core/developers/pac-protocol-core/client-commands/getmerkleblocks",id:"core/developers/pac-protocol-core/client-commands/getmerkleblocks",isDocsHomePage:!1,title:"getmerkleblocks",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getmerkleblocks.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getmerkleblocks",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getmerkleblocks",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getmerkleblocks.mdx",version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"coreSidebar",previous:{title:"getmempoolinfo",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getmempoolinfo"},next:{title:"getrawmempool",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getrawmempool"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>filter</code> <span class='asterisk'>*</span>",id:"filter-",children:[]},{value:"<code>hash</code> <span class='asterisk'>*</span>",id:"hash-",children:[]},{value:"<code>count</code>",id:"count",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getmerkleblocks "filter" "hash" ( count )\n')),(0,a.kt)("p",null,"Returns an array of hex-encoded merkleblocks for ","<","count",">"," blocks starting from ","<","hash",">"," which match ","<","filter",">","."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"filter-"},(0,a.kt)("inlineCode",{parentName:"h3"},"filter")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The hex encoded bloom filter"),(0,a.kt)("h3",{id:"hash-"},(0,a.kt)("inlineCode",{parentName:"h3"},"hash")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The block hash"),(0,a.kt)("h3",{id:"count"},(0,a.kt)("inlineCode",{parentName:"h3"},"count")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, optional, default/max=2000)")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getmerkleblocks "2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmerkleblocks", "params": ["2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  "data",                        #(string)  A string that is serialized, hex-encoded data for a merkleblock.\n  ...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getmerkleblocks\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getmerkleblocks "filter" "hash" ( count )\n\nReturns an array of hex-encoded merkleblocks for <count> blocks starting from <hash> which match <filter>.\n\nArguments:\n1. "filter"        (string, required) The hex encoded bloom filter\n2. "hash"          (string, required) The block hash\n3. count           (numeric, optional, default/max=2000)\n\nResult:\n[\n  "data",                        (string)  A string that is serialized, hex-encoded data for a merkleblock.\n  ...\n]\n\nExamples:\n> pacglobal-cli getmerkleblocks "2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmerkleblocks", "params": ["2303028005802040100040000008008400048141010000f8400420800080025004000004130000000000000001" "00000000007e1432d2af52e8463278bf556b55cf5049262f25634557e2e91202" 2000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);