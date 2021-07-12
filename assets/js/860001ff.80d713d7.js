(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[2771],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9992:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return i},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],s={sidebar_position:85},c={unversionedId:"pac-protocol-core/client-commands/importaddress",id:"pac-protocol-core/client-commands/importaddress",isDocsHomePage:!1,title:"importaddress",description:"Command",source:"@site/docs/pac-protocol-core/client-commands/importaddress.mdx",sourceDirName:"pac-protocol-core/client-commands",slug:"/pac-protocol-core/client-commands/importaddress",permalink:"/pac-protocol-core/client-commands/importaddress",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/client-commands/importaddress.mdx",version:"current",sidebarPosition:85,frontMatter:{sidebar_position:85},sidebar:"coreSidebar",previous:{title:"help",permalink:"/pac-protocol-core/client-commands/help"},next:{title:"importelectrumwallet",permalink:"/pac-protocol-core/client-commands/importelectrumwallet"}},i=[{value:"Command",id:"command",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>address</code> <span class='asterisk'>*</span>",id:"address-",children:[]},{value:"<code>label</code>",id:"label",children:[]},{value:"<code>rescan</code>",id:"rescan",children:[]},{value:"<code>p2sh</code>",id:"p2sh",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"command"},"Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importaddress "address" ( "label" rescan p2sh )\n')),(0,o.kt)("p",null,"Adds an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("h3",{id:"address-"},(0,o.kt)("inlineCode",{parentName:"h3"},"address")," ",(0,o.kt)("span",{class:"asterisk"},"*")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(string, required)")),(0,o.kt)("p",null,"The PAC address (or hex-encoded script)"),(0,o.kt)("h3",{id:"label"},(0,o.kt)("inlineCode",{parentName:"h3"},"label")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'(string, optional, default="")')),(0,o.kt)("p",null,"An optional label"),(0,o.kt)("h3",{id:"rescan"},(0,o.kt)("inlineCode",{parentName:"h3"},"rescan")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=true)")),(0,o.kt)("p",null,"Rescan the wallet for transactions"),(0,o.kt)("h3",{id:"p2sh"},(0,o.kt)("inlineCode",{parentName:"h3"},"p2sh")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(boolean, optional, default=false)")),(0,o.kt)("p",null,"Add the P2SH version of the script as well"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Note: This call can take over an hour to complete if rescan is true, during that time, other rpc calls"),(0,o.kt)("p",null,"may report that the imported address exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes."),(0,o.kt)("p",null,"If you have the full public key, you should call importpubkey instead of this."),(0,o.kt)("p",null,"Note: If you import a non-standard raw script in hex form, outputs sending to it will be treated"),(0,o.kt)("p",null,"as change, and not show up in many RPCs."),(0,o.kt)("p",null,"Import an address with rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importaddress "myaddress"\n')),(0,o.kt)("p",null,"Import using a label without rescan"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pacprotocol-cli importaddress "myaddress" "testing" false\n')),(0,o.kt)("p",null,"As a JSON-RPC call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importaddress", "params": ["myaddress", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Running following help command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," pacprotocol-cli help importaddress\n")),(0,o.kt)("p",null,"Will produce following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'importaddress "address" ( "label" rescan p2sh )\n\nAdds an address or script (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup.\n\nArguments:\n1. "address"          (string, required) The PAC address (or hex-encoded script)\n2. "label"            (string, optional, default="") An optional label\n3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions\n4. p2sh                 (boolean, optional, default=false) Add the P2SH version of the script as well\n\nNote: This call can take over an hour to complete if rescan is true, during that time, other rpc calls\nmay report that the imported address exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.\nIf you have the full public key, you should call importpubkey instead of this.\n\nNote: If you import a non-standard raw script in hex form, outputs sending to it will be treated\nas change, and not show up in many RPCs.\n\nExamples:\n\nImport an address with rescan\n> pacprotocol-cli importaddress "myaddress"\n\nImport using a label without rescan\n> pacprotocol-cli importaddress "myaddress" "testing" false\n\nAs a JSON-RPC call\n> curl --user myusername --data-binary \'{"jsonrpc": "1.0", "id":"curltest", "method": "importaddress", "params": ["myaddress", "testing", false] }\' -H \'content-type: text/plain;\' http://127.0.0.1:1111/\n\n')))}d.isMDXComponent=!0}}]);