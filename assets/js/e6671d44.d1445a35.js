"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85358],{79874:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=i(n),s=a,u=d["".concat(p,".").concat(s)]||d[s]||k[s]||o;return n?r.createElement(u,l(l({ref:t},m),{},{components:n})):r.createElement(u,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});n(93106);var r=n(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Checkbox",sidebar_label:"Checkbox"},c=void 0,p={unversionedId:"components/forms/checkbox",id:"version-1.x/components/forms/checkbox",title:"Checkbox",description:"CheckboxGroup",source:"@site/versioned_docs/version-1.x/components/forms/checkbox.md",sourceDirName:"components/forms",slug:"/components/forms/checkbox",permalink:"/taro-docs/docs/1.x/components/forms/checkbox",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/components/forms/checkbox.md",tags:[],version:"1.x",frontMatter:{title:"Checkbox",sidebar_label:"Checkbox"},sidebar:"version-1.x/components",previous:{title:"Button",permalink:"/taro-docs/docs/1.x/components/forms/button"},next:{title:"Form",permalink:"/taro-docs/docs/1.x/components/forms/form"}},i={},m=[{value:"CheckboxGroup",id:"checkboxgroup",level:3},{value:"\u591a\u9879\u9009\u62e9\u5668\uff0c\u5185\u90e8\u7531\u591a\u4e2a checkbox \u7ec4\u6210",id:"\u591a\u9879\u9009\u62e9\u5668\u5185\u90e8\u7531\u591a\u4e2a-checkbox-\u7ec4\u6210",level:5},{value:"Checkbox",id:"checkbox",level:3},{value:"\u591a\u9009\u9879\u76ee\u3002",id:"\u591a\u9009\u9879\u76ee",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],k={toc:m};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",a({},{id:"checkboxgroup"}),"CheckboxGroup"),(0,r.kt)("h5",a({},{id:"\u591a\u9879\u9009\u62e9\u5668\u5185\u90e8\u7531\u591a\u4e2a-checkbox-\u7ec4\u6210"}),"\u591a\u9879\u9009\u62e9\u5668\uff0c\u5185\u90e8\u7531\u591a\u4e2a checkbox \u7ec4\u6210"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"ReactNative"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"x"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"name"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"EventHandle"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"<CheckboxGroup/>"),"\u4e2d\u9009\u4e2d\u9879\u53d1\u751f\u6539\u53d8\u662f\u89e6\u53d1 change \u4e8b\u4ef6\uff0cdetail = value:","[\u9009\u4e2d\u7684 Checkbox \u7684 value \u7684\u6570\u7ec4]")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/checkbox-group.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f CheckboxGroup"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/formlist/#checkbox"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f CheckboxGroup"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.alipay.com/mini/component/checkbox"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f CheckboxGroup"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/checkbox.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f CheckboxGroup"),"\u3002"),(0,r.kt)("h3",a({},{id:"checkbox"}),"Checkbox"),(0,r.kt)("h5",a({},{id:"\u591a\u9009\u9879\u76ee"}),"\u591a\u9009\u9879\u76ee\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"}),"ReactNative"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",a({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"})),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"value"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"String"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),(0,r.kt)("inlineCode",{parentName:"td"},"<Checkbox/>"),"\u6807\u8bc6\uff0c\u9009\u4e2d\u65f6\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"td"},"<CheckboxGroup/>"),"\u7684 change \u4e8b\u4ef6\uff0c\u5e76\u643a\u5e26 ",(0,r.kt)("inlineCode",{parentName:"td"},"<Checkbox/>")," \u7684 value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"checked"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u5f53\u524d\u662f\u5426\u9009\u4e2d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"disabled"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Boolean"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"false"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u662f\u5426\u7981\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"color"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"Color"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"checkbox \u7684\u989c\u8272\uff0c\u540c css \u7684 color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"onChange"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"EventHandle"),(0,r.kt)("td",a({parentName:"tr"},{align:"left"})),(0,r.kt)("td",a({parentName:"tr"},{align:"left"}),"\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0c\u5c0f\u7a0b\u5e8f\u65e0\u6b64 API")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Checkbox"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/formlist/#checkbox"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Checkbox"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.alipay.com/mini/component/checkbox"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Checkbox"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/checkbox.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f Checkbox"),"\u3002"),(0,r.kt)("h6",a({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\nimport { View, Text, Checkbox } from '@tarojs/components'\n\nexport default class PageCheckbox extends Component {\n  state = {\n    list: [\n      {\n        value: '\u7f8e\u56fd',\n        text: '\u7f8e\u56fd',\n        checked: false\n      },\n      {\n        value: '\u4e2d\u56fd',\n        text: '\u4e2d\u56fd',\n        checked: true\n      },\n      {\n        value: '\u5df4\u897f',\n        text: '\u5df4\u897f',\n        checked: false\n      },\n      {\n        value: '\u65e5\u672c',\n        text: '\u65e5\u672c',\n        checked: false\n      },\n      {\n        value: '\u82f1\u56fd',\n        text: '\u82f1\u56fd',\n        checked: false\n      },\n      {\n        value: '\u6cd5\u56fd',\n        text: '\u6cd5\u56fd',\n        checked: false\n      }\n    ]\n  }\n  render () {\n    return (\n      <View className='page-body'>\n        <View className='page-section'>\n          <Text>\u9ed8\u8ba4\u6837\u5f0f</Text>\n          <Checkbox value='\u9009\u4e2d' checked>\u9009\u4e2d</Checkbox>\n          <Checkbox style='margin-left: 20rpx' value='\u672a\u9009\u4e2d'>\u672a\u9009\u4e2d</Checkbox>\n        </View>\n        <View className='page-section'>\n          <Text>\u63a8\u8350\u5c55\u793a\u6837\u5f0f</Text>\n          {this.state.list.map((item, i) => {\n            return (\n              <Label className='checkbox-list__label' for={i} key={i}>\n                <Checkbox className='checkbox-list__checkbox' value={item.value} checked={item.checked}>{item.text}</Checkbox>\n              </Label>\n            )\n          })}\n        </View>\n      </View>\n    )\n  }\n}\n")))}d.isMDXComponent=!0}}]);