"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6481],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||s;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return s},Z:function(){return o}});var a=n(2263),r=n(3919);function s(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var s=void 0===a?{}:a,o=s.forcePrependBaseUrl,i=void 0!==o&&o,l=s.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(s,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},4947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),o=n(4996),i=["components"],l={},u="FAQ - Developers",p={unversionedId:"faq/faq-developer",id:"faq/faq-developer",isDocsHomePage:!1,title:"FAQ - Developers",description:"This section covers frequently asked questions and our recommendations from the developer's perspective.",source:"@site/source/docs/casper/faq/faq-developer.md",sourceDirName:"faq",slug:"/faq/faq-developer",permalink:"/docs/faq/faq-developer",editUrl:"https://github.com/casper-network/documentation/tree/master/docs/casper/faq/faq-developer.md",tags:[],version:"current",frontMatter:{},sidebar:"faq",previous:{title:"FAQ - Enterprise",permalink:"/docs/faq/faq-enterpise"},next:{title:"FAQ - Validators",permalink:"/docs/faq/faq-validator"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Finality Signatures",id:"finality-signatures",children:[]},{value:"Deploy_hash vs. Transfer_hash",id:"deploy_hash-vs-transfer_hash",children:[]},{value:"Example Deploy",id:"example-deploy",children:[]},{value:"Operating with Keys",id:"operating-with-keys",children:[]},{value:"Other",id:"other",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"faq---developers"},"FAQ - Developers"),(0,s.kt)("p",null,"This section covers frequently asked questions and our recommendations from the developer's perspective."),(0,s.kt)("h3",{id:"getting-started"},"Getting Started"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How do I fix a linking error with 'cargo build' on Windows?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Question")," : How can I fix this linking error while running ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo build")," on Windows?"),(0,s.kt)("img",{src:(0,o.Z)("/image/faq/q-cargo-build.png"),alt:"cargo-build",width:"800"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Answer")," : You have to install the VC+ build tools so that ",(0,s.kt)("inlineCode",{parentName:"p"},"rustc")," can auto-detect the helper files that are part of the building process. Or you can build using Visual Studio 2013 or 2015. There are two existing Rust toolchain families provided for Windows: ",(0,s.kt)("inlineCode",{parentName:"p"},"msvc")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"gnu"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"msvc"))," is the default, and as you realized, it depends on a recent Visual C++ installation.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"gnu")),", on the other hand, depends on GNU/MinGW-w64. It can be installed and made the default toolchain using this command:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ rustup default stable-x86_64-pc-windows-gnu\n"))))),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Why do I get an invalid toolchain name?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Question")," : How can I fix an error caused by an invalid toolchain name, such as: ",(0,s.kt)("inlineCode",{parentName:"p"},"error: caused by: invalid toolchain name:..."),"?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Answer")," : First, check your ",(0,s.kt)("inlineCode",{parentName:"p"},"rustup")," version using the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup --version\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup show\n")),(0,s.kt)("p",null,"Then, find the appropriate remedy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Set the minimal rustup profile:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup set profile minimal\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install the nightly Rust toolchain separately with these two commands:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- --default-toolchain none -y\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup toolchain install nightly --allow-downgrade --profile minimal --component clippy\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Update rustup with one of these commands:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"rustup self update\n")),(0,s.kt)("p",null,"Refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://reposhub.com/rust/development-tools/rust-lang-rustup.html"},"Rust toolchain installer")," for more details.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"What are missing generic arguments in 'cargo build'?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Question")," : The ",(0,s.kt)("inlineCode",{parentName:"p"},"cargo build --release")," command fails due to missing generic arguments. How can I fix this?"),(0,s.kt)("img",{src:(0,o.Z)("/image/faq/q-cmake-version.png"),alt:"cmake-version",width:"800"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Answer")," : This is a library compatibility issue that occurs with CMake version 18.04. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"cmake --version")," to check your current version of CMake. If you are on this version, perform an upgrade:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo snap install cmake\n"))),(0,s.kt)("h3",{id:"finality-signatures"},"Finality Signatures"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"When are finality signatures needed?")),"Finality signatures are confirmations from validators that they have executed the transaction. Exchanges should be asserting finality by collecting the weight of two-thirds of transaction signatures. If an exchange runs a read-only node, it can collect these finality signatures from its node. Otherwise, the exchange must assert finality by collecting finality signatures and have proper monitoring infrastructure to prevent a Byzantine attack.",(0,s.kt)("br",null),(0,s.kt)("br",null),"Suppose an exchange connects to someone else's node RPC to send transactions to the network. In this case, the node is considered high risk, and the exchange must assert finality by checking to see how many validators have run the transactions in the network."),(0,s.kt)("h3",{id:"deploy_hash-vs-transfer_hash"},"Deploy_hash vs. Transfer_hash"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How is a deploy_hash different than a transfer_hash?")),"Essentially, there is no difference between a  ",(0,s.kt)("i",null,"deploy_hash")," and a ",(0,s.kt)("i",null,"transfer_hash")," since they are both deploy transactions. However, the platform is labeling the subset of deploys which are transfers, to filter transfers from other types of deploys. In other words, a ",(0,s.kt)("i",null,"transfer_hash")," is a native transfer, while a ",(0,s.kt)("i",null,"deploy_hash")," is another kind of deploy."),(0,s.kt)("h3",{id:"example-deploy"},"Example Deploy"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Can you provide an example of a deploy?")),"You can find a deploy reference in ",(0,s.kt)("a",{href:"https://github.com/casper-ecosystem/casper-js-sdk/blob/next/test/lib/DeployUtil.test.ts#L5"},"GitHub"),"."),(0,s.kt)("h3",{id:"operating-with-keys"},"Operating with Keys"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How should we work with the PEM keys?")),"The ",(0,s.kt)("a",{href:"https://casper-ecosystem.github.io/casper-js-sdk/next/modules/_lib_keys_.html"},"Keys API"),"provides methods for ",(0,s.kt)("i",null,"Ed25519")," and ",(0,s.kt)("i",null,"Secp256K1")," keys. Also, review the tests in ",(0,s.kt)("a",{href:"../dapp-dev-guide/keys"},"GitHub")," and the documentation."),(0,s.kt)("h3",{id:"other"},"Other"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Does the node API have a 'getTransactions' function?")),(0,s.kt)("p",null,"The node API JSON-RPC is found ",(0,s.kt)("a",{href:"http://casper-rpc-docs.s3-website-us-east-1.amazonaws.com/ "},"here"),". Also, the node emits the following events:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"BlockAdded"),(0,s.kt)("li",{parentName:"ul"},"DeployProcessed"),(0,s.kt)("li",{parentName:"ul"},"ConsensusFinalitySignature")),(0,s.kt)("p",null,"With these APIs, you can pull information from the node, such as transaction sets.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"How can I query a transaction for an account?")),(0,s.kt)("p",null,"On-chain accounts are associated with an account address. Transaction data includes account address as a sub-field.")),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Do you have an example wallet or library?")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Question"),": For wallet generation, can you point me to an open-source implementation or library? I see that Casper uses the ed25519 curve cryptography. Can you give me more details for seed generation?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Answer"),": The ",(0,s.kt)("a",{href:"https://chrome.google.com/webstore/detail/casperlabs-signer/djhndpllfiibmcdbnmaaahkhchcoijce"},"CasperLabs Signer")," is a wallet-like application. But, it is simplistic and has not been security reviewed. The Casper Network supports ed25519 as well as secp256k1 keys; therefore, extending a current wallet implementation would not be difficult.")))}h.isMDXComponent=!0}}]);