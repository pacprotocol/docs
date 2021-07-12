(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2281],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(b,c(c({ref:n},s),{},{components:t})):r.createElement(b,c({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2311:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),c=["components"],l={sidebar_position:97},i={unversionedId:"pac-protocol-core/client-commands/listbanned",id:"pac-protocol-core/client-commands/listbanned",isDocsHomePage:!1,title:"listbanned",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/listbanned.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/listbanned",permalink:"/pac-protocol-core/client-commands/listbanned",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/listbanned.mdx",version:"current",sidebarPosition:97,frontMatter:{sidebar_position:97},sidebar:"coreSidebar",previous:{title:"listaddressgroupings",permalink:"/pac-protocol-core/client-commands/listaddressgroupings"},next:{title:"listlabels",permalink:"/pac-protocol-core/client-commands/listlabels"}},p=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listbanned\n")),(0,a.kt)("p",null,"List all banned IPs/Subnets."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli listbanned \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listbanned", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help listbanned\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'listbanned\n\nList all banned IPs/Subnets.\n\nExamples:\n> pacprotocol-cli listbanned \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "listbanned", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);