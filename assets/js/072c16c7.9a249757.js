(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(h,c(c({ref:t},d),{},{components:n})):a.createElement(h,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=u;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,c[1]=r;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},669:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),c=["components"],r={sidebar_position:36},i={unversionedId:"pac-protocol-core/client-commands/getbalance",id:"pac-protocol-core/client-commands/getbalance",isDocsHomePage:!1,title:"getbalance",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getbalance.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getbalance",permalink:"/pac-protocol-core/client-commands/getbalance",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getbalance.mdx",version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"coreSidebar",previous:{title:"getaddressutxos",permalink:"/pac-protocol-core/client-commands/getaddressutxos"},next:{title:"getbestblockhash",permalink:"/pac-protocol-core/client-commands/getbestblockhash"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>(dummy)</code>",id:"dummy",children:[]},{value:"<code>minconf</code>",id:"minconf",children:[]},{value:"<code>addlocked</code>",id:"addlocked",children:[]},{value:"<code>include_watchonly</code>",id:"include_watchonly",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"command"},"Command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getbalance ( "(dummy)" minconf addlocked include_watchonly )\n')),(0,l.kt)("p",null,"Returns the total available balance.\nThe available balance is what the wallet considers currently spendable, and is\nthus affected by options which limit spendability such as -spendzeroconfchange."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("h3",{id:"dummy"},(0,l.kt)("inlineCode",{parentName:"h3"},"(dummy)")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(string, optional)")),(0,l.kt)("p",null,'Remains for backward compatibility. Must be excluded or set to "*".'),(0,l.kt)("h3",{id:"minconf"},(0,l.kt)("inlineCode",{parentName:"h3"},"minconf")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(numeric, optional, default=0)")),(0,l.kt)("p",null,"Only include transactions confirmed at least this many times."),(0,l.kt)("h3",{id:"addlocked"},(0,l.kt)("inlineCode",{parentName:"h3"},"addlocked")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(bool, optional, default=false)")),(0,l.kt)("p",null,"Whether to include the value of transactions locked via InstantSend in the wallet's balance."),(0,l.kt)("h3",{id:"include_watchonly"},(0,l.kt)("inlineCode",{parentName:"h3"},"include_watchonly")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"( bool, optional, default=false)")),(0,l.kt)("p",null,"Also include balance in watch-only addresses (see 'importaddress')"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The total amount in the wallet with 1 or more confirmations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getbalance \n")),(0,l.kt)("p",null,"The total amount in the wallet at least 6 blocks confirmed"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getbalance "*" 6\n')),(0,l.kt)("p",null,"As a json rpc call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["*", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,l.kt)("h2",{id:"result"},"Result"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"amount              #(numeric) The total amount in PAC received for this account.\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Running following help command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getbalance\n")),(0,l.kt)("p",null,"Will produce following output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'getbalance ( "(dummy)" minconf addlocked include_watchonly )\n\nReturns the total available balance.\nThe available balance is what the wallet considers currently spendable, and is\nthus affected by options which limit spendability such as -spendzeroconfchange.\n\nArguments:\n1. (dummy)           (string, optional) Remains for backward compatibility. Must be excluded or set to "*".\n2. minconf           (numeric, optional, default=0) Only include transactions confirmed at least this many times.\n3. addlocked         (bool, optional, default=false) Whether to include the value of transactions locked via InstantSend in the wallet\'s balance.\n4. include_watchonly (bool, optional, default=false) Also include balance in watch-only addresses (see \'importaddress\')\n\nResult:\namount              (numeric) The total amount in PAC received for this account.\n\nExamples:\n\nThe total amount in the wallet with 1 or more confirmations\n> pacprotocol-cli getbalance \n\nThe total amount in the wallet at least 6 blocks confirmed\n> pacprotocol-cli getbalance "*" 6\n\nAs a json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["*", 6] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);