(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{4936:(e,r,t)=>{"use strict";t.d(r,{Search:()=>f});var n=t(2432),o=t(3672),s=t(6474),a=t(2126),i=t(4040),l=t(2317),x=t.n(l),d=t(9262),c=t(364),m=t(5963);let b=e=>{let r,t;let s=(0,o.c)(3);return s[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,n.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"}),s[0]=r):r=s[0],s[1]!==e?(t=(0,n.jsx)("svg",{viewBox:"0 0 20 20",fill:"currentColor",...e,children:r}),s[1]=e,s[2]=t):t=s[2],t},u=e=>{let r,t,s;let a=(0,o.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,n.jsx)("circle",{className:"x:opacity-25",cx:12,cy:12,r:10,strokeWidth:4}),t=(0,n.jsx)("path",{className:"x:opacity-75",fill:"currentColor",stroke:"none",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}),a[0]=r,a[1]=t):(r=a[0],t=a[1]),a[2]!==e?(s=(0,n.jsxs)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",...e,children:[r,t]}),a[2]=e,a[3]=s):s=a[3],s};async function h(){window.pagefind=await import((0,i.addBasePath)("/_pagefind/pagefind.js")),await window.pagefind.options({baseUrl:"/"})}let g=new Set(["INPUT","SELECT","BUTTON","TEXTAREA"]);n.Fragment;let f=e=>{let r,t,i,l,x,f,v,y,k,j,_,N,S,T,E,C,R;let B=(0,o.c)(44),{className:D,emptyResult:M,errorText:z,loading:F,placeholder:I,searchOptions:L}=e,V=void 0===M?"No results found.":M,U=void 0===z?"Failed to load search index.":z,O=void 0===F?"Loading…":F,K=void 0===I?"Search documentation…":I,[Q,X]=(0,c.useState)(!0),[W,H]=(0,c.useState)("");B[0]===Symbol.for("react.memo_cache_sentinel")?(r=[],B[0]=r):r=B[0];let[q,Y]=(0,c.useState)(r),[G,J]=(0,c.useState)(""),Z=(0,c.useDeferredValue)(G);B[1]!==Z||B[2]!==L?(t=()=>{(async e=>{if(!e){Y([]),H("");return}if(X(!0),!window.pagefind)try{await h()}catch(e){H(e instanceof Error?"".concat(e.constructor.name,": ").concat(e.message):String(e)),X(!1);return}let r=await window.pagefind.debouncedSearch(e,L);if(!r)return;let t=await Promise.all(r.results.map(p));X(!1),H(""),Y(t.map(A))})(Z)},B[1]=Z,B[2]=L,B[3]=t):t=B[3],B[4]!==Z?(i=[Z],B[4]=Z,B[5]=i):i=B[5],(0,c.useEffect)(t,i);let $=(0,d.useRouter)(),[ee,er]=(0,c.useState)(!1),et=(0,m.q)(),en=(0,c.useRef)(null);B[6]===Symbol.for("react.memo_cache_sentinel")?(l=()=>{let e=function(e){let r=document.activeElement;!(!r||g.has(r.tagName))&&!r.isContentEditable&&("/"===e.key||"k"===e.key&&!e.shiftKey&&(navigator.userAgent.includes("Mac")?e.metaKey:e.ctrlKey))&&(e.preventDefault(),en.current.focus({preventScroll:!0}))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},x=[],B[6]=l,B[7]=x):(l=B[6],x=B[7]),(0,c.useEffect)(l,x),B[8]!==ee||B[9]!==et?(f=et&&!ee&&(0,n.jsx)("kbd",{className:(0,a.A)("x:absolute x:my-1.5 x:select-none x:end-1.5","x:h-5 x:rounded x:bg-nextra-bg x:px-1.5 x:font-mono x:text-[11px] x:font-medium x:text-gray-500","x:border nextra-border","x:contrast-more:text-current","x:items-center x:gap-1 x:flex","x:max-sm:hidden not-prose"),children:navigator.userAgent.includes("Mac")?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"x:text-xs",children:"⌘"}),"K"]}):"CTRL K"}),B[8]=ee,B[9]=et,B[10]=f):f=B[10];let eo=f;B[11]===Symbol.for("react.memo_cache_sentinel")?(v=e=>{er("focus"===e.type)},B[11]=v):v=B[11];let es=v;B[12]===Symbol.for("react.memo_cache_sentinel")?(y=e=>{let{value:r}=e.currentTarget;J(r)},B[12]=y):y=B[12];let ea=y;B[13]!==$?(k=e=>{if(!e)return;en.current.blur();let[r,t]=e.url.split("#");location.pathname===r?location.href="#".concat(t):$.push(e.url),J("")},B[13]=$,B[14]=k):k=B[14];let ei=k;return B[15]!==D?(j=(0,a.A)("nextra-search","x:relative x:flex x:items-center","x:text-gray-900 x:dark:text-gray-300","x:contrast-more:text-gray-800 x:contrast-more:dark:text-gray-300",D),B[15]=D,B[16]=j):j=B[16],B[17]!==K||B[18]!==G?(_=(0,n.jsx)(s.ComboboxInput,{ref:en,spellCheck:!1,className:P,autoComplete:"off",type:"search",onChange:ea,onFocus:es,onBlur:es,value:G,placeholder:K}),B[17]=K,B[18]=G,B[19]=_):_=B[19],B[20]!==eo||B[21]!==j||B[22]!==_?(N=(0,n.jsxs)("div",{className:j,children:[_,eo]}),B[20]=eo,B[21]=j,B[22]=_,B[23]=N):N=B[23],B[24]===Symbol.for("react.memo_cache_sentinel")?(S={to:"top end",gap:10,padding:16},B[24]=S):S=B[24],B[25]!==W||B[26]!==Q||B[27]!==q?(T=e=>{let{open:r}=e;return(0,a.A)("nextra-search-results","nextra-scrollbar x:max-md:h-full","x:border x:border-gray-200 x:text-gray-100 x:dark:border-neutral-800","x:z-30 x:rounded-xl x:py-2.5 x:shadow-xl","x:contrast-more:border x:contrast-more:border-gray-900 x:contrast-more:dark:border-gray-50","x:backdrop-blur-md x:bg-nextra-bg/70","x:motion-reduce:transition-none x:transition-opacity",r?"x:opacity-100":"x:opacity-0",W||Q||!q.length?["x:md:min-h-28 x:grow x:flex x:justify-center x:text-sm x:gap-2 x:px-8",W?"x:text-red-500 x:items-start":"x:text-gray-400 x:items-center"]:"x:md:max-h-[min(calc(100vh-5rem),400px)]!","x:w-full x:md:w-[576px]","x:empty:invisible")},B[25]=W,B[26]=Q,B[27]=q,B[28]=T):T=B[28],B[29]!==Z||B[30]!==V||B[31]!==W||B[32]!==U||B[33]!==Q||B[34]!==O||B[35]!==q?(E=W?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{height:"20",className:"x:shrink-0"}),(0,n.jsxs)("div",{className:"x:grid",children:[(0,n.jsx)("b",{className:"x:mb-2",children:U}),W]})]}):Q?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{height:"20",className:"x:shrink-0 x:animate-spin"}),O]}):q.length?q.map(w):Z&&V,B[29]=Z,B[30]=V,B[31]=W,B[32]=U,B[33]=Q,B[34]=O,B[35]=q,B[36]=E):E=B[36],B[37]!==T||B[38]!==E?(C=(0,n.jsx)(s.ComboboxOptions,{transition:!0,anchor:S,className:T,children:E}),B[37]=T,B[38]=E,B[39]=C):C=B[39],B[40]!==ei||B[41]!==N||B[42]!==C?(R=(0,n.jsxs)(s.Combobox,{onChange:ei,children:[N,C]}),B[40]=ei,B[41]=N,B[42]=C,B[43]=R):R=B[43],R},v=e=>{let r,t,s,i;let l=(0,o.c)(8),{data:x}=e;return l[0]===Symbol.for("react.memo_cache_sentinel")?(r=(0,a.A)("x:mx-2.5 x:mb-2 x:not-first:mt-6 x:select-none x:border-b x:border-black/10 x:px-2.5 x:pb-1.5 x:text-xs x:font-semibold x:uppercase x:text-gray-500 x:dark:border-white/20 x:dark:text-gray-300","x:contrast-more:border-gray-600 x:contrast-more:text-gray-900 x:contrast-more:dark:border-gray-50 x:contrast-more:dark:text-gray-50"),l[0]=r):r=l[0],l[1]!==x.meta.title?(t=(0,n.jsx)("div",{className:r,children:x.meta.title}),l[1]=x.meta.title,l[2]=t):t=l[2],l[3]!==x.sub_results?(s=x.sub_results.map(j),l[3]=x.sub_results,l[4]=s):s=l[4],l[5]!==t||l[6]!==s?(i=(0,n.jsxs)(n.Fragment,{children:[t,s]}),l[5]=t,l[6]=s,l[7]=i):i=l[7],i};function p(e){return e.data()}function y(e){let r=e.url.replace(/\.html$/,"").replace(/\.html#/,"#");return{...e,url:r}}function A(e){return{...e,sub_results:e.sub_results.map(y)}}function P(e){let{focus:r}=e;return(0,a.A)("x:rounded-lg x:px-3 x:py-2 x:transition-colors","x:w-full x:md:w-64","x:text-base x:leading-tight x:md:text-sm",r?"x:bg-transparent x:nextra-focus":"x:bg-black/[.05] x:dark:bg-gray-50/10","x:placeholder:text-gray-500 x:dark:placeholder:text-gray-400","x:contrast-more:border x:contrast-more:border-current","x:[&::-webkit-search-cancel-button]:appearance-none")}function w(e){return(0,n.jsx)(v,{data:e},e.url)}function k(e){let{focus:r}=e;return(0,a.A)("x:mx-2.5 x:break-words x:rounded-md","x:contrast-more:border",r?"x:text-primary-600 x:contrast-more:border-current x:bg-primary-500/10":"x:text-gray-800 x:dark:text-gray-300 x:contrast-more:border-transparent","x:block x:scroll-m-12 x:px-2.5 x:py-2")}function j(e){return(0,n.jsxs)(s.ComboboxOption,{as:x(),value:e,href:e.url,className:k,children:[(0,n.jsx)("div",{className:"x:text-base x:font-semibold x:leading-5",children:e.title}),(0,n.jsx)("div",{className:(0,a.A)("x:mt-1 x:text-sm x:leading-[1.35rem] x:text-gray-600 x:dark:text-gray-400 x:contrast-more:dark:text-gray-50","x:[&_mark]:bg-primary-600/80 x:[&_mark]:text-white"),dangerouslySetInnerHTML:{__html:e.excerpt}})]},e.url)}},5273:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});let n={src:"/_next/static/media/logo.d8a3e4b2.png",height:2048,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH/YC3/Wyj+bjT/PBT/NhD/czj/ej7/cTb/g0T/ZzD/bDT/YSz/dTn/XSf/jUn/l1CTCPoDAAAAD3RSTlMARSN3DBaQ13DtWXpRrDRjdz3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nBXKSQ7AIAzAQFPIBm2T/78W5TayDMgYC+CxTGt5fdu77AyVBq9V/P0c0VJgVkT2tKaZwwUvQQFjOFE86AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6239:(e,r,t)=>{Promise.resolve().then(t.bind(t,5273)),Promise.resolve().then(t.bind(t,2207)),Promise.resolve().then(t.bind(t,1997)),Promise.resolve().then(t.bind(t,4517)),Promise.resolve().then(t.bind(t,6474)),Promise.resolve().then(t.bind(t,305)),Promise.resolve().then(t.bind(t,929)),Promise.resolve().then(t.bind(t,474)),Promise.resolve().then(t.bind(t,2919)),Promise.resolve().then(t.bind(t,161)),Promise.resolve().then(t.bind(t,8121)),Promise.resolve().then(t.bind(t,4323)),Promise.resolve().then(t.bind(t,6461)),Promise.resolve().then(t.bind(t,8585)),Promise.resolve().then(t.bind(t,7777)),Promise.resolve().then(t.bind(t,6481)),Promise.resolve().then(t.bind(t,2245)),Promise.resolve().then(t.bind(t,6965)),Promise.resolve().then(t.bind(t,7387)),Promise.resolve().then(t.bind(t,8561)),Promise.resolve().then(t.bind(t,5207)),Promise.resolve().then(t.bind(t,4991)),Promise.resolve().then(t.bind(t,5587)),Promise.resolve().then(t.bind(t,3619)),Promise.resolve().then(t.bind(t,6037)),Promise.resolve().then(t.bind(t,4303)),Promise.resolve().then(t.bind(t,7634)),Promise.resolve().then(t.t.bind(t,2317,23)),Promise.resolve().then(t.t.bind(t,6434,23)),Promise.resolve().then(t.bind(t,4259)),Promise.resolve().then(t.bind(t,6193)),Promise.resolve().then(t.bind(t,9271)),Promise.resolve().then(t.bind(t,2838)),Promise.resolve().then(t.bind(t,8779)),Promise.resolve().then(t.bind(t,6948)),Promise.resolve().then(t.bind(t,4156)),Promise.resolve().then(t.bind(t,3209)),Promise.resolve().then(t.bind(t,208)),Promise.resolve().then(t.bind(t,8780)),Promise.resolve().then(t.bind(t,227)),Promise.resolve().then(t.bind(t,1831)),Promise.resolve().then(t.bind(t,7815)),Promise.resolve().then(t.t.bind(t,9217,23)),Promise.resolve().then(t.bind(t,2826)),Promise.resolve().then(t.bind(t,2661)),Promise.resolve().then(t.bind(t,4936)),Promise.resolve().then(t.bind(t,3152)),Promise.resolve().then(t.bind(t,8357)),Promise.resolve().then(t.bind(t,9521)),Promise.resolve().then(t.bind(t,4097)),Promise.resolve().then(t.bind(t,3572))},8357:(e,r,t)=>{"use strict";t.d(r,{Tab:()=>c,Tabs:()=>d});var n=t(2432),o=t(3672),s=t(5587),a=t(2126),i=t(364),l=t(21);function x(e){return!!e&&"object"==typeof e&&"label"in e}let d=e=>{let r,t,d,c,m,b,u,h,g,f,v,p;let y=(0,o.c)(30),{items:A,children:P,storageKey:w,defaultIndex:k,selectedIndex:j,onChange:_,className:N,tabClassName:S}=e,T=void 0===k?0:k,[E,C]=(0,i.useState)(T),R=(0,l.Q)(),B=(0,i.useRef)(null);y[0]!==j?(r=()=>{void 0!==j&&C(j)},t=[j],y[0]=j,y[1]=r,y[2]=t):(r=y[1],t=y[2]),(0,i.useEffect)(r,t),y[3]!==R?(d=()=>{if(!R)return;let e=B.current.querySelector('[role=tabpanel]:has([id="'.concat(R,'"])'));if(e)for(let[r,t]of Object.entries(B.current.children))t===e&&(C(Number(r)),location.hash="",requestAnimationFrame(()=>{location.hash="#".concat(R)}))},c=[R],y[3]=R,y[4]=d,y[5]=c):(d=y[4],c=y[5]),(0,i.useEffect)(d,c),y[6]!==w?(m=()=>{if(!w)return;let e=function(e){e.key===w&&C(Number(e.newValue))},r=Number(localStorage.getItem(w));return C(Number.isNaN(r)?0:r),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},y[6]=w,y[7]=m):m=y[7],y[8]===Symbol.for("react.memo_cache_sentinel")?(b=[],y[8]=b):b=y[8],(0,i.useEffect)(m,b),y[9]!==_||y[10]!==w?(u=e=>{if(w){let r=String(e);localStorage.setItem(w,r),window.dispatchEvent(new StorageEvent("storage",{key:w,newValue:r}));return}C(e),null==_||_(e)},y[9]=_,y[10]=w,y[11]=u):u=y[11];let D=u;if(y[12]!==N?(h=e=>(0,a.A)("nextra-scrollbar x:overflow-x-auto x:overscroll-x-contain x:overflow-y-hidden","x:mt-4 x:flex x:w-full x:gap-2 x:border-b x:border-gray-200 x:pb-px x:dark:border-neutral-800","x:focus-visible:nextra-focus","function"==typeof N?N(e):N),y[12]=N,y[13]=h):h=y[13],y[14]!==A||y[15]!==S){let e;y[17]!==S?(e=(e,r)=>(0,n.jsx)(s.Tab,{disabled:x(e)&&e.disabled,className:e=>{let{selected:r,disabled:t,hover:n,focus:o}=e;return(0,a.A)(o&&"x:nextra-focus x:ring-inset","x:whitespace-nowrap x:cursor-pointer","x:rounded-t x:p-2 x:font-medium x:leading-5 x:transition-colors","x:-mb-0.5 x:select-none x:border-b-2",r?"x:border-current x:outline-none":n?"x:border-gray-200 x:dark:border-neutral-800":"x:border-transparent",r?"x:text-primary-600":t?"x:text-gray-400 x:dark:text-neutral-600 x:pointer-events-none":n?"x:text-black x:dark:text-white":"x:text-gray-600 x:dark:text-gray-200","function"==typeof S?S(e):S)},children:x(e)?e.label:e},r),y[17]=S,y[18]=e):e=y[18],g=A.map(e),y[14]=A,y[15]=S,y[16]=g}else g=y[16];return y[19]!==g||y[20]!==h?(f=(0,n.jsx)(s.TabList,{className:h,children:g}),y[19]=g,y[20]=h,y[21]=f):f=y[21],y[22]!==P?(v=(0,n.jsx)(s.TabPanels,{ref:B,children:P}),y[22]=P,y[23]=v):v=y[23],y[24]!==T||y[25]!==D||y[26]!==E||y[27]!==f||y[28]!==v?(p=(0,n.jsxs)(s.TabGroup,{selectedIndex:E,defaultIndex:T,onChange:D,as:i.Fragment,children:[f,v]}),y[24]=T,y[25]=D,y[26]=E,y[27]=f,y[28]=v,y[29]=p):p=y[29],p},c=e=>{let r,t,i,l,x,d;let c=(0,o.c)(12);c[0]!==e?({children:r,unmount:l,className:t,...i}=e,c[0]=e,c[1]=r,c[2]=t,c[3]=i,c[4]=l):(r=c[1],t=c[2],i=c[3],l=c[4]);let m=void 0!==l&&l;return c[5]!==t?(x=e=>(0,a.A)("x:rounded x:mt-6",e.focus&&"x:nextra-focus","function"==typeof t?t(e):t),c[5]=t,c[6]=x):x=c[6],c[7]!==r||c[8]!==i||c[9]!==x||c[10]!==m?(d=(0,n.jsx)(s.TabPanel,{...i,unmount:m,className:x,children:r}),c[7]=r,c[8]=i,c[9]=x,c[10]=m,c[11]=d):d=c[11],d}},9217:()=>{}},e=>{var r=r=>e(e.s=r);e.O(0,[922,448,586,777,22,575,358],()=>r(6239)),_N_E=e.O()}]);