"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48610],{72901:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(93106),s=a(26957),l=a(40861);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(l.Z,{permalink:r,title:n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},55050:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(93106),s=a(87436),l=a(19256),r=a(72766),i=a(26957),o=a(32021),g=a(72901);function c(e){const{metadata:t,items:a,sidebar:c,listMetadata:m}=e,{allTagsPath:p,name:d,count:u}=t,h=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),b=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(u),tagName:d});return n.createElement(l.Z,{title:b,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,b),n.createElement(s.Z,{href:p},n.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>n.createElement(r.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:!0},n.createElement(e,null)))),n.createElement(g.Z,{metadata:m}))}}}]);