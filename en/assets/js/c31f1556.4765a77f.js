"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52144],{79874:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||p;return t?r.createElement(f,a(a({ref:n},i),{},{components:t})):r.createElement(f,a({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17304:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return i}});t(93106);var r=t(79874);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={title:"\u7ec4\u4ef6\u5316 & Props"},l=void 0,s={unversionedId:"props",id:"version-1.x/props",title:"\u7ec4\u4ef6\u5316 & Props",description:"\u7ec4\u4ef6\u53ef\u4ee5\u5c06 UI \u5207\u5206\u6210\u4e00\u4e9b\u7684\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u90e8\u4ef6\uff0c\u8fd9\u6837\u4f60\u5c31\u53ea\u9700\u4e13\u6ce8\u4e8e\u6784\u5efa\u6bcf\u4e00\u4e2a\u5355\u72ec\u7684\u90e8\u4ef6\u3002",source:"@site/versioned_docs/version-1.x/props.md",sourceDirName:".",slug:"/props",permalink:"/taro-docs/en/docs/1.x/props",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/versioned_docs/version-1.x/props.md",tags:[],version:"1.x",frontMatter:{title:"\u7ec4\u4ef6\u5316 & Props"},sidebar:"version-1.x/docs",previous:{title:"JSX \u7b80\u4ecb",permalink:"/taro-docs/en/docs/1.x/jsx"},next:{title:"\u751f\u547d\u5468\u671f & State",permalink:"/taro-docs/en/docs/1.x/state"}},c={},i=[{value:"\u7ec4\u4ef6\u6e32\u67d3",id:"\u7ec4\u4ef6\u6e32\u67d3",level:2},{value:"Props \u7684\u53ea\u8bfb\u6027",id:"props-\u7684\u53ea\u8bfb\u6027",level:3},{value:"\u4f7f\u7528 PropTypes \u68c0\u67e5\u7c7b\u578b",id:"\u4f7f\u7528-proptypes-\u68c0\u67e5\u7c7b\u578b",level:3}],u={toc:i};function m(e){var{components:n}=e,t=p(e,["components"]);return(0,r.kt)("wrapper",o({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7ec4\u4ef6\u53ef\u4ee5\u5c06 UI \u5207\u5206\u6210\u4e00\u4e9b\u7684\u72ec\u7acb\u7684\u3001\u53ef\u590d\u7528\u7684\u90e8\u4ef6\uff0c\u8fd9\u6837\u4f60\u5c31\u53ea\u9700\u4e13\u6ce8\u4e8e\u6784\u5efa\u6bcf\u4e00\u4e2a\u5355\u72ec\u7684\u90e8\u4ef6\u3002"),(0,r.kt)("p",null,"\u7ec4\u4ef6\u4ece\u6982\u5ff5\u4e0a\u770b\u5c31\u50cf\u662f\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u63a5\u6536\u4efb\u610f\u7684\u8f93\u5165\u503c\uff08\u79f0\u4e4b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\uff09\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u9700\u8981\u5728\u9875\u9762\u4e0a\u5c55\u793a\u7684 Taro \u5143\u7d20\u3002"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ES6 Class \u6765\u5b9a\u4e49\u4e00\u4e2a\u7ec4\u4ef6:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"class Welcome extends Component {\n  render () {\n    return <View>Hello, {this.props.name}</View>\n  }\n}\n")),(0,r.kt)("h2",o({},{id:"\u7ec4\u4ef6\u6e32\u67d3"}),"\u7ec4\u4ef6\u6e32\u67d3"),(0,r.kt)("p",null,"\u5728\u524d\u9762\uff0c\u6211\u4eec\u9047\u5230\u7684 Taro \u5143\u7d20\u90fd\u662f\u5185\u7f6e\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"const element = <View />\n")),(0,r.kt)("p",null,"\u7136\u800c\uff0cTaro \u5143\u7d20\u4e5f\u53ef\u4ee5\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'const element = <Welcome name="Wallace" />\n')),(0,r.kt)("p",null,"\u5f53 React \u9047\u5230\u7684\u5143\u7d20\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c\u5b83\u4f1a\u5c06 JSX \u5c5e\u6027\u4f5c\u4e3a\u5355\u4e2a\u5bf9\u8c61\u4f20\u9012\u7ed9\u8be5\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u79f0\u4e4b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982,\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5728\u9875\u9762\u4e0a\u6e32\u67d3\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, Wallace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),'// welcome.js\nclass Welcome extends Component {\n  render () {\n    return <View><Text>Hello, {this.props.name}</Text></View>\n  }\n}\n\n// app.js\nclass App extends Component {\n  render () {\n    return <Welcome name="Wallace" />\n  }\n}\n')),(0,r.kt)("h3",o({},{id:"props-\u7684\u53ea\u8bfb\u6027"}),"Props \u7684\u53ea\u8bfb\u6027"),(0,r.kt)("p",null,"\u4e00\u4e2a\u58f0\u660e\u7684\u7ec4\u4ef6\u51b3\u4e0d\u80fd\u4fee\u6539\u5b83\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),"\u3002\u6765\u770b\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," \u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"function sum (a, b) {\n  return a + b\n}\n")),(0,r.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u4e0a\u9762\u7684\u8fd9\u79cd\u51fd\u6570\u79f0\u4e3a\u300c\u7eaf\u51fd\u6570\u300d\uff0c\u5b83\u6ca1\u6709\u6539\u53d8\u5b83\u81ea\u5df1\u7684\u8f93\u5165\u503c\uff0c\u5f53\u4f20\u5165\u7684\u503c\u76f8\u540c\u65f6\uff0c\u603b\u662f\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u4e0e\u4e4b\u76f8\u5bf9\u7684\u662f\u975e\u7eaf\u51fd\u6570\uff0c\u5b83\u4f1a\u6539\u53d8\u5b83\u81ea\u8eab\u7684\u8f93\u5165\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"function withdraw (account, amount) {\n  account.total -= amount\n}\n")),(0,r.kt)("p",null,"Taro \u548c React \u4e00\u6837\uff0c\u4e5f\u6709\u4e00\u4e2a\u4e25\u683c\u7684\u89c4\u5219\uff1a"),(0,r.kt)("p",null,"\u6240\u6709\u7684 Taro \u7ec4\u4ef6\u5fc5\u987b\u50cf\u7eaf\u51fd\u6570\u90a3\u6837\u4f7f\u7528\u5b83\u4eec\u7684 props\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u5e94\u7528\u7684\u754c\u9762\u662f\u968f\u65f6\u95f4\u52a8\u6001\u53d8\u5316\u7684\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8282\u4ecb\u7ecd\u4e00\u79cd\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u65b0\u6982\u5ff5\uff0cState \u53ef\u4ee5\u5728\u4e0d\u8fdd\u53cd\u4e0a\u8ff0\u89c4\u5219\u7684\u60c5\u51b5\u4e0b\uff0c\u6839\u636e\u7528\u6237\u64cd\u4f5c\u3001\u7f51\u7edc\u54cd\u5e94\u3001\u6216\u8005\u5176\u4ed6\u72b6\u6001\u53d8\u5316\uff0c\u4f7f\u7ec4\u4ef6\u52a8\u6001\u7684\u54cd\u5e94\u5e76\u6539\u53d8\u7ec4\u4ef6\u7684\u8f93\u51fa\u3002"),(0,r.kt)("h3",o({},{id:"\u4f7f\u7528-proptypes-\u68c0\u67e5\u7c7b\u578b"}),"\u4f7f\u7528 PropTypes \u68c0\u67e5\u7c7b\u578b"),(0,r.kt)("p",null,"\u968f\u7740\u5e94\u7528\u65e5\u6e10\u5e9e\u5927\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u68c0\u67e5\u6355\u83b7\u5927\u91cf\u9519\u8bef\u3002\u8981\u68c0\u67e5\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u7279\u6b8a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"propTypes")," \u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import PropTypes from 'prop-types';\n\nclass Greeting extends Component {\n  render() {\n    return (\n      <h1>Hello, {this.props.name}</h1>\n    );\n  }\n}\n\nGreeting.propTypes = {\n  name: PropTypes.string\n};\n")),(0,r.kt)("p",null,"\u5982\u4e0a\u4f8b\uff0cTaro \u4e0e React \u4e00\u6837\uff0c\u4e5f\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"PropTypes")," \u68c0\u67e5\u7c7b\u578b\uff0c",(0,r.kt)("em",{parentName:"p"},"\u76ee\u524d\u5728\u5c0f\u7a0b\u5e8f\u7aef\u8fd8\u6709\u4e9b\u95ee\u9898"),"\uff0c\u4f46\u5728 H5 \u7aef\u53ef\u4ee5\u4f7f\u7528\uff0c\u7528\u6cd5\u548c\u5728 React \u91cc\u4e00\u6837\u3002\n\u66f4\u591a\u53ef\u53c2\u7167 ",(0,r.kt)("a",o({parentName:"p"},{href:"https://reactjs.org.cn/doc/typechecking-with-proptypes.html"}),"React \u7684\u76f8\u5173\u6587\u6863"),"\u3002"))}m.isMDXComponent=!0}}]);