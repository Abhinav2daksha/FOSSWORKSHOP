(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[516],{3690:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return y}});var s=n(2809),r=n(266),a=n(5988),l=n(809),c=n.n(l),i=n(7294),o=n(8533),d=n(1664),u=n(9669),x=n.n(u),m=n(9008),p=n(8325),f=n.n(p),h=(n(5433),n(4335),n(9980),n(6102),n(366),n(6854),n(9945),n(2503),n(4279),n(2731),n(9893),n(8759),n(6076),n(5206),n(6263),n(7180),n(4853)),g=n(5893);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=!0;t.default=function(e){var t=(0,i.useState)(!1),n=t[0],s=t[1],l=(0,i.useState)(!0),u=l[0],p=l[1],j=(0,i.useState)(!1),y=j[0],b=j[1],w=(0,i.useState)(!1),N=w[0],O=w[1],k=(0,i.useState)(!1),S=k[0],E=k[1],_=(0,i.useState)([]),B=_[0],C=_[1],A=(0,i.useRef)(),D=(0,i.useState)(""),I=D[0],L=D[1],T=(0,i.useState)([]),P=T[0],Z=T[1],J=(0,i.useState)(""),z=J[0],R=J[1],H=(0,i.useState)(0),M=H[0],V=H[1],X=(0,i.useState)(),F=X[0],G=X[1];(0,i.useEffect)((function(){p(!0),E(!1),O(!1),b(!1),Z([]),C([]),setTimeout((function(){for(var e=document.getElementsByClassName("cwhads").length,t=0;t<e;t++)try{(adsbygoogle=window.adsbygoogle||[]).push({})}catch(n){}}),0)}),[e.slug]),(0,i.useEffect)((function(){Array.from(document.getElementsByClassName("copy-to-clipboard-button")).forEach((function(e){e.addEventListener("click",(function(e){e.target.innerText="Copied!";var t=e.target.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("pre")[0].innerText;setTimeout((function(){e.target.innerText="Copy"}),1e3),navigator.clipboard.writeText(t)}))})),G(function(e){var t=document.createElement("div");return t.innerHTML=e,f().manual=!0,f().highlightAllUnder(t),t.innerHTML}(e.content.replace(/&lt;\|AD\|&gt;/g,'<div class=\'cwhads my-4\'><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-9655830461045889" data-ad-slot="8999979664" data-ad-format="auto" data-full-width-responsive="true"></ins></div>')))}));var Q=function(){var t=(0,r.Z)(c().mark((function t(n,s,r){var a,l,i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,A.current.executeAsync();case 3:a=t.sent,A.current.reset(),R(""),l="".concat(e.url,"/videocomments?video=").concat(e.id),i=e.user.jwt,x().post(l,{comment:s,video:e.id,user:e.user.user.id,parent:r},{headers:{Authorization:"Bearer ".concat(i),token:a}}).then((function(t){e.addAlert("green","Successfully posted reply");var n=P.filter((function(e){return e.id===r})),s=P.indexOf(n[0]),a=JSON.parse(JSON.stringify(P));a[s].replies.unshift(t.data),Z(a)})).catch((function(e){console.log(e)}));case 9:case"end":return t.stop()}}),t)})));return function(e,n,s){return t.apply(this,arguments)}}(),U=function(){var t=(0,r.Z)(c().mark((function t(n){var s,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,A.current.executeAsync();case 3:s=t.sent,A.current.reset(),L(""),r="".concat(e.url,"/videocomments?video=").concat(e.id),a=e.user.jwt,x().post(r,{comment:I,video:e.id,user:e.user.user.id},{headers:{Authorization:"Bearer ".concat(a),token:s}}).then((function(t){e.addAlert("green","Successfully posted comment");var n=JSON.parse(JSON.stringify(P));n.unshift(v(v({},t.data),{},{replies:[],replyInputOpen:!1,replyBoxOpen:!1})),Z(n),V(M+1)})).catch((function(e){console.log(e)}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(e){"comment"==e.target.name&&L(e.target.value),"reply"==e.target.name&&R(e.target.value)},W=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.url,"/videocomments?video=").concat(e.id,"&parent_null=true&_start=").concat(P.length,"&_limit=5&_sort=createdAt:DESC"));case 2:return n=t.sent,t.next=5,n.json();case 5:(n=t.sent).forEach((function(e){e.replyInputOpen=!1,e.replyBoxOpen=!1})),Z(P.concat(n));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),q=function(){document.getElementById("videoBox").classList.contains("h-0")?(document.getElementById("videoBox").classList.add("h-60"),document.getElementById("videoBox").classList.remove("h-0"),s(!0)):(document.getElementById("videoBox").classList.add("h-0"),document.getElementById("videoBox").classList.remove("h-60"),s(!1))},K=function(){var t=(0,r.Z)(c().mark((function t(n){var s,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.classList.add("border-b-2"),n.target.classList.add("border-blue-500"),p(!1),b(!0),O(!1),E(!1),0!=P.length){t.next=22;break}return t.next=9,fetch("".concat(e.url,"/videocomments?video=").concat(e.id,"&parent_null=true&_start=").concat(P.length,"&_limit=5&_sort=createdAt:DESC"));case 9:return s=t.sent,t.next=12,s.json();case 12:return(s=t.sent).forEach((function(e){e.replyInputOpen=!1,e.replyBoxOpen=!1})),Z(P.concat(s)),t.next=17,fetch("".concat(e.url,"/videocomments/count?video=").concat(e.id,"&parent_null=true&_sort=createdAt:DESC"));case 17:return r=t.sent,t.next=20,r.json();case 20:r=t.sent,V(r);case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!=B.length){t.next=8;break}return t.next=3,fetch("".concat(e.url,"/video-downloads?video=").concat(e.id));case 3:return n=t.sent,t.next=6,n.json();case 6:n=t.sent,C(n);case 8:p(!1),b(!1),O(!0),E(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)("div",{className:"jsx-2880253090",children:[(0,g.jsxs)(m.default,{children:[(0,g.jsxs)("title",{className:"jsx-2880253090",children:[e.title," | CodeWithHarry"]}),(0,g.jsx)("meta",{name:"description",content:e.metadesc,className:"jsx-2880253090"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-2880253090"})]}),(0,g.jsx)(a.default,{id:"2880253090",children:["#panels p{font-size:1.15rem;}","#panels h4,h2,h3{font-weight:600;font-size:1.5rem;margin:16px 0px;}","#panels ul,menu{list-style-type:disc;margin:1em 0;font-size:1.15rem;padding:0 0 0 40px;}","#panels ol{list-style-type:decimal;margin:1em 0;font-size:1.15rem;padding:0 0 0 40px;}","#panels a{-webkit-text-decoration:underline;text-decoration:underline;color:blue;}"]}),(0,g.jsx)("section",{className:"jsx-2880253090 mx-2 justify-center align-middle",children:(0,g.jsxs)("div",{className:"jsx-2880253090 flex flex-wrap lg:-mx-1 xl:-mx-1",children:[(0,g.jsx)("div",{className:"jsx-2880253090 w-full border lg:my-1 lg:px-1 lg:w-2/3 xl:my-1 xl:px-1 xl:w-2/3 mx-auto",children:(0,g.jsx)("div",{className:"jsx-2880253090 h-[30vh] lg:h-[30vh] mx-auto xl:h-[70vh]",children:(0,g.jsx)("iframe",{title:"YouTube Video",src:"https://www.youtube.com/embed/"+e.videoid,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"jsx-2880253090 w-full h-full"})})}),(0,g.jsxs)("div",{className:"jsx-2880253090 mx-auto w-full xl:text-lg font-medium pt-3 px-2 rounded-t-lg lg:w-1/3 overflow-x-hidden",children:[(0,g.jsxs)("div",{className:"jsx-2880253090 flex py-3",children:["Course: ",e.videoseries.title," ",n?(0,g.jsx)("img",{onClick:q,src:"/img/minus.svg",className:"jsx-2880253090 mx-2 w-4 lg:hidden"}):(0,g.jsx)("img",{onClick:q,src:"/img/plus.svg",className:"jsx-2880253090 mx-2 w-4 lg:hidden"})]}),(0,g.jsx)("div",{id:"videoBox",className:"jsx-2880253090 my-0 lg:h-[30vh] xl:h-[64vh] w-full lg:my-1  xl:my-1 lg:px-3 transition-all overflow-scroll overflow-x-hidden h-0",children:e.othervideos.map((function(e){return(0,g.jsx)("div",{className:"jsx-2880253090 px-2 mt-4 flex flex-col lg:px-8 py-2 bg-white rounded-lg shadow-lg",children:(0,g.jsxs)("div",{className:"jsx-2880253090 mt-4",children:[(0,g.jsx)("input",{type:"checkbox",name:"",id:"",className:"jsx-2880253090 mr-2"}),(0,g.jsx)(d.default,{href:"/videos/".concat(e.slug),className:"text-lg font-medium text-gray-700 ",children:e.title})]})},e.id)}))})]})]})}),(0,g.jsxs)("nav",{className:"jsx-2880253090 mx-2 px-3 tabs flex sm:flex-row overflow-x-scroll lg:overflow-x-hidden",children:[(0,g.jsx)("button",{onClick:function(){p(!0),b(!1),O(!1),E(!1)},"data-target":"panel-1",className:"jsx-2880253090 "+"tab active text-gray-600 py-2 px-2 block hover:text-blue-500 focus:outline-none ".concat(u?"border-b-2":""," font-medium border-blue-500"),children:"Overview"}),(0,g.jsx)("button",{onClick:K,"data-target":"panel-2",className:"jsx-2880253090 "+"tab active text-gray-600 py-2 px-2 block hover:text-blue-500 focus:outline-none ".concat(y?"border-b-2":""," font-medium border-blue-500"),children:"Q&A"}),(0,g.jsx)("button",{onClick:$,"data-target":"panel-2",className:"jsx-2880253090 "+"tab active text-gray-600 py-2 px-2 block hover:text-blue-500 focus:outline-none ".concat(N?"border-b-2":""," font-medium border-blue-500"),children:"Downloads"}),(0,g.jsx)("button",{onClick:function(){p(!1),b(!1),O(!1),E(!0)},"data-target":"panel-2",className:"jsx-2880253090 "+"tab active text-gray-600 py-2 px-2 block hover:text-blue-500 focus:outline-none ".concat(S?"border-b-2":""," font-medium border-blue-500"),children:"Announcements"})]}),(0,g.jsxs)("div",{id:"panels",className:"jsx-2880253090",children:[u&&(0,g.jsxs)("div",{className:"jsx-2880253090 lg:w-2/3",children:[" ",(0,g.jsx)("h1",{className:"jsx-2880253090 text-2xl lg:text-3xl font-semibold mx-4 lg:mx-16 my-2",children:e.title}),(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:F},className:"jsx-2880253090 mx-4 lg:mx-16 panel-1 tab-content py-5 break-words"})]}),u&&(0,g.jsxs)("div",{className:"jsx-2880253090 flex mx-4 lg:mx-16 my-3 px-3 justify-between lg:w-2/3",children:[(0,g.jsx)(d.default,{href:e.prevSlug?e.prevSlug:"#",children:(0,g.jsx)("span",{className:"jsx-2880253090 w-24 text-center inline-block bg-purple-800 rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-purple-600 cursor-pointer",children:" Previous "})}),(0,g.jsx)(d.default,{href:e.nextSlug?e.nextSlug:"#",children:(0,g.jsx)("span",{className:"jsx-2880253090 w-24 text-center inline-block bg-purple-800 rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-purple-600 cursor-pointer",children:" Next "})})]}),y&&(0,g.jsxs)("div",{className:"jsx-2880253090 w-full border lg:my-1 lg:px-1 lg:w-2/3 xl:my-1 xl:px-1 xl:w-2/3",children:[e.user&&(0,g.jsxs)("form",{onSubmit:U,className:"jsx-2880253090 m-3",children:[(0,g.jsx)("span",{className:"jsx-2880253090 text-sm text-gray-600 font-bold ",children:"Add a Comment"}),(0,g.jsx)("textarea",{value:I,onChange:Y,name:"comment",className:"jsx-2880253090 w-full h-32 border border-black text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}),(0,g.jsx)(h.Z,{sitekey:"6LdQ340dAAAAAIfUNlYRGgVd-lZwwgNEScXOEDcF",size:"invisible",ref:A}),(0,g.jsx)("button",{disabled:I.length<3,className:"jsx-2880253090 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1 my-2 disabled:opacity-50",children:"Post Comment"})]}),(0,g.jsxs)("div",{className:"jsx-2880253090 min-h-[70vh] antialiased px-4",children:[(0,g.jsxs)("h3",{className:"jsx-2880253090 mb-4 text-2xl font-semibold my-4",children:["Comments (",M,")"]}),(0,g.jsxs)("div",{className:"jsx-2880253090 space-y-4",children:[0==M&&(0,g.jsx)("div",{className:"jsx-2880253090 mt-6 mb-32 text-xl",children:"Be the first one to post a comment!"}),(0,g.jsx)(o.Z,{dataLength:P.length,next:W,hasMore:P.length<M,loader:(0,g.jsx)("div",{className:"jsx-2880253090 flex justify-center items-center my-4",children:(0,g.jsx)("div",{className:"jsx-2880253090 animate-spin rounded-full h-7 w-7 border-b-2 border-gray-900"})}),children:P.map((function(t){return(0,g.jsxs)("div",{className:"jsx-2880253090 flex my-3 break-all",children:[(0,g.jsx)("div",{className:"jsx-2880253090 flex-shrink-0 mr-3",children:(0,g.jsx)("img",{src:"/img/user.png",alt:"",className:"jsx-2880253090 mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"})}),(0,g.jsxs)("div",{className:"jsx-2880253090 flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed",children:[(0,g.jsx)("strong",{className:"jsx-2880253090",children:t.user&&t.user.username})," ",(0,g.jsx)("span",{className:"jsx-2880253090 text-xs text-gray-400",children:new Date(t.createdAt).toDateString()}),(0,g.jsx)("p",{className:"jsx-2880253090 text-sm",children:t.comment}),(0,g.jsxs)("div",{className:"jsx-2880253090 flex space-x-4",children:[t.replies.length>0&&(0,g.jsxs)("span",{onClick:function(){!function(e){var t=P.filter((function(t){return t.id===e})),n=P.indexOf(t[0]),s=JSON.parse(JSON.stringify(P));s[n].replyBoxOpen=!0,Z(s)}(t.id)},className:"jsx-2880253090 my-5 uppercase tracking-wide text-gray-400 font-bold text-xs cursor-pointer",children:["View ",t.replies.length," Replies"]}),e.user&&!t.replyInputOpen&&(0,g.jsx)("span",{onClick:function(){!function(e){var t=P.filter((function(t){return t.id===e})),n=P.indexOf(t[0]),s=JSON.parse(JSON.stringify(P));s.forEach((function(e){e.replyInputOpen=!1})),s[n].replyInputOpen=!0,Z(s)}(t.id)},className:"jsx-2880253090 my-5 uppercase tracking-wide text-gray-400 font-bold text-xs cursor-pointer",children:"Reply"})]}),(0,g.jsxs)("div",{className:"jsx-2880253090 space-y-4",children:[t.replyInputOpen&&(0,g.jsxs)("form",{onSubmit:function(e){Q(e,z,t.id)},action:"post",className:"jsx-2880253090 max-w-screen-sm my-3",children:[(0,g.jsx)("textarea",{value:z,onChange:Y,name:"reply",className:"jsx-2880253090 w-full h-14 border border-black text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"}),(0,g.jsx)("button",{disabled:z.length<3,className:"jsx-2880253090 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 text-center inline-flex items-center mx-1 my-2 disabled:opacity-50",children:"Reply"})]}),t.replyBoxOpen&&t.replies.map((function(e){return(0,g.jsxs)("div",{className:"jsx-2880253090 flex break-all",children:[t.replyBoxOpen,(0,g.jsx)("div",{className:"jsx-2880253090 flex-shrink-0 mr-3",children:(0,g.jsx)("img",{src:"/img/user.png",alt:"",className:"jsx-2880253090 mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"})}),(0,g.jsxs)("div",{className:"jsx-2880253090 flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed",children:[(0,g.jsx)("strong",{className:"jsx-2880253090",children:e.user&&e.user.username})," ",(0,g.jsx)("span",{className:"jsx-2880253090 text-xs text-gray-400",children:new Date(e.createdAt).toDateString()}),(0,g.jsx)("p",{className:"jsx-2880253090 text-xs sm:text-sm",children:e.comment})]})]},e.id)}))]})]})]},t.id)}))})]})]})]}),N&&(0,g.jsxs)("div",{className:"jsx-2880253090 min-h-[70vh] panel-3 tab-content py-5",children:[B.map((function(e,t){return(0,g.jsxs)("div",{className:"jsx-2880253090 mx-10 my-3 font-medium",children:[(0,g.jsxs)("span",{className:"jsx-2880253090 font-medium",children:[t+1,"."]})," ",e.file[0].name,"  ",(0,g.jsx)("a",{href:e.file[0].url,className:"jsx-2880253090",children:(0,g.jsx)("button",{className:"jsx-2880253090 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs px-2 py-2 text-center inline-flex items-center mx-1",children:"Download"})})]},e.id)})),0==B.length&&(0,g.jsx)("div",{className:"jsx-2880253090 container mx-8 text-sm",children:"No Downloadable assets found for this video!"})]}),S&&(0,g.jsxs)("div",{className:"jsx-2880253090 min-h-[70vh] panel-3 tab-content p-5",children:[e.announcements,!e.announcements&&(0,g.jsx)("div",{className:"jsx-2880253090 container mx-2 text-sm",children:"No Announcements as of now!"})]})]})]})}},5139:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/videos/[slug]",function(){return n(3690)}])}},function(e){e.O(0,[993,282,774,888,179],(function(){return t=5139,e(e.s=t);var t}));var t=e.O();_N_E=t}]);