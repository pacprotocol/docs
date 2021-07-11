(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2562],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5864:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c={sidebar_position:90},i={unversionedId:"core/developers/pac-protocol-core/client-commands/combinerawtransaction",id:"core/developers/pac-protocol-core/client-commands/combinerawtransaction",isDocsHomePage:!1,title:"combinerawtransaction",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/combinerawtransaction.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/combinerawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/combinerawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/combinerawtransaction.mdx",version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"coreSidebar",previous:{title:"setnetworkactive",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/setnetworkactive"},next:{title:"createrawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/createrawtransaction"}},s=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>txs</code>",id:"txs",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli combinerawtransaction ["hexstring",...]\n')),(0,a.kt)("p",null,"Combine multiple partially signed transactions into one transaction.\nThe combined transaction may be another partially signed transaction or a\nfully signed transaction."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"txs"},(0,a.kt)("inlineCode",{parentName:"h3"},"txs")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string)")),(0,a.kt)("p",null,"A json array of hex strings of partially signed transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "hexstring"     (string) A transaction hash\n    ,...\n]\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli combinerawtransaction \'["myhex1", "myhex2", "myhex3"]\'\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'"hex"            #(string) The hex-encoded raw transaction with signature#(s)\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help combinerawtransaction\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'combinerawtransaction ["hexstring",...]\n\nCombine multiple partially signed transactions into one transaction.\nThe combined transaction may be another partially signed transaction or a \nfully signed transaction.\nArguments:\n1. "txs"         (string) A json array of hex strings of partially signed transactions\n    [\n      "hexstring"     (string) A transaction hash\n      ,...\n    ]\n\nResult:\n"hex"            (string) The hex-encoded raw transaction with signature(s)\n\nExamples:\n> pacglobal-cli combinerawtransaction \'["myhex1", "myhex2", "myhex3"]\'\n\n')))}p.isMDXComponent=!0}}]);