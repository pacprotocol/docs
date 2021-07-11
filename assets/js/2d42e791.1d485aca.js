(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7005],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),l={sidebar_position:86},s={unversionedId:"core/developers/pac-protocol-core/client-commands/setban",id:"core/developers/pac-protocol-core/client-commands/setban",isDocsHomePage:!1,title:"setban",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/setban.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/setban",permalink:"/docs/core/developers/pac-protocol-core/client-commands/setban",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/setban.mdx",version:"current",sidebarPosition:86,frontMatter:{sidebar_position:86},sidebar:"coreSidebar",previous:{title:"ping",permalink:"/docs/core/developers/pac-protocol-core/client-commands/ping"},next:{title:"setnetworkactive",permalink:"/docs/core/developers/pac-protocol-core/client-commands/setnetworkactive"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>subnet</code> <span class='asterisk'>*</span>",id:"subnet-",children:[]},{value:"<code>command</code> <span class='asterisk'>*</span>",id:"command-",children:[]},{value:"<code>bantime</code>",id:"bantime",children:[]},{value:"<code>absolute</code>",id:"absolute",children:[]}]},{value:"Examples",id:"examples",children:[]}],i={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli setban "subnet" "add|remove" (bantime) (absolute)\n')),(0,r.kt)("p",null,"Attempts to add or remove an IP/Subnet from the banned list."),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"subnet-"},(0,r.kt)("inlineCode",{parentName:"h3"},"subnet")," ",(0,r.kt)("span",{class:"asterisk"},"*")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, required)")),(0,r.kt)("p",null,"The IP/Subnet (see getpeerinfo for nodes IP) with an optional netmask (default is /32 = single IP)"),(0,r.kt)("h3",{id:"command-"},(0,r.kt)("inlineCode",{parentName:"h3"},"command")," ",(0,r.kt)("span",{class:"asterisk"},"*")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, required)")),(0,r.kt)("p",null,"'add' to add an IP/Subnet to the list, 'remove' to remove an IP/Subnet from the list"),(0,r.kt)("h3",{id:"bantime"},(0,r.kt)("inlineCode",{parentName:"h3"},"bantime")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(numeric, optional)")),(0,r.kt)("p",null,"time in seconds how long (or until when if  is set) the IP is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[absolute]\n")),(0,r.kt)("h3",{id:"absolute"},(0,r.kt)("inlineCode",{parentName:"h3"},"absolute")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(boolean, optional)")),(0,r.kt)("p",null,"If set, the bantime must be an absolute timestamp in seconds since epoch (Jan 1 1970 GMT)"),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli setban "192.168.0.6" "add" 86400\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli setban "192.168.0.0/24" "add"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "setban", "params": ["192.168.0.6", "add", 86400] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help setban\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'setban "subnet" "add|remove" (bantime) (absolute)\n\nAttempts to add or remove an IP/Subnet from the banned list.\n\nArguments:\n1. "subnet"       (string, required) The IP/Subnet (see getpeerinfo for nodes IP) with an optional netmask (default is /32 = single IP)\n2. "command"      (string, required) \'add\' to add an IP/Subnet to the list, \'remove\' to remove an IP/Subnet from the list\n3. "bantime"      (numeric, optional) time in seconds how long (or until when if [absolute] is set) the IP is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument)\n4. "absolute"     (boolean, optional) If set, the bantime must be an absolute timestamp in seconds since epoch (Jan 1 1970 GMT)\n\nExamples:\n> pacglobal-cli setban "192.168.0.6" "add" 86400\n> pacglobal-cli setban "192.168.0.0/24" "add"\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "setban", "params": ["192.168.0.6", "add", 86400] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);