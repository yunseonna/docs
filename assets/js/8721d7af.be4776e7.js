"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9297],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],s={},c="Accounts and Cryptographic Keys",p={unversionedId:"dapp-dev-guide/keys",id:"dapp-dev-guide/keys",title:"Accounts and Cryptographic Keys",description:"The Casper blockchain uses an on-chain account-based model, uniquely identified by an AccountHash derived from a specific PublicKey. The AccountHash is a 32-byte hash derived from any of the supported PublicKey variants below to standardize keys that can vary in length.",source:"@site/source/docs/casper/dapp-dev-guide/keys.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/keys",permalink:"/dapp-dev-guide/keys",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/keys.md",tags:[],version:"current",lastUpdatedAt:1675445571,formattedLastUpdatedAt:"2/3/2023",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Ecosystem Open-Source Software",permalink:"/dapp-dev-guide/build-on-casper/casper-open-source-software"},next:{title:"Understanding Hash Types",permalink:"/dapp-dev-guide/understanding-hash-types"}},l={},u=[{value:"Creating Accounts and Keys",id:"creating-accounts-and-keys",level:2},{value:"Option 1: Generating Keys using the Casper Client",id:"option-1-key-generation-using-the-casper-client",level:3},{value:"EdDSA Keys",id:"eddsa-keys",level:4},{value:"Ethereum Keys",id:"ethereum-keys",level:4},{value:"Option 2: Generating Keys using a Block Explorer",id:"option-2-key-generation-using-a-block-explorer",level:3},{value:"Funding your Account",id:"funding-your-account",level:2},{value:"Working with Existing Ethereum Keys",id:"working-with-existing-ethereum-keys",level:2},{value:"Generating an Account Hash",id:"generating-an-account-hash",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"accounts-and-cryptographic-keys"},"Accounts and Cryptographic Keys"),(0,i.kt)("p",null,"The Casper blockchain uses an on-chain ",(0,i.kt)("a",{parentName:"p",href:"/design/casper-design/#accounts-head"},"account-based model"),", uniquely identified by an ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountHash")," is a 32-byte hash derived from any of the supported ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")," variants below to standardize keys that can vary in length."),(0,i.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,i.kt)("p",null,"The Casper platform supports two types of keys for creating accounts and signing transactions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#eddsa-keys"},"ed25519")," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA) and are 66 bytes long"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ethereum-keys"},"secp256k1")," keys, commonly known as Ethereum keys, which are 68 bytes long")),(0,i.kt)("p",null,"You can generate keys using both formats, and it is also possible to ",(0,i.kt)("a",{parentName:"p",href:"#working-with-existing-ethereum-keys"},"work with existing Ethereum keys"),"."),(0,i.kt)("p",null,"You can also ",(0,i.kt)("a",{parentName:"p",href:"#generating-an-account-hash"},"generate an account hash")," from a public key with the Casper command-line client."),(0,i.kt)("h2",{id:"creating-accounts-and-keys"},"Creating Accounts and Keys"),(0,i.kt)("p",null,"When you create an account on the Casper blockchain, a cryptographic key-pair will be created when using either the ",(0,i.kt)("a",{parentName:"p",href:"#option-1-key-generation-using-the-casper-client"},"Casper command-line client")," or a ",(0,i.kt)("a",{parentName:"p",href:"#option-2-key-generation-using-a-block-explorer"},"block explorer"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"SAVE your keys to a safe place, preferably offline."))),(0,i.kt)("h3",{id:"option-1-key-generation-using-the-casper-client"},"Option 1: Generating Keys using the Casper Client"),(0,i.kt)("p",null,"This option describes how you can use the Casper command-line client to set up an account using either key type."),(0,i.kt)("h4",{id:"eddsa-keys"},"EdDSA Keys"),(0,i.kt)("p",null,"The command-line client generates EdDSA keys by default. Use the command below to create the account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ed25519-keys\ncasper-client keygen ed25519-keys/\ntree ed25519-keys/\n")),(0,i.kt)("p",null,"Sample output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command shows the contents of the ",(0,i.kt)("em",{parentName:"p"},"ed25519-keys")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ed25519-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n")),(0,i.kt)("p",null,"Here are some details about the files generated:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"public_key.pem")," is a ",(0,i.kt)("em",{parentName:"li"},"PEM"),"-encoded public key"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"public_key_hex")," is a hexadecimal-encoded string of the public key"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," is the ",(0,i.kt)("em",{parentName:"li"},"PEM"),"-encoded secret key")),(0,i.kt)("p",null,"The public-key-hex for ",(0,i.kt)("inlineCode",{parentName:"p"},"ed25519")," keys starts with 01 and is 66 bytes long:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat ed25519-keys/public_key_hex\n011724c5c8e2404ca01c872e1bbd9202a0114e5d143760f685086a5cffe261dabd\n")),(0,i.kt)("h4",{id:"ethereum-keys"},"Ethereum Keys"),(0,i.kt)("p",null,"To create ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," keys with the Casper command-line client, commonly known as Ethereum keys, follow these steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir secp256k1-keys\ncasper-client keygen -a secp256k1 secp256k1-keys/\ntree secp256k1-keys/\n")),(0,i.kt)("p",null,"Sample output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," command shows the contents of the ",(0,i.kt)("em",{parentName:"p"},"secp256k1-keys")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"secp256k1-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n")),(0,i.kt)("p",null,"The public-key-hex for ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," keys starts with 02 and is 68 bytes long:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat secp256k1-keys/public_key_hex\n020287e1a79d0d9f3196391808a8b3e5007895f43cde679e4c960e7e9b92841bb98d\n")),(0,i.kt)("h3",{id:"option-2-key-generation-using-a-block-explorer"},"Option 2: Generating Keys using a Block Explorer"),(0,i.kt)("p",null,"This option is available on networks that have a block explorer."),(0,i.kt)("p",null,"For instance, on the official Testnet, the ",(0,i.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"CSPR.live")," block explorer is available, and the following instructions assume you are using it."),(0,i.kt)("p",null,"Start by creating an account using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cspr.community/docs/user-guides/SignerGuide.html"},"Casper Signer")," and download the secret key when prompted. You can choose the key type when creating the account."),(0,i.kt)("h2",{id:"funding-your-account"},"Funding your Account"),(0,i.kt)("p",null,"Once you create your account, you can ",(0,i.kt)("a",{parentName:"p",href:"/dapp-dev-guide/setup#funding-an-account"},"fund the account's main purse")," to finish the process of setting it up."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Until you fund your account's main purse, it does not exist on the blockchain."))),(0,i.kt)("h2",{id:"working-with-existing-ethereum-keys"},"Working with Existing Ethereum Keys"),(0,i.kt)("p",null,"You can also use existing Ethereum keys in Casper. Here is an example set of Ethereum keys and their corresponding address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Address:0x7863B6F7232D99FF80B74E4C8BB3BEE3BDE0291F\nPublic key:0470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66\nPrivate key:29773906aef3ee1f5868371fd7c50f9092205df26f60e660cafacbf2b95fe086\n")),(0,i.kt)("p",null,"To use existing Ethereum keys, the Casper virtual machine (VM) needs to know that the key is a ",(0,i.kt)("inlineCode",{parentName:"p"},"secp256k1")," type. To achieve this, we will prefix the public key hex with 02, as shown in the example below."),(0,i.kt)("p",null,"The Casper command-line client provides an example of how this works."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("p",null,"The following transaction sends 10 CSPR."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer \\\n--transfer-id 1234567 \\\n--node-address http://localhost:7777 \\\n--chain-name casper \\\n--target-account 020470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66 \\\n--amount 10000000000 \\\n--secret-key <path-to-secret_key.pem> \\\n--payment-amount 100000000\n")),(0,i.kt)("p",null,"The Casper command-line client requires the secret key in ",(0,i.kt)("em",{parentName:"p"},"PEM")," format to send a Deploy from this account. If you want to use existing Ethereum keys with the command-line client, a conversion to ",(0,i.kt)("em",{parentName:"p"},"PEM")," format is needed."),(0,i.kt)("p",null,"The following example is a JS script that generates a ",(0,i.kt)("em",{parentName:"p"},"PEM")," file, using a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stacks-network/key-encoder-js"},"key encoder")," and Node.js. To install these components, do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nodejs\nnpm install key-encoder\n")),(0,i.kt)("p",null,"Then create the JS script ",(0,i.kt)("em",{parentName:"p"},"convert-to-pem.js")," using ",(0,i.kt)("em",{parentName:"p"},"vi")," or ",(0,i.kt)("em",{parentName:"p"},"nano"),", and include this content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'var KeyEncoder = require("key-encoder"),\n    keyEncoder = new KeyEncoder.default("secp256k1");\nlet priv_hex = "THE SECRET KEY TO ENCODE";\nlet priv_pem = keyEncoder.encodePrivate(priv_hex, "raw", "pem");\nconsole.log(priv_pem);\n')),(0,i.kt)("p",null,"Then run the script using Node.js and name the secret key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"node convert-to-pem.js > eth-secret.pem\n")),(0,i.kt)("p",null,"To view the secret key, use ",(0,i.kt)("inlineCode",{parentName:"p"},"cat <filename>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat eth-secret.pem\n")),(0,i.kt)("p",null,"Below is the sample output showing the contents of the secret key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIBjXY+7xZagzTjL4p8bGWS8FPRcW13mgytdu5c3e556MoAcGBSuBBAAK\noUQDQgAEpV4dVaPeAEaH0VXrQtLzjpGt1pui1q08311em6wDCchGNjzsnOY7stGF\ntlKF2V5RFQn4rzkwipSYnrqaPf1pTA==\n-----END EC PRIVATE KEY-----\n")),(0,i.kt)("h2",{id:"generating-an-account-hash"},"Generating an Account Hash"),(0,i.kt)("p",null,"To generate the account hash for a public key, use the ",(0,i.kt)("em",{parentName:"p"},"account-address")," option of the Casper client. The argument for the ",(0,i.kt)("em",{parentName:"p"},"public-key")," must be a properly formatted public key. The public key may also be read from a file, which should be one of the two files generated via the ",(0,i.kt)("em",{parentName:"p"},"keygen")," command: ",(0,i.kt)("em",{parentName:"p"},"public_key_hex")," or ",(0,i.kt)("em",{parentName:"p"},"public_key.pem"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <FORMATTED STRING or PATH>\n")))}k.isMDXComponent=!0}}]);