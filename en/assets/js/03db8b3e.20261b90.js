"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83903],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94402:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(93106);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return r.createElement("div",a({role:"tabpanel"},{hidden:t,className:n}),e)}},12994:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(93106),a=n(15217),o=n(32021),l=n(26679),i="tabItem_qF89";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e){var t,n;const{lazy:a,block:s,defaultValue:u,values:c,groupId:d,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=c?c:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),g=(0,o.lx)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const k=null===u?u:null!==(b=null!=u?u:null===(t=h.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:null===(n=h[0])||void 0===n?void 0:n.props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,o.UB)(),[N,w]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,o.o5)();if(null!=d){const e=y[d];null!=e&&e!==N&&f.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=f[n].value;r!==N&&(j(t),w(r),null!=d&&v(d,r))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]||O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]||O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},m)},f.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:x,onFocus:T,onClick:T},n,{className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":N===e})}),null!=t?t:e)))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,a.Z)();return r.createElement(s,p({key:String(t)},e))}},68607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});n(93106);var r=n(79874),a=n(12994),o=n(94402);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Entry Component"},s=void 0,u={unversionedId:"react-entry",id:"version-3.x/react-entry",title:"Entry Component",description:"Every Taro application needs an entry component to register the application. The default entry file is app.js in the src directory.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/react-entry.mdx",sourceDirName:".",slug:"/react-entry",permalink:"/taro-docs/en/docs/react-entry",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/react-entry.mdx",tags:[],version:"3.x",frontMatter:{title:"Entry Component"},sidebar:"docs",previous:{title:"Overview",permalink:"/taro-docs/en/docs/react-overall"},next:{title:"Page Components",permalink:"/taro-docs/en/docs/react-page"}},c={},d=[{value:"Example Code",id:"example-code",level:2},{value:"Entry Component Configuration",id:"entry-component-configuration",level:2},{value:"Life cycle methods",id:"life-cycle-methods",level:2},{value:"onLaunch (options)",id:"onlaunch-options",level:3},{value:"Parameters",id:"parameters",level:4},{value:"options",id:"options",level:5},{value:"options.referrerInfo",id:"optionsreferrerinfo",level:5},{value:"componentDidShow (options)",id:"componentdidshow-options",level:3},{value:"componentDidHide ()",id:"componentdidhide-",level:3},{value:"onPageNotFound (Object)",id:"onpagenotfound-object",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Object",id:"object",level:5}],m={toc:d};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Every Taro application needs an entry component to register the application. The default entry file is ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," directory."),(0,r.kt)("p",null,"In the entry component we can set the global state or access the lifecycle of the mini program entry instance."),(0,r.kt)("h2",l({},{id:"example-code"}),"Example Code"),(0,r.kt)(a.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { Component } from 'react'\n\n// If we use the Redux\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// Global Style\nimport './app.css'\n\nconst store = configStore()\n\nclass App extends Component {\n  // All React component methods can be used\n  componentDidMount () {}\n\n  // onLaunch\n  onLaunch () {}\n\n  //  onShow\n  componentDidShow () {}\n\n  //  onHide\n  componentDidHide () {}\n\n  render () {\n    // Nothing will be rendered in the entry component, but we can do something like state management here\n    return (\n      <Provider store={store}>\n        /* this.props.children is the page that will be rendered */\n        {this.props.children}\n      </Provider>\n    )\n  }\n}\n\nexport default App\n"))),(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import React, { useEffect } from 'react'\n\n// The additional hooks added to Taro should be brought in from '@tarojs/taro'\nimport { useDidShow, useDidHide } from '@tarojs/taro'\n\n// Global Style\nimport { Provider } from 'react-redux'\nimport configStore from './store'\n\n// Global Style\nimport './app.css'\n\nconst store = configStore()\n\nfunction App (props) {\n  // All React Hooks can be used\n  useEffect(() => {})\n\n  // onShow\n  useDidShow(() => {})\n\n  //  onHide\n  useDidHide(() => {})\n\n  return (\n    // Nothing will be rendered in the entry component, but we can do something like state management here\n    <Provider store={store}>\n      {/* props.children is the page that will be rendered */}\n      {props.children}\n    </Provider>\n  )\n}\n\nexport default App\n")))),(0,r.kt)("h2",l({},{id:"entry-component-configuration"}),"Entry Component Configuration"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",l({parentName:"p"},{href:"./app-config"}),"global configuration")),(0,r.kt)("h2",l({},{id:"life-cycle-methods"}),"Life cycle methods"),(0,r.kt)("p",null,"In addition to supporting React's lifecycle methods, the portal component additionally supports the following lifecycles according to the mini program's standards."),(0,r.kt)("h3",l({},{id:"onlaunch-options"}),"onLaunch (options)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," of the corresponding app in the mini program environment.")),(0,r.kt)("p",null,"rogram initialization parameters can be accessed during this lifecycle by accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter or by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"."),(0,r.kt)("h4",l({},{id:"parameters"}),"Parameters"),(0,r.kt)("h5",l({},{id:"options"}),"options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Path for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"scene"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Scene values for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Parameters for launch mini-program")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"shareTicket"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"shareTicket\uff0cSee Get More Forwarding Information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"referrerInfo"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source information. Source information. Returned when accessing an mini-program from another mini-program, public number or app. Otherwise returns {}")))),(0,r.kt)("h5",l({},{id:"optionsreferrerinfo"}),"options.referrerInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"appId"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source mini-program, or public number (in WeChat)\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"extraData"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The data passed from the source mini-program is supported by WeChat and Baidu smart-program at scene=1037 or 1038")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"sourceServiceId"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source plugin, visible when in plugin run mode")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," The options parameter may vary from field to field in different mini-program"),(0,r.kt)("p",{parentName:"blockquote"},"Scene values , there are differences in WeChat Mini-program and Baidu Smart-program, please refer to them respectively  ",(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html"}),"Wechat Mini-program")," \u548c ",(0,r.kt)("a",l({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/data/scene/"}),"Baidu Smart-program Documents"))),(0,r.kt)("h3",l({},{id:"componentdidshow-options"}),"componentDidShow (options)"),(0,r.kt)("p",null,"Triggered when the program is started, or foregrounded."),(0,r.kt)("p",null,"As with the ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch")," lifecycle, program initialization parameters can be accessed during this lifecycle by accessing the ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter or calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCurrentInstance().router"),"."),(0,r.kt)("p",null,"The parameters are basically the same as those obtained in ",(0,r.kt)("inlineCode",{parentName:"p"},"onLaunch"),", but with two additional parameters in ",(0,r.kt)("strong",{parentName:"p"},"Baidu Smart-program")," as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"entryType"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Source identifier, take the value of user/ schema /sys :",(0,r.kt)("br",null),"user\uff1aIndicates before and after passing home",(0,r.kt)("br",null),"Switching or unlocking the screen, etc. to bring up.",(0,r.kt)("br",null),"schema\uff1aIndicates a protocol call-up;",(0,r.kt)("br",null),"sys\uff1aOther")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"appURL"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"The call-up protocol at the time of the presentation, which exists only if the value of entryType is schema")))),(0,r.kt)("h3",l({},{id:"componentdidhide-"}),"componentDidHide ()"),(0,r.kt)("p",null,"Triggered when the program switches to the background."),(0,r.kt)("h3",l({},{id:"onpagenotfound-object"}),"onPageNotFound (Object)"),(0,r.kt)("p",null,"Triggered when the page to be opened by the program does not exist."),(0,r.kt)("h4",l({},{id:"parameters-1"}),"Parameters"),(0,r.kt)("h5",l({},{id:"object"}),"Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Proerty"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",l({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Path to non-existent page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"query"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Object"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Open the query parameter of a non-existent page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:null}),"isEntryPage"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",l({parentName:"tr"},{align:null}),"Whether it is the first page of this launch")))))}h.isMDXComponent=!0}}]);