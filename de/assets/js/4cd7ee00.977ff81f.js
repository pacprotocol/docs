(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[4957],{8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),o=a(944),i=a(6010),r="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,s=e.values,m=e.groupId,k=e.className,p=(0,o.Z)(),v=p.tabGroupChoices,h=p.setTabGroupChoices,f=(0,n.useState)(u),b=f[0],x=f[1],C=n.Children.toArray(e.children),g=[];if(null!=m){var T=v[m];null!=T&&T!==b&&s.some((function(e){return e.value===T}))&&x(T)}var y=function(e){var t=e.currentTarget,a=g.indexOf(t),n=s[a].value;x(n),null!=m&&(h(m,n),setTimeout((function(){var e,a,n,o,i,r,c,d;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,i=e.right,r=window,c=r.innerHeight,d=r.innerWidth,a>=0&&i<=d&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case d:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case c:var o=g.indexOf(e.target)-1;a=g[o]||g[g.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},k)},s.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",r,{"tabs__item--active":b===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:w,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(C.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},2924:function(e,t,a){"use strict";var n=a(7294).createContext(void 0);t.Z=n},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},5350:function(e,t,a){"use strict";var n=a(7294),o=a(2924);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},944:function(e,t,a){"use strict";var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2445:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return s},default:function(){return k}});var n=a(2122),o=a(9756),i=(a(7294),a(3905)),r=a(1395),l=a(8215),c=a(210),d={sidebar_position:2},u={unversionedId:"core/developers/network-configuration",id:"core/developers/network-configuration",isDocsHomePage:!1,title:"Network Configuration",description:"Information",source:"@site/docs/core/developers/network-configuration.mdx",sourceDirName:"core/developers",slug:"/core/developers/network-configuration",permalink:"/de/docs/core/developers/network-configuration",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/developers/network-configuration.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"coreSidebar",previous:{title:"Wallets",permalink:"/de/docs/core/wallets"},next:{title:"Getting Started (with HTTP API)",permalink:"/de/docs/core/developers/pac-protocol-core/getting-started"}},s=[{value:"Information",id:"information",children:[{value:"Name",id:"name",children:[]},{value:"Ticker Name",id:"ticker-name",children:[]},{value:"Algorithm",id:"algorithm",children:[]},{value:"Block Movement",id:"block-movement",children:[]},{value:"Block Time",id:"block-time",children:[]},{value:"Block Max Size",id:"block-max-size",children:[]},{value:"Max Supply",id:"max-supply",children:[]},{value:"Masternode Collateral Confirmation",id:"masternode-collateral-confirmation",children:[]},{value:"Masternode Collateral Amount",id:"masternode-collateral-amount",children:[]},{value:"Masternode Reward Confirmation",id:"masternode-reward-confirmation",children:[]},{value:"Staking Minimum Amount",id:"staking-minimum-amount",children:[]},{value:"Staking Reward Confirmation",id:"staking-reward-confirmation",children:[]},{value:"Max Decimal Places",id:"max-decimal-places",children:[]}]},{value:"Developer Information",id:"developer-information",children:[{value:"Wallet Port",id:"wallet-port",children:[]},{value:"Message Prefix",id:"message-prefix",children:[]},{value:"Public Key Hash",id:"public-key-hash",children:[]},{value:"Script Hash",id:"script-hash",children:[]},{value:"WIF",id:"wif",children:[]}]}],m={toc:s};function k(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"information"},"Information"),(0,i.kt)("h3",{id:"name"},"Name"),(0,i.kt)("p",null,"PAC Protocol"),(0,i.kt)("h3",{id:"ticker-name"},"Ticker Name"),(0,i.kt)("p",null,"PAC"),(0,i.kt)("h3",{id:"algorithm"},"Algorithm"),(0,i.kt)("p",null,"PoSv3"),(0,i.kt)("h3",{id:"block-movement"},"Block Movement"),(0,i.kt)("p",null,"PoS"),(0,i.kt)("h3",{id:"block-time"},"Block Time"),(0,i.kt)("p",null,"2.5 Minutes average"),(0,i.kt)("h3",{id:"block-max-size"},"Block Max Size"),(0,i.kt)("p",null,"2 MB"),(0,i.kt)("h3",{id:"max-supply"},"Max Supply"),(0,i.kt)("p",null,"50,000,000,000 PAC"),(0,i.kt)("h3",{id:"masternode-collateral-confirmation"},"Masternode Collateral Confirmation"),(0,i.kt)("p",null,"1 Confirmation"),(0,i.kt)("h3",{id:"masternode-collateral-amount"},"Masternode Collateral Amount"),(0,i.kt)("p",null,"500,000 PAC"),(0,i.kt)("h3",{id:"masternode-reward-confirmation"},"Masternode Reward Confirmation"),(0,i.kt)("p",null,"101 Confirmations"),(0,i.kt)("h3",{id:"staking-minimum-amount"},"Staking Minimum Amount"),(0,i.kt)("p",null,"250 PAC (unlocked)"),(0,i.kt)("h3",{id:"staking-reward-confirmation"},"Staking Reward Confirmation"),(0,i.kt)("p",null,"101 Confirmations"),(0,i.kt)("h3",{id:"max-decimal-places"},"Max Decimal Places"),(0,i.kt)("p",null,"8 decimal places (1 PAC = 1.00000000 PAC)"),(0,i.kt)("h2",{id:"developer-information"},"Developer Information"),(0,i.kt)("h3",{id:"wallet-port"},"Wallet Port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"7122\n")),(0,i.kt)("h3",{id:"message-prefix"},"Message Prefix"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\\x19DarkCoin Signed Message:\\n\n")),(0,i.kt)("h3",{id:"public-key-hash"},"Public Key Hash"),(0,i.kt)(r.Z,{defaultValue:"hex",values:[{label:"Heximal",value:"hex"},{label:"Decimal",value:"dec"},{label:"Binary",value:"bin"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hex",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"37")),(0,i.kt)(l.Z,{value:"dec",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"55")),(0,i.kt)(l.Z,{value:"bin",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"110111"))),(0,i.kt)("h3",{id:"script-hash"},"Script Hash"),(0,i.kt)(r.Z,{defaultValue:"hex",values:[{label:"Heximal",value:"hex"},{label:"Decimal",value:"dec"},{label:"Binary",value:"bin"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hex",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"0A")),(0,i.kt)(l.Z,{value:"dec",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"10")),(0,i.kt)(l.Z,{value:"bin",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"1010"))),(0,i.kt)("h3",{id:"wif"},"WIF"),(0,i.kt)(r.Z,{defaultValue:"hex",values:[{label:"Heximal",value:"hex"},{label:"Decimal",value:"dec"},{label:"Binary",value:"bin"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"hex",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"CC")),(0,i.kt)(l.Z,{value:"dec",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"204")),(0,i.kt)(l.Z,{value:"bin",mdxType:"TabItem"},(0,i.kt)(c.Z,{mdxType:"CodeBlock"},"11001100"))))}k.isMDXComponent=!0}}]);