(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[4150],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||i[m]||o;return r?t.createElement(f,c(c({ref:n},p),{},{components:r})):t.createElement(f,c({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var d=2;d<o;d++)c[d]=r[d];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5874:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),c={sidebar_position:2},s={unversionedId:"core/developers/pac-protocol-core/client-commands/getaddressbalance",id:"core/developers/pac-protocol-core/client-commands/getaddressbalance",isDocsHomePage:!1,title:"getaddressbalance",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getaddressbalance.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getaddressbalance",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getaddressbalance",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getaddressbalance.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"coreSidebar",previous:{title:"Client Options (pacprotocol-cli)",permalink:"/de/docs/core/developers/pac-protocol-core/client-options"},next:{title:"getaddressdeltas",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getaddressdeltas"}},l=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],d={toc:l};function p(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getaddressbalance\n")),(0,o.kt)("p",null,"Returns the balance for an address(es) (requires addressindex to be enabled)."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli getaddressbalance \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "balance"  #(string) The current balance in duffs\n  "received"  #(string) The total number of duffs received #(including change)\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getaddressbalance\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'getaddressbalance\n\nReturns the balance for an address(es) (requires addressindex to be enabled).\n\nArguments:\n{\n  "addresses"\n    [\n      "address"  (string) The base58check encoded address\n      ,...\n    ]\n}\n\nResult:\n{\n  "balance"  (string) The current balance in duffs\n  "received"  (string) The total number of duffs received (including change)\n}\n\nExamples:\n> pacglobal-cli getaddressbalance \'{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}\'\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getaddressbalance", "params": [{"addresses": ["XwnLY9Tf7Zsef8gMGL2fhWA9ZmMjt4KPwg"]}] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);