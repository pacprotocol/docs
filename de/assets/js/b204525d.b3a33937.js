(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8219],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<c;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1113:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return r},toc:function(){return i},default:function(){return u}});var a=n(2122),o=n(9756),c=(n(7294),n(3905)),l={sidebar_position:121},r={unversionedId:"core/developers/pac-protocol-core/client-commands/getbalance",id:"core/developers/pac-protocol-core/client-commands/getbalance",isDocsHomePage:!1,title:"getbalance",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getbalance.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getbalance",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getbalance",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getbalance.mdx",version:"current",sidebarPosition:121,frontMatter:{sidebar_position:121},sidebar:"coreSidebar",previous:{title:"getaddressesbyaccount",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getaddressesbyaccount"},next:{title:"getnewaddress",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getnewaddress"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>account</code>",id:"account",children:[]},{value:"<code>minconf</code>",id:"minconf",children:[]},{value:"<code>addlocked</code>",id:"addlocked",children:[]},{value:"<code>include_watchonly</code>",id:"include_watchonly",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getbalance ( "account" minconf addlocked include_watchonly )\n')),(0,c.kt)("p",null,'If account is not specified, returns the server\'s total available balance.\nIf account is specified (DEPRECATED), returns the balance in the account.\nNote that the account "" is not the same as leaving the parameter out.\nThe server total may be different to the balance in the default "" account.'),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"account"},(0,c.kt)("inlineCode",{parentName:"h3"},"account")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(string, optional)")),(0,c.kt)("p",null,'DEPRECATED. The selected account, or "*" for entire wallet. It may be the default account using "".'),(0,c.kt)("h3",{id:"minconf"},(0,c.kt)("inlineCode",{parentName:"h3"},"minconf")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(numeric, optional, default=1)")),(0,c.kt)("p",null,"Only include transactions confirmed at least this many times."),(0,c.kt)("h3",{id:"addlocked"},(0,c.kt)("inlineCode",{parentName:"h3"},"addlocked")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(bool, optional, default=false)")),(0,c.kt)("p",null,"Whether to include the value of transactions locked via InstaPAC in the wallet's balance."),(0,c.kt)("h3",{id:"include_watchonly"},(0,c.kt)("inlineCode",{parentName:"h3"},"include_watchonly")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"( bool, optional, default=false)")),(0,c.kt)("p",null,"Also include balance in watch-only addresses (see 'importaddress')"),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("p",null,"The total amount in the wallet with 1 or more confirmations"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getbalance \n")),(0,c.kt)("p",null,"The total amount in the wallet at least 6 blocks confirmed"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getbalance "*" 6\n')),(0,c.kt)("p",null,"As a json rpc call"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["*", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,c.kt)("h2",{id:"result"},"Result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"amount              #(numeric) The total amount in PAC received for this account.\n")),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getbalance\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'getbalance ( "account" minconf addlocked include_watchonly )\n\nIf account is not specified, returns the server\'s total available balance.\nIf account is specified (DEPRECATED), returns the balance in the account.\nNote that the account "" is not the same as leaving the parameter out.\nThe server total may be different to the balance in the default "" account.\n\nArguments:\n1. "account"        (string, optional) DEPRECATED. The selected account, or "*" for entire wallet. It may be the default account using "".\n2. minconf          (numeric, optional, default=1) Only include transactions confirmed at least this many times.\n3. addlocked      (bool, optional, default=false) Whether to include the value of transactions locked via InstaPAC in the wallet\'s balance.\n4. include_watchonly (bool, optional, default=false) Also include balance in watch-only addresses (see \'importaddress\')\n\nResult:\namount              (numeric) The total amount in PAC received for this account.\n\nExamples:\n\nThe total amount in the wallet with 1 or more confirmations\n> pacglobal-cli getbalance \n\nThe total amount in the wallet at least 6 blocks confirmed\n> pacglobal-cli getbalance "*" 6\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["*", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);