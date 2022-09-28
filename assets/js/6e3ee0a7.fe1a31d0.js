"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6370],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8440:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],p={title:"Introduction",slug:"/sdk"},d="SDK Client Libraries",s={unversionedId:"dapp-dev-guide/building-dapps/sdk/index",id:"dapp-dev-guide/building-dapps/sdk/index",title:"Introduction",description:"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions.",source:"@site/source/docs/casper/dapp-dev-guide/building-dapps/sdk/index.md",sourceDirName:"dapp-dev-guide/building-dapps/sdk",slug:"/sdk",permalink:"/sdk",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/building-dapps/sdk/index.md",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/sdk"},sidebar:"dapp-dev-guide",previous:{title:"Sending Deploys to the Network",permalink:"/dapp-dev-guide/building-dapps/sending-deploys"},next:{title:"TypeScript/JavaScript SDK",permalink:"/dapp-dev-guide/building-dapps/sdk/script-sdk"}},l={},c=[],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sdk-client-libraries"},"SDK Client Libraries"),(0,i.kt)("p",null,"This section covers the software development kits (SDKs) available for interacting with the Casper blockchain. These SDKs are client-side libraries providing functions or methods (depending on the language) to interact with the Casper Network. You can use them as a model to develop your application and accomplish tasks such as generating account keys, sending transfers, or other blockchain transactions."),(0,i.kt)("p",null,"The following table provides links to the SDK documentation, in addition to the corresponding GitHub repositories and pertinent contact information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SDK Documentation"),(0,i.kt)("th",{parentName:"tr",align:null},"GitHub Location"),(0,i.kt)("th",{parentName:"tr",align:null},"Maintainer"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/building-dapps/sdk/script-sdk"},"TypeScript")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-js-sdk/"},"Casper-js-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:jan@hfmn.pl"},"Jan Hoffman"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Java SDK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-java-sdk/"},"Casper-java-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:carl.norburn@gmail.com"},"Carl Norburn"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/building-dapps/sdk/csharp-sdk"},"C# SDK")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-net-sdk"},"Casper-net-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},"David Hernando, Ihor Burlachenko, Muhammet Kara, Michael Steuer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/building-dapps/sdk/go-sdk"},"Golang SDK")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-ecosystem/casper-golang-sdk/"},"Casper-golang-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:yar.panasenko@gmail.com"},"Yaroslav Panasenko"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/dapp-dev-guide/building-dapps/sdk/python-sdk"},"Python SDK")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/casper-network/casper-python-sdk/"},"Casper-python-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:mark@casper.network"},"Mark A. Greenslade"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Java SDK by SyntiFi"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/syntifi/casper-sdk"},"Casper-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:remo@syntifi.com"},"Remo Stieger"),"/",(0,i.kt)("a",{parentName:"td",href:"mailto:andre@syntifi.com"},"Andre Bertolace"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PHP SDK"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/make-software/casper-php-sdk"},"Casper-php-sdk")),(0,i.kt)("td",{parentName:"tr",align:null},"Roman Bylbas, Ihor Burlachenko, Michael Steuer")))))}m.isMDXComponent=!0}}]);