"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[83971],{79874:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return k}});var n=r(93106);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},d=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=u(r),k=l,b=s["".concat(c,".").concat(k)]||s[k]||p[k]||a;return r?n.createElement(b,o(o({ref:e},d),{},{components:r})):n.createElement(b,o({ref:e},d))}));function k(t,e){var r=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=r.length,o=new Array(a);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},40022:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}const o={title:"Taro.getClipboardData(res)",sidebar_label:"getClipboardData"},i=void 0,c={unversionedId:"apis/device/clipboard/getClipboardData",id:"version-2.x/apis/device/clipboard/getClipboardData",title:"Taro.getClipboardData(res)",description:"\u83b7\u53d6\u7cfb\u7edf\u526a\u8d34\u677f\u5185\u5bb9",source:"@site/versioned_docs/version-2.x/apis/device/clipboard/getClipboardData.md",sourceDirName:"apis/device/clipboard",slug:"/apis/device/clipboard/getClipboardData",permalink:"/taro-docs/docs/2.x/apis/device/clipboard/getClipboardData",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-2.x/apis/device/clipboard/getClipboardData.md",tags:[],version:"2.x",frontMatter:{title:"Taro.getClipboardData(res)",sidebar_label:"getClipboardData"},sidebar:"version-2.x/API",previous:{title:"setClipboardData",permalink:"/taro-docs/docs/2.x/apis/device/clipboard/setClipboardData"},next:{title:"stopHCE",permalink:"/taro-docs/docs/2.x/apis/device/nfc/stopHCE"}},u={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"Promised",id:"promised",level:3},{value:"Option",id:"option",level:3},{value:"SuccessCallbackOption",id:"successcallbackoption",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],p={toc:d};function s(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",l({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u7cfb\u7edf\u526a\u8d34\u677f\u5185\u5bb9"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",l({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => Promise<Promised>\n")),(0,n.kt)("h2",l({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,n.kt)("h3",l({},{id:"promised"}),"Promised"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u8c03\u7528\u4fe1\u606f")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u526a\u8d34\u677f\u7684\u5185\u5bb9")))),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: SuccessCallbackOption) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,n.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,n.kt)("h3",l({},{id:"successcallbackoption"}),"SuccessCallbackOption"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"\u53c2\u6570"),(0,n.kt)("th",null,"\u7c7b\u578b"),(0,n.kt)("th",null,"\u8bf4\u660e"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"data"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"\u526a\u8d34\u677f\u7684\u5185\u5bb9")))),(0,n.kt)("h2",l({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"Taro.getClipboardData({\n  success: function (res){\n    console.log(res.data)\n  }\n})\n")),(0,n.kt)("h2",l({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getClipboardData"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206\u5b9e\u73b0)"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);