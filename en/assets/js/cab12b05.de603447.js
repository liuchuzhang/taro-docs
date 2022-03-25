"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[26070],{79874:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return u}});var a=r(93106);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),N=p(r),u=n,c=N["".concat(d,".").concat(u)]||N[u]||k[u]||l;return r?a.createElement(c,i(i({ref:e},m),{},{components:r})):a.createElement(c,i({ref:e},m))}));function u(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=N;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},91508:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},n.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}const i={title:"General",sidebar_label:"General"},o=void 0,d={unversionedId:"apis/General",id:"version-3.x/apis/General",title:"General",description:"Parameters",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/General.md",sourceDirName:"apis",slug:"/apis/General",permalink:"/taro-docs/en/docs/apis/General",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/apis/General.md",tags:[],version:"3.x",frontMatter:{title:"General",sidebar_label:"General"},sidebar:"API",previous:{title:"Event mechanism",permalink:"/taro-docs/en/docs/apis/about/events"},next:{title:"App",permalink:"/taro-docs/en/docs/apis/framework/App"}},p={},m=[{value:"Parameters",id:"parameters",level:2},{value:"CallbackResult",id:"callbackresult",level:3},{value:"BluetoothError",id:"bluetootherror",level:3},{value:"WifiError",id:"wifierror",level:3},{value:"NFCError",id:"nfcerror",level:3},{value:"IBeaconError",id:"ibeaconerror",level:3},{value:"SafeAreaResult",id:"safearearesult",level:3},{value:"AdErrCode",id:"aderrcode",level:3},{value:"BluetoothErrCode",id:"bluetootherrcode",level:3},{value:"IBeaconErrCode",id:"ibeaconerrcode",level:3},{value:"WifiErrCode",id:"wifierrcode",level:3},{value:"NFCErrCode",id:"nfcerrcode",level:3},{value:"LaunchOptionsApp",id:"launchoptionsapp",level:3},{value:"ReferrerInfo",id:"referrerinfo",level:4}],k={toc:m};function N(t){var{components:e}=t,r=l(t,["components"]);return(0,a.kt)("wrapper",n({},k,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("h3",n({},{id:"callbackresult"}),"CallbackResult"),(0,a.kt)("p",null,"Generic error results"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error message")))),(0,a.kt)("h3",n({},{id:"bluetootherror"}),"BluetoothError"),(0,a.kt)("p",null,"Bluetooth error"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0, 10000, 10001, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10012, 10013"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error code")))),(0,a.kt)("h3",n({},{id:"wifierror"}),"WifiError"),(0,a.kt)("p",null,"WIFI error"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0, 12000, 12001, 12002, 12003, 12004, 12005, 12006, 12007, 12008, 12009, 12010, 12011, 12013"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error code")))),(0,a.kt)("h3",n({},{id:"nfcerror"}),"NFCError"),(0,a.kt)("p",null,"NFC error"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0, 13000, 13001, 13002, 13003, 13004, 13005, 13006"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error code")))),(0,a.kt)("h3",n({},{id:"ibeaconerror"}),"IBeaconError"),(0,a.kt)("p",null,"iBeacon error"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errMsg"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error message")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"errCode"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0, 11000, 11001, 11002, 11003, 11004, 11005, 11006"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Error code")))),(0,a.kt)("h3",n({},{id:"safearearesult"}),"SafeAreaResult"),(0,a.kt)("p",null,"Safe area when in the positive direction of the vertical screen"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"bottom"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The vertical coordinate of the lower right corner of the safe area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Height of the safe area in logical pixels.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"left"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The horizontal coordinate of the upper left corner of the safe area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"right"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Horizontal coordinate of the lower right corner of the safe area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"top"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Vertical coordinates of the upper left corner of the safe area.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Width of the safe area in logical pixels.")))),(0,a.kt)("h3",n({},{id:"aderrcode"}),"AdErrCode"),(0,a.kt)("p",null,"An error code is obtained by executing the binderror callback."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Code"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Exception"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Cause"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Solution"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1000"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Call failed due to a backend error"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"This error is not caused by developers."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Ignore the error, and it will be automatically recovered after a period of time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1001"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Parameter error"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The parameter is incorrectly used."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"For details, visit developers.weixin.qq.com. (There are different courses specific to Mini Programs and Mini Games. In the top tab, you can switch between the courses on the right of the ",(0,a.kt)("strong",{parentName:"td"},"Design")," column.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1002"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Invalid ad unit"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The spelling may be incorrect or the ad ID of another app may be used."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Visit mp.weixin.qq.com to confirm the ad ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1003"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Internal error"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"This error is not caused by developers."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Ignore the error, and it will be automatically recovered after a period of time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1004"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"No suitable ad"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The ad does not appear every time. Maybe it is not appropriate to the user."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"This is a normal case. In addition, you need to improve compatibility in this case.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1005"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The ad component is being reviewed."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Your ad is being reviewed and therefore cannot be displayed."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1006"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The ad component is rejected."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Your ad failed to pass the review and therefore cannot be displayed."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1007"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The ad component is rejected."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Your advertising capability is suspended. ads cannot be displayed during the suspension."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Visit mp.weixin.qq.com to check the Mini Program ad suspension status.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"1008"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The ad unit is disabled."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"The advertising capability in the advertising space is disabled."),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Visit mp.weixin.qq.com to enable the display in the advertising space.")))),(0,a.kt)("h3",n({},{id:"bluetootherrcode"}),"BluetoothErrCode"),(0,a.kt)("p",null,"Bluetooth error code"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Error Code"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Error Message"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Normal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10000"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not init")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The Bluetooth adapter is not initialized")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10001"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not available")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current Bluetooth adapter is unavailable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10002"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no device")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The specified device was not found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10003"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"connection fail")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Connection failed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10004"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no service")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The specified service was not found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10005"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no characteristic")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The specified characteristic was not found")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10006"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"no connection")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current connection has disconnected")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10007"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"property not support")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current characteristic does not support this operation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10008"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system error")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"All other system errors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10009"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system not support")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"System versions under 4.3 do not support BLE (Android only).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10012"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"operate time out")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Connection timeout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"10013"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid_data")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Empty deviceId or invalid format")))),(0,a.kt)("h3",n({},{id:"ibeaconerrcode"}),"IBeaconErrCode"),(0,a.kt)("p",null,"iBeacon error code"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Error Code"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Error Message"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Normal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11000"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"unsupport")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The system or device is not supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11001"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"bluetooth service unavailable")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The Bluetooth service is not available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11002"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"location service unavailable")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The location service is not available")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11003"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"already start")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Searching has already started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11004"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not startBeaconDiscovery")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Searching has not already started")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11005"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system error")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"All other system errors")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"11006"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid data")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Incorrect or invalid parameters")))),(0,a.kt)("h3",n({},{id:"wifierrcode"}),"WifiErrCode"),(0,a.kt)("p",null,"WIFI error code"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Error Code"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Error Message"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Normal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12000"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"not init")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The ",(0,a.kt)("inlineCode",{parentName:"td"},"startWifi")," API should be called first")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12001"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system not support")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The system does not support related capabilities")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12002"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"password error Wi-Fi")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Incorrect password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12003"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"connection timeout")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Connection timeout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12004"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"duplicate request")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Repeated Wi-Fi connection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12005"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi not turned on")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Wi-Fi switch is disabled (only for Android)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12006"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi not turned on")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"GPS switch is disabled (only for Android)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12007"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"user denied")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Authorization to connect to Wi-Fi was rejected by user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12008"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"invalid SSID")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Invalid SSID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12009"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system config err")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The connection to the Wi-Fi network was rejected due to system operator configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12010"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"system internal error")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Other system errors. Specific error causes need to be printed in errmsg.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12011"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"weapp in background")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The Wi-Fi network cannot be disconnected when the app runs in the background")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"12013"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"wifi config may be expired")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The Wi-Fi configuration saved in the system expired. It is recommended to forget this Wi-Fi network and try again.")))),(0,a.kt)("h3",n({},{id:"nfcerrcode"}),"NFCErrCode"),(0,a.kt)("p",null,"NFC error code"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Error Code"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"Error Message"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),(0,a.kt)("inlineCode",{parentName:"td"},"ok")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Normal")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13000"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current device does not support NFC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13001"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current device supports NFC, but the NFC switch is disabled in the system.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13002"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The current device supports NFC but does not support HCE.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13003"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Invalid parameter format in AID list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13004"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"WeChat is not set as the default NFC payment app")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13005"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Invalid return command")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"13006"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Failed to register AID")))),(0,a.kt)("h3",n({},{id:"launchoptionsapp"}),"LaunchOptionsApp"),(0,a.kt)("p",null,"\u542f\u52a8\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"path"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The path for Mini Program startup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The query parameter for Mini Program startup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"referrerInfo"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReferrerInfo")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, ",(0,a.kt)("inlineCode",{parentName:"td"},"{}")," is returned. (see the Note below for details.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"scene"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The ",(0,a.kt)("a",n({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/app-service/scene.html"}),"scene value")," for Mini Program startup")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"shareTicket"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The shareTicket. See ",(0,a.kt)("a",n({parentName:"td"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/share.html"}),"Obtaining More Forwarded Information")," for details.")))),(0,a.kt)("h4",n({},{id:"referrerinfo"}),"ReferrerInfo"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"appId"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The appId of the source Mini Program, Official Account, or app.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"extraData"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The data transfered from the source Mini Program, supported when scene=1037 or 1038.")))))}N.isMDXComponent=!0}}]);