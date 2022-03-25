"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15297],{79874:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return u}});var n=r(93106);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=c(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(g,i(i({ref:e},s),{},{components:r})):n.createElement(g,i({ref:e},s))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94402:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(93106);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}function l({children:t,hidden:e,className:r}){return n.createElement("div",a({role:"tabpanel"},{hidden:e,className:r}),t)}},12994:function(t,e,r){r.d(e,{Z:function(){return s}});var n=r(93106),a=r(15217),l=r(32021),i=r(26679),o="tabItem_qF89";function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}function c(t){var e,r;const{lazy:a,block:c,defaultValue:s,values:d,groupId:m,className:u}=t,g=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=d?d:g.map((({props:{value:t,label:e,attributes:r}})=>({value:t,label:e,attributes:r}))),N=(0,l.lx)(k,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const f=null===s?s:null!==(b=null!=s?s:null===(e=g.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==b?b:null===(r=g[0])||void 0===r?void 0:r.props.value;if(null!==f&&!k.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,l.UB)(),[y,P]=(0,n.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=m){const t=v[m];null!=t&&t!==y&&k.some((e=>e.value===t))&&P(t)}const x=t=>{const e=t.currentTarget,r=w.indexOf(e),n=k[r].value;n!==y&&(O(e),P(n),null!=m&&h(m,n))},C=t=>{let e=null;switch(t.key){case"ArrowRight":{const r=w.indexOf(t.currentTarget)+1;e=w[r]||w[0];break}case"ArrowLeft":{const r=w.indexOf(t.currentTarget)-1;e=w[r]||w[w.length-1];break}}null==e||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},u)},k.map((({value:t,label:e,attributes:r})=>n.createElement("li",p({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:t=>w.push(t),onKeyDown:C,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":y===t})}),null!=e?e:t)))),a?(0,n.cloneElement)(g.filter((t=>t.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==y})))))}function s(t){const e=(0,a.Z)();return n.createElement(c,p({key:String(e)},t))}},22796:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});r(93106);var n=r(79874),a=r(12994),l=r(94402);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i.apply(this,arguments)}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}const p={title:"Progress",sidebar_label:"Progress"},c=void 0,s={unversionedId:"components/base/progress",id:"version-3.x/components/base/progress",title:"Progress",description:"\u8fdb\u5ea6\u6761\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px",source:"@site/versioned_docs/version-3.x/components/base/progress.md",sourceDirName:"components/base",slug:"/components/base/progress",permalink:"/taro-docs/docs/components/base/progress",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/components/base/progress.md",tags:[],version:"3.x",frontMatter:{title:"Progress",sidebar_label:"Progress"},sidebar:"components",previous:{title:"Text",permalink:"/taro-docs/docs/components/base/text"},next:{title:"RichText",permalink:"/taro-docs/docs/components/base/rich-text"}},d={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"ProgressProps",id:"progressprops",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:3}],u={toc:m};function g(t){var{components:e}=t,p=o(t,["components"]);return(0,n.kt)("wrapper",i({},u,p,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8fdb\u5ea6\u6761\u3002\u7ec4\u4ef6\u5c5e\u6027\u7684\u957f\u5ea6\u5355\u4f4d\u9ed8\u8ba4\u4e3a px"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(32998).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u767e\u5ea6\u5c0f\u7a0b\u5e8f",src:r(49615).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",src:r(80380).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:r(90063).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(67877).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(1228).Z,className:"icon_platform",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",i({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/progress.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",i({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"ComponentType<ProgressProps>\n")),(0,n.kt)("h2",i({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Progress percent={20} showInfo strokeWidth={2} />\n        <Progress percent={40} strokeWidth={2} active />\n        <Progress percent={60}  strokeWidth={2} active />\n        <Progress percent={80}  strokeWidth={2} active activeColor='blue' />\n      </View>\n    )\n  }\n}\n"))),(0,n.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",i({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <progress percent="20" stroke-width="2" :show-info="true" />\n    <progress percent="40" stroke-width="2" :active="true" />\n    <progress percent="60" stroke-width="2" :active="true" />\n    <progress percent="80" stroke-width="2" :active="true" active-color="blue" />\n  </view>\n</template>\n')))),(0,n.kt)("h2",i({},{id:"progressprops"}),"ProgressProps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fc5\u586b"),(0,n.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"percent"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u767e\u5206\u6bd4 0~100")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"showInfo"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5728\u8fdb\u5ea6\u6761\u53f3\u4fa7\u663e\u793a\u767e\u5206\u6bd4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"borderRadius"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"string or number"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"0")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5706\u89d2\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"fontSize"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"string or number"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"16")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u53f3\u4fa7\u767e\u5206\u6bd4\u5b57\u4f53\u5927\u5c0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"strokeWidth"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"string or number"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"6")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u7ebf\u7684\u5bbd\u5ea6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"color"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"#09BB07"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u989c\u8272 (\u8bf7\u4f7f\u7528 activeColor)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"activeColor"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"#09BB07"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u5df2\u9009\u62e9\u7684\u8fdb\u5ea6\u6761\u7684\u989c\u8272")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"backgroundColor"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},'"#EBEBEB"')),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u672a\u9009\u62e9\u7684\u8fdb\u5ea6\u6761\u7684\u989c\u8272")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"active"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u6761\u4ece\u5de6\u5f80\u53f3\u7684\u52a8\u753b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"activeMode"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),'"backwards" or "forwards"'),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"backwards")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"backwards: \u52a8\u753b\u4ece\u5934\u64ad",(0,n.kt)("br",null),(0,n.kt)("br",null),"forwards: \u52a8\u753b\u4ece\u4e0a\u6b21\u7ed3\u675f\u70b9\u63a5\u7740\u64ad")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"duration"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),(0,n.kt)("inlineCode",{parentName:"td"},"30")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u8fdb\u5ea6\u589e\u52a0 1% \u6240\u9700\u6beb\u79d2\u6570")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:null}),"onActiveEnd"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"CommonEventFunction")),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u5426"),(0,n.kt)("td",i({parentName:"tr"},{align:null}),"\u52a8\u753b\u5b8c\u6210\u4e8b\u4ef6")))),(0,n.kt)("h3",i({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",i({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.percent"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.showInfo"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.borderRadius"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.fontSize"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.strokeWidth"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.color"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.activeColor"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.backgroundColor"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.active"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.activeMode"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.duration"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"ProgressProps.onActiveEnd"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"})),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",i({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0},80380:function(t,e,r){e.Z=r.p+"assets/images/alipay-ee5545de747ce1ad6e17faec10358975.png"},67877:function(t,e,r){e.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(t,e,r){e.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},49615:function(t,e,r){e.Z=r.p+"assets/images/swan-566f56d360909d0457073b67b8f48958.png"},90063:function(t,e,r){e.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},32998:function(t,e,r){e.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);