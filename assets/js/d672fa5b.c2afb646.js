(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[4226],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(f,c(c({ref:n},m),{},{components:t})):o.createElement(f,c({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6317:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return i},default:function(){return m}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),c={sidebar_position:41},l={unversionedId:"core/developers/pac-protocol-core/client-commands/getmemoryinfo",id:"core/developers/pac-protocol-core/client-commands/getmemoryinfo",isDocsHomePage:!1,title:"getmemoryinfo",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/getmemoryinfo.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/getmemoryinfo",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getmemoryinfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/getmemoryinfo.mdx",version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41},sidebar:"coreSidebar",previous:{title:"getinfo",permalink:"/docs/core/developers/pac-protocol-core/client-commands/getinfo"},next:{title:"help",permalink:"/docs/core/developers/pac-protocol-core/client-commands/help"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>mode</code>",id:"mode",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],s={toc:i};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli getmemoryinfo ("mode")\n')),(0,a.kt)("p",null,'getmemoryinfo ("mode")\nReturns an object containing information about memory usage.'),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'(string, optional, default: "stats")')),(0,a.kt)("p",null,"Determines what kind of information is returned."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"stats" returns general statistics about memory usage in the daemon.'),(0,a.kt)("li",{parentName:"ul"},'"mallocinfo" returns an XML string describing low-level heap state (only available if compiled with glibc 2.10+).')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacglobal-cli getmemoryinfo \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmemoryinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Result #(mode "stats"):\n{\n  "locked": {               #(json object) Information about locked memory manager\n    "used": xxxxx,          #(numeric) Number of bytes used\n    "free": xxxxx,          #(numeric) Number of bytes available in current arenas\n    "total": xxxxxxx,       #(numeric) Total number of bytes managed\n    "locked": xxxxxx,       #(numeric) Amount of bytes that succeeded locking. If this number is smaller than total, locking pages failed at some point and key data could be swapped to disk.\n    "chunks_used": xxxxx,   #(numeric) Number allocated chunks\n    "chunks_free": xxxxx,   #(numeric) Number unused chunks\n  }\n}\n\nResult #(mode "mallocinfo"):\n"&lt;malloc version="1"&gt;..."\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getmemoryinfo\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getmemoryinfo ("mode")\nReturns an object containing information about memory usage.\n\nArguments:\n1. "mode"     (string, optional, default: "stats") Determines what kind of information is returned.\n  - "stats" returns general statistics about memory usage in the daemon.\n  - "mallocinfo" returns an XML string describing low-level heap state (only available if compiled with glibc 2.10+).\n\nResult (mode "stats"):\n{\n  "locked": {               (json object) Information about locked memory manager\n    "used": xxxxx,          (numeric) Number of bytes used\n    "free": xxxxx,          (numeric) Number of bytes available in current arenas\n    "total": xxxxxxx,       (numeric) Total number of bytes managed\n    "locked": xxxxxx,       (numeric) Amount of bytes that succeeded locking. If this number is smaller than total, locking pages failed at some point and key data could be swapped to disk.\n    "chunks_used": xxxxx,   (numeric) Number allocated chunks\n    "chunks_free": xxxxx,   (numeric) Number unused chunks\n  }\n}\n\nResult (mode "mallocinfo"):\n"<malloc version="1">..."\n\nExamples:\n> pacglobal-cli getmemoryinfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getmemoryinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}m.isMDXComponent=!0}}]);