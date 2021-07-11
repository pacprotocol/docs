(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3334],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?t.createElement(b,c(c({ref:n},s),{},{components:r})):t.createElement(b,c({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},269:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),c={sidebar_position:77},l={unversionedId:"core/developers/pac-protocol-core/client-commands/clearbanned",id:"core/developers/pac-protocol-core/client-commands/clearbanned",isDocsHomePage:!1,title:"clearbanned",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/clearbanned.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/clearbanned",permalink:"/docs/core/developers/pac-protocol-core/client-commands/clearbanned",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/clearbanned.mdx",version:"current",sidebarPosition:77,frontMatter:{sidebar_position:77},sidebar:"coreSidebar",previous:{title:"addnode",permalink:"/docs/core/developers/pac-protocol-core/client-commands/addnode"},next:{title:"disconnectnode",permalink:"/docs/core/developers/pac-protocol-core/client-commands/disconnectnode"}},p=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:p};function s(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},i,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli clearbanned\n")),(0,a.kt)("p",null,"Clear all banned IPs."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli clearbanned \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "clearbanned", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help clearbanned\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'clearbanned\n\nClear all banned IPs.\n\nExamples:\n> pacglobal-cli clearbanned \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "clearbanned", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}s.isMDXComponent=!0}}]);