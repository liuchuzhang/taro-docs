"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[33293],{79874:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,f=d["".concat(u,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.authorize(option)",sidebar_label:"authorize"},l=void 0,u={unversionedId:"apis/open-api/authorize/authorize",id:"version-3.x/apis/open-api/authorize/authorize",title:"Taro.authorize(option)",description:"Initiates an authorization request to the user in advance. After this API is called, a pop-up box appears to ask whether the user agrees to authorize the Mini Program to use a specific feature or obtain certain data of the user, but the appropriate APIs are not actually called. If the user has already given the authorization, the pop-up box will not appear, and a message indicating success is returned directly. For more usages, see User Authorization.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/open-api/authorize/authorize.md",sourceDirName:"apis/open-api/authorize",slug:"/apis/open-api/authorize/",permalink:"/taro-docs/en/docs/apis/open-api/authorize/",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/apis/open-api/authorize/authorize.md",tags:[],version:"3.x",frontMatter:{title:"Taro.authorize(option)",sidebar_label:"authorize"},sidebar:"API",previous:{title:"authorizeForMiniProgram",permalink:"/taro-docs/en/docs/apis/open-api/authorize/authorizeForMiniProgram"},next:{title:"openSetting",permalink:"/taro-docs/en/docs/apis/open-api/settings/openSetting"}},p={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],c={toc:s};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Initiates an authorization request to the user in advance. After this API is called, a pop-up box appears to ask whether the user agrees to authorize the Mini Program to use a specific feature or obtain certain data of the user, but the appropriate APIs are not actually called. If the user has already given the authorization, the pop-up box will not appear, and a message indicating success is returned directly. For more usages, see ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/authorize.html"}),"User Authorization"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/authorize/wx.authorize.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"scope"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,n.kt)("td",null,"The scope to be authorized. For details, see ",(0,n.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/authorize.html#scope-list"},"scope list"))),(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h2",a({},{id:"sample-code"}),"Sample Code"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"// Use Taro.getSetting to query whether the user has authorized the \"scope.record\".\nTaro.getSetting({\n  success: function (res) {\n    if (!res.authSetting['scope.record']) {\n      Taro.authorize({\n        scope: 'scope.record',\n        success: function () {\n          // The user has allowed the Mini Program to use the recording feature. When the Taro.startRecord API is called later, the pop-up box will not appear.\n          Taro.startRecord()\n        }\n      })\n    }\n  }\n})\n")),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.authorize"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);