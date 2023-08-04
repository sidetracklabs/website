(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{4280:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-effect",function(){return n(9029)}])},4558:function(e,s,n){"use strict";n.d(s,{Z:function(){return a}});var l=n(1527);n(959);var r=n(5408),c=n.n(r),i=n(2349);let o={logo:(0,l.jsx)(c(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX/bzVMaXH/QRn/TyD/g0T/AAD/ez7/ZzD/Zi7/eD3/djr/cTj/Wyv/jEn/lk8+LjX0AAAADXRSTlN0AA8f7ALSWEbajaY1SacOBgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwdikkSwDAIw2ygkKXO/5/b0JM0GoG0MYwEfUrTruDsQpdSLG9hpeLtB77P+p8IXdCQiYcfKuYBKUHNslAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,l.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}};var a=o},9029:function(e,s,n){"use strict";n.r(s);var l=n(1527),r=n(4086),c=n(7761),i=n(4558);n(3792);var o=n(6736);n(5408);var a=n(268);let t={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/guides/using-effect.mdx",route:"/guides/using-effect",headings:[{depth:2,value:"Using Effect-TS?",id:"using-effect-ts"}],pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Using Effect"},pageNextRoute:"/guides/using-effect",nextraLayout:c.ZP,themeConfig:i.Z};function d(e){let s=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",div:"div",span:"span","data-lsp":"data-lsp"},(0,o.ah)(),e.components),n=s["data-lsp"];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"using-effect-ts",children:"Using Effect-TS?"}),"\n",(0,l.jsxs)(s.p,{children:["If you are using ",(0,l.jsx)(s.a,{href:"https://effect.website",children:"Effect-TS"}),", Sidetrack exports an ",(0,l.jsx)(s.code,{children:"Effect"}),"-based API as well."]}),"\n",(0,l.jsx)(s.p,{children:"Sidetrack is written with Effect, which means that you can use the Effect API directly if you prefer."}),"\n",(0,l.jsxs)(s.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"*"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"as"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"@effect/io/Effect"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(alias) const createSidetrackServiceTag: <Queues extends SidetrackQueuesGenericType>() => Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(alias) function makeLayer<Queues extends SidetrackQueuesGenericType>(layerOptions: SidetrackOptions<Queues>): Layer.Layer<never, never, SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"sidetrack/effect"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:": { "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:": "}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" };"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"};"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(n,{lsp:"const SidetrackService: Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(alias) createSidetrackServiceTag<Queues>(): Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:">();"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(n,{lsp:"const sidetrackLayer: Layer<never, never, SidetrackService<Queues>>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(alias) makeLayer<Queues>(layerOptions: SidetrackOptions<Queues>): Layer<never, never, SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:">({"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<Queues>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"["}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"]!,"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<Queues>.queues: SidetrackQueues<Queues>",children:"queues"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number | undefined; } | undefined; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:"`Welcome "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"${"}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:"`"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:");"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"});"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(n,{lsp:"const program: Promise<unknown>",children:"program"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"const runPromise: <unknown, unknown>(effect: Effect.Effect<never, unknown, unknown>) => Promise<unknown>",children:"runPromise"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"const flatMap: <unknown, unknown, unknown, unknown, unknown, unknown>(self: Effect.Effect<unknown, unknown, unknown>, f: (a: unknown) => Effect.Effect<unknown, unknown, unknown>) => Effect.Effect<unknown, unknown, unknown> (+1 overload)",children:"flatMap"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"const SidetrackService: Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", ("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) sidetrack: unknown",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"=>"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) sidetrack: unknown",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"any",children:"insertJob"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"userOnboarding"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", { "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"hello@example.com"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" }),"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  )."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"any",children:"pipe"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"const provideLayer: <never, never, SidetrackService<Queues>>(layer: Layer<never, never, SidetrackService<Queues>>) => <E, A>(self: Effect.Effect<SidetrackService<...>, E, A>) => Effect.Effect<...> (+1 overload)",children:"provideLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"const sidetrackLayer: Layer<never, never, SidetrackService<Queues>>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:")),"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:");"})})]})})]}),"\n",(0,l.jsxs)(s.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"*"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"as"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"@effect/io/Effect"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:";"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(alias) const createSidetrackServiceTag: <Queues extends SidetrackQueuesGenericType>() => Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(alias) function makeLayer<Queues extends SidetrackQueuesGenericType>(layerOptions: SidetrackOptions<Queues>): Layer.Layer<never, never, SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"sidetrack/effect"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:";"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:": { "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:": "}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" };"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"};"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(n,{lsp:"const SidetrackService: Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(alias) createSidetrackServiceTag<Queues>(): Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:">();"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(n,{lsp:"const sidetrackLayer: Layer<never, never, SidetrackService<Queues>>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(alias) makeLayer<Queues>(layerOptions: SidetrackOptions<Queues>): Layer<never, never, SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(n,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:">({"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<Queues>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"["}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"]!,"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<Queues>.queues: SidetrackQueues<Queues>",children:"queues"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number | undefined; } | undefined; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:"`Welcome "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"${"}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(s.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:"`"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:");"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"      },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"});"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(n,{lsp:"const program: Promise<unknown>",children:"program"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"const runPromise: <unknown, unknown>(effect: Effect.Effect<never, unknown, unknown>) => Promise<unknown>",children:"runPromise"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"const flatMap: <unknown, unknown, unknown, unknown, unknown, unknown>(self: Effect.Effect<unknown, unknown, unknown>, f: (a: unknown) => Effect.Effect<unknown, unknown, unknown>) => Effect.Effect<unknown, unknown, unknown> (+1 overload)",children:"flatMap"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"const SidetrackService: Context.Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", ("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) sidetrack: unknown",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"=>"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) sidetrack: unknown",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"any",children:"insertJob"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"userOnboarding"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", { "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"hello@example.com"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" }),"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  )."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"any",children:"pipe"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"const provideLayer: <never, never, SidetrackService<Queues>>(layer: Layer<never, never, SidetrackService<Queues>>) => <E, A>(self: Effect.Effect<SidetrackService<...>, E, A>) => Effect.Effect<...> (+1 overload)",children:"provideLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"const sidetrackLayer: Layer<never, never, SidetrackService<Queues>>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:")),"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:");"})})]})})]}),"\n",(0,l.jsx)(a.UW,{type:"warning",emoji:"⚠️",children:(0,l.jsxs)(s.p,{children:["If the ",(0,l.jsx)(s.code,{children:"sidetrack/effect"})," import doesn't work, you will need to use ",(0,l.jsx)(s.code,{children:'ts   import {SidetrackEffect} from "sidetrack" '})," and access the methods on that\nexport (e.g. ",(0,l.jsx)(s.code,{children:"SidetrackEffect.makeLayer"}),"). Certain TypeScript configurations\ndon't allow for that import to work correctly."]})}),"\n",(0,l.jsxs)(s.p,{children:["You can find the remaining reference documentation for the Effect docs ",(0,l.jsx)(s.a,{href:"https://sidetracklabs.github.io/sidetrack/modules/sidetrack.effect.html",children:"here"}),'. The functions are similar to the ones in the class-based API, but they return Effects instead of Promises, with some error handling. Over time, the Effect API might be expanded to include more features. Please open an issue if you have any requests for how we can make the API more ergonomic or "Effectful."']}),"\n",(0,l.jsxs)(s.p,{children:["The test utils mentioned in the ",(0,l.jsx)(s.a,{href:"/guides/testing-sidetrack",children:"Testing Sidetrack"})," section can also be found under the ",(0,l.jsx)(s.code,{children:"testUtils"})," key in the sidetrack service. For example, you can do ",(0,l.jsx)(s.code,{children:"sidetrack.testUtils.runJob"})," in the example above."]})]})}s.default=(0,r.j)(t)}},function(e){e.O(0,[117,774,888,179],function(){return e(e.s=4280)}),_N_E=e.O()}]);