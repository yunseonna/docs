"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7668],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return l}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={},s="Introduction",d={unversionedId:"dapp-dev-guide/sdkspec/introduction",id:"dapp-dev-guide/sdkspec/introduction",title:"Introduction",description:"This document outlines the methods, endpoints, and types available to developers crafting an SDK for use with Casper networks. The separation of these methods pertains to their use and potential necessity for specific forms of SDK. While a full-featured SDK may feature all methods, there are use cases for SDKs that are purely transactional or informational.",source:"@site/source/docs/casper/dapp-dev-guide/sdkspec/introduction.md",sourceDirName:"dapp-dev-guide/sdkspec",slug:"/dapp-dev-guide/sdkspec/introduction",permalink:"/dapp-dev-guide/sdkspec/introduction",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/sdkspec/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Understanding Hash Types",permalink:"/dapp-dev-guide/understanding-hash-types"},next:{title:"Transactional JSON-RPC Method",permalink:"/dapp-dev-guide/sdkspec/json-rpc-transactional"}},c={},l=[],u={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This document outlines the methods, endpoints, and types available to developers crafting an SDK for use with Casper networks. The separation of these methods pertains to their use and potential necessity for specific forms of SDK. While a full-featured SDK may feature all methods, there are use cases for SDKs that are purely transactional or informational."),(0,o.kt)("p",null,"For examples of completed SDKs, please refer to our ",(0,o.kt)("a",{parentName:"p",href:"../../../sdk/"},"SDK Client Libraries")," section."),(0,o.kt)("p",null,"You can find information on our serialization standard ",(0,o.kt)("a",{parentName:"p",href:"../../../design/serialization-standard/"},"here"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Page"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-transactional"},"Transactional JSON-RPC Method")),(0,o.kt)("td",{parentName:"tr",align:null},"Description of ",(0,o.kt)("inlineCode",{parentName:"td"},"account_put_deploy"),", the only means by which users can send their compiled WASM (as part of a Deploy) to a node on a Casper network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-informational"},"Informational JSON-RPC Methods")),(0,o.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that return information from a network or node within a network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/json-rpc-pos"},"Proof-of-Stake")),(0,o.kt)("td",{parentName:"tr",align:null},"Descriptions of methods that pertain to Proof-of-Stake functionality on a Casper network.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/types_chain"},"Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information on types used within JSON-RPC methods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/dapp-dev-guide/sdkspec/types_cl"},"CL Types")),(0,o.kt)("td",{parentName:"tr",align:null},"Information specifically relating to CL Types.")))))}f.isMDXComponent=!0}}]);