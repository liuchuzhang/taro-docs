"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[87965],{79874:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),v=a,k=d["".concat(i,".").concat(v)]||d[v]||p[v]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22847:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},c=void 0,i={unversionedId:"apis/network/mdns/startLocalServiceDiscovery",id:"apis/network/mdns/startLocalServiceDiscovery",title:"Taro.startLocalServiceDiscovery(option)",description:"Starts searching for the mDNS service in the LAN. The search results will be returned via the wx.onLocalService* event.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/network/mdns/startLocalServiceDiscovery.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/startLocalServiceDiscovery",permalink:"/taro-docs/en/docs/next/apis/network/mdns/startLocalServiceDiscovery",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/network/mdns/startLocalServiceDiscovery.md",tags:[],version:"current",frontMatter:{title:"Taro.startLocalServiceDiscovery(option)",sidebar_label:"startLocalServiceDiscovery"},sidebar:"API",previous:{title:"stopLocalServiceDiscovery",permalink:"/taro-docs/en/docs/next/apis/network/mdns/stopLocalServiceDiscovery"},next:{title:"onLocalServiceResolveFail",permalink:"/taro-docs/en/docs/next/apis/network/mdns/onLocalServiceResolveFail"}},s={},u=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"FailCallbackResult",id:"failcallbackresult",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:u};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starts searching for the mDNS service in the LAN. The search results will be returned via the wx.onLocalService* event."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"wx.startLocalServiceDiscovery is a performance-consuming behavior that automatically stops after 30 seconds and executes the callback function registered with wx.onLocalServiceDiscoveryStop.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After calling wx.startLocalServiceDiscovery, you cannot call this API again until the search behavior stops. The operations to stop this search behavior include calling wx.stopLocalServiceDiscovery and stopping the search automatically after 30 seconds."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/network/mdns/wx.startLocalServiceDiscovery.html"}),"Reference"))),(0,n.kt)("h2",a({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => void\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",a({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: CallbackResult) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",a({},{id:"failcallbackresult"}),"FailCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Error message",(0,n.kt)("br",null),(0,n.kt)("br",null),"Valid values: ",(0,n.kt)("br",null),"- 'invalid param': serviceType is empty;",(0,n.kt)("br",null),"- 'scan task already exist': Calls startLocalServiceDiscovery again when the current search initiated by startLocalServiceDiscovery is not stopped;")))),(0,n.kt)("h2",a({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",a({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"Taro.startLocalServiceDiscovery"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",a({parentName:"tr"},{align:"center"})),(0,n.kt)("td",a({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);