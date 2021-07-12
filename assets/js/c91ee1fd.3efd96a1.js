(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2230],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,k=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4756:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},p={unversionedId:"pac-protocol-core/network-configuration",id:"pac-protocol-core/network-configuration",isDocsHomePage:!1,title:"Network Configuration",description:"Information",source:"@site/docs/pac-protocol-core/network-configuration.mdx",sourceDirName:"pac-protocol-core",slug:"/pac-protocol-core/network-configuration",permalink:"/pac-protocol-core/network-configuration",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/network-configuration.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"coreSidebar",previous:{title:"Swapfile (Optional)",permalink:"/pac-protocol-core/setting-up-swapfile"},next:{title:"Daemon Configuration",permalink:"/pac-protocol-core/daemon-options"}},c=[{value:"Information",id:"information",children:[]},{value:"Developer Information",id:"developer-information",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"information"},"Information"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Name"),": PAC Protocol",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Ticker Name"),": PAC",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Algorithm"),": PoSv3",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Block Movement"),": PoS",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Block Time"),": 2.5 Minutes average",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Block Max Size"),": 2 MB",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Max Supply"),": 50,000,000,000 PAC",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Masternode Collateral Confirmation"),": 1 Confirmation",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Masternode Collateral Amount"),": 500,000 PAC",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Masternode Reward Confirmation"),": 101 Confirmations",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Staking Minimum Amount"),": 250 PAC (unlocked)",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Staking Reward Confirmation"),": 101 Confirmations",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Max Decimal Places"),": 8 decimal places (1 PAC = 1.00000000 PAC)",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"developer-information"},"Developer Information"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wallet Port"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"7112"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Message Prefix"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"\\x19DarkCoin Signed Message:\\n"),(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Public Key Hash (HEX)"),": 37",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Script Hash (HEX)"),": 0A",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"WIF (HEX)"),": CC",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Extended Public Key (HEX)"),": 03DD3E31",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Extended Private Key (HEX)"),": 03DD3E5A",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Network Magic (HEX)"),": C8E5612C",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Protocol Minimum Version"),": 70221"))}s.isMDXComponent=!0}}]);