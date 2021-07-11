(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1559],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return d}});var o=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=o.createContext({}),u=function(e){var r=o.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=u(e.components);return o.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=t,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||c;return n?o.createElement(f,a(a({ref:r},l),{},{components:n})):o.createElement(f,a({ref:r},l))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7448:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s},default:function(){return l}});var o=n(2122),t=n(9756),c=(n(7294),n(3905)),a={sidebar_position:62},i={unversionedId:"core/developers/pac-protocol-core/client-commands/quorum",id:"core/developers/pac-protocol-core/client-commands/quorum",isDocsHomePage:!1,title:"quorum",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/quorum.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/quorum",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/quorum",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/quorum.mdx",version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62},sidebar:"coreSidebar",previous:{title:"protx",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/protx"},next:{title:"generate",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/generate"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>command</code> <span class='asterisk'>*</span>",id:"command-",children:[]}]}],u={toc:s};function l(e){var r=e.components,n=(0,t.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,o.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"command"},"Command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli quorum "command" ...\n')),(0,c.kt)("p",null,'quorum "command" ...\nSet of commands for quorums/LLMQs.\nTo get help on individual commands, use "help quorum command".'),(0,c.kt)("h2",{id:"arguments"},"Arguments"),(0,c.kt)("h3",{id:"command-"},(0,c.kt)("inlineCode",{parentName:"h3"},"command")," ",(0,c.kt)("span",{class:"asterisk"},"*")),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"(string, required)")),(0,c.kt)("p",null,"The command to execute"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Running following help command"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help quorum\n")),(0,c.kt)("p",null,"Will produce following output:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'quorum "command" ...\nSet of commands for quorums/LLMQs.\nTo get help on individual commands, use "help quorum command".\n\nArguments:\n1. "command"        (string, required) The command to execute\n\nAvailable commands:\n  list              - List of on-chain quorums\n  info              - Return information about a quorum\n  dkgsimerror       - Simulates DKG errors and malicious behavior\n  dkgstatus         - Return the status of the current DKG process\n  memberof          - Checks which quorums the given masternode is a member of\n  sign              - Threshold-sign a message\n  hasrecsig         - Test if a valid recovered signature is present\n  getrecsig         - Get a recovered signature\n  isconflicting     - Test if a conflict exists\n\n')))}l.isMDXComponent=!0}}]);