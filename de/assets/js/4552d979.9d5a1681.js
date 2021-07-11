(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6305],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=i(r),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||c;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2154:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),a={sidebar_position:14},l={unversionedId:"core/developers/pac-protocol-core/client-commands/getblockhash",id:"core/developers/pac-protocol-core/client-commands/getblockhash",isDocsHomePage:!1,title:"getblockhash",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getblockhash.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getblockhash",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockhash",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getblockhash.mdx",version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"coreSidebar",previous:{title:"getblockcount",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockcount"},next:{title:"getblockhashes",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getblockhashes"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>height</code> <span class='asterisk'>*</span>",id:"height-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getblockhash height\n")),(0,c.kt)("p",null,"Returns hash of block in best-block-chain at height provided."),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"height-"},(0,c.kt)("inlineCode",{parentName:"h3"},"height")," ",(0,c.kt)("span",{class:"asterisk"},"*")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(numeric, required)")),(0,c.kt)("p",null,"The height index"),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getblockhash 1000\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhash", "params": [1000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'"hash"         #(string) The block hash\n')),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getblockhash\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'getblockhash height\n\nReturns hash of block in best-block-chain at height provided.\n\nArguments:\n1. height         (numeric, required) The height index\n\nResult:\n"hash"         (string) The block hash\n\nExamples:\n> pacglobal-cli getblockhash 1000\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhash", "params": [1000] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);