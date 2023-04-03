"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5390],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3235:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=(n(4996),["components"]),l={},s="Development Prerequisites",c={unversionedId:"developers/prerequisites",id:"developers/prerequisites",title:"Development Prerequisites",description:"This section explains how to fulfill the prerequisites needed to interact with a Casper network.",source:"@site/source/docs/casper/developers/prerequisites.md",sourceDirName:"developers",slug:"/developers/prerequisites",permalink:"/developers/prerequisites",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/prerequisites.md",tags:[],version:"current",lastUpdatedAt:1680532022,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Table of Contents",permalink:"/developers/table-of-contents"},next:{title:"Introduction",permalink:"/writing-contracts"}},p={},u=[{value:"Installing Rust",id:"installing-rust",level:2},{value:"Casper Command-line Client",id:"the-casper-command-line-client",level:2},{value:"Alternative Installation Methods",id:"alternative-installation",level:3},{value:"Debian / Ubuntu",id:"debian--ubuntu",level:4},{value:"Red Hat / CentOS",id:"red-hat--centos",level:4},{value:"Building the Client from Source",id:"building-the-client-from-source",level:2},{value:"Setting up an Account",id:"setting-up-an-account",level:2},{value:"Creating an Account",id:"creating-an-account",level:2},{value:"Key generation using the Casper client",id:"option-1-key-generation-using-the-casper-client",level:3},{value:"Funding Accounts",id:"fund-your-account",level:2},{value:"Acquiring a Node Address from the Network",id:"acquire-node-address-from-network-peers",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-prerequisites"},"Development Prerequisites"),(0,o.kt)("p",null,"This section explains how to fulfill the prerequisites needed to interact with a Casper network."),(0,o.kt)("p",null,"This section covers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setting up a Rust development environment"),(0,o.kt)("li",{parentName:"ol"},"Installing the official Casper command-line client"),(0,o.kt)("li",{parentName:"ol"},"Setting up an Account on a Casper network"),(0,o.kt)("li",{parentName:"ol"},"Acquiring the IP address of a peer on the official Testnet or Mainnet")),(0,o.kt)("h2",{id:"installing-rust"},"Installing Rust"),(0,o.kt)("p",null,"On the Casper platform, developers may write smart contracts in any language that compiles to Wasm. These How To guides focus on code examples that use Rust and a Rust client to interact with a Casper network. While following these guides, we recommend setting up Rust and installing all dependencies. For step-by-step instructions, visit ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started"},"Getting Started with Rust"),"."),(0,o.kt)("h2",{id:"the-casper-command-line-client"},"Casper Command-line Client"),(0,o.kt)("p",null,"You can find the default Casper client on ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/casper-client"},"crates.io"),". This client communicates with the network to transmit your deploys."),(0,o.kt)("p",null,"Run the commands below to install the Casper client on most flavors of Linux and macOS. You should have ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust")," installed, otherwise check the ",(0,o.kt)("a",{parentName:"p",href:"#alternative-installation"},"alternative installation methods")," below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install casper-client\n")),(0,o.kt)("p",null,"The Casper client can print out ",(0,o.kt)("em",{parentName:"p"},"help")," information, which provides an up-to-date list of supported commands. To do so, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client --help\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important"),": For each command, you can use ",(0,o.kt)("em",{parentName:"p"},"help")," to get the most up-to-date arguments and descriptions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client <command> --help\n")),(0,o.kt)("h3",{id:"alternative-installation"},"Alternative Installation Methods"),(0,o.kt)("h4",{id:"debian--ubuntu"},"Debian / Ubuntu"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://repo.casperlabs.io/"},"https://repo.casperlabs.io/")," and follow the instructions compatible with your distribution."),(0,o.kt)("h4",{id:"red-hat--centos"},"Red Hat / CentOS"),(0,o.kt)("p",null,"Head to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-client-rs/releases"},"GitHub")," and download the ",(0,o.kt)("inlineCode",{parentName:"p"},".rpm")," file for the latest client release."),(0,o.kt)("p",null,"Run the following command by replacing the file's name with the one you downloaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install casper-client-x-x-x*.rpm\n")),(0,o.kt)("p",null,"In RHEL 5 and previous versions, you need to use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum localinstall casper-client-x-x-x*.rpm\n")),(0,o.kt)("p",null,"On Fedora, RedHat 8, and other more recent RPM-based distributions, you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"dnf")," to install packages:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install casper-client-x-x-x*.rpm\n")),(0,o.kt)("h2",{id:"building-the-client-from-source"},"Building the Client from Source"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/tree/master/client"},"Instructions")),(0,o.kt)("h2",{id:"setting-up-an-account"},"Setting up an Account"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"Account")," creation process consists of two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Creating the Account"),(0,o.kt)("li",{parentName:"ol"},"Funding the Account")),(0,o.kt)("p",null,"The following video complements the instructions below, showing you the expected output."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sA1HTPjV_bc&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=3",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"creating-an-account"},"Creating an Account"),(0,o.kt)("p",null,"The Casper blockchain uses an on-chain account-based model, uniquely identified by an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey"),"."),(0,o.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,o.kt)("p",null,"Users can create an account through the Casper command-line client. Alternatively, some Casper networks such as the official Testnet and Mainnet provide a browser-based block explorer that allows account creation. Using the Casper command-line client or a block explorer will also create a cryptographic key-pair."),(0,o.kt)("h3",{id:"option-1-key-generation-using-the-casper-client"},"Key generation using the Casper client"),(0,o.kt)("p",null,"This option describes how you can use the Casper command-line client to set up your accounts. For more information about cryptographic keys, see ",(0,o.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"Working with Cryptographic Keys"),"."),(0,o.kt)("p",null,"Execute the following command to generate your keys:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client keygen .\n")),(0,o.kt)("p",null,"The above command will create three files in the current working directory:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," - PEM encoded secret key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key.pem")," - PEM encoded public key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key_hex")," - Hexadecimal-encoded string of the public key")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Save your keys to a safe place, preferably offline."),(0,o.kt)("p",null,"After generating keys for the account, you may add funds to the account's purse to finish the account creation process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Responses from the node contain ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHashes")," instead of the direct hexadecimal-encoded public key. To view the account hash for a public key, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"account-address")," option of the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <path-to-public_key.pem/public-key-hex>\n")),(0,o.kt)("h2",{id:"fund-your-account"},"Funding Accounts"),(0,o.kt)("p",null,"After generating the cryptographic key-pair for an Account, you must fund the account's main purse to create it on-chain."),(0,o.kt)("p",null,"On Testnet, you can fund an account by requesting test tokens according to ",(0,o.kt)("a",{parentName:"p",href:"/users/testnet-faucet"},"this guide"),". You can request test tokens ",(0,o.kt)("strong",{parentName:"p"},"only once")," for each account."),(0,o.kt)("p",null,"On Mainnet, a pre-existing account will have to transfer CSPR tokens to the newly created account's main purse to finalize the setup. The source account needs to transfer CSPR tokens to the hexadecimal-encoded public key of the target account. This transfer will automatically create the target account if it does not exist. Currently, this is the only way to create an account on Mainnet."),(0,o.kt)("h2",{id:"acquire-node-address-from-network-peers"},"Acquiring a Node Address from the Network"),(0,o.kt)("p",null,"Clients can interact with a node on the blockchain via requests sent to that node's JSON-RPC endpoint, ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<node-ip-address>:7777")," by default."),(0,o.kt)("p",null,"The node address is the IP of a peer node."),(0,o.kt)("p",null,"Both the official Testnet and Mainnet provide block explorers that list the IP addresses of nodes on their respective networks."),(0,o.kt)("p",null,"You can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-ip-address")," of a node on the network by visiting the following block explorers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"Peers")," on Testnet"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cspr.live/tools/peers"},"Peers")," on Mainnet")),(0,o.kt)("p",null,"You will see a list of peers, and you can select the IP of any peer on the list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If the selected peer is unresponsive, pick a different peer and try again."))}m.isMDXComponent=!0}}]);