"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[92912],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),d=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return l.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(i,".").concat(p)]||s[p]||k[p]||a;return n?l.createElement(m,o(o({ref:e},c),{},{components:n})):l.createElement(m,o({ref:e},c))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,o[1]=u;for(var d=2;d<a;d++)o[d]=n[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94402:function(t,e,n){n.d(e,{Z:function(){return a}});var l=n(93106);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function a({children:t,hidden:e,className:n}){return l.createElement("div",r({role:"tabpanel"},{hidden:e,className:n}),t)}},12994:function(t,e,n){n.d(e,{Z:function(){return c}});var l=n(93106),r=n(15217),a=n(32021),o=n(26679),u="tabItem_qF89";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},i.apply(this,arguments)}function d(t){var e,n;const{lazy:r,block:d,defaultValue:c,values:k,groupId:s,className:p}=t,m=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:m.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),h=(0,a.lx)(g,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===c?c:null!==(v=null!=c?c:null===(e=m.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==v?v:null===(n=m[0])||void 0===n?void 0:n.props.value;if(null!==y&&!g.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,a.UB)(),[N,P]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,a.o5)();if(null!=s){const t=b[s];null!=t&&t!==N&&g.some((e=>e.value===t))&&P(t)}const O=t=>{const e=t.currentTarget,n=x.indexOf(e),l=g[n].value;l!==N&&(w(e),P(l),null!=s&&f(s,l))},A=t=>{let e=null;switch(t.key){case"ArrowRight":{const n=x.indexOf(t.currentTarget)+1;e=x[n]||x[0];break}case"ArrowLeft":{const n=x.indexOf(t.currentTarget)-1;e=x[n]||x[x.length-1];break}}null==e||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},p)},g.map((({value:t,label:e,attributes:n})=>l.createElement("li",i({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:t=>x.push(t),onKeyDown:A,onFocus:O,onClick:O},n,{className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":N===t})}),null!=e?e:t)))),r?(0,l.cloneElement)(m.filter((t=>t.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},m.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==N})))))}function c(t){const e=(0,r.Z)();return l.createElement(d,i({key:String(e)},t))}},47877:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});n(93106);var l=n(79874),r=n(12994),a=n(94402);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},o.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"LivePlayer",sidebar_label:"LivePlayer"},d=void 0,c={unversionedId:"components/media/live-player",id:"components/media/live-player",title:"LivePlayer",description:"Real-time audio/video playback. Related API: Taro.createLivePlayerContext",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/media/live-player.md",sourceDirName:"components/media",slug:"/components/media/live-player",permalink:"/taro-docs/en/docs/next/components/media/live-player",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/docs/components/media/live-player.md",tags:[],version:"current",frontMatter:{title:"LivePlayer",sidebar_label:"LivePlayer"},sidebar:"components",previous:{title:"Image",permalink:"/taro-docs/en/docs/next/components/media/image"},next:{title:"LivePusher",permalink:"/taro-docs/en/docs/next/components/media/live-pusher"}},k={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"LivePlayerProps",id:"liveplayerprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"mode",id:"mode",level:3},{value:"orientation",id:"orientation",level:3},{value:"objectFit",id:"objectfit",level:3},{value:"soundMode",id:"soundmode",level:3},{value:"onStateChangeEventDetail",id:"onstatechangeeventdetail",level:3},{value:"onFullScreenChangeEventDetail",id:"onfullscreenchangeeventdetail",level:3},{value:"onNetStatusEventDetail",id:"onnetstatuseventdetail",level:3},{value:"status",id:"status",level:3},{value:"API Support",id:"api-support",level:2}],p={toc:s};function m(t){var{components:e}=t,n=u(t,["components"]);return(0,l.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Real-time audio/video playback. Related API: ",(0,l.kt)("inlineCode",{parentName:"p"},"Taro.createLivePlayerContext")),(0,l.kt)("p",null,"Currently, it is open only to Mini Programs in the following categories owned by Chinese entities. The component needs to pass the category review, and then on the Mini Program Console, you can activate the permissions for this component by choosing ",(0,l.kt)("strong",{parentName:"p"},"Development > API Settings"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/live-player.html"}),"Reference"))),(0,l.kt)("h2",o({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LivePlayerProps>\n")),(0,l.kt)("h2",o({},{id:"examples"}),"Examples"),(0,l.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n  render () {\n    return (\n      <LivePlayer src='url' mode='live' autoplay  />\n    )\n  }\n}\n"))),(0,l.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <live-player src="url" mode="live" :autoplay="true"  />\n</template>\n')))),(0,l.kt)("h2",o({},{id:"liveplayerprops"}),"LivePlayerProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"src"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Audio/video address. Only flv and rtmp formats are supported.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"live" | "RTC"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"live"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoplay"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Auto playback")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"muted"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to mute the component.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"orientation"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"vertical" | "horizontal"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"vertical"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The orientation of the image.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"objectFit"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"contain" | "fillCrop"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"contain"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Filling mode. Available values include `contain` and `fillCrop`.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundMute"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to mute the component when it enters the background. ",(0,l.kt)("br",null),"(This property has been discarded. By default, the component is muted when entering the background.)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"minCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"1")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Minimum buffer (in s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"maxCache"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"3")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Minimum buffer (in s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"soundMode"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"speaker" | "ear"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"speaker"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Sound output mode")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another Mini Program page.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"autoPauseIfOpenNavigate"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Specifies whether to automatically pause the real-time audio/video playback on the current page upon the navigation to another native page of WeChat.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onStateChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onStateChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A playback status change. detail = ","{code}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onFullScreenChange"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onFullScreenChangeEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"A full-screen mode change. detail = ","{direction, fullScreen}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onNetstatus"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<onNetStatusEventDetail>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The notification of the network status. detail = ","{info}")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onAudioVolumenotify"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<",">")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Playback volume level change. detail = ","{}")))),(0,l.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.src"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.mode"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoplay"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.muted"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.orientation"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.objectFit"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.backgroundMute"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.minCache"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.maxCache"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.soundMode"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfNavigate"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.autoPauseIfOpenNavigate"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onStateChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onFullScreenChange"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onNetstatus"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayerProps.onAudioVolumenotify"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,l.kt)("h3",o({},{id:"mode"}),"mode"),(0,l.kt)("p",null,"Valid values of mode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description "))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"live"),(0,l.kt)("td",null,"Live stream")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"RTC"),(0,l.kt)("td",null,"Real-time call. The latency is lower in this mode.")))),(0,l.kt)("h3",o({},{id:"orientation"}),"orientation"),(0,l.kt)("p",null,"Valid values of orientation"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"vertical"),(0,l.kt)("td",null,"Vertical")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontal"),(0,l.kt)("td",null,"Horizontal")))),(0,l.kt)("h3",o({},{id:"objectfit"}),"objectFit"),(0,l.kt)("p",null,"Valid values of object-fit"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"contain"),(0,l.kt)("td",null,"Indicates that the longer edge of the image fills the screen, and the shorter edge is filled with black.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fillCrop"),(0,l.kt)("td",null,"Indicates that the image fills the screen, and the part out of the display area will be truncated.")))),(0,l.kt)("h3",o({},{id:"soundmode"}),"soundMode"),(0,l.kt)("p",null,"Valid values of soundMode"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"speaker"),(0,l.kt)("td",null,"Loudspeaker")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"ear"),(0,l.kt)("td",null,"Receiver")))),(0,l.kt)("h3",o({},{id:"onstatechangeeventdetail"}),"onStateChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Decription"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"code"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"status code")))),(0,l.kt)("h3",o({},{id:"onfullscreenchangeeventdetail"}),"onFullScreenChangeEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Decription"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Screen orientation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fullScreen"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number | boolean")),(0,l.kt)("td",null,"Full screen or not")))),(0,l.kt)("h3",o({},{id:"onnetstatuseventdetail"}),"onNetStatusEventDetail"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Param"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"info"),(0,l.kt)("td",null,(0,l.kt)("code",null,"netStatus"))))),(0,l.kt)("h3",o({},{id:"status"}),"status"),(0,l.kt)("p",null,"Status codes"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Code"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"2001"),(0,l.kt)("td",null,"Connected to the server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2002"),(0,l.kt)("td",null,"Connected to the server. Pull started.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2003"),(0,l.kt)("td",null,"The network has received the first video packet (IDR)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2004"),(0,l.kt)("td",null,"Video playback started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2005"),(0,l.kt)("td",null,"Video playback in progress")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2006"),(0,l.kt)("td",null,"Video playback ended")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2007"),(0,l.kt)("td",null,"Video playback loading")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2008"),(0,l.kt)("td",null,"Decoder started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2009"),(0,l.kt)("td",null,"Video resolution changed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2301"),(0,l.kt)("td",null,"Network disconnected. Too many failed reconnection attempts. Restart the playback for more retries.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"-2302"),(0,l.kt)("td",null,"Failed to get the accelerated pull address")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2101"),(0,l.kt)("td",null,"Failed to decode the current video frame")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2102"),(0,l.kt)("td",null,"Failed to decode the current audio frame")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2103"),(0,l.kt)("td",null,"Network disconnected and auto reconnection has started")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2104"),(0,l.kt)("td",null,"Unstable inbound packet: This may be caused by insufficient downstream bandwidth, or inconsistent outbound stream from the VJ end.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2105"),(0,l.kt)("td",null,"Stutter occurred during the video playback")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2106"),(0,l.kt)("td",null,"Failed to start hard decoding. Soft decoding is used instead.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2107"),(0,l.kt)("td",null,"Discontinuous sequence of video frames. Some frames may be dropped.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2108"),(0,l.kt)("td",null,"Hard decoding of the first I-frame of current stream failed. Switched to soft decoding automatically.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3001"),(0,l.kt)("td",null,"RTMP DNS resolution failed")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3002"),(0,l.kt)("td",null,"Failed to connect to the RTMP server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3003"),(0,l.kt)("td",null,"Failed to shake hands with the RTMP server")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"3005"),(0,l.kt)("td",null,"Failed to read/write data on the RTMP server")))),(0,l.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"LivePlayer"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",o({parentName:"tr"},{align:"center"})),(0,l.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);