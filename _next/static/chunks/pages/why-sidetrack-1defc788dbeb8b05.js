(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{3161:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-sidetrack",function(){return i(4509)}])},4509:function(e,t,i){"use strict";i.r(t),i.d(t,{__toc:function(){return d}});var n=i(1527),a=i(6112),r=i(7107),o=i(4444);i(6171);var s=i(3331);let d=[{depth:2,value:"Motivation",id:"motivation"}];function c(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong"},(0,s.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,n.jsx)(t.p,{children:"We've used database-backed background job libraries in production for years, and we've found that they are a great choice for a lot of applications."}),"\n",(0,n.jsxs)(t.p,{children:["After working on a handful of applications, we felt there was room for improvement with the libraries in the TypeScript/JavaScript ecosystem for working with background jobs. The most popular job processing libraries in the ecosystem use Redis, which is a great tool, but we wanted to use a database that we were already using in our applications. Additionally, databases allow for ",(0,n.jsx)(t.strong,{children:"transactional guarantees"}),", so we can avoid inserting jobs into the queue if the transaction fails. We primarily wanted to be able to use TypeScript to work with our background jobs and have a great developer experience."]}),"\n",(0,n.jsxs)(t.p,{children:["Our focus is on ",(0,n.jsx)(t.strong,{children:"relational databases"}),", namely PostgreSQL, but we are open to supporting other relational databases in the future."]}),"\n",(0,n.jsx)(t.p,{children:"This is the first open-source project we've worked on together, and we're excited to share it with you!"})]})}let g={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/why-sidetrack.mdx",route:"/why-sidetrack",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Why Sidetrack",headings:d},pageNextRoute:"/why-sidetrack",nextraLayout:r.ZP,themeConfig:o.Z};t.default=(0,a.j)(g)},4444:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(1527);i(959);var a=i(8659),r=i.n(a),o=i(5239),s={logo:(0,n.jsx)(r(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,n.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(e){e.O(0,[953,888,774,179],function(){return e(e.s=3161)}),_N_E=e.O()}]);