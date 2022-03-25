"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34825],{79874:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(93106);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=i(r),y=o,m=f["".concat(s,".").concat(y)]||f[y]||u[y]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"Taro.getUserCryptoManager()",sidebar_label:"getUserCryptoManager"},p=void 0,s={unversionedId:"apis/base/crypto/getUserCryptoManager",id:"apis/base/crypto/getUserCryptoManager",title:"Taro.getUserCryptoManager()",description:"\u83b7\u53d6\u7528\u6237\u52a0\u5bc6\u6a21\u5757",source:"@site/docs/apis/base/crypto/getUserCryptoManager.md",sourceDirName:"apis/base/crypto",slug:"/apis/base/crypto/getUserCryptoManager",permalink:"/taro-docs/en/docs/next/apis/base/crypto/getUserCryptoManager",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/apis/base/crypto/getUserCryptoManager.md",tags:[],version:"current",frontMatter:{title:"Taro.getUserCryptoManager()",sidebar_label:"getUserCryptoManager"},sidebar:"API",previous:{title:"PerformanceObserver",permalink:"/taro-docs/en/docs/next/apis/base/performance/PerformanceObserver"},next:{title:"UserCryptoManager",permalink:"/taro-docs/en/docs/next/apis/base/crypto/UserCryptoManager"}},i={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2}],u={toc:l};function f(e){var{components:t}=e,c=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u52a0\u5bc6\u6a21\u5757"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(32998).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(67877).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(1228).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/crypto/wx.getUserCryptoManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",o({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"() => UserCryptoManager\n")))}f.isMDXComponent=!0},67877:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},1228:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},32998:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);