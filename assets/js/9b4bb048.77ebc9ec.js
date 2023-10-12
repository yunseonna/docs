"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6171],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6807:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Introduction"},u="The Native Multi-Signature Feature",c={unversionedId:"resources/advanced/multi-sig/index",id:"resources/advanced/multi-sig/index",title:"Introduction",description:"In this tutorial, you will use Casper's permissions model to integrate key management on Casper accounts and sign deploys with multiple keys. The corresponding GitHub respository is here.",source:"@site/source/docs/casper/resources/advanced/multi-sig/index.md",sourceDirName:"resources/advanced/multi-sig",slug:"/resources/advanced/multi-sig/",permalink:"/resources/advanced/multi-sig/",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/advanced/multi-sig/index.md",tags:[],version:"current",lastUpdatedAt:1697101139,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{title:"Introduction"},sidebar:"resources",previous:{title:"Two-Party Multi-Sig",permalink:"/resources/tutorials/advanced/two-party-multi-sig"},next:{title:"Multi-Sig Workflow",permalink:"/resources/advanced/multi-sig/multi-sig-workflow"}},l={},p=[],d={toc:p},m="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-native-multi-signature-feature"},"The Native Multi-Signature Feature"),(0,i.kt)("p",null,"In this ",(0,i.kt)("a",{parentName:"p",href:"/resources/advanced/multi-sig/multi-sig-workflow"},"tutorial"),", you will use ",(0,i.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-permissions"},"Casper's permissions model")," to integrate key management on Casper accounts and sign deploys with multiple keys. The corresponding GitHub respository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/tutorials-example-wasm/tree/dev/multi-sig"},"here"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/resources/advanced/multi-sig/other-scenarios"},"additional examples")," present use cases where Casper's multi-signature feature would be helpful."))}f.isMDXComponent=!0}}]);