(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8111],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(t),u=o,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7746:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:65},c={unversionedId:"pac-protocol-core/client-commands/getpeerinfo",id:"pac-protocol-core/client-commands/getpeerinfo",isDocsHomePage:!1,title:"getpeerinfo",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/getpeerinfo.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/getpeerinfo",permalink:"/pac-protocol-core/client-commands/getpeerinfo",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/getpeerinfo.mdx",version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65},sidebar:"coreSidebar",previous:{title:"getnewaddress",permalink:"/pac-protocol-core/client-commands/getnewaddress"},next:{title:"getpoolinfo",permalink:"/pac-protocol-core/client-commands/getpoolinfo"}},l=[{value:"Command",id:"command",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getpeerinfo\n")),(0,a.kt)("p",null,"Returns data about each connected network node as a json array of objects."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli getpeerinfo \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getpeerinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[\n  {\n    "id": n,                   #(numeric) Peer index\n    "addr":"host:port",      #(string) The IP address and port of the peer\n    "addrbind":"ip:port",    #(string) Bind address of the connection to the peer\n    "addrlocal":"ip:port",   #(string) Local address as reported by the peer\n    "services":"xxxxxxxxxxxxxxxx",   #(string) The services offered\n    "verified_proregtx_hash": h, #(hex) Only present when the peer is a masternode and succesfully\n                               authenticated via MNAUTH. In this case, this field contains the\n                               protx hash of the masternode\n    "verified_pubkey_hash":   h, #(hex) Only present when the peer is a masternode and succesfully\n                               authenticated via MNAUTH. In this case, this field contains the\n                               hash of the masternode\'s operator public key\n    "relaytxes":true|false,    #(boolean) Whether peer has asked us to relay transactions to it\n    "lastsend": ttt,           #(numeric) The time in seconds since epoch #(Jan 1 1970 GMT) of the last send\n    "lastrecv": ttt,           #(numeric) The time in seconds since epoch #(Jan 1 1970 GMT) of the last receive\n    "bytessent": n,            #(numeric) The total bytes sent\n    "bytesrecv": n,            #(numeric) The total bytes received\n    "conntime": ttt,           #(numeric) The connection time in seconds since epoch #(Jan 1 1970 GMT)\n    "timeoffset": ttt,         #(numeric) The time offset in seconds\n    "pingtime": n,             #(numeric) ping time #(if available)\n    "minping": n,              #(numeric) minimum observed ping time #(if any at all)\n    "pingwait": n,             #(numeric) ping wait #(if non-zero)\n    "version": v,              #(numeric) The peer version, such as 70001\n    "subver": "/pacprotocol:x.x.x/",  #(string) The string version\n    "inbound": true|false,     #(boolean) Inbound #(true) or Outbound #(false)\n    "addnode": true|false,     #(boolean) Whether connection was due to addnode/-connect or if it was an automatic/inbound connection\n    "masternode": true|false,  #(boolean) Whether connection was due to masternode connection attempt\n    "startingheight": n,       #(numeric) The starting height #(block) of the peer\n    "banscore": n,             #(numeric) The ban score\n    "synced_headers": n,       #(numeric) The last header we have in common with this peer\n    "synced_blocks": n,        #(numeric) The last block we have in common with this peer\n    "inflight": [\n       n,                        #(numeric) The heights of blocks we\'re currently asking from this peer\n       ...\n    ],\n    "whitelisted": true|false, #(boolean) Whether the peer is whitelisted\n    "bytessent_per_msg": {\n       "addr": n,              #(numeric) The total bytes sent aggregated by message type\n       ...\n    },\n    "bytesrecv_per_msg": {\n       "addr": n,              #(numeric) The total bytes received aggregated by message type\n       ...\n    }\n  }\n  ,...\n]\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help getpeerinfo\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'getpeerinfo\n\nReturns data about each connected network node as a json array of objects.\n\nResult:\n[\n  {\n    "id": n,                   (numeric) Peer index\n    "addr":"host:port",      (string) The IP address and port of the peer\n    "addrbind":"ip:port",    (string) Bind address of the connection to the peer\n    "addrlocal":"ip:port",   (string) Local address as reported by the peer\n    "services":"xxxxxxxxxxxxxxxx",   (string) The services offered\n    "verified_proregtx_hash": h, (hex) Only present when the peer is a masternode and succesfully\n                               authenticated via MNAUTH. In this case, this field contains the\n                               protx hash of the masternode\n    "verified_pubkey_hash":   h, (hex) Only present when the peer is a masternode and succesfully\n                               authenticated via MNAUTH. In this case, this field contains the\n                               hash of the masternode\'s operator public key\n    "relaytxes":true|false,    (boolean) Whether peer has asked us to relay transactions to it\n    "lastsend": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last send\n    "lastrecv": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last receive\n    "bytessent": n,            (numeric) The total bytes sent\n    "bytesrecv": n,            (numeric) The total bytes received\n    "conntime": ttt,           (numeric) The connection time in seconds since epoch (Jan 1 1970 GMT)\n    "timeoffset": ttt,         (numeric) The time offset in seconds\n    "pingtime": n,             (numeric) ping time (if available)\n    "minping": n,              (numeric) minimum observed ping time (if any at all)\n    "pingwait": n,             (numeric) ping wait (if non-zero)\n    "version": v,              (numeric) The peer version, such as 70001\n    "subver": "/pacprotocol:x.x.x/",  (string) The string version\n    "inbound": true|false,     (boolean) Inbound (true) or Outbound (false)\n    "addnode": true|false,     (boolean) Whether connection was due to addnode/-connect or if it was an automatic/inbound connection\n    "masternode": true|false,  (boolean) Whether connection was due to masternode connection attempt\n    "startingheight": n,       (numeric) The starting height (block) of the peer\n    "banscore": n,             (numeric) The ban score\n    "synced_headers": n,       (numeric) The last header we have in common with this peer\n    "synced_blocks": n,        (numeric) The last block we have in common with this peer\n    "inflight": [\n       n,                        (numeric) The heights of blocks we\'re currently asking from this peer\n       ...\n    ],\n    "whitelisted": true|false, (boolean) Whether the peer is whitelisted\n    "bytessent_per_msg": {\n       "addr": n,              (numeric) The total bytes sent aggregated by message type\n       ...\n    },\n    "bytesrecv_per_msg": {\n       "addr": n,              (numeric) The total bytes received aggregated by message type\n       ...\n    }\n  }\n  ,...\n]\n\nExamples:\n> pacprotocol-cli getpeerinfo \n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "getpeerinfo", "params": [] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);