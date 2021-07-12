(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6658],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return x},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},x=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,x=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?t.createElement(d,a(a({ref:n},x),{},{components:r})):t.createElement(d,a({ref:n},x))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9388:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:63},c={unversionedId:"pac-protocol-core/client-commands/getnetworkinfo",id:"pac-protocol-core/client-commands/getnetworkinfo",isDocsHomePage:!1,title:"getnetworkinfo",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getnetworkinfo.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getnetworkinfo",permalink:"/pac-protocol-core/client-commands/getnetworkinfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getnetworkinfo.mdx",version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63},sidebar:"coreSidebar",previous:{title:"getnetworkhashps",permalink:"/pac-protocol-core/client-commands/getnetworkhashps"},next:{title:"getnewaddress",permalink:"/pac-protocol-core/client-commands/getnewaddress"}},l=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],x={toc:l};function p(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},x,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getnetworkinfo\n")),(0,i.kt)("p",null,"getnetworkinfo\nReturns an object containing various state info regarding P2P networking."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getnetworkinfo \n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,i.kt)("h2",{id:"result"},"Result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": xxxxx,                      #(numeric) the server version\n  "buildversion": "x.x.x.x-xxx",       #(string) the server build version including RC info or commit as relevant\n  "subversion": "/pacprotocol:x.x.x/", #(string) the server subversion string\n  "protocolversion": xxxxx,              #(numeric) the protocol version\n  "localservices": "xxxxxxxxxxxxxxxx", #(string) the services we offer to the network\n  "localrelay": true|false,              #(bool) true if transaction relay is requested from peers\n  "timeoffset": xxxxx,                   #(numeric) the time offset\n  "connections": xxxxx,                  #(numeric) the number of connections\n  "networkactive": true|false,           #(bool) whether p2p networking is enabled\n  "socketevents": "xxx/",              #(string) the socket events mode, either kqueue, epoll, poll or select\n  "networks": [                          #(array) information per network\n  {\n    "name": "xxx",                     #(string) network #(ipv4, ipv6 or onion)\n    "limited": true|false,               #(boolean) is the network limited using -onlynet?\n    "reachable": true|false,             #(boolean) is the network reachable?\n    "proxy": "host:port"               #(string) the proxy that is used for this network, or empty if none\n    "proxy_randomize_credentials": true|false,  #(string) Whether randomized credentials are used\n  }\n  ,...\n  ],\n  "relayfee": x.xxxxxxxx,                #(numeric) minimum relay fee for transactions in PAC/kB\n  "incrementalfee": x.xxxxxxxx,          #(numeric) minimum fee increment for mempool limiting in PAC/kB\n  "localaddresses": [                    #(array) list of local addresses\n  {\n    "address": "xxxx",                 #(string) network address\n    "port": xxx,                         #(numeric) network port\n    "score": xxx                         #(numeric) relative score\n  }\n  ,...\n  ]\n  "warnings": "..."                    #(string) any network and blockchain warnings\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Running following help command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getnetworkinfo\n")),(0,i.kt)("p",null,"Will produce following output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'getnetworkinfo\nReturns an object containing various state info regarding P2P networking.\n\nResult:\n{\n  "version": xxxxx,                      (numeric) the server version\n  "buildversion": "x.x.x.x-xxx",       (string) the server build version including RC info or commit as relevant\n  "subversion": "/pacprotocol:x.x.x/", (string) the server subversion string\n  "protocolversion": xxxxx,              (numeric) the protocol version\n  "localservices": "xxxxxxxxxxxxxxxx", (string) the services we offer to the network\n  "localrelay": true|false,              (bool) true if transaction relay is requested from peers\n  "timeoffset": xxxxx,                   (numeric) the time offset\n  "connections": xxxxx,                  (numeric) the number of connections\n  "networkactive": true|false,           (bool) whether p2p networking is enabled\n  "socketevents": "xxx/",              (string) the socket events mode, either kqueue, epoll, poll or select\n  "networks": [                          (array) information per network\n  {\n    "name": "xxx",                     (string) network (ipv4, ipv6 or onion)\n    "limited": true|false,               (boolean) is the network limited using -onlynet?\n    "reachable": true|false,             (boolean) is the network reachable?\n    "proxy": "host:port"               (string) the proxy that is used for this network, or empty if none\n    "proxy_randomize_credentials": true|false,  (string) Whether randomized credentials are used\n  }\n  ,...\n  ],\n  "relayfee": x.xxxxxxxx,                (numeric) minimum relay fee for transactions in PAC/kB\n  "incrementalfee": x.xxxxxxxx,          (numeric) minimum fee increment for mempool limiting in PAC/kB\n  "localaddresses": [                    (array) list of local addresses\n  {\n    "address": "xxxx",                 (string) network address\n    "port": xxx,                         (numeric) network port\n    "score": xxx                         (numeric) relative score\n  }\n  ,...\n  ]\n  "warnings": "..."                    (string) any network and blockchain warnings\n}\n\nExamples:\n> pacprotocol-cli getnetworkinfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getnetworkinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}p.isMDXComponent=!0}}]);