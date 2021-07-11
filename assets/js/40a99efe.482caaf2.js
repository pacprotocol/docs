(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[986],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,c(c({ref:t},i),{},{components:r})):n.createElement(h,c({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1241:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return i}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c={sidebar_position:15},l={unversionedId:"core/developers/pac-protocol-core/client-commands/getblockhashes",id:"core/developers/pac-protocol-core/client-commands/getblockhashes",isDocsHomePage:!1,title:"getblockhashes",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getblockhashes.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getblockhashes",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getblockhashes",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getblockhashes.mdx",version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"coreSidebar",previous:{title:"getblockhash",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getblockhash"},next:{title:"getblockheader",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getblockheader"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>high</code> <span class='asterisk'>*</span>",id:"high-",children:[]},{value:"<code>low</code> <span class='asterisk'>*</span>",id:"low-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:s};function i(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getblockhashes timestamp\n")),(0,a.kt)("p",null,"Returns array of hashes of blocks within the timestamp range provided."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"high-"},(0,a.kt)("inlineCode",{parentName:"h3"},"high")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, required)")),(0,a.kt)("p",null,"The newer block timestamp"),(0,a.kt)("h3",{id:"low-"},(0,a.kt)("inlineCode",{parentName:"h3"},"low")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(numeric, required)")),(0,a.kt)("p",null,"The older block timestamp"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getblockhashes 1231614698 1231024505\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhashes", "params": [1231614698, 1231024505] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  "hash"         #(string) The block hash\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getblockhashes\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getblockhashes timestamp\n\nReturns array of hashes of blocks within the timestamp range provided.\n\nArguments:\n1. high         (numeric, required) The newer block timestamp\n2. low          (numeric, required) The older block timestamp\n\nResult:\n[\n  "hash"         (string) The block hash\n]\n\nExamples:\n> pacglobal-cli getblockhashes 1231614698 1231024505\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getblockhashes", "params": [1231614698, 1231024505] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}i.isMDXComponent=!0}}]);