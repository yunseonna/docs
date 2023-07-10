"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4416],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,c(c({ref:e},p),{},{components:n})):a.createElement(m,c({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8441:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),c=n(4996),i=["components"],s={title:"Call Stacks"},l="Understanding Call Stacks",p={unversionedId:"concepts/callstack",id:"concepts/callstack",title:"Call Stacks",description:"Users wishing to interact with a Casper network must do so through sending a Deploy. All Deploys consist of session code run in the context of the user account that sent the Deploy. The session code may install contract code to global state, or interact with previously installed contract code.",source:"@site/source/docs/casper/concepts/callstack.md",sourceDirName:"concepts",slug:"/concepts/callstack",permalink:"/concepts/callstack",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/callstack.md",tags:[],version:"current",lastUpdatedAt:1689002659,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{title:"Call Stacks"},sidebar:"concepts",previous:{title:"Smart Contracts",permalink:"/concepts/smart-contracts"},next:{title:"Contracts and Session Code",permalink:"/concepts/session-code"}},d={},h=[{value:"The Caller",id:"the-caller",level:2},{value:"The Immediate Caller",id:"the-immediate-caller",level:2},{value:"Limitations",id:"limitations",level:2}],u={toc:h},m="wrapper";function f(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understanding-call-stacks"},"Understanding Call Stacks"),(0,o.kt)("p",null,"Users wishing to interact with a Casper network must do so through ",(0,o.kt)("a",{parentName:"p",href:"/developers/dapps/sending-deploys"},"sending a Deploy"),". All Deploys consist of ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/writing-session-code"},"session code")," run in the context of the user account that sent the Deploy. The session code may ",(0,o.kt)("a",{parentName:"p",href:"/developers/cli/installing-contracts"},"install contract code to global state"),", or interact with previously ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/calling-contracts"},"installed contract code"),"."),(0,o.kt)("p",null,"When the session code within a Deploy interacts with one or more contracts, this is the beginning of a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/latest/casper_types/system/enum.CallStackElement.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Call Stack")),". A call stack is the chronological order in which contracts call other contracts, initiated by an instance of session code."),(0,o.kt)("h2",{id:"the-caller"},"The Caller"),(0,o.kt)("p",null,"In every instance of a call stack, the originating caller is the session code within the account's context that began the interaction. Contract code cannot spontaneously act without session code to activate it. As such, the session code represents the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," entity in each call stack."),(0,o.kt)("h2",{id:"the-immediate-caller"},"The Immediate Caller"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-types/1.5.0/casper_types/system/mint/trait.RuntimeProvider.html#tymethod.get_immediate_caller"},"immediate caller")," is the caller that interacted directly with the contract in question."),(0,o.kt)("p",null,"If session code calls a contract, which in turn calls another contract, then the session code would represent the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," entity in the stack, the contract called by the initiating session code would be the ",(0,o.kt)("em",{parentName:"p"},"first")," and the contract called by the first contract would be the ",(0,o.kt)("em",{parentName:"p"},"second"),"."),(0,o.kt)("p",null,"In this example, the first contract would be the ",(0,o.kt)("inlineCode",{parentName:"p"},"immediate caller")," of the second contract. The session code would remain the ",(0,o.kt)("inlineCode",{parentName:"p"},"caller"),"."),(0,o.kt)("img",{class:"align-center",src:(0,c.Z)("/image/callstack.png"),width:"450",alt:"Call Stack"}),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Casper networks place a limitation on the maximum height of a call stack. This value can be set within the ",(0,o.kt)("inlineCode",{parentName:"p"},"chainspec")," for the network in question. For the Casper Mainnet, this limit is set at ",(0,o.kt)("inlineCode",{parentName:"p"},"10")," contracts. This does not include the initiating session code, which would still count as the ",(0,o.kt)("em",{parentName:"p"},"zeroth")," instance within the stack."),(0,o.kt)("p",null,"As such, a call stack may consist of up to ten consecutive called smart contracts, assuming that the Casper network you are working with is set to the default call stack depth. Smart contract developers should consider it best practice to limit the depth of their call stack as much as practicable. If your contract calls a contract not under your direct control, it may call into any other contracts. You can avoid hitting the limitation by being efficient in your contracts and avoiding superfluous contract separation."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Contract code cannot call session code, only other contract code.")))}f.isMDXComponent=!0}}]);