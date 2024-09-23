(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{654:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/running-migrations",function(){return s(2965)}])},2965:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return c}});var i=s(2676),t=s(4943),r=s(9407),o=s(2058);s(6888);var a=s(5674);let c=[];function l(e){let n=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",div:"div",span:"span","data-lsp":"data-lsp"},(0,a.a)(),e.components),s=n["data-lsp"];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Running migrations"}),"\n",(0,i.jsxs)(n.p,{children:["Migrations will automatically be run when you call ",(0,i.jsx)(n.code,{children:"sidetrack.start()"}),".\nThe migrations creates a ",(0,i.jsx)(n.code,{children:"sidetrack_job"})," table in your database, under the ",(0,i.jsx)(n.code,{children:"sidetrack"})," schema."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to manually run the migrations, call ",(0,i.jsx)(n.code,{children:"runMigrations"})," with your database connection string."]}),"\n",(0,i.jsxs)(n.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,i.jsx)(n.div,{className:"language-id",children:"ts"}),(0,i.jsx)(n.div,{className:"code-container",children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.div,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"#C586C0"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:" { "}),(0,i.jsx)(n.span,{style:{color:"#9CDCFE"},children:(0,i.jsx)(s,{lsp:"(alias) const runMigrations: (connectionString: string) => Promise<void> import runMigrations",children:"runMigrations"})}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:" } "}),(0,i.jsx)(n.span,{style:{color:"#C586C0"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:" "}),(0,i.jsx)(n.span,{style:{color:"#CE9178"},children:'"sidetrack"'}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,i.jsx)(n.div,{className:"line",children:"\xa0"}),(0,i.jsxs)(n.div,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"#C586C0"},children:"await"}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:" "}),(0,i.jsx)(n.span,{style:{color:"#DCDCAA"},children:(0,i.jsx)(s,{lsp:"(alias) runMigrations(connectionString: string): Promise<void> import runMigrations",children:"runMigrations"})}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:"("}),(0,i.jsx)(n.span,{style:{color:"#9CDCFE"},children:(0,i.jsx)(s,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:"."}),(0,i.jsx)(n.span,{style:{color:"#9CDCFE"},children:(0,i.jsx)(s,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:"["}),(0,i.jsx)(n.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,i.jsx)(n.span,{style:{color:"#D4D4D4"},children:"]!);"})]})]})})]}),"\n",(0,i.jsxs)(n.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,i.jsx)(n.div,{className:"language-id",children:"ts"}),(0,i.jsx)(n.div,{className:"code-container",children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.div,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"#AF00DB"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:" { "}),(0,i.jsx)(n.span,{style:{color:"#001080"},children:(0,i.jsx)(s,{lsp:"(alias) const runMigrations: (connectionString: string) => Promise<void> import runMigrations",children:"runMigrations"})}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:" } "}),(0,i.jsx)(n.span,{style:{color:"#AF00DB"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:" "}),(0,i.jsx)(n.span,{style:{color:"#A31515"},children:'"sidetrack"'}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:";"})]}),(0,i.jsx)(n.div,{className:"line",children:"\xa0"}),(0,i.jsxs)(n.div,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"#AF00DB"},children:"await"}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:" "}),(0,i.jsx)(n.span,{style:{color:"#795E26"},children:(0,i.jsx)(s,{lsp:"(alias) runMigrations(connectionString: string): Promise<void> import runMigrations",children:"runMigrations"})}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:"("}),(0,i.jsx)(n.span,{style:{color:"#001080"},children:(0,i.jsx)(s,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:"."}),(0,i.jsx)(n.span,{style:{color:"#001080"},children:(0,i.jsx)(s,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:"["}),(0,i.jsx)(n.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,i.jsx)(n.span,{style:{color:"#000000"},children:"]!);"})]})]})})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/guides/running-migrations.mdx",route:"/guides/running-migrations",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Running migrations",headings:c},pageNextRoute:"/guides/running-migrations",nextraLayout:r.ZP,themeConfig:o.Z};n.default=(0,t.j)(d)},2058:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var i=s(2676);s(5271);var t=s(2647),r=s.n(t),o=s(4720),a={logo:(0,i.jsx)(r(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,i.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(e){e.O(0,[67,888,774,179],function(){return e(e.s=654)}),_N_E=e.O()}]);