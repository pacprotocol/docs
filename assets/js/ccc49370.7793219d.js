(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[6103],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),c=a(6742),o=a(9306),s=a(3491),m=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var v=function(e){var t,a,v,p=(a=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,f=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=b.date,T=b.formattedDate,I=b.permalink,L=b.tags,w=b.readingTime,P=b.title,x=b.editUrl,C=f.author,y=f.image,M=f.keywords,A=f.author_url||f.authorURL,R=f.author_title||f.authorTitle,B=f.author_image_url||f.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:M,image:y}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(v=Z?"h1":"h2",n.createElement("header",null,n.createElement(v,{className:u},Z?P:n.createElement(c.Z,{to:I},P)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),w&&n.createElement(n.Fragment,null," \xb7 ",p(w))),n.createElement("div",{className:"avatar margin-vert--md"},B&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:A},n.createElement("img",{src:B,alt:C})),n.createElement("div",{className:"avatar__intro"},C&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(c.Z,{href:A},C)),n.createElement("small",{className:"avatar__subtitle"},R)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},E)),(L.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=Z,t))},L.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return n.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&x&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:x})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(c.Z,{to:b.permalink,"aria-label":"Read more about "+P},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(3575),l=a(3146),i=a(4973),c=a(6742);var o=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(5601),m=a(571),d=a(9306);var u=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,c=t.metadata,u=c.title,g=c.description,h=c.nextItem,v=c.prevItem,p=i.hide_table_of_contents;return n.createElement(r.Z,{title:u,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},t&&n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("aside",{className:"col col--3"},n.createElement(s.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement(l.Z,{frontMatter:i,metadata:c,isBlogPostPage:!0},n.createElement(t,null)),(h||v)&&n.createElement(o,{nextItem:h,prevItem:v})),!p&&t.toc&&n.createElement("div",{className:"col col--2"},n.createElement(m.Z,{toc:t.toc})))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),r=a(6010),l=a(6742),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",s="sidebarItem_2UVv",m="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=a(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:m,activeClassName:d},e.title))}))))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),c=a(6010),o="iconEdit_2_ui",s=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,s);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:function(e,t,a){"use strict";a.d(t,{N:function(){return u},Z:function(){return g}});var n=a(9756),r=a(2122),l=a(7294),i=a(6010),c=a(4973),o=a(9306),s="enhancedAnchor_2LWZ",m="h1Heading_27L5",d=["id"],u=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0,className:m}),t.children))},g=function(e){return"h1"===e?u:(t=e,function(e){var a,r=e.id,m=(0,n.Z)(e,d),u=(0,o.LU)().navbar.hideOnScroll;return r?l.createElement(t,m,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[s]=!u,a)),id:r}),m.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,m)});var t}},3491:function(e,t,a){"use strict";var n=a(7294),r=a(6742),l=a(1756),i=a(6159),c={code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(l.Z,e):n.createElement("code",e)},a:function(e){return n.createElement(r.Z,e)},pre:function(e){var t,a=e.children;return(0,n.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:n.createElement(l.Z,(0,n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")};t.Z=c},571:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,c=!1,o=document.getElementsByClassName(e);r<o.length&&!c;){var s=o[r],m=s.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(l&&l.classList.remove(t),s.classList.add(t),i(s),c=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",c="table-of-contents__link";function o(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:c,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return l(c,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);