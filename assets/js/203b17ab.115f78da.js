(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[3223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,c(c({ref:t},i),{},{components:n})):r.createElement(g,c({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var d=2;d<a;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3207:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return i}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c={sidebar_position:122},s={unversionedId:"core/developers/pac-protocol-core/client-commands/getnewaddress",id:"core/developers/pac-protocol-core/client-commands/getnewaddress",isDocsHomePage:!1,title:"getnewaddress",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getnewaddress.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getnewaddress",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getnewaddress",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getnewaddress.mdx",version:"current",sidebarPosition:122,frontMatter:{sidebar_position:122},sidebar:"coreSidebar",previous:{title:"getbalance",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getbalance"},next:{title:"getrawchangeaddress",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getrawchangeaddress"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>account</code>",id:"account",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:l};function i(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getnewaddress ( "account" )\n')),(0,a.kt)("p",null,"Returns a new PACGlobal address for receiving payments.\nIf 'account' is specified (DEPRECATED), it is added to the address book\nso payments received with the address will be credited to 'account'."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"account"},(0,a.kt)("inlineCode",{parentName:"h3"},"account")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, optional)")),(0,a.kt)("p",null,'DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getnewaddress \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"address"    #(string) The new dash address\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getnewaddress\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getnewaddress ( "account" )\n\nReturns a new PACGlobal address for receiving payments.\nIf \'account\' is specified (DEPRECATED), it is added to the address book \nso payments received with the address will be credited to \'account\'.\n\nArguments:\n1. "account"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account "" is used. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.\n\nResult:\n"address"    (string) The new dash address\n\nExamples:\n> pacglobal-cli getnewaddress \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}i.isMDXComponent=!0}}]);