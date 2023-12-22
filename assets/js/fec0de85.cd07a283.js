"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4875],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(f,i(i({ref:t},l),{},{components:a})):n.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1474:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Storage Workflow",slug:"/resources/tutorials/advanced/storage-workflow"},c="Reading and Writing to Global State using Rust",d={unversionedId:"resources/advanced/storage-workflow",id:"resources/advanced/storage-workflow",title:"Storage Workflow",description:"The following examples outline methods to read and write data to global state on a Casper network using the Rust programming language.",source:"@site/source/docs/casper/resources/advanced/storage-workflow.md",sourceDirName:"resources/advanced",slug:"/resources/tutorials/advanced/storage-workflow",permalink:"/resources/tutorials/advanced/storage-workflow",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/advanced/storage-workflow.md",tags:[],version:"current",lastUpdatedAt:1703279165,formattedLastUpdatedAt:"Dec 22, 2023",frontMatter:{title:"Storage Workflow",slug:"/resources/tutorials/advanced/storage-workflow"},sidebar:"resources",previous:{title:"Token Transfers",permalink:"/resources/tutorials/advanced/transfer-token-to-contract"},next:{title:"Cross-Contract Communication",permalink:"/resources/tutorials/advanced/cross-contract"}},l={},p=[{value:"Description of Functions",id:"description-of-functions",level:2},{value:"<code>runtime::put_key</code> / <code>runtime::get_key</code>",id:"runtimeput_key--runtimeget_key",level:3},{value:"<code>storage::write</code> / <code>storage::read</code>",id:"storagewrite--storageread",level:3},{value:"<code>storage:dictionary_put</code> / <code>storage::dictionary_get</code>",id:"storagedictionary_put--storagedictionary_get",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Example of <code>put_key</code> and <code>storage::write</code>",id:"example-of-put_key-and-storagewrite",level:3},{value:"Example of <code>get_key</code> and <code>storage::read</code>",id:"example-of-get_key-and-storageread",level:3},{value:"Example of <code>dictionary_put</code> and <code>dictionary_get</code>",id:"example-of-dictionary_put-and-dictionary_get",level:3},{value:"Additional Functions for Named Keys",id:"additional-functions-for-named-keys",level:2}],u={toc:p},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reading-and-writing-to-global-state-using-rust"},"Reading and Writing to Global State using Rust"),(0,o.kt)("p",null,"The following examples outline methods to read and write data to global state on a Casper network using the Rust programming language."),(0,o.kt)("p",null,"Essentially, there are three means of storage within the Casper ecosystem. These consist of ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::put_key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::write"),"(alongside ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::new_uref")," as explained below) and ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::dictionary_put"),". These stored values can be read using ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::get_key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::read")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::dictionary_get"),", respectively. Each method stores data in a specific way, and it's important to understand the differences."),(0,o.kt)("h2",{id:"description-of-functions"},"Description of Functions"),(0,o.kt)("h3",{id:"runtimeput_key--runtimeget_key"},(0,o.kt)("inlineCode",{parentName:"h3"},"runtime::put_key")," / ",(0,o.kt)("inlineCode",{parentName:"h3"},"runtime::get_key")),(0,o.kt)("p",null,"Both the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.put_key.html"},(0,o.kt)("inlineCode",{parentName:"a"},"put_key"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.get_key.html"},(0,o.kt)("inlineCode",{parentName:"a"},"get_key"))," functions refer to Casper ",(0,o.kt)("inlineCode",{parentName:"p"},"Key")," types as outlined in both the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-state-keys"},"Understanding Hash Types")," and ",(0,o.kt)("a",{parentName:"p",href:"/concepts/serialization-standard#serialization-standard-state-keys"},"Serialization Standard"),". These keys are stored within a URef as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Key")," type."),(0,o.kt)("h3",{id:"storagewrite--storageread"},(0,o.kt)("inlineCode",{parentName:"h3"},"storage::write")," / ",(0,o.kt)("inlineCode",{parentName:"h3"},"storage::read")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.write.html"},(0,o.kt)("inlineCode",{parentName:"a"},"storage::write"))," writes a given value to a previously established URef (created using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.new_uref.html"},(0,o.kt)("inlineCode",{parentName:"a"},"storage::new_uref")),"). Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"put_key"),", this value is not one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Key")," types listed above, but rather any of the potential ",(0,o.kt)("a",{parentName:"p",href:"https://docs.casperlabs.io/developers/json-rpc/types_cl/#cltype"},(0,o.kt)("inlineCode",{parentName:"a"},"CLType")),"s as outlined. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/storage/fn.read.html"},(0,o.kt)("inlineCode",{parentName:"a"},"storage::read"))," provides a method to retrieve these values from the associated URef."),(0,o.kt)("h3",{id:"storagedictionary_put--storagedictionary_get"},(0,o.kt)("inlineCode",{parentName:"h3"},"storage:dictionary_put")," / ",(0,o.kt)("inlineCode",{parentName:"h3"},"storage::dictionary_get")),(0,o.kt)("p",null,"For most data storage needs on a Casper network, dictionaries are more efficient and provide lower gas costs than ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKeys"),". Each dictionary item exists independently, sharing a single dictionary seed URef for reference purposes."),(0,o.kt)("p",null,"More information on dictionaries can be found on the ",(0,o.kt)("a",{parentName:"p",href:"/concepts/dictionaries"},"Reading and Writing to Dictionaries")," page."),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)("h3",{id:"example-of-put_key-and-storagewrite"},"Example of ",(0,o.kt)("inlineCode",{parentName:"h3"},"put_key")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"storage::write")),(0,o.kt)("p",null,"This sample code creates a new contract and stores the contract hash in global state using the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime::put_key")," function."),(0,o.kt)("p",null,"Once the stored value has been initialized, the ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::write")," function overwrites the existing value with ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The URef is then stored in the current context as a ",(0,o.kt)("inlineCode",{parentName:"p"},"NamedKey")," titled ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_STORED_VALUE_UREF"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\n    // Store contract hash under a Named key CONTRACT_HASH\n    runtime::put_key(CONTRACT_HASH, contract_hash.into());\n\n    // Store !MY_STORED_VALUE (false) as init value/type into a new URef\n    let my_value_uref = storage::new_uref(!MY_STORED_VALUE);\n\n    // Store MY_STORED_VALUE (true) under the URef value\n    storage::write(my_value_uref, MY_STORED_VALUE);\n\n    // Store the Uref under a Named key MY_STORED_VALUE_UREF\n    let my_value_key: Key = my_value_uref.into();\n    runtime::put_key(MY_STORED_VALUE_UREF, my_value_key);\n}\n\n")),(0,o.kt)("h3",{id:"example-of-get_key-and-storageread"},"Example of ",(0,o.kt)("inlineCode",{parentName:"h3"},"get_key")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"storage::read")),(0,o.kt)("p",null,"This example compliments the code sample above by retrieving the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTRACT_HASH")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_key")," function, before comparing a provided runtime argument ",(0,o.kt)("inlineCode",{parentName:"p"},"ARG_MY_STORED_VALUE")," against the previously stored ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_STORED_VALUE_UREF")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"storage::read"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"\n    let my_stored_value_uref: URef = runtime::get_key(MY_STORED_VALUE_UREF)\n        .unwrap_or_revert()\n        .into_uref()\n        .map(|uref| URef::new(uref.addr(), AccessRights::default()))\n        .unwrap_or_revert()\n        .into_read();\n\n    let my_actual_stored_value: bool = storage::read(my_stored_value_uref).unwrap().unwrap();\n\n    // Compare my stored value with runtime arg\n    let my_expected_stored_value: bool = runtime::get_named_arg(ARG_MY_STORED_VALUE);\n    if my_actual_stored_value != my_expected_stored_value {\n        // We revert if my stored value is not what is expected from caller argument\n        runtime::revert(UserError::StoredValueError);\n    }\n\n    runtime::print(&my_actual_stored_value.to_string());\n}\n\n")),(0,o.kt)("h3",{id:"example-of-dictionary_put-and-dictionary_get"},"Example of ",(0,o.kt)("inlineCode",{parentName:"h3"},"dictionary_put")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"dictionary_get")),(0,o.kt)("p",null,"Examples of dictionary usage for storage can be found in the ",(0,o.kt)("em",{parentName:"p"},"Writing Entries into a Dictionary")," section of ",(0,o.kt)("a",{parentName:"p",href:"/concepts/dictionaries#writing-entries-into-a-dictionary"},"Reading and Writing to Dictionaries"),"."),(0,o.kt)("h2",{id:"additional-functions-for-named-keys"},"Additional Functions for Named Keys"),(0,o.kt)("p",null,"The following functions might also be of interest for working with named keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.list_named_keys.html"},"list_named_keys")," - Returns the named keys of the current context"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.has_key.html"},"has_key")," - Returns true if the key exists in the current context\u2019s named keys"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/casper-contract/latest/casper_contract/contract_api/runtime/fn.remove_key.html"},"remove_key")," - Removes the requested ",(0,o.kt)("inlineCode",{parentName:"li"},"NamedKey")," from the current context")))}f.isMDXComponent=!0}}]);