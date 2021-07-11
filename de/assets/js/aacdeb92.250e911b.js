(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6396],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||s;return t?a.createElement(b,o(o({ref:n},d),{},{components:t})):a.createElement(b,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6775:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=t(2122),r=t(9756),s=(t(7294),t(3905)),o={sidebar_position:139},l={unversionedId:"core/developers/pac-protocol-core/client-commands/listaddressbalances",id:"core/developers/pac-protocol-core/client-commands/listaddressbalances",isDocsHomePage:!1,title:"listaddressbalances",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/listaddressbalances.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/listaddressbalances",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listaddressbalances",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/listaddressbalances.mdx",version:"current",sidebarPosition:139,frontMatter:{sidebar_position:139},sidebar:"coreSidebar",previous:{title:"listaccounts",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listaccounts"},next:{title:"listaddressgroupings",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/listaddressgroupings"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>minamount</code>",id:"minamount",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listaddressbalances ( minamount )\n")),(0,s.kt)("p",null,"Lists addresses of this wallet and their balances"),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("h3",{id:"minamount"},(0,s.kt)("inlineCode",{parentName:"h3"},"minamount")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(numeric, optional, default=0)")),(0,s.kt)("p",null,"Minimum balance in PAC an address should have to be shown in the list"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listaddressbalances \n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli listaddressbalances 10\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressbalances", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressbalances", "params": [10] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address": amount,       #(string) The dash address and the amount in PAC\n  ,...\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listaddressbalances\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'listaddressbalances ( minamount )\n\nLists addresses of this wallet and their balances\n\nArguments:\n1. minamount               (numeric, optional, default=0) Minimum balance in PAC an address should have to be shown in the list\n\nResult:\n{\n  "address": amount,       (string) The dash address and the amount in PAC\n  ,...\n}\n\nExamples:\n> pacglobal-cli listaddressbalances \n> pacglobal-cli listaddressbalances 10\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressbalances", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressbalances", "params": [10] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);