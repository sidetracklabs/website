(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{9885:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/using-effect",function(){return r(8076)}])},8076:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return t}});var l=r(2676),n=r(6760),c=r(2352),i=r(2703);r(3362);var o=r(2293),a=r(4619);let t=[{depth:2,value:"Using Effect-TS?",id:"using-effect-ts"}];function d(e){let s=Object.assign({h2:"h2",p:"p",a:"a",code:"code",pre:"pre",div:"div",span:"span","data-lsp":"data-lsp"},(0,o.a)(),e.components),r=s["data-lsp"];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"using-effect-ts",children:"Using Effect-TS?"}),"\n",(0,l.jsxs)(s.p,{children:["If you are using ",(0,l.jsx)(s.a,{href:"https://effect.website",children:"Effect-TS"}),", Sidetrack exports an ",(0,l.jsx)(s.code,{children:"Effect"}),"-based API as well."]}),"\n",(0,l.jsx)(s.p,{children:"Sidetrack is written with Effect, which means that you can use the Effect API directly if you prefer."}),"\n",(0,l.jsxs)(s.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"*"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"as"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"effect/Effect"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(alias) const createSidetrackServiceTag: <Queues extends SidetrackQueuesGenericType>() => Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(alias) function makeLayer<Queues extends SidetrackQueuesGenericType>(layerOptions: SidetrackOptions<Queues>): Layer<SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"sidetrack/effect"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:": { "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:": "}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" };"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"};"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(r,{lsp:"const SidetrackService: Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"(alias) createSidetrackServiceTag<Queues>(): Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:">();"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(r,{lsp:"const sidetrackLayer: Layer<SidetrackService<Queues>, never, never>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"(alias) makeLayer<Queues>(layerOptions: SidetrackOptions<Queues>): Layer<SidetrackService<Queues>, never, never> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#4EC9B0"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:">({"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(r,{lsp:"(property) SidetrackOptions<Queues>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(r,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"["}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"]!,"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(r,{lsp:"(property) SidetrackOptions<Queues>.queues: SidetrackQueues<Queues>",children:"queues"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(r,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:"`Welcome "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"${"}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:"`"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:");"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"});"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(r,{lsp:"const program: Promise<SidetrackJobs>",children:"program"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"const runPromise: <SidetrackJobs, never>(effect: Effect.Effect<SidetrackJobs, never, never>, options?: { readonly signal?: AbortSignal; } | undefined) => Promise<...>",children:"runPromise"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"const flatMap: <SidetrackService<Queues>, never, SidetrackService<Queues>, SidetrackJobs, never, never>(self: Effect.Effect<SidetrackService<Queues>, never, SidetrackService<...>>, f: (a: SidetrackService<...>) => Effect.Effect<...>) => Effect.Effect<...> (+1 overload)",children:"flatMap"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"const SidetrackService: Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", ("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(parameter) sidetrack: SidetrackService<Queues>",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#569CD6"},children:"=>"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"(parameter) sidetrack: SidetrackService<Queues>",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:'(property) SidetrackService<Queues>.insertJob: <"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions) => Effect.Effect<SidetrackJobs>',children:"insertJob"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"userOnboarding"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:", { "}),(0,l.jsxs)(s.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"hello@example.com"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" }),"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"  )."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"(method) Pipeable.pipe<Effect.Effect<SidetrackJobs, never, SidetrackService<Queues>>, Effect.Effect<SidetrackJobs, never, never>>(this: Effect.Effect<...>, ab: (_: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+21 overloads)",children:"pipe"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(r,{lsp:"const provide: <SidetrackService<Queues>, never, never>(layer: Layer<SidetrackService<Queues>, never, never>) => <A, E, R>(self: Effect.Effect<...>) => Effect.Effect<...> (+9 overloads)",children:"provide"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(r,{lsp:"const sidetrackLayer: Layer<SidetrackService<Queues>, never, never>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:")),"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:");"})})]})})]}),"\n",(0,l.jsxs)(s.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsxs)(s.code,{children:[(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"*"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"as"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"effect/Effect"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:";"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(alias) const createSidetrackServiceTag: <Queues extends SidetrackQueuesGenericType>() => Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(alias) function makeLayer<Queues extends SidetrackQueuesGenericType>(layerOptions: SidetrackOptions<Queues>): Layer<SidetrackService<Queues>> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"sidetrack/effect"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:";"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"type"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:": { "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:": "}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:"string"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" };"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"};"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(r,{lsp:"const SidetrackService: Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"(alias) createSidetrackServiceTag<Queues>(): Tag<SidetrackService<Queues>, SidetrackService<Queues>> import createSidetrackServiceTag",children:"createSidetrackServiceTag"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:">();"})]}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(r,{lsp:"const sidetrackLayer: Layer<SidetrackService<Queues>, never, never>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"(alias) makeLayer<Queues>(layerOptions: SidetrackOptions<Queues>): Layer<SidetrackService<Queues>, never, never> import makeLayer",children:"makeLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"#267F99"},children:(0,l.jsx)(r,{lsp:"type Queues = { userOnboarding: { email: string; }; }",children:"Queues"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:">({"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(r,{lsp:"(property) SidetrackOptions<Queues>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(r,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"["}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"]!,"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(r,{lsp:"(property) SidetrackOptions<Queues>.queues: SidetrackQueues<Queues>",children:"queues"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(r,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"      "}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:":"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"async"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"=>"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"        "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:"`Welcome "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"${"}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(s.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(s.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"}"}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:"`"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:");"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"      },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  },"})}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:"});"})}),(0,l.jsx)(s.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#0070C1"},children:(0,l.jsx)(r,{lsp:"const program: Promise<SidetrackJobs>",children:"program"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"const runPromise: <SidetrackJobs, never>(effect: Effect.Effect<SidetrackJobs, never, never>, options?: { readonly signal?: AbortSignal; } | undefined) => Promise<...>",children:"runPromise"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"const flatMap: <SidetrackService<Queues>, never, SidetrackService<Queues>, SidetrackJobs, never, never>(self: Effect.Effect<SidetrackService<Queues>, never, SidetrackService<...>>, f: (a: SidetrackService<...>) => Effect.Effect<...>) => Effect.Effect<...> (+1 overload)",children:"flatMap"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"const SidetrackService: Tag<SidetrackService<Queues>, SidetrackService<Queues>>",children:"SidetrackService"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", ("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(parameter) sidetrack: SidetrackService<Queues>",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:") "}),(0,l.jsx)(s.span,{style:{color:"#0000FF"},children:"=>"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"(parameter) sidetrack: SidetrackService<Queues>",children:"sidetrack"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:'(property) SidetrackService<Queues>.insertJob: <"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions) => Effect.Effect<SidetrackJobs>',children:"insertJob"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"userOnboarding"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:", { "}),(0,l.jsxs)(s.span,{style:{color:"#001080"},children:[(0,l.jsx)(r,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"hello@example.com"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" }),"})]}),(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#000000"},children:"  )."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"(method) Pipeable.pipe<Effect.Effect<SidetrackJobs, never, SidetrackService<Queues>>, Effect.Effect<SidetrackJobs, never, never>>(this: Effect.Effect<...>, ab: (_: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+21 overloads)",children:"pipe"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"import Effect",children:"Effect"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(s.span,{style:{color:"#795E26"},children:(0,l.jsx)(r,{lsp:"const provide: <SidetrackService<Queues>, never, never>(layer: Layer<SidetrackService<Queues>, never, never>) => <A, E, R>(self: Effect.Effect<...>) => Effect.Effect<...> (+9 overloads)",children:"provide"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:(0,l.jsx)(r,{lsp:"const sidetrackLayer: Layer<SidetrackService<Queues>, never, never>",children:"sidetrackLayer"})}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:")),"})]}),(0,l.jsx)(s.div,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"#000000"},children:");"})})]})})]}),"\n",(0,l.jsxs)(a.UW,{type:"warning",emoji:"⚠️",children:[(0,l.jsxs)(s.p,{children:["If the ",(0,l.jsx)(s.code,{children:"sidetrack/effect"})," import doesn't work, you will need to use"]}),(0,l.jsxs)(s.pre,{className:"shiki dark-plus",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsx)(s.code,{children:(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#9CDCFE"},children:"SidetrackEffect"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#CE9178"},children:'"sidetrack"'}),(0,l.jsx)(s.span,{style:{color:"#D4D4D4"},children:";"})]})})})]}),"\n",(0,l.jsxs)(s.pre,{className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(s.div,{className:"language-id",children:"ts"}),(0,l.jsx)(s.div,{className:"code-container",children:(0,l.jsx)(s.code,{children:(0,l.jsxs)(s.div,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" { "}),(0,l.jsx)(s.span,{style:{color:"#001080"},children:"SidetrackEffect"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" } "}),(0,l.jsx)(s.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(s.span,{style:{color:"#A31515"},children:'"sidetrack"'}),(0,l.jsx)(s.span,{style:{color:"#000000"},children:";"})]})})})]}),(0,l.jsxs)(s.p,{children:["and access the methods on that\nexport (e.g. ",(0,l.jsx)(s.code,{children:"SidetrackEffect.makeLayer"}),"). Certain TypeScript configurations\ndon't allow for that import to work correctly."]})]}),"\n",(0,l.jsxs)(s.p,{children:["You can find the remaining reference documentation for the Effect docs ",(0,l.jsx)(s.a,{href:"https://sidetracklabs.github.io/sidetrack/modules/sidetrack.effect.html",children:"here"}),'. The functions are similar to the ones in the class-based API, but they return Effects instead of Promises, with some error handling. Over time, the Effect API might be expanded to include more features. Please open an issue if you have any requests for how we can make the API more ergonomic or "Effectful."']}),"\n",(0,l.jsxs)(s.p,{children:["The test utils mentioned in the ",(0,l.jsx)(s.a,{href:"/guides/testing-sidetrack",children:"Testing Sidetrack"})," section can also be found under the ",(0,l.jsx)(s.code,{children:"testUtils"})," key in the sidetrack service. For example, you can do ",(0,l.jsx)(s.code,{children:"sidetrack.testUtils.runJob"})," in the example above."]})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/guides/using-effect.mdx",route:"/guides/using-effect",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Using Effect",headings:t},pageNextRoute:"/guides/using-effect",nextraLayout:c.ZP,themeConfig:i.Z};s.default=(0,n.j)(p)},2703:function(e,s,r){"use strict";r.d(s,{Z:function(){return o}});var l=r(2676);r(5271);var n=r(2914),c=r.n(n),i=r(7920),o={logo:(0,l.jsx)(c(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,i.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,l.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(e){e.O(0,[227,888,774,179],function(){return e(e.s=9885)}),_N_E=e.O()}]);