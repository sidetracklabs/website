(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[864],{6589:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/custom-db-client",function(){return l(6797)}])},6797:function(s,e,l){"use strict";l.r(e),l.d(e,{__toc:function(){return t}});var n=l(2676),r=l(8906),i=l(7804),o=l(4466);l(2320);var c=l(5216),a=l(6888);let t=[{depth:2,value:"Included clients",id:"included-clients"},{depth:2,value:"Creating your own client",id:"creating-your-own-client"}];function d(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",ol:"ol",li:"li",a:"a",code:"code",pre:"pre",div:"div",span:"span","data-lsp":"data-lsp"},(0,c.a)(),s.components),l=e["data-lsp"];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"Custom database clients"}),"\n",(0,n.jsx)(e.h2,{id:"included-clients",children:"Included clients"}),"\n",(0,n.jsx)(e.p,{children:"We have support for two clients:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://npmjs.com/package/pg",children:"pg"})," (included with ",(0,n.jsx)(e.code,{children:"sidetrack"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://npmjs.com/package/prisma",children:"prisma"})," (install ",(0,n.jsx)(e.code,{children:"@sidetrack/client-prisma"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"pg"})," client can be used as follows:"]}),"\n",(0,n.jsxs)(e.pre,{className:"shiki dark-plus twoslash lsp",style:{backgroundColor:"#1E1E1E",color:"#D4D4D4"},hasCopyCode:!0,children:[(0,n.jsx)(e.div,{className:"language-id",children:"ts"}),(0,n.jsx)(e.div,{className:"code-container",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#C586C0"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(alias) const usePg: (pgClient: ClientBase | Pool) => SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:", "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#C586C0"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:'"sidetrack"'}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#C586C0"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(alias) class Pool import Pool",children:"Pool"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#C586C0"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:'"pg"'}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:";"})]}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#6A9955"},children:"// You can also use a pg.Client instead of a pg.Pool"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#4FC1FF"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" = "}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(alias) new Pool(config?: PoolConfig): Pool import Pool",children:"Pool"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"();"})]}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#4FC1FF"},children:(0,n.jsx)(l,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" = "}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"<{"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:": { "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:": "}),(0,n.jsx)(e.span,{style:{color:"#4EC9B0"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" };"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"}>({"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"["}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:'"DATABASE_URL"'}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"]!,"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"async"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:") "}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"namespace console var console: Console",children:"console"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:"`Welcome "}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"${"}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"})}),(0,n.jsx)(e.span,{style:{color:"#569CD6"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:"`"}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:");"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"      },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#6A9955"},children:"// This will apply to all methods available on sidetrack"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.dbClient?: SidetrackDatabaseClient | undefined",children:"dbClient"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(alias) usePg(pgClient: ClientBase | Pool): SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"),"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"});"})}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#6A9955"},children:"// You can also override the connection per method"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions): Promise<SidetrackJobs>',children:"insertJob"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:'"userOnboarding"'}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:","})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  { "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#CE9178"},children:'"hello@example.com"'}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" },"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  {"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#9CDCFE"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackInsertJobOptions.dbClient?: SidetrackDatabaseClient | undefined",children:"dbClient"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#DCDCAA"},children:(0,n.jsx)(l,{lsp:"(alias) usePg(pgClient: ClientBase | Pool): SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#9CDCFE"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"),"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:"  },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#D4D4D4"},children:");"})})]})})]}),"\n",(0,n.jsxs)(e.pre,{className:"shiki light-plus twoslash lsp",style:{backgroundColor:"#FFFFFF",color:"#000000"},hasCopyCode:!0,children:[(0,n.jsx)(e.div,{className:"language-id",children:"ts"}),(0,n.jsx)(e.div,{className:"code-container",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#AF00DB"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(alias) const usePg: (pgClient: ClientBase | Pool) => SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:", "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(alias) class Sidetrack<Queues extends SidetrackQueuesGenericType> import Sidetrack",children:"Sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#AF00DB"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:'"sidetrack"'}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:";"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#AF00DB"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" { "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(alias) class Pool import Pool",children:"Pool"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" } "}),(0,n.jsx)(e.span,{style:{color:"#AF00DB"},children:"from"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:'"pg"'}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:";"})]}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#008000"},children:"// You can also use a pg.Client instead of a pg.Pool"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#0070C1"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" = "}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(alias) new Pool(config?: PoolConfig): Pool import Pool",children:"Pool"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"();"})]}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#0070C1"},children:(0,n.jsx)(l,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" = "}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"new"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(alias) new Sidetrack<{ userOnboarding: { email: string; }; }>(options: SidetrackOptions<{ userOnboarding: { email: string; }; }>): Sidetrack<{ userOnboarding: { email: string; }; }> import Sidetrack",children:"Sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"<{"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(property) userOnboarding: { email: string; }",children:"userOnboarding"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:": { "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:": "}),(0,n.jsx)(e.span,{style:{color:"#267F99"},children:"string"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" };"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"}>({"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.databaseOptions?: { connectionString: string; } | undefined",children:"databaseOptions"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) connectionString: string",children:"connectionString"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"var process: NodeJS.Process",children:"process"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(property) NodeJS.Process.env: NodeJS.ProcessEnv",children:"env"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"["}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:'"DATABASE_URL"'}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"]!,"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  },"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.queues: SidetrackQueues<{ userOnboarding: { email: string; }; }>",children:"queues"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) userOnboarding: { handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>; options?: { maxAttempts?: number; }; }",children:"userOnboarding"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(property) handler: (job: SidetrackJob<{ email: string; }>) => Promise<unknown>",children:"handler"})}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:":"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"async"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" ("}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:") "}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" {"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"namespace console var console: Console",children:"console"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)",children:"log"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:"`Welcome "}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"${"}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(parameter) job: SidetrackJob<{ email: string; }>",children:"job"})}),(0,n.jsx)(e.span,{style:{color:"#000000FF"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(property) payload: { email: string; }",children:"payload"})}),(0,n.jsx)(e.span,{style:{color:"#000000FF"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"})}),(0,n.jsx)(e.span,{style:{color:"#0000FF"},children:"}"}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:"`"}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:");"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"      },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"    },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  },"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#008000"},children:"// This will apply to all methods available on sidetrack"})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackOptions<{ userOnboarding: { email: string; }; }>.dbClient?: SidetrackDatabaseClient | undefined",children:"dbClient"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(alias) usePg(pgClient: ClientBase | Pool): SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"),"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"});"})}),(0,n.jsx)(e.div,{className:"line",children:"\xa0"}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#008000"},children:"// You can also override the connection per method"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"const sidetrack: Sidetrack<{ userOnboarding: { email: string; }; }>",children:"sidetrack"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"."}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:'(method) Sidetrack<{ userOnboarding: { email: string; }; }>.insertJob<"userOnboarding">(queueName: "userOnboarding", payload: { email: string; }, options?: SidetrackInsertJobOptions): Promise<SidetrackJobs>',children:"insertJob"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"("})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:'"userOnboarding"'}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:","})]}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  { "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) email: string",children:"email"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#A31515"},children:'"hello@example.com"'}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" },"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  {"})}),(0,n.jsxs)(e.div,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"#000000"},children:"    "}),(0,n.jsxs)(e.span,{style:{color:"#001080"},children:[(0,n.jsx)(l,{lsp:"(property) SidetrackInsertJobOptions.dbClient?: SidetrackDatabaseClient | undefined",children:"dbClient"}),":"]}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:" "}),(0,n.jsx)(e.span,{style:{color:"#795E26"},children:(0,n.jsx)(l,{lsp:"(alias) usePg(pgClient: ClientBase | Pool): SidetrackDatabaseClient import usePg",children:"usePg"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"("}),(0,n.jsx)(e.span,{style:{color:"#001080"},children:(0,n.jsx)(l,{lsp:"const pool: Pool",children:"pool"})}),(0,n.jsx)(e.span,{style:{color:"#000000"},children:"),"})]}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:"  },"})}),(0,n.jsx)(e.div,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"#000000"},children:");"})})]})})]}),"\n",(0,n.jsxs)(e.p,{children:["Similarly, the ",(0,n.jsx)(e.code,{children:"@sidetrack/client-prisma"})," package exposes a ",(0,n.jsx)(e.code,{children:"usePrisma"})," function that can be used to create a client that works with prisma. You can find the documentation for it ",(0,n.jsx)(e.a,{href:"https://sidetracklabs.github.io/sidetrack/functions/_sidetrack_client_prisma.usePrisma.html",children:"here"}),"."]}),"\n",(0,n.jsx)(a.UW,{children:(0,n.jsxs)(e.p,{children:["With this custom client, you can now run most of the functions that are\navailable within the ",(0,n.jsx)(e.code,{children:"Sidetrack"}),' class in a transaction. Pass in a client\nthat\'s running within a transaction, and it "just works"!']})}),"\n",(0,n.jsx)(e.h2,{id:"creating-your-own-client",children:"Creating your own client"}),"\n",(0,n.jsxs)(e.p,{children:["Sidetrack is designed to support working with your database client library of choice, as long as it works with the databases that are supported by sidetrack. To do this, you need to implement the ",(0,n.jsx)(e.code,{children:"SidetrackDatabaseClient"})," interface, which you can find ",(0,n.jsx)(e.a,{href:"https://sidetracklabs.github.io/sidetrack/interfaces/sidetrack.index.SidetrackDatabaseClient.html",children:"here"}),". It currently has one method called ",(0,n.jsx)(e.code,{children:"execute"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["For example, you can find the implementation of the ",(0,n.jsx)(e.code,{children:"usePg"})," function ",(0,n.jsx)(e.a,{href:"https://github.com/sidetracklabs/sidetrack/blob/main/packages/sidetrack/src/client.ts#L18",children:"here"})]})]})}let p={MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(d,{...s})}):d(s)},pageOpts:{filePath:"pages/guides/custom-db-client.mdx",route:"/guides/custom-db-client",pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Custom database clients",headings:t},pageNextRoute:"/guides/custom-db-client",nextraLayout:i.ZP,themeConfig:o.Z};e.default=(0,r.j)(p)},4466:function(s,e,l){"use strict";l.d(e,{Z:function(){return c}});var n=l(2676);l(5271);var r=l(7704),i=l.n(r),o=l(4910),c={logo:(0,n.jsx)(i(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:s}=(0,o.useRouter)();if("/"!==s)return{titleTemplate:"%s – Sidetrack"}},head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,n.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(s){s.O(0,[992,888,774,179],function(){return s(s.s=6589)}),_N_E=s.O()}]);