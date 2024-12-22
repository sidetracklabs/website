(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{1209:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quickstart",function(){return n(5731)}])},5731:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return t}});var l=n(2676),r=n(6760),i=n(2352),o=n(2703);n(3362);var c=n(2293),a=n(4619);let t=[];function d(s){let e=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",pre:"pre",div:"div",code:"code",span:"span","data-lsp":"data-lsp"},(0,c.a)(),s.components),n=e["data-lsp"];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Quickstart"}),"\n",(0,l.jsx)(e.p,{children:"In this tutorial, you'll learn how to add Sidetrack to your project and run your first job."}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"Install using your package manager of choice."}),"\n"]}),"\n",(0,l.jsxs)(e.pre,{className:"shiki dark-plus",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"bash"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"npm install sidetrack"})})})})]}),"\n",(0,l.jsxs)(e.pre,{className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"bash"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"npm install sidetrack"})})})})]}),"\n\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"Import it into your project, and initialize Sidetrack by defining your queues."}),"\n"]}),"\n",(0,l.jsx)(a.UW,{type:"warning",emoji:"⚠️",children:(0,l.jsx)(e.p,{children:"Please note that we only support PostgreSQL at the moment."})}),"\n",(0,l.jsxs)(e.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"ts"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#C586C0"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" } "}),(0,l.jsx)(e.span,{style:{color:"#C586C0"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:'"sidetrack"'}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,l.jsx)(e.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#4FC1FF"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" = "}),(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"<{"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:": { "}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#4EC9B0"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" }"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    }>({"})}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      "}),(0,l.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"        "}),(0,l.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"["}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"]!"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      "}),(0,l.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"        "}),(0,l.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"async"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:") "}),(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:"`Welcome "}),(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"${"}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(e.span,{style:{color:"#569CD6"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:"!`"}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:")"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"          },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"        },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    });"})}),(0,l.jsx)(e.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:"(method) Sidetrack<{ userOnboarding: { email: string; }; }>.start(): Promise<void>",children:"start"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"#6A9955"},children:"// starts listening for new jobs in your DB"})]})]})})]}),"\n",(0,l.jsxs)(e.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"ts"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#AF00DB"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" { "}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" } "}),(0,l.jsx)(e.span,{style:{color:"#AF00DB"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:'"sidetrack"'}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:";"})]}),(0,l.jsx)(e.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#0070C1"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" = "}),(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"new"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"<{"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:": { "}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:": "}),(0,l.jsx)(e.span,{style:{color:"#267F99"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" }"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"    }>({"})}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"      "}),(0,l.jsxs)(e.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"        "}),(0,l.jsxs)(e.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"["}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"]!"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"      },"})}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"      "}),(0,l.jsxs)(e.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"        "}),(0,l.jsxs)(e.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"          "}),(0,l.jsx)(e.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"async"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" ("}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:") "}),(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#000000"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"namespace console var console: Console",children:"console"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:"`Welcome "}),(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"${"}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,l.jsx)(e.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,l.jsx)(e.span,{style:{color:"#000000FF"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"})}),(0,l.jsx)(e.span,{style:{color:"#0000FF"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:"!`"}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:")"})]}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"          },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"        },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"      },"})}),(0,l.jsx)(e.div,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"#000000"},children:"    });"})}),(0,l.jsx)(e.div,{className:"line",children:"\xa0"}),(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:"(method) Sidetrack<{ userOnboarding: { email: string; }; }>.start(): Promise<void>",children:"start"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"(); "}),(0,l.jsx)(e.span,{style:{color:"#008000"},children:"// starts listening for new jobs in your DB"})]})]})})]}),"\n",(0,l.jsxs)(e.p,{children:["Notice how you pass in the types for your queues, specifying your queueName as the key (",(0,l.jsx)(e.code,{children:"userOnboarding"}),"), and the value being the type for your job's payload (",(0,l.jsx)(e.code,{children:"{email: string}"}),")."]}),"\n",(0,l.jsx)(e.p,{children:"To insert a job, use the insertJob function to specify the queue and the job payload."}),"\n",(0,l.jsxs)(e.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"ts"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,l.jsx)(n,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions): Promise<SidetrackJobs>',children:"insertJob"})}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:'"userOnboarding"'}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:", { "}),(0,l.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#CE9178"},children:'"a@example.com"'}),(0,l.jsx)(e.span,{style:{color:"#D4D4D4"},children:" });"})]})})})]}),"\n",(0,l.jsxs)(e.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,l.jsx)(e.div,{className:"language-id",children:"ts"}),(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:(0,l.jsxs)(e.div,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#001080"},children:(0,l.jsx)(n,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,l.jsx)(e.span,{style:{color:"#795E26"},children:(0,l.jsx)(n,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions): Promise<SidetrackJobs>',children:"insertJob"})}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:"("}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:'"userOnboarding"'}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:", { "}),(0,l.jsxs)(e.span,{style:{color:"#001080"},children:[(0,l.jsx)(n,{lsp:"(property) email: string",children:"email"}),":"]}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#A31515"},children:'"a@example.com"'}),(0,l.jsx)(e.span,{style:{color:"#000000"},children:" });"})]})})})]}),"\n",(0,l.jsx)(e.p,{children:"Once the job is inserted, Sidetrack will pick it up and run it. You should see a log in your terminal!"}),"\n",(0,l.jsx)(e.pre,{className:"shiki dark-plus",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:"Welcome a@example.com!"})})}),"\n",(0,l.jsx)(e.pre,{className:"shiki light-plus",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:(0,l.jsx)(e.div,{className:"code-container",children:(0,l.jsx)(e.code,{children:"Welcome a@example.com!"})})}),"\n",(0,l.jsx)(e.p,{children:"You are ready to continue your Sidetrack journey! Good luck (and don't get sidetracked)!"})]})}let p={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(d,{...s})}):d(s)},pageOpts:{filePath:"pages/quickstart.mdx",route:"/quickstart",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Quickstart",headings:t},pageNextRoute:"/quickstart",nextraLayout:i.ZP,themeConfig:o.Z};e.default=(0,r.j)(p)},2703:function(s,e,n){"use strict";n.d(e,{Z:function(){return c}});var l=n(2676);n(5271);var r=n(2914),i=n.n(r),o=n(7920),c={logo:(0,l.jsx)(i(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:s}=(0,o.useRouter)();if("/"!==s)return{titleTemplate:"%s – Sidetrack"}},head:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,l.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,l.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,l.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,l.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(s){s.O(0,[227,888,774,179],function(){return s(s.s=1209)}),_N_E=s.O()}]);