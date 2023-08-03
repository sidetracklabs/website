(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{1534:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-sidetrack",function(){return a(9208)}])},4422:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var i=a(1527);a(959);var n=a(7758),s=a.n(n),o=a(2884);let r={logo:(0,i.jsx)(s(),{src:{src:"/_next/static/media/logo.326745de.jpg",height:512,width:512,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREjFRkfD/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIRAxEAPwCXgm2qjPLNc09de0AASmOyj//Z",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,i.jsx)("meta",{property:"og:description",content:"An open source, database-backed, typescript-first background job library."}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}};var d=r},9208:function(e,t,a){"use strict";a.r(t);var i=a(1527),n=a(6300),s=a(7385),o=a(4422);a(2683);var r=a(6736);a(7758);let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/why-sidetrack.mdx",route:"/why-sidetrack",headings:[{depth:2,value:"Motivation",id:"motivation"}],pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart",contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0},"-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Why Sidetrack"},pageNextRoute:"/why-sidetrack",nextraLayout:s.ZP,themeConfig:o.Z};function c(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong",a:"a"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"Putting a job queue in a database sometimes gets a bad rap. It's often said that databases are not suited for this, or that they aren't scalable. We've found that a database-backed job queue can get you really far, and it's a great choice for a lot of new applications. We've used database-backed background job libraries in production for years, and have found that many of the recommendations given about additional job processing tools may only be necessary at a certain scale, much larger than your typical app."}),"\n",(0,i.jsxs)(t.p,{children:["After working on a handful of applications, we couldn't find a library in the TypeScript/JavaScript ecosystem for working with background jobs that was database-backed and TypeScript-first. The most popular job processing libraries in the ecosystem use Redis, which is a great tool, but we wanted to use a database that we were already using in our applications. We wanted to be able to use TypeScript to define our jobs and have a great developer experience. Additionally, databases allow for ",(0,i.jsx)(t.strong,{children:"transactional guarantees"}),", so we can avoid inserting jobs into the queue if the transaction fails."]}),"\n",(0,i.jsxs)(t.p,{children:["Our focus is on ",(0,i.jsx)(t.strong,{children:"relational databases"}),", namely PostgreSQL, but we are open to supporting other relational databases in the future. This would make Sidetrack the first database-backed job processing library in the Node.js ecosystem that we know of to support more than one database (i.e. PostgreSQL)."]}),"\n",(0,i.jsxs)(t.p,{children:["We also love using ",(0,i.jsx)(t.a,{href:"https://effect.website/",children:"Effect-TS"}),", and had to create internal wrappers around other libraries to make them work with Effect. We wanted to create a library that was built with Effect in mind, and that would allow us to use Effect."]}),"\n",(0,i.jsx)(t.p,{children:"This is the first open-source project we've worked on together, and we're excited to share it with you!"})]})}t.default=(0,n.j)(d)}},function(e){e.O(0,[168,774,888,179],function(){return e(e.s=1534)}),_N_E=e.O()}]);