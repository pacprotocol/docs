(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[7785],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9579:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={sidebar_position:94},s={unversionedId:"core/developers/pac-protocol-core/client-commands/fundrawtransaction",id:"core/developers/pac-protocol-core/client-commands/fundrawtransaction",isDocsHomePage:!1,title:"fundrawtransaction",description:"Command",source:"@site/docs/core/developers/pac-protocol-core/client-commands/fundrawtransaction.mdx",sourceDirName:"core/developers/pac-protocol-core/client-commands",slug:"/core/developers/pac-protocol-core/client-commands/fundrawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/fundrawtransaction",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/pac-protocol-core/client-commands/fundrawtransaction.mdx",version:"current",sidebarPosition:94,frontMatter:{sidebar_position:94},sidebar:"coreSidebar",previous:{title:"decodescript",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/decodescript"},next:{title:"getrawtransaction",permalink:"/de/docs/core/developers/pac-protocol-core/client-commands/getrawtransaction"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>hexstring</code> <span class='asterisk'>*</span>",id:"hexstring-",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Result",id:"result",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli fundrawtransaction "hexstring" ( options )\n')),(0,r.kt)("p",null,'Add inputs to a transaction until it has enough in value to meet its out value.\nThis will not modify existing inputs, and will add at most one change output to the outputs.\nNo existing outputs will be modified unless "subtractFeeFromOutputs" is specified.\nNote that inputs which were signed may need to be resigned after completion since in/outputs have been added.\nThe inputs added will not be signed, use signrawtransaction for that.\nNote that all existing inputs must have their previous output transaction be in the wallet.\nNote that all inputs selected must be of standard form and P2SH scripts must be\nin the wallet using importaddress or addmultisigaddress (to calculate fees).\nYou can see whether this is the case by checking the "solvable" field in the listunspent output.\nOnly pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only'),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"hexstring-"},(0,r.kt)("inlineCode",{parentName:"h3"},"hexstring")," ",(0,r.kt)("span",{class:"asterisk"},"*")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(string, required)")),(0,r.kt)("p",null,"The hex string of the raw transaction"),(0,r.kt)("h3",{id:"options"},(0,r.kt)("inlineCode",{parentName:"h3"},"options")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(object, optional)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n     "changeAddress"        (string, optional, default pool address) The dash address to receive the change\n     "changePosition"       (numeric, optional, default random) The index of the change output\n     "includeWatching"      (boolean, optional, default false) Also select inputs which are watch only\n     "lockUnspents"         (boolean, optional, default false) Lock selected unspent outputs\n     "feeRate"            (numeric, optional, default not set: makes wallet determine the fee) Set a specific feerate (PAC per KB)\n     "subtractFeeFromOutputs" (array, optional) A json array of integers.\n                    The fee will be equally deducted from the amount of each specified output.\n                    The outputs are specified by their zero-based index, before any change output is added.\n                    Those recipients will receive less dash than you enter in their corresponding amount field.\n                    If no outputs are specified here, the sender pays the fee.\n                        [vout_index,...]\n     "conf_target"        (numeric, optional) Confirmation target (in blocks)\n     "estimate_mode"        (string, optional, default=UNSET) The fee estimate mode, must be one of:\n       "UNSET"\n       "ECONOMICAL"\n       "CONSERVATIVE"\n}\n                 for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Create a transaction with no inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli createrawtransaction "[]" "{\\"myaddress\\":0.01}"\n')),(0,r.kt)("p",null,"Add sufficient unsigned inputs to meet the output value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli fundrawtransaction "rawtransactionhex"\n')),(0,r.kt)("p",null,"Sign the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli signrawtransaction "fundedtransactionhex"\n')),(0,r.kt)("p",null,"Send the transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pacglobal-cli sendrawtransaction "signedtransactionhex"\n')),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hex":       "value", #(string)  The resulting raw transaction #(hex-encoded string)\n  "fee":       n,         #(numeric) Fee in PAC the resulting transaction pays\n  "changepos": n          #(numeric) The position of the added change output, or -1\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Running following help command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help fundrawtransaction\n")),(0,r.kt)("p",null,"Will produce following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'fundrawtransaction "hexstring" ( options )\n\nAdd inputs to a transaction until it has enough in value to meet its out value.\nThis will not modify existing inputs, and will add at most one change output to the outputs.\nNo existing outputs will be modified unless "subtractFeeFromOutputs" is specified.\nNote that inputs which were signed may need to be resigned after completion since in/outputs have been added.\nThe inputs added will not be signed, use signrawtransaction for that.\nNote that all existing inputs must have their previous output transaction be in the wallet.\nNote that all inputs selected must be of standard form and P2SH scripts must be\nin the wallet using importaddress or addmultisigaddress (to calculate fees).\nYou can see whether this is the case by checking the "solvable" field in the listunspent output.\nOnly pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only\n\nArguments:\n1. "hexstring"           (string, required) The hex string of the raw transaction\n2. options                 (object, optional)\n   {\n     "changeAddress"          (string, optional, default pool address) The dash address to receive the change\n     "changePosition"         (numeric, optional, default random) The index of the change output\n     "includeWatching"        (boolean, optional, default false) Also select inputs which are watch only\n     "lockUnspents"           (boolean, optional, default false) Lock selected unspent outputs\n     "feeRate"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific feerate (PAC per KB)\n     "subtractFeeFromOutputs" (array, optional) A json array of integers.\n                              The fee will be equally deducted from the amount of each specified output.\n                              The outputs are specified by their zero-based index, before any change output is added.\n                              Those recipients will receive less dash than you enter in their corresponding amount field.\n                              If no outputs are specified here, the sender pays the fee.\n                                  [vout_index,...]\n     "conf_target"            (numeric, optional) Confirmation target (in blocks)\n     "estimate_mode"          (string, optional, default=UNSET) The fee estimate mode, must be one of:\n         "UNSET"\n         "ECONOMICAL"\n         "CONSERVATIVE"\n   }\n                         for backward compatibility: passing in a true instead of an object will result in {"includeWatching":true}\n\nResult:\n{\n  "hex":       "value", (string)  The resulting raw transaction (hex-encoded string)\n  "fee":       n,         (numeric) Fee in PAC the resulting transaction pays\n  "changepos": n          (numeric) The position of the added change output, or -1\n}\n\nExamples:\n\nCreate a transaction with no inputs\n> pacglobal-cli createrawtransaction "[]" "{\\"myaddress\\":0.01}"\n\nAdd sufficient unsigned inputs to meet the output value\n> pacglobal-cli fundrawtransaction "rawtransactionhex"\n\nSign the transaction\n> pacglobal-cli signrawtransaction "fundedtransactionhex"\n\nSend the transaction\n> pacglobal-cli sendrawtransaction "signedtransactionhex"\n\n')))}u.isMDXComponent=!0}}]);