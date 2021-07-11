(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9916:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l={sidebar_position:53},i={unversionedId:"core/developers/pac-protocol-core/client-commands/masternodelist",id:"core/developers/pac-protocol-core/client-commands/masternodelist",isDocsHomePage:!1,title:"masternodelist",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/masternodelist.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/masternodelist",permalink:"/docs/core/developers/pac-protocol-core/client-commands/masternodelist",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/masternodelist.mdx",version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53},sidebar:"coreSidebar",previous:{title:"masternode",permalink:"/docs/core/developers/pac-protocol-core/client-commands/masternode"},next:{title:"mnsync",permalink:"/docs/core/developers/pac-protocol-core/client-commands/mnsync"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>filter</code>",id:"filter",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli masternodelist ( "mode" "filter" )\n')),(0,a.kt)("p",null,'masternodelist ( "mode" "filter" )\nGet a list of masternodes in different modes. This call is identical to \'masternode list\' call.'),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, optional/required to use filter, defaults = json)")),(0,a.kt)("p",null,"The mode to run list in"),(0,a.kt)("h3",{id:"filter"},(0,a.kt)("inlineCode",{parentName:"h3"},"filter")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, optional)")),(0,a.kt)("p",null,"Filter results. Partial match by outpoint by default in all modes,\nadditional matches in some modes are also available"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help masternodelist\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'masternodelist ( "mode" "filter" )\nGet a list of masternodes in different modes. This call is identical to \'masternode list\' call.\n\nArguments:\n1. "mode"      (string, optional/required to use filter, defaults = json) The mode to run list in\n2. "filter"    (string, optional) Filter results. Partial match by outpoint by default in all modes,\n                                    additional matches in some modes are also available\n\nAvailable modes:\n  addr             - Print ip address associated with a masternode (can be additionally filtered, partial match)\n  full             - Print info in format \'status payee lastpaidtime lastpaidblock nextpaymentblock IP\'\n                     (can be additionally filtered, partial match)\n  info             - Print info in format \'status payee IP\'\n                     (can be additionally filtered, partial match)\n  json             - Print info in JSON format (can be additionally filtered, partial match)\n  lastpaidblock    - Print the last block height a node was paid on the network\n  nextpaymentblock - Print the projected block height a node will likely be paid on the network\n                     (not guarenteed results as a POSE_BANNED state occuring later would prevent payment)\n  lastpaidtime     - Print the last time a node was paid on the network\n  owneraddress     - Print the masternode owner PACGlobal address\n  payee            - Print the masternode payout PACGlobal address (can be additionally filtered,\n                     partial match)\n  pubKeyOperator   - Print the masternode operator public key\n  status           - Print masternode status: ENABLED / POSE_BANNED\n                     (can be additionally filtered, partial match)\n  votingaddress    - Print the masternode voting PACGlobal address\n\n')))}d.isMDXComponent=!0}}]);