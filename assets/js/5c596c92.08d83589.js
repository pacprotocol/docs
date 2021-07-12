(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[5270],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return s},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(o),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,c(c({ref:t},s),{},{components:o})):n.createElement(f,c({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=o[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2340:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var n=o(2122),r=o(9756),a=(o(7294),o(3905)),c=["components"],l={sidebar_position:1},p={unversionedId:"pac-protocol-core/getting-started",id:"pac-protocol-core/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Source Code of PAC Protocol Core can be found under GitHub pacprotocol/pacprotocol",source:"@site/docs/pac-protocol-core/getting-started.mdx",sourceDirName:"pac-protocol-core",slug:"/pac-protocol-core/getting-started",permalink:"/pac-protocol-core/getting-started",editUrl:"https://github.com/pacprotocol/docs/edit/master/docs/pac-protocol-core/getting-started.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"coreSidebar",previous:{title:"Wallets",permalink:"/wallets"},next:{title:"Install Bootstrap (Optional)",permalink:"/pac-protocol-core/install-bootstrap"}},i=[{value:"Install PAC Protocol Core Daemon",id:"install-pac-protocol-core-daemon",children:[{value:"Requirements",id:"requirements",children:[]},{value:"Step 1 - Get/Setup binaries of PAC Protocol Core",id:"step-1---getsetup-binaries-of-pac-protocol-core",children:[]},{value:"Step 2 - Configuring the wallet",id:"step-2---configuring-the-wallet",children:[]},{value:"Step 3 - Creating systemctl service (optional, recommended)",id:"step-3---creating-systemctl-service-optional-recommended",children:[]},{value:"Step 4 - Testing if it&#39;s working.",id:"step-4---testing-if-its-working",children:[]}]}],s={toc:i};function u(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Source Code of ",(0,a.kt)("strong",{parentName:"p"},"PAC Protocol Core")," can be found under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pacprotocol/pacprotocol"},"GitHub pacprotocol/pacprotocol")),(0,a.kt)("p",null,"For the following step we're using the user root. For production usage it's recommended to use different user with no admin permission."),(0,a.kt)("h2",{id:"install-pac-protocol-core-daemon"},"Install PAC Protocol Core Daemon"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minimum 1GB RAM"),(0,a.kt)("li",{parentName:"ul"},"Minimum 25GB Hard Disk"),(0,a.kt)("li",{parentName:"ul"},"Ubuntu 18.04 LTS or newer. (Windows and macOS supports it too, but we're focusing on ubuntu)")),(0,a.kt)("h3",{id:"step-1---getsetup-binaries-of-pac-protocol-core"},"Step 1 - Get/Setup binaries of PAC Protocol Core"),(0,a.kt)("p",null,'We\'re pulling the binaries of "PAC Protocol v0.17" and grant permission of "pacprotocold" and "pacprotocol-cli" to make it executeable.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root # we're using root directory in this example. You can obviously choose your owh directory.\nwget https://github.com/pacprotocol/pacprotocol/releases/download/v0.17.0.4/pacprotocol-v0.17.0.4-lin64.tgz\ntar -xzvf pacprotocol-v0.17.0.4-lin64.tgz\nrm -f pacprotocol-v0.17.0.4-lin64.tgz\nmv -v pacprotocol-v0.17.0.4-lin64 PACProtocol\nchmod +x PACProtocol/pacprotocold\nchmod +x PACProtocol/pacprotocol-cli\n")),(0,a.kt)("h3",{id:"step-2---configuring-the-wallet"},"Step 2 - Configuring the wallet"),(0,a.kt)("p",null,"To configure the PAC Protocol Core, you need to enter following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /root/.PACProtocol\ncd /root/.PACProtocol\nnano pacprotocol.conf # or any other file editor you want\n")),(0,a.kt)("p",null,"Following settings in ",(0,a.kt)("inlineCode",{parentName:"p"},"pacprotocol.conf")," is recommended to enable RPC JSON HTTP API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# pacprotocol.conf\n\nrpcuser=<choose any username>\nrpcpassword=<create a good password>\nrpcallowip=127.0.0.1 # Listen only to local machine.\nrpcport=7111\n\nlisten=1\nserver=1\ndaemon=1\n")),(0,a.kt)("p",null,"You can find more options under ",(0,a.kt)("a",{parentName:"p",href:"/pac-protocol-core/daemon-options"},"Daemon Options")),(0,a.kt)("p",null,"Save it and back to terminal."),(0,a.kt)("h3",{id:"step-3---creating-systemctl-service-optional-recommended"},"Step 3 - Creating systemctl service (optional, recommended)"),(0,a.kt)("p",null,"This step is not necessary, but it helps to run PAC Protocol Core in background and it auto-start in case of crashing. It will also start automatically when the machine is turned on."),(0,a.kt)("p",null,"Skip to ",(0,a.kt)("a",{parentName:"p",href:"#step-4---testing-if-its-working"},"Step 4")," if you don't want to use systemctl service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/systemd/system/pac.service # or any other file editor you want\n")),(0,a.kt)("p",null,"With the following content of pac.service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# pac.service\n\n[Unit]\nDescription=PAC Protocol Core Daemon\nAfter=network.target\n\n[Service]\nUser=root\nGroup=root\nType=forking\nPIDFile=/root/.PACProtocol/pacprotocol.pid\nExecStart=/root/PACProtocol/pacprotocold -daemon -pid=/root/.PACProtocol/pacprotocol.pid \\\n          -conf=/root/.PACProtocol/pacprotocol.conf -datadir=/root/.PACProtocol/\nExecStop=-/root/PACProtocol/pacprotocol-cli -conf=/root/.PACProtocol/pacprotocol.conf \\\n          -datadir=/root/.PACProtocol/ stop\nRestart=always\nRestartSec=20s\nPrivateTmp=true\nTimeoutStopSec=7200s\nTimeoutStartSec=30s\nStartLimitInterval=120s\nStartLimitBurst=5\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Save it and back to terminal."),(0,a.kt)("p",null,"Enable the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable pac.service\n")),(0,a.kt)("p",null,"And start the service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start pac.service\n")),(0,a.kt)("p",null,"If you want to stop the service (stopping the PAC Protocol Core Daemon instance)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop pac.service\n")),(0,a.kt)("h3",{id:"step-4---testing-if-its-working"},"Step 4 - Testing if it's working."),(0,a.kt)("p",null,"Now your PAC Protocol Core Daemon is ready to be used for development purpose."),(0,a.kt)("p",null,"If you skipped the ",(0,a.kt)("a",{parentName:"p",href:"#step-3---creating-systemctl-service-optional-recommended"},"Step 3"),", you can run daemon by following step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./root/PACProtocol/pacprotocold  -daemon\n")),(0,a.kt)("p",null,"Wait for a some time and then you can ping the HTTP RPC JSON if it's functional:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}\' -H \'content-type:text/plain;\' http://<rpcusername>:<rpcpassword>@127.0.0.1:7111/\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcusername")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rpcpassword")," is the same as from ",(0,a.kt)("a",{parentName:"p",href:"#step-2---configuring-the-wallet"},"Step 2")),(0,a.kt)("p",null,"You can validate if the blockchain is fully synced:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"mnsync","params":["status"]}\' -H \'content-type:text/plain;\' http://<rpcusername>:<rpcpassword>@127.0.0.1:7111/\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},'"isBlockchainSynced"')," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", it means the blockchain on your machine is fully synced!"),(0,a.kt)("p",null,"It can take some time to sync fully. Luckly we have a solution for that in order to sync it faster - please see the following tutorial ",(0,a.kt)("a",{parentName:"p",href:"/pac-protocol-core/install-bootstrap"},"Install Bootstrap")),(0,a.kt)("p",null,"Congratulation. Now you have a self-hosted PAC Protocol HTTP API which you can use on your language/framework by using HTTP requests!"),(0,a.kt)("p",null,"Please see ",(0,a.kt)("a",{parentName:"p",href:"/pac-protocol-core/client-commands/getaddressbalance"},"Client Commands")," for more information of commands usage & http"))}u.isMDXComponent=!0}}]);