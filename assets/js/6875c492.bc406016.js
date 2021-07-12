(self.webpackChunkpac_protocol_docs=self.webpackChunkpac_protocol_docs||[]).push([[8610],{3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(6010),n=a(3905),s=a(4973),i=a(6742),c=a(3009),m=a(1217),o="blogPostTitle_GeHD",d="blogPostDate_fNvV",u=a(9732);var g=function(e){var t,a,g=(t=(0,u.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),h=e.children,p=e.frontMatter,E=e.metadata,v=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,N=E.date,_=E.formattedDate,k=E.permalink,Z=E.tags,T=E.readingTime,w=p.author,P=p.title,L=p.image,M=p.keywords,I=p.author_url||p.authorURL,y=p.author_title||p.authorTitle,x=p.author_image_url||p.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(m.Z,{keywords:M,image:L}),r.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",r.createElement("header",null,r.createElement(a,{className:(0,l.Z)("margin-bottom--sm",o)},b?P:r.createElement(i.Z,{to:k},P)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:N,className:d},_,T&&r.createElement(r.Fragment,null," \xb7 ",g(T)))),r.createElement("div",{className:"avatar margin-vert--md"},x&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:I},r.createElement("img",{src:x,alt:w})),r.createElement("div",{className:"avatar__intro"},w&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(i.Z,{href:I},w)),r.createElement("small",{className:"avatar__subtitle"},y)))))),r.createElement("div",{className:"markdown"},r.createElement(n.Zo,{components:c.Z},h)),(Z.length>0||v)&&r.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((function(e){var t=e.label,a=e.permalink;return r.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),v&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:E.permalink,"aria-label":"Read more about "+P},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(7294),l=a(6010),n=a(6742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",o="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";function u(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},r.createElement("h3",{className:i},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:o,activeClassName:d},e.title))}))))}},8433:function(e,t,a){"use strict";a.r(t);var r=a(7294),l=a(2611),n=a(3146),s=a(6742),i=a(5601),c=a(4973),m=a(9732);function o(e){var t,a=e.tagName,l=e.count,n=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return r.createElement(c.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(l),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,d=e.sidebar,u=t.allTagsPath,g=t.name,h=t.count;return r.createElement(l.Z,{title:'Posts tagged "'+g+'"',description:'Blog | Tagged "'+g+'"',wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(i.Z,{sidebar:d})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(o,{count:h,tagName:g})),r.createElement(s.Z,{href:u},r.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return r.createElement(n.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}},3009:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(7294),l=a(6742),n=a(1756),s=a(9756),i=a(6010),c=a(4973),m=a(9732),o="enhancedAnchor_2LWZ",d=["id"],u=function(e){return function(t){var a,l=t.id,n=(0,s.Z)(t,d),u=(0,m.LU)().navbar.hideOnScroll;return l?r.createElement(e,n,r.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(a={},a[o]=!u,a)),id:l}),n.children,r.createElement("a",{className:"hash-link",href:"#"+l,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.createElement(e,n)}},g={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(n.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(l.Z,e)},pre:function(e){var t,a=e.children;return(0,r.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:r.createElement(n.Z,(0,r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}}}]);