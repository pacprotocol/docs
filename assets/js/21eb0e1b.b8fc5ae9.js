(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2135],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return h},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?a.createElement(m,o(o({ref:n},h),{},{components:t})):a.createElement(m,o({ref:n},h))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3972:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={sidebar_position:19},c={unversionedId:"core/developers/pac-protocol-core/client-commands/getchaintips",id:"core/developers/pac-protocol-core/client-commands/getchaintips",isDocsHomePage:!1,title:"getchaintips",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getchaintips.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getchaintips",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getchaintips",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getchaintips.mdx",version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"coreSidebar",previous:{title:"getblockstats",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getblockstats"},next:{title:"getchaintxstats",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getchaintxstats"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>count</code>",id:"count",children:[]},{value:"<code>branchlen</code>",id:"branchlen",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:l};function h(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getchaintips ( count branchlen )\n")),(0,i.kt)("p",null,"getchaintips ( count branchlen )\nReturn information about all known tips in the block tree, including the main chain as well as orphaned branches."),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"count"},(0,i.kt)("inlineCode",{parentName:"h3"},"count")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(numeric, optional)")),(0,i.kt)("p",null,"only show this much of latest tips"),(0,i.kt)("h3",{id:"branchlen"},(0,i.kt)("inlineCode",{parentName:"h3"},"branchlen")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(numeric, optional)")),(0,i.kt)("p",null,"only show tips that have equal or greater length of branch"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getchaintips \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintips", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "height": xxxx,             #(numeric) height of the chain tip\n    "hash": "xxxx",             #(string) block hash of the tip\n    "difficulty" : x.xxx,       #(numeric) The difficulty\n    "chainwork" : "0000...1f3"  #(string) Expected number of hashes required to produce the current chain #(in hex)\n    "branchlen": 0              #(numeric) zero for main chain\n    "forkpoint": "xxxx",        #(string) same as "hash" for the main chain\n    "status": "active"          #(string) "active" for the main chain\n  },\n  {\n    "height": xxxx,\n    "hash": "xxxx",\n    "difficulty" : x.xxx,\n    "chainwork" : "0000...1f3"\n    "branchlen": 1              #(numeric) length of branch connecting the tip to the main chain\n    "forkpoint": "xxxx",        #(string) block hash of the last common block between this tip and the main chain\n    "status": "xxxx"            #(string) status of the chain #(active, valid-fork, valid-headers, headers-only, invalid)\n  }\n]\nPossible values for status:\n1.  "invalid"               This branch contains at least one invalid block\n2.  "headers-only"          Not all blocks for this branch are available, but the headers are valid\n3.  "valid-headers"         All blocks are available for this branch, but they were never fully validated\n4.  "valid-fork"            This branch is not part of the active chain, but is fully validated\n5.  "active"                This is the tip of the active main chain, which is certainly valid\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getchaintips\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getchaintips ( count branchlen )\nReturn information about all known tips in the block tree, including the main chain as well as orphaned branches.\n\nArguments:\n1. count       (numeric, optional) only show this much of latest tips\n2. branchlen   (numeric, optional) only show tips that have equal or greater length of branch\n\nResult:\n[\n  {\n    "height": xxxx,             (numeric) height of the chain tip\n    "hash": "xxxx",             (string) block hash of the tip\n    "difficulty" : x.xxx,       (numeric) The difficulty\n    "chainwork" : "0000...1f3"  (string) Expected number of hashes required to produce the current chain (in hex)\n    "branchlen": 0              (numeric) zero for main chain\n    "forkpoint": "xxxx",        (string) same as "hash" for the main chain\n    "status": "active"          (string) "active" for the main chain\n  },\n  {\n    "height": xxxx,\n    "hash": "xxxx",\n    "difficulty" : x.xxx,\n    "chainwork" : "0000...1f3"\n    "branchlen": 1              (numeric) length of branch connecting the tip to the main chain\n    "forkpoint": "xxxx",        (string) block hash of the last common block between this tip and the main chain\n    "status": "xxxx"            (string) status of the chain (active, valid-fork, valid-headers, headers-only, invalid)\n  }\n]\nPossible values for status:\n1.  "invalid"               This branch contains at least one invalid block\n2.  "headers-only"          Not all blocks for this branch are available, but the headers are valid\n3.  "valid-headers"         All blocks are available for this branch, but they were never fully validated\n4.  "valid-fork"            This branch is not part of the active chain, but is fully validated\n5.  "active"                This is the tip of the active main chain, which is certainly valid\n\nExamples:\n> pacglobal-cli getchaintips \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getchaintips", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}h.isMDXComponent=!0}}]);