(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[988],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},i),{},{components:n})):a.createElement(h,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8058:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:152},p={unversionedId:"pac-protocol-core/client-commands/walletpassphrase",id:"pac-protocol-core/client-commands/walletpassphrase",isDocsHomePage:!1,title:"walletpassphrase",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/walletpassphrase.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/walletpassphrase",permalink:"/pac-protocol-core/client-commands/walletpassphrase",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/walletpassphrase.mdx",version:"current",sidebarPosition:152,frontMatter:{sidebar_position:152},sidebar:"coreSidebar",previous:{title:"walletlock",permalink:"/pac-protocol-core/client-commands/walletlock"},next:{title:"walletpassphrasechange",permalink:"/pac-protocol-core/client-commands/walletpassphrasechange"}},c=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>passphrase</code> <span class='asterisk'>*</span>",id:"passphrase-",children:[]},{value:"<code>timeout</code> <span class='asterisk'>*</span>",id:"timeout-",children:[]},{value:"<code>mixingonly</code>",id:"mixingonly",children:[]}]},{value:"Examples",id:"examples",children:[]}],i={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli walletpassphrase "passphrase" timeout ( mixingonly )\n')),(0,o.kt)("p",null,"Stores the wallet decryption key in memory for 'timeout' seconds.\nThis is needed prior to performing transactions related to private keys such as sending pacprotocols"),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"passphrase-"},(0,o.kt)("inlineCode",{parentName:"h3"},"passphrase")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The wallet passphrase"),(0,o.kt)("h3",{id:"timeout-"},(0,o.kt)("inlineCode",{parentName:"h3"},"timeout")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(numeric, required)")),(0,o.kt)("p",null,"The time to keep the decryption key in seconds; capped at 100000000 (~3 years)."),(0,o.kt)("h3",{id:"mixingonly"},(0,o.kt)("inlineCode",{parentName:"h3"},"mixingonly")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,o.kt)("p",null,"If is true sending functions are disabled."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Note:"),(0,o.kt)("p",null,"Issuing the walletpassphrase command while the wallet is already unlocked will set a new unlock"),(0,o.kt)("p",null,"time that overrides the old one."),(0,o.kt)("p",null,"Unlock the wallet for 60 seconds"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli walletpassphrase "my pass phrase" 60\n')),(0,o.kt)("p",null,"Unlock the wallet for 60 seconds but allow CoinJoin only"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli walletpassphrase "my pass phrase" 60 true\n')),(0,o.kt)("p",null,"Lock the wallet again (before 60 seconds)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pacprotocol-cli walletlock \n")),(0,o.kt)("p",null,"As json rpc call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrase", "params": ["my pass phrase", 60] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help walletpassphrase\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'walletpassphrase "passphrase" timeout ( mixingonly )\n\nStores the wallet decryption key in memory for \'timeout\' seconds.\nThis is needed prior to performing transactions related to private keys such as sending pacprotocols\n\nArguments:\n1. "passphrase"        (string, required) The wallet passphrase\n2. timeout             (numeric, required) The time to keep the decryption key in seconds; capped at 100000000 (~3 years).\n3. mixingonly          (boolean, optional, default=false) If is true sending functions are disabled.\n\nNote:\nIssuing the walletpassphrase command while the wallet is already unlocked will set a new unlock\ntime that overrides the old one.\n\nExamples:\n\nUnlock the wallet for 60 seconds\n> pacprotocol-cli walletpassphrase "my pass phrase" 60\n\nUnlock the wallet for 60 seconds but allow CoinJoin only\n> pacprotocol-cli walletpassphrase "my pass phrase" 60 true\n\nLock the wallet again (before 60 seconds)\n> pacprotocol-cli walletlock \n\nAs json rpc call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "walletpassphrase", "params": ["my pass phrase", 60] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}u.isMDXComponent=!0}}]);