(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3119],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return i},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(y,p(p({ref:r},i),{},{components:t})):n.createElement(y,p({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1336:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return i}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),p={sidebar_position:115},c={unversionedId:"core/developers/pac-protocol-core/client-commands/dumpprivkey",id:"core/developers/pac-protocol-core/client-commands/dumpprivkey",isDocsHomePage:!1,title:"dumpprivkey",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/dumpprivkey.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/dumpprivkey",permalink:"/docs/core/developers/pac-protocol-core/client-commands/dumpprivkey",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/dumpprivkey.mdx",version:"current",sidebarPosition:115,frontMatter:{sidebar_position:115},sidebar:"coreSidebar",previous:{title:"dumphdinfo",permalink:"/docs/core/developers/pac-protocol-core/client-commands/dumphdinfo"},next:{title:"dumpwallet",permalink:"/docs/core/developers/pac-protocol-core/client-commands/dumpwallet"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>address</code> <span class='asterisk'>*</span>",id:"address-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:l};function i(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli dumpprivkey "address"\n')),(0,a.kt)("p",null,"Reveals the private key corresponding to 'address'.\nThen the importprivkey can be used with this output"),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"address-"},(0,a.kt)("inlineCode",{parentName:"h3"},"address")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The dash address for the private key"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli dumpprivkey "myaddress"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli importprivkey "mykey"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "dumpprivkey", "params": ["myaddress"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"key"                #(string) The private key\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help dumpprivkey\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dumpprivkey "address"\n\nReveals the private key corresponding to \'address\'.\nThen the importprivkey can be used with this output\n\nArguments:\n1. "address"   (string, required) The dash address for the private key\n\nResult:\n"key"                (string) The private key\n\nExamples:\n> pacglobal-cli dumpprivkey "myaddress"\n> pacglobal-cli importprivkey "mykey"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "dumpprivkey", "params": ["myaddress"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}i.isMDXComponent=!0}}]);