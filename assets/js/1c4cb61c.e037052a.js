(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[9153],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},i=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=d(n),m=a,g=i["".concat(l,".").concat(m)]||i[m]||p[m]||c;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=i;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<c;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}i.displayName="MDXCreateElement"},5137:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),c=(n(7294),n(3905)),o={sidebar_position:119},s={unversionedId:"core/developers/pac-protocol-core/client-commands/getaccountaddress",id:"core/developers/pac-protocol-core/client-commands/getaccountaddress",isDocsHomePage:!1,title:"getaccountaddress",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getaccountaddress.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getaccountaddress",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getaccountaddress",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getaccountaddress.mdx",version:"current",sidebarPosition:119,frontMatter:{sidebar_position:119},sidebar:"coreSidebar",previous:{title:"getaccount",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getaccount"},next:{title:"getaddressesbyaccount",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getaddressesbyaccount"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>account</code> <span class='asterisk'>*</span>",id:"account-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getaccountaddress "account"\n')),(0,c.kt)("p",null,"DEPRECATED. Returns the current PACGlobal address for receiving payments to this account."),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"account-"},(0,c.kt)("inlineCode",{parentName:"h3"},"account")," ",(0,c.kt)("span",{class:"asterisk"},"*")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(string, required)")),(0,c.kt)("p",null,'The account name for the address. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.'),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getaccountaddress \n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getaccountaddress ""\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getaccountaddress "myaccount"\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaccountaddress", "params": ["myaccount"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'"address"          #(string) The account dash address\n')),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getaccountaddress\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'getaccountaddress "account"\n\nDEPRECATED. Returns the current PACGlobal address for receiving payments to this account.\n\nArguments:\n1. "account"       (string, required) The account name for the address. It can also be set to the empty string "" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.\n\nResult:\n"address"          (string) The account dash address\n\nExamples:\n> pacglobal-cli getaccountaddress \n> pacglobal-cli getaccountaddress ""\n> pacglobal-cli getaccountaddress "myaccount"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaccountaddress", "params": ["myaccount"] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);