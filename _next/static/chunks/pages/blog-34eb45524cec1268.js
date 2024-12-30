(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{2279:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(7809)}])},7809:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlogHeader:()=>u,BlogIndex:()=>c,default:()=>m,useTOC:()=>g});var i=n(5105),r=n(9634),a=n(3561),o=n(3617);function s(e){return"data"in e}var l=n(1969),d=n.n(l);function u(){return(0,i.jsxs)("div",{className:"max-w-screen-lg mx-auto pt-4 pb-8 mb-16 border-b border-gray-400 border-opacity-20",children:[(0,i.jsx)("h1",{children:(0,i.jsx)("span",{className:"font-bold leading-tight lg:text-5xl",children:"Blog"})}),(0,i.jsx)("p",{className:"text-center text-gray-500 dark:text-gray-400 font-space-grotesk",children:"The latest updates and releases from Sidetrack."})]})}function c(){return(function(e){let{pageMap:t}=function(e){let t=globalThis[o.VZ];if(!t)throw Error(`Nextra context not found. Make sure you are using "${e}" of "nextra/context" on an md/mdx page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,n){let i=[],r=[],a=t.find(s),o=a?.data||{};for(let a of t){var l;if(s(a))continue;let t="string"==typeof(l=o[a.name])?{title:l}:l,d={...a,...Object.keys(t||{}).length>0&&{meta:t}};if("children"in d){let t=e(d.children,n);d.children=t.items,t.activeLevelPages.length?i=t.activeLevelPages:d.route!==n||i.length||(i=d.children)}r.push(d)}let d=Object.keys(o);return r.sort((e,t)=>{let n=d.indexOf(e.name),i=d.indexOf(t.name);return -1===n&&-1===i?e.name<t.name?-1:1:-1===n?1:-1===i?-1:n-i}),{items:r,activeLevelPages:i}}(t,e).activeLevelPages})("/blog").map(e=>{var t,n,r,a;return(0,i.jsxs)("div",{className:"mb-10",children:[(0,i.jsx)(d(),{href:e.route,style:{color:"inherit",textDecoration:"none"},className:"block font-semibold mt-8 text-2xl",children:(null===(t=e.meta)||void 0===t?void 0:t.title)||(null===(n=e.frontMatter)||void 0===n?void 0:n.title)||e.name}),(0,i.jsxs)("p",{className:"opacity-80",style:{marginTop:".5rem"},children:[null===(r=e.frontMatter)||void 0===r?void 0:r.description," "]}),(0,i.jsx)("p",{className:"inline-block",children:(0,i.jsx)(d(),{href:e.route,children:"Read more →"})}),(null===(a=e.frontMatter)||void 0===a?void 0:a.date)?(0,i.jsx)("p",{className:"opacity-50 text-sm",children:e.frontMatter.date}):null]},e.route)})}function g(e){return[]}let m=(0,r.e)(function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{}),"\n",(0,i.jsx)(c,{})]})},"/blog",{filePath:"pages/blog.mdx",timestamp:1735533639e3,pageMap:a.O,frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"},title:"Blog"},"undefined"==typeof RemoteContent?g:RemoteContent.useTOC)},3561:(e,t,n)=>{"use strict";n.d(t,{O:()=>i});let i=[{data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{name:"blog",route:"/blog",children:[{data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts",sidebarTitle:"Blog"}},{name:"examples",route:"/examples",children:[{name:"transactional-job-insertion",route:"/examples/transactional-job-insertion",frontMatter:{sidebarTitle:"Transactional Job Insertion"}}]},{name:"guides",route:"/guides",children:[{data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{name:"configuring-queues",route:"/guides/configuring-queues",frontMatter:{sidebarTitle:"Configuring Queues"}},{name:"custom-db-client",route:"/guides/custom-db-client",frontMatter:{sidebarTitle:"Custom Db Client"}},{name:"errors-and-logging",route:"/guides/errors-and-logging",frontMatter:{sidebarTitle:"Errors and Logging"}},{name:"running-migrations",route:"/guides/running-migrations",frontMatter:{sidebarTitle:"Running Migrations"}},{name:"testing-sidetrack",route:"/guides/testing-sidetrack",frontMatter:{sidebarTitle:"Testing Sidetrack"}},{name:"using-effect",route:"/guides/using-effect",frontMatter:{sidebarTitle:"Using Effect"}},{name:"working-with-types",route:"/guides/working-with-types",frontMatter:{sidebarTitle:"Working with Types"}}]},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"quickstart",route:"/quickstart",frontMatter:{sidebarTitle:"Quickstart"}},{name:"why-sidetrack",route:"/why-sidetrack",frontMatter:{sidebarTitle:"Why Sidetrack"}}]}},e=>{var t=t=>e(e.s=t);e.O(0,[634,636,593,792],()=>t(2279)),_N_E=e.O()}]);