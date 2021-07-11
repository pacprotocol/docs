(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[4901],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8517:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:22},c="fundrawtransaction",l={unversionedId:"developers/pac-protocol-core/client-commands/fundrawtransaction",id:"developers/pac-protocol-core/client-commands/fundrawtransaction",isDocsHomePage:!1,title:"fundrawtransaction",description:"Command",source:"@site/docs/developers/pac-protocol-core/client-commands/fundrawtransaction.mdx",sourceDirName:"developers/pac-protocol-core/client-commands",slug:"/developers/pac-protocol-core/client-commands/fundrawtransaction",permalink:"/developers/pac-protocol-core/client-commands/fundrawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/developers/pac-protocol-core/client-commands/fundrawtransaction.mdx",version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"coreSidebar",previous:{title:"estimatesmartfee",permalink:"/developers/pac-protocol-core/client-commands/estimatesmartfee"},next:{title:"generate",permalink:"/developers/pac-protocol-core/client-commands/generate"}},u=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hexstring</code> <span class='asterisk'>*</span>",id:"hexstring-",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fundrawtransaction"},"fundrawtransaction"),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli fundrawtransaction "hexstring" ( options )\n')),(0,r.kt)("p",null,'Add inputs to a transaction until it has enough in value to meet its out value.\nThis will not modify existing inputs, and will add at most one change output to the outputs.\nNo existing outputs will be modified unless "subtractFeeFromOutputs" is specified.\nNote that inputs which were signed may need to be resigned after completion since in/outputs have been added.\nThe inputs added will not be signed, use signrawtransaction for that.\nNote that all existing inputs must have their previous output transaction be in the wallet.\nNote that all inputs selected must be of standard form and P2SH scripts must be\nin the wallet using importaddress or addmultisigaddress (to calculate fees).\nYou can see whether this is the case by checking the "solvable" field in the listunspent output.\nOnly pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only'),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"hexstring-"},(0,r.kt)("inlineCode",{parentName:"h3"},"hexstring")," ",(0,r.kt)("span",{class:"asterisk"},"*")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, required)")),(0,r.kt)("p",null,"The hex string of the raw transaction"),(0,r.kt)("h3",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h3"},"options")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(object, optional)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "changeAddress"        (string, optional, default pool address) The PAC address to receive the change\n     "changePosition"       (numeric, optional, default random) The index of the change output\n     "includeWatching"      (boolean, optional, default false) Also select inputs which are watch only\n     "lockUnspents"         (boolean, optional, default false) Lock selected unspent outputs\n     "feeRate"            (numeric, optional, default not set: makes wallet determine the fee) Set a specific fee rate in PAC/kB\n     "subtractFeeFromOutputs" (array, optional) A json array of integers.\n                    The fee will be equally deducted from the amount of each specified output.\n                    The outputs are specified by their zero-based index, before any change output is added.\n                    Those recipients will receive less pacprotocol than you enter in their corresponding amount field.\n                    If no outputs are specified here, the sender pays the fee.\n                        [vout_index,...]\n     "conf_target"        (numeric, optional) Confirmation target (in blocks)\n     "estimate_mode"        (string, optional, default=UNSET) The fee estimate mode, must be one of:\n       "UNSET"\n       "ECONOMICAL"\n       "CONSERVATIVE"\n}\n                 for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create a transaction with no inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli createrawtransaction "[]" "{\\"myaddress\\":0.01}"\n')),(0,r.kt)("p",null,"Add sufficient unsigned inputs to meet the output value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli fundrawtransaction "rawtransactionhex"\n')),(0,r.kt)("p",null,"Sign the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli signrawtransaction "fundedtransactionhex"\n')),(0,r.kt)("p",null,"Send the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli sendrawtransaction "signedtransactionhex"\n')),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hex":       "value", #(string)  The resulting raw transaction #(hex-encoded string)\n  "fee":       n,         #(numeric) Fee in PAC the resulting transaction pays\n  "changepos": n          #(numeric) The position of the added change output, or -1\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help fundrawtransaction\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'fundrawtransaction "hexstring" ( options )\n\nAdd inputs to a transaction until it has enough in value to meet its out value.\nThis will not modify existing inputs, and will add at most one change output to the outputs.\nNo existing outputs will be modified unless "subtractFeeFromOutputs" is specified.\nNote that inputs which were signed may need to be resigned after completion since in/outputs have been added.\nThe inputs added will not be signed, use signrawtransaction for that.\nNote that all existing inputs must have their previous output transaction be in the wallet.\nNote that all inputs selected must be of standard form and P2SH scripts must be\nin the wallet using importaddress or addmultisigaddress (to calculate fees).\nYou can see whether this is the case by checking the "solvable" field in the listunspent output.\nOnly pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only\n\nArguments:\n1. "hexstring"           (string, required) The hex string of the raw transaction\n2. options                 (object, optional)\n   {\n     "changeAddress"          (string, optional, default pool address) The PAC address to receive the change\n     "changePosition"         (numeric, optional, default random) The index of the change output\n     "includeWatching"        (boolean, optional, default false) Also select inputs which are watch only\n     "lockUnspents"           (boolean, optional, default false) Lock selected unspent outputs\n     "feeRate"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific fee rate in PAC/kB\n     "subtractFeeFromOutputs" (array, optional) A json array of integers.\n                              The fee will be equally deducted from the amount of each specified output.\n                              The outputs are specified by their zero-based index, before any change output is added.\n                              Those recipients will receive less pacprotocol than you enter in their corresponding amount field.\n                              If no outputs are specified here, the sender pays the fee.\n                                  [vout_index,...]\n     "conf_target"            (numeric, optional) Confirmation target (in blocks)\n     "estimate_mode"          (string, optional, default=UNSET) The fee estimate mode, must be one of:\n         "UNSET"\n         "ECONOMICAL"\n         "CONSERVATIVE"\n   }\n                         for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}\n\nResult:\n{\n  "hex":       "value", (string)  The resulting raw transaction (hex-encoded string)\n  "fee":       n,         (numeric) Fee in PAC the resulting transaction pays\n  "changepos": n          (numeric) The position of the added change output, or -1\n}\n\nExamples:\n\nCreate a transaction with no inputs\n> pacprotocol-cli createrawtransaction "[]" "{\\"myaddress\\":0.01}"\n\nAdd sufficient unsigned inputs to meet the output value\n> pacprotocol-cli fundrawtransaction "rawtransactionhex"\n\nSign the transaction\n> pacprotocol-cli signrawtransaction "fundedtransactionhex"\n\nSend the transaction\n> pacprotocol-cli sendrawtransaction "signedtransactionhex"\n\n')))}d.isMDXComponent=!0}}]);