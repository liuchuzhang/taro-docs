"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[31490],{79874:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42674:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(93106);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function a({children:e,hidden:n,className:t}){return r.createElement("div",o({role:"tabpanel"},{hidden:n,className:t}),e)}},14186:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(93106),o=t(98456),a=t(16454),i=t(26679),l="tabItem_uJot";function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e){var n,t;const{lazy:o,block:c,defaultValue:p,values:u,groupId:m,className:d}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=u?u:f.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),v=(0,a.lx)(h,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const y=null===p?p:null!==(b=null!=p?p:null===(n=f.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==b?b:null===(t=f[0])||void 0===t?void 0:t.props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,a.UB)(),[k,O]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,a.o5)();if(null!=m){const e=g[m];null!=e&&e!==k&&h.some((n=>n.value===e))&&O(e)}const j=e=>{const n=e.currentTarget,t=x.indexOf(n),r=h[t].value;r!==k&&(T(n),O(r),null!=m&&w(m,r))},N=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]||x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]||x[x.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},d)},h.map((({value:e,label:n,attributes:t})=>r.createElement("li",s({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:e=>x.push(e),onKeyDown:N,onFocus:j,onClick:j},t,{className:(0,i.Z)("tabs__item",l,null==t?void 0:t.className,{"tabs__item--active":k===e})}),null!=n?n:e)))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function p(e){const n=(0,o.Z)();return r.createElement(c,s({key:String(n)},e))}},21567:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});t(93106);var r=t(79874),o=t(14186),a=t(42674);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Description"},c=void 0,p={unversionedId:"components-desc",id:"version-3.x/components-desc",title:"Description",description:"Taro has customised its own component library specification using WeChat Mini-Program Components as a standard, combined with the JSX syntax specification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components-desc.md",sourceDirName:".",slug:"/components-desc",permalink:"/taro-docs/en/docs/components-desc",editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components-desc.md",tags:[],version:"3.x",frontMatter:{title:"Description"},sidebar:"components",next:{title:"CustomWrapper",permalink:"/taro-docs/en/docs/components/custom-wrapper"}},u={},m=[{value:"TIPS",id:"tips",level:2},{value:"Initial capitalisation and humpback naming",id:"initial-capitalisation-and-humpback-naming",level:3},{value:"The event names of components should all start with <code>on</code>",id:"the-event-names-of-components-should-all-start-with-on",level:3}],d={toc:m};function f(e){var{components:n}=e,t=l(e,["components"]);return(0,r.kt)("wrapper",i({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro has customised its own component library specification using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"WeChat Mini-Program Components")," as a standard, combined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," syntax specification."),(0,r.kt)("p",null,"Based on the above principles, on the WeChat Mini-Program side we can use all the mini program native components, while on the other side we have implemented the corresponding component libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"H5: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components")),(0,r.kt)("li",{parentName:"ul"},"RN: ",(0,r.kt)("inlineCode",{parentName:"li"},"@tarojs/components-rn"))),(0,r.kt)("p",null,"When using React we need to reference components from the Taro standard component library @tarojs/components before we can use them, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"<View />"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<Text />")," components\uff0c whereas with Vue there is no need to bring them in."),(0,r.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport { View, Text } from '@tarojs/components'\n\nexport default class C extends Component {\n  render () {\n    return (\n      <View className='c'>\n        <Text>c component</Text>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="c">\n    <text>c component</text>\n  </view>\n</template>\n')))),(0,r.kt)("h2",i({},{id:"tips"}),"TIPS"),(0,r.kt)("p",null,"The detailed documentation of the components lists the extent to which the components are supported on different sides, as well as basic usage examples. For some components that are not listed as examples and are marked as only supported on the mini program side, you can refer directly to the ",(0,r.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/"}),"Mini-Program Components Doc"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Taro's development specifications still need to be followed:")),(0,r.kt)("h3",i({},{id:"initial-capitalisation-and-humpback-naming"}),"Initial capitalisation and humpback naming"),(0,r.kt)("p",null,"For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," component, which is not yet supported on the H5 side"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react'\nimport Taro from '@tarojs/taro'\nimport { Map } from '@tarojs/components'\n\nclass App extends Components {\n  onTap () {}\n  render () {\n    return (\n      <Map onClick={this.onTap} />\n    )\n  }\n}\n")),(0,r.kt)("h3",i({},{id:"the-event-names-of-components-should-all-start-with-on"}),"The event names of components should all start with ",(0,r.kt)("inlineCode",{parentName:"h3"},"on")),(0,r.kt)("p",null,"All uses of ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," in WeChat Mini-Program need to be converted to a form starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"on"),"."))}f.isMDXComponent=!0}}]);