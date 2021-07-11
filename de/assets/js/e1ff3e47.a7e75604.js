(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5945],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(g,c(c({ref:t},p),{},{components:n})):o.createElement(g,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7694:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),c={sidebar_position:39},l={unversionedId:"core/developers/pac-protocol-core/client-commands/debug",id:"core/developers/pac-protocol-core/client-commands/debug",isDocsHomePage:!1,title:"debug",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/debug.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/debug",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/debug",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/debug.mdx",version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"coreSidebar",previous:{title:"verifytxoutproof",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/verifytxoutproof"},next:{title:"getinfo",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getinfo"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>category</code> <span class='asterisk'>*</span>",id:"category-",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:i};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli debug "category"\n')),(0,a.kt)("p",null,"debug \"category\"\nChange debug category on the fly. Specify single category or use '+' to specify many.\nThe valid debug categories are: net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb, chainlocks, gobject, instantsend, keepass, llmq, llmq-dkg, llmq-sigs, mnpayments, mnsync, privatesend, spork.\nlibevent logging is configured on startup and cannot be modified by this RPC during runtime.\nThere are also a few meta-categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"all", "1" and "" activate all categories at once;'),(0,a.kt)("li",{parentName:"ul"},'"pacglobal" activates all PACGlobal-specific categories at once;'),(0,a.kt)("li",{parentName:"ul"},'"none" (or "0") deactivates all categories at once.\nNote: If specified category doesn\'t match any of the above, no error is thrown.')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," If specified category doesn't match any of the above, no error is thrown."))),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"category-"},(0,a.kt)("inlineCode",{parentName:"h3"},"category")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(string, required)")),(0,a.kt)("p",null,"The name of the debug category to turn on."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli debug pacglobal\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "debug", "params": [pacglobal+net] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  result               #(string) "Debug mode: " followed by the specified category.\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help debug\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'debug "category"\nChange debug category on the fly. Specify single category or use \'+\' to specify many.\nThe valid debug categories are: net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb, chainlocks, gobject, instantsend, keepass, llmq, llmq-dkg, llmq-sigs, mnpayments, mnsync, privatesend, spork.\nlibevent logging is configured on startup and cannot be modified by this RPC during runtime.\nThere are also a few meta-categories:\n - "all", "1" and "" activate all categories at once;\n - "pacglobal" activates all PACGlobal-specific categories at once;\n - "none" (or "0") deactivates all categories at once.\nNote: If specified category doesn\'t match any of the above, no error is thrown.\n\nArguments:\n1. "category"          (string, required) The name of the debug category to turn on.\n\nResult:\n  result               (string) "Debug mode: " followed by the specified category.\n\nExamples:\n> pacglobal-cli debug pacglobal\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "debug", "params": [pacglobal+net] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);