(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{1892:(e,r,n)=>{Promise.resolve().then(n.bind(n,2207)),Promise.resolve().then(n.bind(n,1997)),Promise.resolve().then(n.bind(n,4517)),Promise.resolve().then(n.bind(n,6474)),Promise.resolve().then(n.bind(n,305)),Promise.resolve().then(n.bind(n,929)),Promise.resolve().then(n.bind(n,474)),Promise.resolve().then(n.bind(n,2919)),Promise.resolve().then(n.bind(n,161)),Promise.resolve().then(n.bind(n,8121)),Promise.resolve().then(n.bind(n,4323)),Promise.resolve().then(n.bind(n,6461)),Promise.resolve().then(n.bind(n,8585)),Promise.resolve().then(n.bind(n,7777)),Promise.resolve().then(n.bind(n,6481)),Promise.resolve().then(n.bind(n,2245)),Promise.resolve().then(n.bind(n,6965)),Promise.resolve().then(n.bind(n,7387)),Promise.resolve().then(n.bind(n,8561)),Promise.resolve().then(n.bind(n,5207)),Promise.resolve().then(n.bind(n,4991)),Promise.resolve().then(n.bind(n,5587)),Promise.resolve().then(n.bind(n,3619)),Promise.resolve().then(n.bind(n,6037)),Promise.resolve().then(n.bind(n,4303)),Promise.resolve().then(n.t.bind(n,2317,23)),Promise.resolve().then(n.t.bind(n,6434,23)),Promise.resolve().then(n.bind(n,4259)),Promise.resolve().then(n.bind(n,6193)),Promise.resolve().then(n.bind(n,9271)),Promise.resolve().then(n.bind(n,2838)),Promise.resolve().then(n.bind(n,8779)),Promise.resolve().then(n.bind(n,6948)),Promise.resolve().then(n.bind(n,4156)),Promise.resolve().then(n.bind(n,3209)),Promise.resolve().then(n.bind(n,208)),Promise.resolve().then(n.bind(n,8780)),Promise.resolve().then(n.bind(n,227)),Promise.resolve().then(n.bind(n,1831)),Promise.resolve().then(n.bind(n,7815)),Promise.resolve().then(n.bind(n,2826)),Promise.resolve().then(n.bind(n,2661)),Promise.resolve().then(n.bind(n,3152)),Promise.resolve().then(n.bind(n,8357)),Promise.resolve().then(n.bind(n,9521)),Promise.resolve().then(n.bind(n,4097)),Promise.resolve().then(n.bind(n,3572))},8357:(e,r,n)=>{"use strict";n.d(r,{Tab:()=>m,Tabs:()=>b});var o=n(2432),t=n(3672),s=n(5587),i=n(2126),l=n(364),d=n(21);function a(e){return!!e&&"object"==typeof e&&"label"in e}let b=e=>{let r,n,b,m,h,v,x,u,c,P,f,p;let g=(0,t.c)(30),{items:w,children:y,storageKey:k,defaultIndex:N,selectedIndex:E,onChange:_,className:j,tabClassName:S}=e,T=void 0===N?0:N,[A,I]=(0,l.useState)(T),C=(0,d.Q)(),L=(0,l.useRef)(null);g[0]!==E?(r=()=>{void 0!==E&&I(E)},n=[E],g[0]=E,g[1]=r,g[2]=n):(r=g[1],n=g[2]),(0,l.useEffect)(r,n),g[3]!==C?(b=()=>{if(!C)return;let e=L.current.querySelector('[role=tabpanel]:has([id="'.concat(C,'"])'));if(e)for(let[r,n]of Object.entries(L.current.children))n===e&&(I(Number(r)),location.hash="",requestAnimationFrame(()=>{location.hash="#".concat(C)}))},m=[C],g[3]=C,g[4]=b,g[5]=m):(b=g[4],m=g[5]),(0,l.useEffect)(b,m),g[6]!==k?(h=()=>{if(!k)return;let e=function(e){e.key===k&&I(Number(e.newValue))},r=Number(localStorage.getItem(k));return I(Number.isNaN(r)?0:r),window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}},g[6]=k,g[7]=h):h=g[7],g[8]===Symbol.for("react.memo_cache_sentinel")?(v=[],g[8]=v):v=g[8],(0,l.useEffect)(h,v),g[9]!==_||g[10]!==k?(x=e=>{if(k){let r=String(e);localStorage.setItem(k,r),window.dispatchEvent(new StorageEvent("storage",{key:k,newValue:r}));return}I(e),null==_||_(e)},g[9]=_,g[10]=k,g[11]=x):x=g[11];let O=x;if(g[12]!==j?(u=e=>(0,i.A)("nextra-scrollbar x:overflow-x-auto x:overscroll-x-contain x:overflow-y-hidden","x:mt-4 x:flex x:w-full x:gap-2 x:border-b x:border-gray-200 x:pb-px x:dark:border-neutral-800","x:focus-visible:nextra-focus","function"==typeof j?j(e):j),g[12]=j,g[13]=u):u=g[13],g[14]!==w||g[15]!==S){let e;g[17]!==S?(e=(e,r)=>(0,o.jsx)(s.Tab,{disabled:a(e)&&e.disabled,className:e=>{let{selected:r,disabled:n,hover:o,focus:t}=e;return(0,i.A)(t&&"x:nextra-focus x:ring-inset","x:whitespace-nowrap x:cursor-pointer","x:rounded-t x:p-2 x:font-medium x:leading-5 x:transition-colors","x:-mb-0.5 x:select-none x:border-b-2",r?"x:border-current x:outline-none":o?"x:border-gray-200 x:dark:border-neutral-800":"x:border-transparent",r?"x:text-primary-600":n?"x:text-gray-400 x:dark:text-neutral-600 x:pointer-events-none":o?"x:text-black x:dark:text-white":"x:text-gray-600 x:dark:text-gray-200","function"==typeof S?S(e):S)},children:a(e)?e.label:e},r),g[17]=S,g[18]=e):e=g[18],c=w.map(e),g[14]=w,g[15]=S,g[16]=c}else c=g[16];return g[19]!==c||g[20]!==u?(P=(0,o.jsx)(s.TabList,{className:u,children:c}),g[19]=c,g[20]=u,g[21]=P):P=g[21],g[22]!==y?(f=(0,o.jsx)(s.TabPanels,{ref:L,children:y}),g[22]=y,g[23]=f):f=g[23],g[24]!==T||g[25]!==O||g[26]!==A||g[27]!==P||g[28]!==f?(p=(0,o.jsxs)(s.TabGroup,{selectedIndex:A,defaultIndex:T,onChange:O,as:l.Fragment,children:[P,f]}),g[24]=T,g[25]=O,g[26]=A,g[27]=P,g[28]=f,g[29]=p):p=g[29],p},m=e=>{let r,n,l,d,a,b;let m=(0,t.c)(12);m[0]!==e?({children:r,unmount:d,className:n,...l}=e,m[0]=e,m[1]=r,m[2]=n,m[3]=l,m[4]=d):(r=m[1],n=m[2],l=m[3],d=m[4]);let h=void 0!==d&&d;return m[5]!==n?(a=e=>(0,i.A)("x:rounded x:mt-6",e.focus&&"x:nextra-focus","function"==typeof n?n(e):n),m[5]=n,m[6]=a):a=m[6],m[7]!==r||m[8]!==l||m[9]!==a||m[10]!==h?(b=(0,o.jsx)(s.TabPanel,{...l,unmount:h,className:a,children:r}),m[7]=r,m[8]=l,m[9]=a,m[10]=h,m[11]=b):b=m[11],b}}},e=>{var r=r=>e(e.s=r);e.O(0,[448,586,777,22,575,358],()=>r(1892)),_N_E=e.O()}]);