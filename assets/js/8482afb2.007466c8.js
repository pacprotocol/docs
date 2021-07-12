(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[567],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1710:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return i},default:function(){return s}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),a=["components"],c={sidebar_position:91},p={unversionedId:"pac-protocol-core/client-commands/importwallet",id:"pac-protocol-core/client-commands/importwallet",isDocsHomePage:!1,title:"importwallet",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/importwallet.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/importwallet",permalink:"/pac-protocol-core/client-commands/importwallet",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/importwallet.mdx",version:"current",sidebarPosition:91,frontMatter:{sidebar_position:91},sidebar:"coreSidebar",previous:{title:"importpubkey",permalink:"/pac-protocol-core/client-commands/importpubkey"},next:{title:"keepass",permalink:"/pac-protocol-core/client-commands/keepass"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>filename</code> <span class='asterisk'>*</span>",id:"filename-",children:[]}]},{value:"Examples",id:"examples",children:[]}],m={toc:i};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importwallet "filename"\n')),(0,l.kt)("p",null,"Imports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"filename-"},(0,l.kt)("inlineCode",{parentName:"h3"},"filename")," ",(0,l.kt)("span",{class:"asterisk"},"*")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(string, required)")),(0,l.kt)("p",null,"The wallet file"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Dump the wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli dumpwallet "test"\n')),(0,l.kt)("p",null,"Import the wallet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importwallet "test"\n')),(0,l.kt)("p",null,"Import using the json rpc call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importwallet", "params": ["test"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help importwallet\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'importwallet "filename"\n\nImports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys.\n\nArguments:\n1. "filename"    (string, required) The wallet file\n\nExamples:\n\nDump the wallet\n> pacprotocol-cli dumpwallet "test"\n\nImport the wallet\n> pacprotocol-cli importwallet "test"\n\nImport using the json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importwallet", "params": ["test"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}s.isMDXComponent=!0}}]);