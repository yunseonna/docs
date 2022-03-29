"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7034],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,f=u["".concat(i,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],s={},i="Querying the Network",d={unversionedId:"workflow/querying",id:"workflow/querying",title:"Querying the Network",description:"The Casper node supports queries for users and developers to obtain information stored on the blockchain.",source:"@site/source/docs/casper/workflow/querying.md",sourceDirName:"workflow",slug:"/workflow/querying",permalink:"/docs/workflow/querying",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/querying.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Prerequisites",permalink:"/docs/workflow/setup"},next:{title:"Account Hash",permalink:"/docs/workflow/account-hash"}},p={},c=[{value:"Obtaining the Global State Root Hash",id:"obtaining-the-global-state-root-hash",level:2},{value:"Querying an Account",id:"querying-an-account",level:2},{value:"Querying Blocks",id:"querying-blocks",level:2},{value:"Querying Deploys",id:"querying-deploys",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querying-the-network"},"Querying the Network"),(0,o.kt)("p",null,"The Casper node supports queries for users and developers to obtain information stored on the blockchain."),(0,o.kt)("p",null,"This document assumes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have met the ",(0,o.kt)("a",{parentName:"li",href:"/docs/workflow/setup"},"prerequisites")),(0,o.kt)("li",{parentName:"ol"},"You are familiar with the structure of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/design"},"Global State and the Blockchain Design")," to query data from the network")),(0,o.kt)("p",null,"When sending a query, it is important to note that the request will be routed to a single node in the network. You can request several types of data from a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Account details"),(0,o.kt)("li",{parentName:"ul"},"Block information"),(0,o.kt)("li",{parentName:"ul"},"Deploy information")),(0,o.kt)("h2",{id:"obtaining-the-global-state-root-hash"},"Obtaining the Global State Root Hash"),(0,o.kt)("p",null,"Since the system state changes with each block created, obtaining the latest global state hash is essential before querying information from a node."),(0,o.kt)("p",null,"All queries made to global state require the ",(0,o.kt)("inlineCode",{parentName:"p"},"state-root-hash"),", which you can obtain with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash \\\n     --id 1 \\\n     --node-address http://<node-ip-address>:7777/rpc\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - (STRING OR INTEGER) Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - (HOST:PORT) Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "chain_get_state_root_hash",\n    "params": null,\n    "id": 1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "state_root_hash": "f97d8d36630a8f4acdb323223596f6fa01ee3b0d49ad70d84d715c156c5dbec6"\n    },\n    "id": 1\n}\n'))),(0,o.kt)("h2",{id:"querying-an-account"},"Querying an Account"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/design/accounts"},"Accounts")," are stored in the global state and can be queried using the ",(0,o.kt)("inlineCode",{parentName:"p"},"query-global-state")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state \\\n  --id 4 \\\n  --node-address http://<node-ip-address>:7777 \\\n  --state-root-hash <state-root-hash> \\\n  --key <hex-encoded-source-account-public-key>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - The base key for the query. This must be a properly formatted public key, account hash, contract address hash, URef, transfer hash or deploy-info hash.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."stored_value"."Account"."main_purse"')," - the address of the main purse containing the sender's tokens. This purse is the source of the tokens transferred in this example")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "method": "state_get_item",\n    "params": {\n        "key": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n        "path": [],\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 4,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "merkle_proof": "2228 chars",\n        "stored_value": {\n            "Account": {\n                "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                "action_thresholds": {\n                    "deployment": 1,\n                    "key_management": 1\n                },\n                "associated_keys": [\n                    {\n                        "account_hash": "account-hash-b0049301811f23aab30260da66927f96bfae7b99a66eb2727da23bf1427a38f5",\n                        "weight": 1\n                    }\n                ],\n                "main_purse": "uref-9e90f4bbd8f581816e305eb7ea2250ca84c96e43e8735e6aca133e7563c6f527-007",\n                "named_keys": []\n            }\n        }\n    }\n}\n'))),(0,o.kt)("p",null,"You can use the URef of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main_purse")," to query the account balance. The balance returned is in motes (the unit that makes up the Casper token)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-balance \\\n      --id 6 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --state-root-hash <state-root-hash> \\\n      --purse-uref <source-account-purse-uref>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," - Hex-encoded hash of the state root"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"purse-uref"),' - The URef under which the purse is stored. This must be a properly formatted URef "uref-',"-",'"')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "method": "state_get_balance",\n    "params": {\n        "purse_uref": "uref-6f4026262a505d5e1b0e03b1e3b7ab74a927f8f2868120cf1463813c19acb71e-007",\n        "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 6,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "balance_value": "5000000000",\n        "merkle_proof": "2502 chars"\n    }\n}\n'))),(0,o.kt)("h2",{id:"querying-blocks"},"Querying Blocks"),(0,o.kt)("p",null,"It is possible to obtain detailed block information from the system. To do this, obtain the hash of the block of interest and send this query to a node in the network. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-block \\\n      --id 3 \\\n      --node-address http://<node-ip-address>:7777 \\\n      --block-identifier <block-hash> \\\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - Optional JSON-RPC identifier applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," \\ Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"block-identifier")," - Hex-encoded block hash or height of the block. If not given, the last block added to the chain as known at the given node will be used")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important response fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"result"."block"."header"."state_root_hash"')," - contains the ",(0,o.kt)("inlineCode",{parentName:"li"},"state-root-hash")," for this block")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Explore the JSON-RPC request and response generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "method": "chain_get_block",\n    "params": {\n        "block_identifier": {\n            "Hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9"\n        }\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON-RPC Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 3,\n    "jsonrpc": "2.0",\n    "result": {\n        "api_version": "1.0.0",\n        "block": {\n            "body": {\n                "deploy_hashes": [],\n                "proposer": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                "transfer_hashes": ["ec2d477a532e00b08cfa9447b7841a645a27d34ee12ec55318263617e5740713"]\n            },\n            "hash": "7c7e9b0f087bba5ce6fc4bd067b57f69ea3c8109157a3ad7f6d98b8da77d97f9",\n            "header": {\n                "accumulated_seed": "50b8ac019b7300cd1fdeec050310e61b900e9238aa879929745900a91bd0fc4f",\n                "body_hash": "224076b19c04279ae9b97f620801d5ff40ba64f431fe0d5089ef7cb84fdff45a",\n                "era_end": null,\n                "era_id": 0,\n                "height": 8,\n                "parent_hash": "416f339c4c2ff299c64a4b3271c5ef2ac2297bb40a477ceacce1483451a4db16",\n                "protocol_version": "1.0.0",\n                "random_bit": true,\n                "state_root_hash": "cfdbf775b6671de3787cfb1f62f0c5319605a7c1711d6ece4660b37e57e81aa3",\n                "timestamp": "2021-04-20T18:04:42.368Z"\n            },\n            "proofs": [\n                {\n                    "public_key": "010f50b0116f213ef65b99d1bd54483f92bf6131de2f8aceb7e3f825a838292150",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "012c6775c0e9e09f93b9450f1c5348c5f6b97895b0f52bb438f781f96ba2675a94",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "018d5da83f22c9b65cdfdf9f9fdf9f7c98aa2b8c7bcf14bf855177bbb9c1ac7f0a",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9088b92c8a8d592f6ec8c3e8153d7c55fc0c38b5999a214e37e73a2edd6fe0f",\n                    "signature": "130 chars"\n                },\n                {\n                    "public_key": "01b9e3484d96d5693e6c5fe789e7b28972aa392b054a76d175f079692967f604de",\n                    "signature": "130 chars"\n                }\n            ]\n        }\n    }\n}\n'))),(0,o.kt)("h2",{id:"querying-deploys"},"Querying Deploys"),(0,o.kt)("p",null,"Once you submit a deploy to the network, you can check its execution status using ",(0,o.kt)("inlineCode",{parentName:"p"},"get-deploy"),". If the ",(0,o.kt)("inlineCode",{parentName:"p"},"execution_results")," in the output are null, the transaction has not run yet. Note that transactions are finalized upon execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-deploy \\\n      --id 2 \\\n      --node-address http://<node-ip-address>:7777 \\\n      <deploy-hash>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Request fields:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id")," - JSON-RPC identifier, applied to the request and returned in the response. If not provided, a random integer will be assigned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," -Hostname or IP and port of node on which HTTP service is running ","[","default:",(0,o.kt)("a",{parentName:"li",href:"http://localhost:7777"},"http://localhost:7777"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"deploy-hash")," - Hex-encoded hash of the deploy")))}h.isMDXComponent=!0}}]);