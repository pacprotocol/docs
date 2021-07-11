(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3051],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),i=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?l.createElement(f,o(o({ref:t},u),{},{components:n})):l.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4769:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],c={sidebar_position:141},p="unloadwallet",i={unversionedId:"developers/pac-protocol-core/client-commands/unloadwallet",id:"developers/pac-protocol-core/client-commands/unloadwallet",isDocsHomePage:!1,title:"unloadwallet",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/unloadwallet.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/unloadwallet",permalink:"/developers/pac-protocol-core/client-commands/unloadwallet",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/unloadwallet.mdx",version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"coreSidebar",previous:{title:"submitblock",permalink:"/developers/pac-protocol-core/client-commands/submitblock"},next:{title:"upgradetohd",permalink:"/developers/pac-protocol-core/client-commands/upgradetohd"}},u=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>wallet_name</code>",id:"wallet_name",children:[]}]},{value:"Examples",id:"examples",children:[]}],d={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unloadwallet"},"unloadwallet"),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli unloadwallet ( "wallet_name" )\n')),(0,r.kt)("p",null,'unloadwallet ( "wallet_name" )\nUnloads the wallet referenced by the request endpoint otherwise unloads the wallet specified in the argument.\nSpecifying the wallet name on a wallet endpoint is invalid.'),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"wallet_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"wallet_name")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, optional)")),(0,r.kt)("p",null,"The name of the wallet to unload."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli unloadwallet wallet_name\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "unloadwallet", "params": [wallet_name] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help unloadwallet\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'unloadwallet ( "wallet_name" )\nUnloads the wallet referenced by the request endpoint otherwise unloads the wallet specified in the argument.\nSpecifying the wallet name on a wallet endpoint is invalid.\nArguments:\n1. "wallet_name"    (string, optional) The name of the wallet to unload.\n\nExamples:\n> pacprotocol-cli unloadwallet wallet_name\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "unloadwallet", "params": [wallet_name] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}s.isMDXComponent=!0}}]);