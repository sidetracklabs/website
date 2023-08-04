(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[759],{6427:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/configuring-queues",function(){return n(6233)}])},4558:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});var r=n(1527);n(959);var l=n(5408),i=n.n(l),o=n(2349);let c={logo:(0,r.jsx)(i(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX/bzVMaXH/QRn/TyD/g0T/AAD/ez7/ZzD/Zi7/eD3/djr/cTj/Wyv/jEn/lk8+LjX0AAAADXRSTlN0AA8f7ALSWEbajaY1SacOBgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwdikkSwDAIw2ygkKXO/5/b0JM0GoG0MYwEfUrTruDsQpdSLG9hpeLtB77P+p8IXdCQiYcfKuYBKUHNslAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,r.jsx)("meta",{property:"og:description",content:"An open source, database-backed, typescript-first background job library."}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}};var t=c},6233:function(e,s,n){"use strict";n.r(s);var r=n(1527),l=n(4086),i=n(7761),o=n(4558);n(3792);var c=n(6736);n(5408);let t={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,c.ah)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/guides/configuring-queues.mdx",route:"/guides/configuring-queues",headings:[{depth:1,value:"Configuring Queues",id:"configuring-queues"},{depth:2,value:"maxAttempts",id:"maxattempts"}],pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Configuring Queues"},pageNextRoute:"/guides/configuring-queues",nextraLayout:i.ZP,themeConfig:o.Z};function a(e){let s=Object.assign({h1:"h1",p:"p",code:"code",ol:"ol",li:"li",h2:"h2",pre:"pre",div:"div",span:"span","data-lsp":"data-lsp"},(0,c.ah)(),e.components),n=s["data-lsp"];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"Configuring Queues"}),"\n",(0,r.jsxs)(s.p,{children:["When specifying a queue, you can optionally pass an ",(0,r.jsx)(s.code,{children:"options"})," object to customize the queue's behavior.\nThere's currently 1 option you can customize:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"maxAttempts"})," - Default is 1. Increasing this means your job will be retried until ",(0,r.jsx)(s.code,{children:"currentAttempt <= maxAttempts"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"maxattempts",children:"maxAttempts"}),"\n",(0,r.jsxs)(s.p,{children:["By increasing the ",(0,r.jsx)(s.code,{children:"maxAttempts"})," for a job, you are allowing the job to be retried in the future. All jobs have a default ",(0,r.jsx)(s.code,{children:"maxAttempts"})," of 1, so if you want a job to run at most 5 times before being marked as failed, you can set maxAttempts to 5."]}),"\n",(0,r.jsxs)(s.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,r.jsx)(s.div,{className:"language-id",children:"ts"}),(0,r.jsx)(s.div,{className:"code-container",children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" } "}),(0,r.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#CE9178"},children:'"sidetrack"'}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,r.jsx)(s.span,{style:{color:"#569CD6"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,r.jsx)(n,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"<{"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:": { "}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:": "}),(0,r.jsx)(s.span,{style:{color:"#4EC9B0"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" };"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"}>({"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"["}),(0,r.jsx)(s.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"]!,"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number | undefined; } | undefined; }",children:"userOnboarding"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,r.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#569CD6"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:") "}),(0,r.jsx)(s.span,{style:{color:"#569CD6"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"#C586C0"},children:"throw"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#569CD6"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,r.jsx)(n,{lsp:"var Error: ErrorConstructor new (message?: string | undefined) => Error",children:"Error"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,r.jsx)(s.span,{style:{color:"#CE9178"},children:'"intentionally failing job"'}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:");"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) options?: { maxAttempts?: number | undefined; } | undefined",children:"options"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"        "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) maxAttempts?: number | undefined",style:{borderBottom:"solid 2px lightgrey"},children:"maxAttempts"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#B5CEA8"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:","})]}),(0,r.jsxs)(s.div,{className:"meta-line",children:[(0,r.jsx)(s.span,{className:"popover-prefix",children:"            "}),(0,r.jsxs)(s.span,{className:"popover",children:[(0,r.jsx)(s.div,{className:"arrow"}),"(property) maxAttempts?: number | undefined"]})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"});"})}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,r.jsx)(n,{lsp:"(method) Sidetrack<{ userOnboarding: { email: string; }; }>.start(): Promise<void>",children:"start"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"();"})]}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,r.jsx)(n,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions | undefined): Promise<SidetrackJobs>',children:"insertJob"})}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,r.jsx)(s.span,{style:{color:"#CE9178"},children:'"userOnboarding"'}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:", { "}),(0,r.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,r.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#CE9178"},children:'"a@example.com"'}),(0,r.jsx)(s.span,{style:{color:"#D4D4D4"},children:" });"})]})]})})]}),"\n",(0,r.jsxs)(s.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,r.jsx)(s.div,{className:"language-id",children:"ts"}),(0,r.jsx)(s.div,{className:"code-container",children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" } "}),(0,r.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#A31515"},children:'"sidetrack"'}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:";"})]}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#0070C1"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,r.jsx)(s.span,{style:{color:"#0000FF"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#795E26"},children:(0,r.jsx)(n,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"<{"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:": { "}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:": "}),(0,r.jsx)(s.span,{style:{color:"#267F99"},children:"string"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" };"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"}>({"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"["}),(0,r.jsx)(s.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"]!,"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number | undefined; } | undefined; }",children:"userOnboarding"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"#795E26"},children:(0,r.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:":"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#0000FF"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" ("}),(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:") "}),(0,r.jsx)(s.span,{style:{color:"#0000FF"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"#AF00DB"},children:"throw"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#0000FF"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#267F99"},children:(0,r.jsx)(n,{lsp:"var Error: ErrorConstructor new (message?: string | undefined) => Error",children:"Error"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,r.jsx)(s.span,{style:{color:"#A31515"},children:'"intentionally failing job"'}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:");"})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"      },"})}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"      "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) options?: { maxAttempts?: number | undefined; } | undefined",children:"options"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#000000"},children:"        "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) maxAttempts?: number | undefined",style:{borderBottom:"solid 2px lightgrey"},children:"maxAttempts"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#098658"},children:"5"}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:","})]}),(0,r.jsxs)(s.div,{className:"meta-line",children:[(0,r.jsx)(s.span,{className:"popover-prefix",children:"            "}),(0,r.jsxs)(s.span,{className:"popover",children:[(0,r.jsx)(s.div,{className:"arrow"}),"(property) maxAttempts?: number | undefined"]})]}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"      },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"    },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,r.jsx)(s.div,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"#000000"},children:"});"})}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#795E26"},children:(0,r.jsx)(n,{lsp:"(method) Sidetrack<{ userOnboarding: { email: string; }; }>.start(): Promise<void>",children:"start"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"();"})]}),(0,r.jsx)(s.div,{className:"line",children:"\xa0"}),(0,r.jsxs)(s.div,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"#001080"},children:(0,r.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,r.jsx)(s.span,{style:{color:"#795E26"},children:(0,r.jsx)(n,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions | undefined): Promise<SidetrackJobs>',children:"insertJob"})}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,r.jsx)(s.span,{style:{color:"#A31515"},children:'"userOnboarding"'}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:", { "}),(0,r.jsxs)(s.span,{style:{color:"#001080"},children:[(0,r.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,r.jsx)(s.span,{style:{color:"#A31515"},children:'"a@example.com"'}),(0,r.jsx)(s.span,{style:{color:"#000000"},children:" });"})]})]})})]}),"\n",(0,r.jsxs)(s.p,{children:["This job will fail on the first run then move to ",(0,r.jsx)(s.code,{children:"retrying"})," status since its ",(0,r.jsx)(s.code,{children:"currentAttempt"})," (1) is less than 5. After 5 attempts, the job will transition to a status of ",(0,r.jsx)(s.code,{children:"failed"}),"."]})]})}s.default=(0,l.j)(t)}},function(e){e.O(0,[117,774,888,179],function(){return e(e.s=6427)}),_N_E=e.O()}]);