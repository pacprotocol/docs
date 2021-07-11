(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[1995],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return p}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(o),p=n,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||i;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9573:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=o(2122),n=o(9756),i=(o(7294),o(3905)),a={sidebar_position:1,slug:"/core"},s={unversionedId:"core/intro",id:"core/intro",isDocsHomePage:!1,title:"Intro",description:"Scaling Decentralized Network",source:"@site/docs/core/intro.mdx",sourceDirName:"core",slug:"/core",permalink:"/docs/core",editUrl:"https://github.com/pacprotocol/docs/edit/master/website/docs/core/intro.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/core"},sidebar:"coreSidebar",next:{title:"FAQ",permalink:"/docs/core/faq"}},c=[{value:"Scaling Decentralized Network",id:"scaling-decentralized-network",children:[]},{value:"Proof of Stake",id:"proof-of-stake",children:[]},{value:"Inflation and Transactions",id:"inflation-and-transactions",children:[]},{value:"On Chain Budget (OCB)",id:"on-chain-budget-ocb",children:[]}],l={toc:c};function d(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"pac__logo"}),(0,i.kt)("h2",{id:"scaling-decentralized-network"},"Scaling Decentralized Network"),(0,i.kt)("p",null,"Our decentralized network allows the communication of full nodes relaying exact copies of blockchain activity providing reliability and optimization for decentralized utilities. Masternodes fully registered with PAC Protocol are responsible for 24/7 connectivity and swift maintenance to avoid being disconnected due to a high POSE_BAN Score. This built-in penalty system allows the network to monitor itself and verify reliable Masternode hosts. Masternodes that maintain proper connection to PAC Protocol are the main beneficiaries to the decentralized inflation mechanics for the network native coin $PAC."),(0,i.kt)("p",null,"Each Masternode registered with PAC Protocol is required to have 500,000 native $PAC coins as collateral for the initial Masternode registry. This is required to ensure that those deciding to support the  decentralized network have their own equal share of network rights. Furthermore, this collateral event calls to the network for Masternode recognition and addition to a Long Living Masternode Quorum (LLMQ)."),(0,i.kt)("h2",{id:"proof-of-stake"},"Proof of Stake"),(0,i.kt)("p",null,"PAC Protocol has an advertised average block rate of 2.5 minutes per block. This is structured in an eco-friendly decentralized manner, leading the way for scalability and wide-spread network support. POSv3 is the staking consensusadopted by PAC Protocol, which requires  minimal resources dedicated to the network  for consistent block scheduling."),(0,i.kt)("h2",{id:"inflation-and-transactions"},"Inflation and Transactions"),(0,i.kt)("p",null,"Each block provides the network inflation rate of $PAC coins to one Masternode that is verified by the network, and one POS staking user that provides the minimal resources for block creation. When a Masternode is rewarded from the network, it receives 8280 $PAC coins. These rewards can be encrypted and stored to accumulate 500,000 $PAC for another Masternode registry, or transacted openly across the network with instant speed for minimal fees. PAC Protocol also boasts enhanced blockchain features that originated from Bitcoin. Those rewarded for their contribution to POS block creation receive an inflation rate of 100 $PAC per block."),(0,i.kt)("h2",{id:"on-chain-budget-ocb"},"On Chain Budget (OCB)"),(0,i.kt)("p",null,"The OCB is another feature PAC Protocol adopted to allow any network user the ability to create a proposal to the Masternodes registered. Each block contributes 10,119 $PAC to this OCB, which is held entirely within the network. This $PAC accumulates within each OCB cycled block. Proposals that are submitted to the registered Masternodes will then be required to reach a 10% threshold on YES votes versus NO/Abstain votes. Each registered Masternode is entitled to one vote per proposal. This decentralized method for proposal decision making is put in the hands of those contributing Masternode resources for PAC Protocol. The amount of $PAC requested during each OCB cycle will be sent to those proposals that are accepted by the Masternodes registered. In the event that not all of the $PAC supply in the OCB block is requested, but only a portion is or no proposals are accepted/no proposals are submitted in an OCB cycle, the $PAC that was accumulating for OCB budget will not be created: these are essentially \u201cburned,\u201d or considered to have never existed. This provides Masternodes the ability to control the inflation of $PAC that users may request to be put to use for network growth or network related use cases."),(0,i.kt)("p",null,"PAC Protocol is designed to provide a network ecosystem worthy of massive decentralization and utility adoption. The internet we know today runs almost entirely on a centralized platform, leading to the core cause and issue for centralized hacks, which ends up in billions of dollars of damage. Choosing PAC Protocol allows users to build products designed for decentralized optimization, security, and speed. These products can be presented to the registered Masternodes, which then have the choice to support the additional utility or network adaptions. Each registered Masternode has its own right to support additional use cases or not. A Masternode is only ever obligated to be fully connected with PAC Protocol."))}d.isMDXComponent=!0}}]);