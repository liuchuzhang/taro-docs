"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65241],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23405:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(93106);var o=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Vue3"},u=void 0,l={unversionedId:"vue3",id:"version-3.x/vue3",title:"Vue3",description:"Taro can be developed using Vue 3. Developers can use the taro init command to create templates for Vue 3, including default, vuex, and NutUI3.0. We recommend using NutUI3.0 templates for development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/vue3.md",sourceDirName:".",slug:"/vue3",permalink:"/taro-docs/en/docs/vue3",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-3.x/vue3.md",tags:[],version:"3.x",frontMatter:{title:"Vue3"},sidebar:"docs",previous:{title:"Page Component",permalink:"/taro-docs/en/docs/vue-page"},next:{title:"Vue3 Composition APIs",permalink:"/taro-docs/en/docs/composition-api"}},s={},p=[{value:"Other limitations",id:"other-limitations",level:2},{value:"Related Reading",id:"related-reading",level:2}],c={toc:p};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Taro can be developed using Vue 3. Developers can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"taro init")," command to create templates for Vue 3, including ",(0,o.kt)("strong",{parentName:"p"},"default"),", ",(0,o.kt)("strong",{parentName:"p"},"vuex"),", and ",(0,o.kt)("a",r({parentName:"p"},{href:"https://nutui.jd.com/#/button"}),"NutUI3.0"),". We recommend using NutUI3.0 templates for development."),(0,o.kt)("p",null,"For details, please refer to the Taro Vue series documentation."),(0,o.kt)("p",null,"Developers can choose to organize their logic using options-style configuration or the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://v3.vuejs.org/guide/composition-api-introduction.html"}),"Composition API")," and browse the ","[Vue 3 documentation]","(",(0,o.kt)("a",r({parentName:"p"},{href:"https://v3."}),"https://v3.")," vuejs.org/) to learn more about Vue3 changes."),(0,o.kt)("h2",r({},{id:"other-limitations"}),"Other limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<style scoped>")," is not supported in the mini-program, it is recommended to use cssModules instead.",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/6662"}),"#6662")),(0,o.kt)("li",{parentName:"ul"},"Elements cannot be inserted outside the DOM tree of a page component, so ",(0,o.kt)("inlineCode",{parentName:"li"},"<teleport>")," is not supported"),(0,o.kt)("li",{parentName:"ul"},"The internal implementation of Vue 3 uses Proxy, which does not work on iOS 9 and below. However, the official Vue team will release a compatible version after the official release."),(0,o.kt)("li",{parentName:"ul"},"Using ref on the H5 side to get the DOM node of the base component now only gets the Vue component instance of the adaptation layer, not the corresponding webComponent root node. This was possible in Vue2 by modifying the refs property of the parent element, but the order of initialization between components has changed in Vue3, so it is not supported for now."),(0,o.kt)("li",{parentName:"ul"},"The v-model binding property of Vue3 has been changed to modelValue and the event binding has been changed to update:modelValue. For example, input automatically corresponds to modelValue and value, update:modelValue and @input, but for Picker, which is an mini program-specific form, it does not, so we recommend not using v-model in this case."),(0,o.kt)("li",{parentName:"ul"},"The VirtualList component needs to implement a Vue3 version (to be implemented)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," of all components must remain unique throughout the application (even if they are on different pages), otherwise it may cause problems with events not firing.",(0,o.kt)("a",r({parentName:"li"},{href:"https://github.com/NervJS/taro/issues/7317"}),"#7317"))),(0,o.kt)("h2",r({},{id:"related-reading"}),"Related Reading"),(0,o.kt)("p",null,"New Vue3 features can be found in the ",(0,o.kt)("a",r({parentName:"p"},{href:"https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features"}),"Vue3 documentation"),"."),(0,o.kt)("p",null,"How Taro is compatible with Vue3 can be found in ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md"}),"Taro RFC"),"."),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"}),"Developing Applets with Vue3")," by lillian."),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"})," NutUI Development Example ")," by jdf2e."))}m.isMDXComponent=!0}}]);