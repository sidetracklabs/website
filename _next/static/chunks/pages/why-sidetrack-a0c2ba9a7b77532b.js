(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{2673:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-sidetrack",function(){return i(9053)}])},9053:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d,useTOC:()=>s});var n=i(5105),r=i(7498),a=i(6122),o=i(5336);function s(e){return[{value:"Motivation",id:"motivation",depth:2}]}let d=(0,r.e)(function(e){let{toc:t=s(e)}=e,i={h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:t[0].id,children:t[0].value}),"\n",(0,n.jsx)(i.p,{children:"We’ve used database-backed background job libraries in production for years, and we’ve found that they are a great choice for a lot of applications."}),"\n",(0,n.jsxs)(i.p,{children:["After working on a handful of applications, we felt there was room for improvement with the libraries in the TypeScript/JavaScript ecosystem for working with background jobs. The most popular job processing libraries in the ecosystem use Redis, which is a great tool, but we wanted to use a database that we were already using in our applications. Additionally, databases allow for ",(0,n.jsx)(i.strong,{children:"transactional guarantees"}),", so we can avoid inserting jobs into the queue if the transaction fails. We primarily wanted to be able to use TypeScript to work with our background jobs and have a great developer experience."]}),"\n",(0,n.jsxs)(i.p,{children:["Our focus is on ",(0,n.jsx)(i.strong,{children:"relational databases"}),", namely PostgreSQL, but we are open to supporting other relational databases in the future."]}),"\n",(0,n.jsx)(i.p,{children:"This is the first open-source project we’ve worked on together, and we’re excited to share it with you!"})]})},"/why-sidetrack",{filePath:"pages/why-sidetrack.mdx",timestamp:173735043e4,pageMap:a.O,frontMatter:{},title:"Why Sidetrack"},"undefined"==typeof RemoteContent?s:RemoteContent.useTOC)},6122:(e,t,i)=>{"use strict";i.d(t,{O:()=>n});let n=[{data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{name:"blog",route:"/blog",children:[{data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts",sidebarTitle:"Blog"}},{name:"examples",route:"/examples",children:[{name:"transactional-job-insertion",route:"/examples/transactional-job-insertion",frontMatter:{sidebarTitle:"Transactional Job Insertion"}}]},{name:"guides",route:"/guides",children:[{data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{name:"configuring-queues",route:"/guides/configuring-queues",frontMatter:{sidebarTitle:"Configuring Queues"}},{name:"custom-db-client",route:"/guides/custom-db-client",frontMatter:{sidebarTitle:"Custom Db Client"}},{name:"errors-and-logging",route:"/guides/errors-and-logging",frontMatter:{sidebarTitle:"Errors and Logging"}},{name:"running-migrations",route:"/guides/running-migrations",frontMatter:{sidebarTitle:"Running Migrations"}},{name:"testing-sidetrack",route:"/guides/testing-sidetrack",frontMatter:{sidebarTitle:"Testing Sidetrack"}},{name:"using-effect",route:"/guides/using-effect",frontMatter:{sidebarTitle:"Using Effect"}},{name:"working-with-types",route:"/guides/working-with-types",frontMatter:{sidebarTitle:"Working with Types"}}]},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"quickstart",route:"/quickstart",frontMatter:{sidebarTitle:"Quickstart"}},{name:"why-sidetrack",route:"/why-sidetrack",frontMatter:{sidebarTitle:"Why Sidetrack"}}]}},e=>{var t=t=>e(e.s=t);e.O(0,[498,636,593,792],()=>t(2673)),_N_E=e.O()}]);