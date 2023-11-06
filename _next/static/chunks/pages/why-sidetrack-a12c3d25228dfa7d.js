(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{9473:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/why-sidetrack",function(){return n(6889)}])},6889:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return d}});var i=n(1527),a=n(3264),r=n(2509),o=n(3050);n(3248);var s=n(2684);let d=[{depth:2,value:"Motivation",id:"motivation"}];function _createMdxContent(e){let t=Object.assign({h2:"h2",p:"p",strong:"strong"},(0,s.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:"We've used database-backed background job libraries in production for years, and we've found that they are a great choice for a lot of applications."}),"\n",(0,i.jsxs)(t.p,{children:["After working on a handful of applications, we felt there was room for improvement with the libraries in the TypeScript/JavaScript ecosystem for working with background jobs. The most popular job processing libraries in the ecosystem use Redis, which is a great tool, but we wanted to use a database that we were already using in our applications. Additionally, databases allow for ",(0,i.jsx)(t.strong,{children:"transactional guarantees"}),", so we can avoid inserting jobs into the queue if the transaction fails. We primarily wanted to be able to use TypeScript to work with our background jobs and have a great developer experience."]}),"\n",(0,i.jsxs)(t.p,{children:["Our focus is on ",(0,i.jsx)(t.strong,{children:"relational databases"}),", namely PostgreSQL, but we are open to supporting other relational databases in the future."]}),"\n",(0,i.jsx)(t.p,{children:"This is the first open-source project we've worked on together, and we're excited to share it with you!"})]})}function MDXContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)}let c={MDXContent,pageOpts:{filePath:"pages/why-sidetrack.mdx",route:"/why-sidetrack",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Why Sidetrack",headings:d},pageNextRoute:"/why-sidetrack",nextraLayout:r.ZP,themeConfig:o.Z};t.default=(0,a.j)(c)},3050:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var i=n(1527);n(959);var a=n(9176),r=n.n(a),o=n(6087);let s={logo:(0,i.jsx)(r(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX/bzVMaXH/QRn/TyD/g0T/AAD/ez7/ZzD/Zi7/eD3/djr/cTj/Wyv/jEn/lk8+LjX0AAAADXRSTlN0AA8f7ALSWEbajaY1SacOBgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwdylsOwDAIxMA1oZBHyf2PW9E/yxqBzWkgxqpahtA9qT5ZvkcHGeVvG41z92/cSwhThB4+KuYBKehwJxMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,i.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}};var d=s}},function(e){e.O(0,[671,774,888,179],function(){return e(e.s=9473)}),_N_E=e.O()}]);