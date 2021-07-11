(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5003],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7045:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],i={sidebar_position:17},p="dumphdinfo",l={unversionedId:"developers/pac-protocol-core/client-commands/dumphdinfo",id:"developers/pac-protocol-core/client-commands/dumphdinfo",isDocsHomePage:!1,title:"dumphdinfo",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/dumphdinfo.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/dumphdinfo",permalink:"/developers/pac-protocol-core/client-commands/dumphdinfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/dumphdinfo.mdx",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"coreSidebar",previous:{title:"disconnectnode",permalink:"/developers/pac-protocol-core/client-commands/disconnectnode"},next:{title:"dumpprivkey",permalink:"/developers/pac-protocol-core/client-commands/dumpprivkey"}},s=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dumphdinfo"},"dumphdinfo"),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli dumphdinfo\n")),(0,a.kt)("p",null,"dumphdinfo\nReturns an object containing sensitive private info about this HD wallet."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli dumphdinfo \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "dumphdinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hdseed": "seed",                    #(string) The HD seed #(bip32, in hex)\n  "mnemonic": "words",                 #(string) The mnemonic for this HD wallet #(bip39, english words) \n  "mnemonicpassphrase": "passphrase",  #(string) The mnemonic passphrase for this HD wallet #(bip39)\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help dumphdinfo\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'dumphdinfo\nReturns an object containing sensitive private info about this HD wallet.\n\nResult:\n{\n  "hdseed": "seed",                    (string) The HD seed (bip32, in hex)\n  "mnemonic": "words",                 (string) The mnemonic for this HD wallet (bip39, english words) \n  "mnemonicpassphrase": "passphrase",  (string) The mnemonic passphrase for this HD wallet (bip39)\n}\n\nExamples:\n> pacprotocol-cli dumphdinfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "dumphdinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);