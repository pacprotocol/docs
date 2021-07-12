(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2630],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||s;return n?r.createElement(g,o(o({ref:t},i),{},{components:n})):r.createElement(g,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7314:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o=["components"],c={sidebar_position:30},d={unversionedId:"pac-protocol-core/client-commands/getaddressdeltas",id:"pac-protocol-core/client-commands/getaddressdeltas",isDocsHomePage:!1,title:"getaddressdeltas",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getaddressdeltas.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getaddressdeltas",permalink:"/pac-protocol-core/client-commands/getaddressdeltas",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getaddressdeltas.mdx",version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"coreSidebar",previous:{title:"getaddressbyaccount",permalink:"/pac-protocol-core/client-commands/getaddressbyaccount"},next:{title:"getaddressesbylabel",permalink:"/pac-protocol-core/client-commands/getaddressesbylabel"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],i={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"command"},"Command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getaddressdeltas\n")),(0,s.kt)("p",null,"Returns all changes for an address (requires addressindex to be enabled)."),(0,s.kt)("h2",{id:"arguments"},"Arguments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n  "start" (number) The start block height\n  "end" (number) The end block height\n}\n')),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getaddressdeltas \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressdeltas", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,s.kt)("h2",{id:"result"},"Result"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "satoshis"  #(number) The difference of duffs\n    "txid"  #(string) The related txid\n    "index"  #(number) The related input or output index\n    "blockindex"  #(number) The related block index\n    "height"  #(number) The block height\n    "address"  #(string) The base58check encoded address\n  }\n]\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Running following help command"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getaddressdeltas\n")),(0,s.kt)("p",null,"Will produce following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'getaddressdeltas\n\nReturns all changes for an address (requires addressindex to be enabled).\n\nArguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n  "start" (number) The start block height\n  "end" (number) The end block height\n}\n\nResult:\n[\n  {\n    "satoshis"  (number) The difference of duffs\n    "txid"  (string) The related txid\n    "index"  (number) The related input or output index\n    "blockindex"  (number) The related block index\n    "height"  (number) The block height\n    "address"  (string) The base58check encoded address\n  }\n]\n\nExamples:\n> pacprotocol-cli getaddressdeltas \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressdeltas", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);