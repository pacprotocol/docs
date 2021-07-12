(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8063:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:87},l={unversionedId:"pac-protocol-core/client-commands/importmulti",id:"pac-protocol-core/client-commands/importmulti",isDocsHomePage:!1,title:"importmulti",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/importmulti.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/importmulti",permalink:"/pac-protocol-core/client-commands/importmulti",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/importmulti.mdx",version:"current",sidebarPosition:87,frontMatter:{sidebar_position:87},sidebar:"coreSidebar",previous:{title:"importelectrumwallet",permalink:"/pac-protocol-core/client-commands/importelectrumwallet"},next:{title:"importprivkey",permalink:"/pac-protocol-core/client-commands/importprivkey"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>requests</code> <span class='asterisk'>*</span>",id:"requests-",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"command"},"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importmulti "requests" ( "options" )\n')),(0,a.kt)("p",null,"Import addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options). Requires a new wallet backup."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"requests-"},(0,a.kt)("inlineCode",{parentName:"h3"},"requests")," ",(0,a.kt)("span",{class:"asterisk"},"*")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(array, required)")),(0,a.kt)("p",null,"Data to be imported"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[     (array of json objects)\n    {\n    "scriptPubKey": "<script>" | { "address":"<address>" }, (string / json, required) Type of scriptPubKey (string for script, json for address)\n    "timestamp": timestamp | "now"                , (integer / string, required) Creation time of the key in seconds since epoch (Jan 1 1970 GMT),\n                                          or the string "now" to substitute the current synced blockchain time. The timestamp of the oldest\n                                          key will determine how far back blockchain rescans need to begin for missing wallet transactions.\n                                          "now" can be specified to bypass scanning, for keys which are known to never have been used, and\n                                          0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest key\n                                          creation time of all keys being imported by the importmulti call will be scanned.\n    "redeemscript": "<script>"                    , (string, optional) Allowed only if the scriptPubKey is a P2SH address or a P2SH scriptPubKey\n    "pubkeys": ["<pubKey>", ... ]                 , (array, optional) Array of strings giving pubkeys that must occur in the output or redeemscript\n    "keys": ["<key>", ... ]                     , (array, optional) Array of strings giving private keys whose corresponding public keys must occur in the output or redeemscript\n    "internal": <true>                        , (boolean, optional, default: false) Stating whether matching outputs should be treated as not incoming payments\n    "watchonly": <true>                         , (boolean, optional, default: false) Stating whether matching outputs should be considered watched even when they\'re not spendable, only allowed if keys are empty\n    "label": <label>                          , (string, optional, default: \'\') Label to assign to the address (aka account name, for now), only allowed with internal=false\n}\n  ,...\n]\n')),(0,a.kt)("h3",{id:"options"},(0,a.kt)("inlineCode",{parentName:"h3"},"options")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(json, optional)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "rescan": <false>,       (boolean, optional, default: true) Stating if should rescan the blockchain after all imports\n}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls"),(0,a.kt)("p",null,"may report that the imported keys, addresses or scripts exists but related transactions are still missing."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 }]\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }]\' \'{ "rescan": false}\'\n')),(0,a.kt)("p",null,"Response is an array with the same size as the input that has the execution result :"),(0,a.kt)("p",null,"  ",'[{ "success": true } , { "success": false, "error": { "code": -1, "message": "Internal Server Error"} }, ... ]'),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Running following help command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help importmulti\n")),(0,a.kt)("p",null,"Will produce following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'importmulti "requests" ( "options" )\n\nImport addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options). Requires a new wallet backup.\n\nArguments:\n1. requests     (array, required) Data to be imported\n  [     (array of json objects)\n    {\n      "scriptPubKey": "<script>" | { "address":"<address>" }, (string / json, required) Type of scriptPubKey (string for script, json for address)\n      "timestamp": timestamp | "now"                        , (integer / string, required) Creation time of the key in seconds since epoch (Jan 1 1970 GMT),\n                                                              or the string "now" to substitute the current synced blockchain time. The timestamp of the oldest\n                                                              key will determine how far back blockchain rescans need to begin for missing wallet transactions.\n                                                              "now" can be specified to bypass scanning, for keys which are known to never have been used, and\n                                                              0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest key\n                                                              creation time of all keys being imported by the importmulti call will be scanned.\n      "redeemscript": "<script>"                            , (string, optional) Allowed only if the scriptPubKey is a P2SH address or a P2SH scriptPubKey\n      "pubkeys": ["<pubKey>", ... ]                         , (array, optional) Array of strings giving pubkeys that must occur in the output or redeemscript\n      "keys": ["<key>", ... ]                               , (array, optional) Array of strings giving private keys whose corresponding public keys must occur in the output or redeemscript\n      "internal": <true>                                    , (boolean, optional, default: false) Stating whether matching outputs should be treated as not incoming payments\n      "watchonly": <true>                                   , (boolean, optional, default: false) Stating whether matching outputs should be considered watched even when they\'re not spendable, only allowed if keys are empty\n      "label": <label>                                      , (string, optional, default: \'\') Label to assign to the address (aka account name, for now), only allowed with internal=false\n    }\n  ,...\n  ]\n2. options                 (json, optional)\n  {\n     "rescan": <false>,         (boolean, optional, default: true) Stating if should rescan the blockchain after all imports\n  }\n\nNote: This call can take over an hour to complete if rescan is true, during that time, other rpc calls\nmay report that the imported keys, addresses or scripts exists but related transactions are still missing.\n\nExamples:\n> pacprotocol-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }, { "scriptPubKey": { "address": "<my 2nd address>" }, "label": "example 2", "timestamp": 1455191480 }]\'\n> pacprotocol-cli importmulti \'[{ "scriptPubKey": { "address": "<my address>" }, "timestamp":1455191478 }]\' \'{ "rescan": false}\'\n\nResponse is an array with the same size as the input that has the execution result :\n  [{ "success": true } , { "success": false, "error": { "code": -1, "message": "Internal Server Error"} }, ... ]\n\n')))}u.isMDXComponent=!0}}]);