(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4224:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8395)}])},8395:function(e,t,n){"use strict";n.r(t),n.d(t,{BlogHeader:function(){return u},BlogIndex:function(){return p},__toc:function(){return h},default:function(){return x}});var i=n(1527),a=n(8407),r=n(4017),o=n(9170);n(1902);var s=n(3216),d=n(7378),c=n(4380),l=n(3409),g=n.n(l);function u(){let e=Object.assign({div:"div",h1:"h1",span:"span",p:"p"},(0,s.a)());return(0,i.jsxs)(e.div,{className:"max-w-screen-lg mx-auto pt-4 pb-8 mb-16 border-b border-gray-400 border-opacity-20",children:[(0,i.jsx)(e.h1,{children:(0,i.jsx)(e.span,{className:"font-bold leading-tight lg:text-5xl",children:"Blog"})}),(0,i.jsx)(e.p,{className:"text-center text-gray-500 dark:text-gray-400 font-space-grotesk",children:"The latest updates and releases from Sidetrack."})]})}function p(){let e=Object.assign({div:"div",p:"p"},(0,s.a)());return(function(e){let{pageMap:t}=function(e){let t=globalThis[d.eZ];if(!t)throw Error(`Nextra context not found. Please make sure you are using "${e}" of "nextra/context" on a Nextra page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,n){let i=[],a=[],r=t.find(e=>"Meta"===e.kind),o=r?.data||{};for(let r of t){if("Meta"===r.kind)continue;let t=(0,c.k0)(o[r.name]),s={...r,...Object.keys(t||{}).length>0&&{meta:t}};if("Folder"===s.kind){let t=e(s.children,n);s.children=t.items,t.activeLevelPages.length?i=t.activeLevelPages:s.route!==n||i.length||(i=s.children)}a.push(s)}let s=Object.keys(o);return a.sort((e,t)=>{let n=s.indexOf(e.name),i=s.indexOf(t.name);return -1===n&&-1===i?e.name<t.name?-1:1:-1===n?1:-1===i?-1:n-i}),{items:a,activeLevelPages:i}}(t,e).activeLevelPages})("/blog").map(t=>{var n,a,r,o;return(0,i.jsxs)(e.div,{className:"mb-10",children:[(0,i.jsx)(g(),{href:t.route,style:{color:"inherit",textDecoration:"none"},className:"block font-semibold mt-8 text-2xl",children:(null===(n=t.meta)||void 0===n?void 0:n.title)||(null===(a=t.frontMatter)||void 0===a?void 0:a.title)||t.name}),(0,i.jsxs)(e.p,{className:"opacity-80",style:{marginTop:".5rem"},children:[null===(r=t.frontMatter)||void 0===r?void 0:r.description," "]}),(0,i.jsx)(e.p,{className:"inline-block",children:(0,i.jsx)(g(),{href:t.route,children:"Read more →"})}),(null===(o=t.frontMatter)||void 0===o?void 0:o.date)?(0,i.jsx)(e.p,{className:"opacity-50 text-sm",children:t.frontMatter.date}):null]},t.route)})}let h=[];function m(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{}),"\n",(0,i.jsx)(p,{})]})}let k={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.a)(),e.components);return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)},pageOpts:{filePath:"pages/blog.mdx",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"},pageMap:[{kind:"Meta",data:{index:"Introduction","why-sidetrack":"Why Sidetrack?",quickstart:"Quickstart","-Sections":{title:"Sections",type:"separator"},guides:{title:"Guides"},examples:{title:"Examples"},blog:{title:"Blog",type:"page",theme:{typesetting:"article"}},contact:{title:"Reference Docs ↗",href:"https://sidetracklabs.github.io/sidetrack/",newWindow:!0}}},{kind:"Folder",name:"blog",route:"/blog",children:[{kind:"Meta",data:{"*":{display:"hidden",theme:{toc:!1,sidebar:!1,pagination:!1,typesetting:"article"}},"announcing-sidetrack":"Announcing Sidetrack"}},{kind:"MdxPage",name:"announcing-sidetrack",route:"/blog/announcing-sidetrack",frontMatter:{title:"Announcing Sidetrack",date:"August 8, 2023",description:"A new way to manage background jobs in your TypeScript backend."}}]},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from Sidetrack.",type:"posts"}},{kind:"Folder",name:"examples",route:"/examples",children:[{kind:"MdxPage",name:"transactional-job-insertion",route:"/examples/transactional-job-insertion"},{kind:"Meta",data:{"transactional-job-insertion":"Transactional Job Insertion"}}]},{kind:"Folder",name:"guides",route:"/guides",children:[{kind:"Meta",data:{"configuring-queues":"Configuring Queues","working-with-types":"Working With Types","running-migrations":"Running Migrations","custom-db-client":"Custom Database Clients","testing-sidetrack":"Testing Sidetrack","errors-and-logging":"Errors and Logging","using-effect":"Using Sidetrack With Effect"}},{kind:"MdxPage",name:"configuring-queues",route:"/guides/configuring-queues"},{kind:"MdxPage",name:"custom-db-client",route:"/guides/custom-db-client"},{kind:"MdxPage",name:"errors-and-logging",route:"/guides/errors-and-logging"},{kind:"MdxPage",name:"running-migrations",route:"/guides/running-migrations"},{kind:"MdxPage",name:"testing-sidetrack",route:"/guides/testing-sidetrack"},{kind:"MdxPage",name:"using-effect",route:"/guides/using-effect"},{kind:"MdxPage",name:"working-with-types",route:"/guides/working-with-types"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"quickstart",route:"/quickstart"},{kind:"MdxPage",name:"why-sidetrack",route:"/why-sidetrack"}],flexsearch:{codeblocks:!0},title:"Blog",headings:h},pageNextRoute:"/blog",nextraLayout:r.ZP,themeConfig:o.Z};var x=(0,a.j)(k)},9170:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(1527);n(959);var a=n(7319),r=n.n(a),o=n(7412),s={logo:(0,i.jsx)(r(),{src:{src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},alt:"Logo",width:25,height:25}),project:{link:"https://github.com/sidetracklabs"},docsRepositoryBase:"https://github.com/sidetracklabs/website",useNextSeoProps(){let{asPath:e}=(0,o.useRouter)();if("/"!==e)return{titleTemplate:"%s – Sidetrack"}},head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Sidetrack"}),(0,i.jsx)("meta",{property:"og:description",content:"An open source, PostgreSQL-backed, typescript-first background job library."}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"})]}),footer:{text:"Sidetrack Labs"}}}},function(e){e.O(0,[843,888,774,179],function(){return e(e.s=4224)}),_N_E=e.O()}]);