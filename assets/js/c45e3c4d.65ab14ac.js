"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2443],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2848:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={},p="Upgrading the Node",u={unversionedId:"operators/upgrade",id:"operators/upgrade",title:"Upgrading the Node",description:"The chainspec.toml contains a section to indicate from which era the given casper-node version should start running.",source:"@site/source/docs/casper/operators/upgrade.md",sourceDirName:"operators",slug:"/operators/upgrade",permalink:"/docs/operators/upgrade",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/upgrade.md",tags:[],version:"current",frontMatter:{},sidebar:"operators",previous:{title:"Joining a Running Network",permalink:"/docs/operators/joining"},next:{title:"Bonding",permalink:"/docs/operators/bonding"}},s={},l=[],d={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-the-node"},"Upgrading the Node"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," contains a section to indicate from which era the given ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node")," version should start running."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[protocol]\n# This protocol version becomes active at the start of this era.\nactivation_point = 100\n")),(0,a.kt)("p",null,"At every block finalization, the ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node")," looks for newly configured versions. When a new version is configured, the running node will look at future era_id in the ",(0,a.kt)("inlineCode",{parentName:"p"},"chainspec.toml")," file. This will be the era before where the current casper-node will cleanly shut down."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node-launcher")," will detect a clean exit 0 condition and start the next version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node"),"."))}f.isMDXComponent=!0}}]);