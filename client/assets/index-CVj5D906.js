import{r as v,j as M}from"./components-CfpJsyY0.js";import{a as bt,r as xt}from"./image-FpGMshJB.js";import{W as wt,O as St,S as Tt,K as At,c as Ct,d as Ft,B as Pt,L as Mt,p as Pe,N as It,X as Rt,b as Dt}from"./three-B5LinA7q.js";import{k as re,j as U,l as pe,o as Bt,p as _t,q as jt,r as Lt,u as Ot,a as kt}from"./heading-BABF_vd2.js";import{n as Se,p as m,d as W,s as fe,b as ye,c as Me,e as Ke,i as D,a as he,f as ve,g as ne,h as ae,j as Nt,k as _,M as Wt,l as $t,v as Kt,o as zt,m as G,q as Ve,r as Et,S as Ut,t as Gt,u as Ht,w as Xt,x as Yt,y as qt,z as Zt,A as Jt,B as Qt,C as en}from"./index-BwB7hUBA.js";const Te=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),tn="framerAppearId",nn="data-"+Te(tn);function rn(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ze(t){return typeof t=="string"||Array.isArray(t)}function sn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const an=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ae=["initial",...an];function Ee(t){return sn(t.animate)||Ae.some(e=>ze(t[e]))}function on(t){return!!(Ee(t)||t.variants)}const Ie={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ce={};for(const t in Ie)Ce[t]={isEnabled:e=>Ie[t].some(n=>!!e[n])};const cn={},ie=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],E=new Set(ie);function un(t,{layout:e,layoutId:n}){return E.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!cn[t]||t==="opacity")}const ln={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fn=ie.length;function dn(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},r,s){let a="";for(let i=0;i<fn;i++){const o=ie[i];if(t[o]!==void 0){const u=ln[o]||o;a+=`${u}(${t[o]}) `}}return e&&!t.z&&(a+="translateZ(0)"),a=a.trim(),s?a=s(t,r?"":a):n&&r&&(a="none"),a}const pn=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Re={...Se,transform:Math.round},Ue={borderWidth:m,borderTopWidth:m,borderRightWidth:m,borderBottomWidth:m,borderLeftWidth:m,borderRadius:m,radius:m,borderTopLeftRadius:m,borderTopRightRadius:m,borderBottomRightRadius:m,borderBottomLeftRadius:m,width:m,maxWidth:m,height:m,maxHeight:m,size:m,top:m,right:m,bottom:m,left:m,padding:m,paddingTop:m,paddingRight:m,paddingBottom:m,paddingLeft:m,margin:m,marginTop:m,marginRight:m,marginBottom:m,marginLeft:m,rotate:W,rotateX:W,rotateY:W,rotateZ:W,scale:fe,scaleX:fe,scaleY:fe,scaleZ:fe,skew:W,skewX:W,skewY:W,distance:m,translateX:m,translateY:m,translateZ:m,x:m,y:m,z:m,perspective:m,transformPerspective:m,opacity:ye,originX:Me,originY:Me,originZ:m,zIndex:Re,fillOpacity:ye,strokeOpacity:ye,numOctaves:Re};function Ge(t,e,n,r){const{style:s,vars:a,transform:i,transformOrigin:o}=t;let u=!1,c=!1,l=!0;for(const d in e){const p=e[d];if(Ke(d)){a[d]=p;continue}const f=Ue[d],y=pn(p,f);if(E.has(d)){if(u=!0,i[d]=y,!l)continue;p!==(f.default||0)&&(l=!1)}else d.startsWith("origin")?(c=!0,o[d]=y):s[d]=y}if(e.transform||(u||r?s.transform=dn(t.transform,n,l,r):s.transform&&(s.transform="none")),c){const{originX:d="50%",originY:p="50%",originZ:f=0}=o;s.transformOrigin=`${d} ${p} ${f}`}}function De(t,e,n){return typeof t=="string"?t:m.transform(e+n*t)}function hn(t,e,n){const r=De(e,t.x,t.width),s=De(n,t.y,t.height);return`${r} ${s}`}const mn={offset:"stroke-dashoffset",array:"stroke-dasharray"},gn={offset:"strokeDashoffset",array:"strokeDasharray"};function yn(t,e,n=1,r=0,s=!0){t.pathLength=1;const a=s?mn:gn;t[a.offset]=m.transform(-r);const i=m.transform(e),o=m.transform(n);t[a.array]=`${i} ${o}`}function vn(t,{attrX:e,attrY:n,attrScale:r,originX:s,originY:a,pathLength:i,pathSpacing:o=1,pathOffset:u=0,...c},l,d,p){if(Ge(t,c,l,p),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:y,dimensions:g}=t;f.transform&&(g&&(y.transform=f.transform),delete f.transform),g&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=hn(g,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),i!==void 0&&yn(f,i,o,u,!1)}const Vn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function He(t,{style:e,vars:n},r,s){Object.assign(t.style,e,s&&s.getProjectionStyles(r));for(const a in n)t.style.setProperty(a,n[a])}const Xe=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function bn(t,e,n,r){He(t,e,void 0,r);for(const s in e.attrs)t.setAttribute(Xe.has(s)?s:Te(s),e.attrs[s])}function Ye(t,e){const{style:n}=t,r={};for(const s in n)(D(n[s])||e.style&&D(e.style[s])||un(s,t))&&(r[s]=n[s]);return r}function xn(t,e){const n=Ye(t,e);for(const r in t)if(D(t[r])||D(e[r])){const s=ie.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[s]=t[r]}return n}function qe(t,e,n,r={},s={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,r,s)),e}const Ze=t=>Array.isArray(t),wn=t=>Ze(t)?t[t.length-1]||0:t;function Sn(t){const e={};return t.values.forEach((n,r)=>e[r]=n.get()),e}function Tn(t){const e={};return t.values.forEach((n,r)=>e[r]=n.getVelocity()),e}function An(t,e,n){const r=t.getProps();return qe(r,e,r.custom,Sn(t),Tn(t))}const Cn={current:!1},Je=t=>Array.isArray(t)&&typeof t[0]=="number";function Qe(t){return!!(!t||typeof t=="string"&&et[t]||Je(t)||Array.isArray(t)&&t.every(Qe))}const te=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,et={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:te([0,.65,.55,1]),circOut:te([.55,0,1,.45]),backIn:te([.31,.01,.66,-.59]),backOut:te([.33,1.53,.69,.99])};function tt(t){if(t)return Je(t)?te(t):Array.isArray(t)?t.map(tt):et[t]}function Fn(t,e,n,{delay:r=0,duration:s,repeat:a=0,repeatType:i="loop",ease:o,times:u}={}){const c={[e]:n};u&&(c.offset=u);const l=tt(o);return Array.isArray(l)&&(c.easing=l),t.animate(c,{delay:r,duration:s,easing:Array.isArray(l)?"linear":l,fill:"both",iterations:a+1,direction:i==="reverse"?"alternate":"normal"})}function Pn(t,{repeat:e,repeatType:n="loop"}){const r=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[r]}function nt(t){let e;return()=>(e===void 0&&(e=t()),e)}const Mn=nt(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),In=new Set(["opacity","clipPath","filter","transform"]),de=10,Rn=2e4,Dn=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Qe(e.ease);function Bn(t,e,{onUpdate:n,onComplete:r,...s}){if(!(Mn()&&In.has(e)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let i=!1,o,u,c=!1;const l=()=>{u=new Promise(V=>{o=V})};l();let{keyframes:d,duration:p=300,ease:f,times:y}=s;if(Dn(e,s)){const V=he({...s,repeat:0,delay:0});let x={done:!1,value:d[0]};const A=[];let P=0;for(;!x.done&&P<Rn;)x=V.sample(P),A.push(x.value),P+=de;y=void 0,d=A,p=P-de,f="linear"}const g=Fn(t.owner.current,e,d,{...s,duration:p,ease:f,times:y}),b=()=>{c=!1,g.cancel()},S=()=>{c=!0,re.update(b),o(),l()};return g.onfinish=()=>{c||(t.set(Pn(d,s)),r&&r(),S())},{then(V,x){return u.then(V,x)},attachTimeline(V){return g.timeline=V,g.onfinish=null,U},get time(){return ve(g.currentTime||0)},set time(V){g.currentTime=ne(V)},get speed(){return g.playbackRate},set speed(V){g.playbackRate=V},get duration(){return ve(p)},play:()=>{i||(g.play(),pe(b))},pause:()=>g.pause(),stop:()=>{if(i=!0,g.playState==="idle")return;const{currentTime:V}=g;if(V){const x=he({...s,autoplay:!1});t.setWithVelocity(x.sample(V-de).value,x.sample(V).value,de)}S()},complete:()=>{c||g.finish()},cancel:S}}function _n({keyframes:t,delay:e,onUpdate:n,onComplete:r}){const s=()=>(n&&n(t[t.length-1]),r&&r(),{time:0,speed:1,duration:0,play:U,pause:U,stop:U,then:a=>(a(),Promise.resolve()),cancel:U,complete:U});return e?he({keyframes:[0,1],duration:0,delay:e,onComplete:s}):s()}const jn={type:"spring",stiffness:500,damping:25,restSpeed:10},Ln=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),On={type:"keyframes",duration:.8},kn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Nn=(t,{keyframes:e})=>e.length>2?On:E.has(t)?t.startsWith("scale")?Ln(e[1]):jn:kn,be=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ae.test(e)||e==="0")&&!e.startsWith("url(")),Wn=new Set(["brightness","contrast","saturate","opacity"]);function $n(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Nt)||[];if(!r)return t;const s=n.replace(r,"");let a=Wn.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+s+")"}const Kn=/([a-z-]*)\(.*?\)/g,xe={...ae,getAnimatableNone:t=>{const e=t.match(Kn);return e?e.map($n).join(" "):t}},zn={...Ue,color:_,backgroundColor:_,outlineColor:_,fill:_,stroke:_,borderColor:_,borderTopColor:_,borderRightColor:_,borderBottomColor:_,borderLeftColor:_,filter:xe,WebkitFilter:xe},Fe=t=>zn[t];function rt(t,e){let n=Fe(t);return n!==xe&&(n=ae),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const st=t=>/^0[^.\s]+$/.test(t);function En(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||st(t)}function Un(t,e,n,r){const s=be(e,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const i=r.from!==void 0?r.from:t.get();let o;const u=[];for(let c=0;c<a.length;c++)a[c]===null&&(a[c]=c===0?i:a[c-1]),En(a[c])&&u.push(c),typeof a[c]=="string"&&a[c]!=="none"&&a[c]!=="0"&&(o=a[c]);if(s&&u.length&&o)for(let c=0;c<u.length;c++){const l=u[c];a[l]=rt(e,o)}return a}function Gn({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:s,repeat:a,repeatType:i,repeatDelay:o,from:u,elapsed:c,...l}){return!!Object.keys(l).length}function at(t,e){return t[e]||t.default||t}const it=(t,e,n,r={})=>s=>{const a=at(r,t)||{},i=a.delay||r.delay||0;let{elapsed:o=0}=r;o=o-ne(i);const u=Un(e,t,n,a),c=u[0],l=u[u.length-1],d=be(t,c),p=be(t,l);let f={keyframes:u,velocity:e.getVelocity(),ease:"easeOut",...a,delay:-o,onUpdate:y=>{e.set(y),a.onUpdate&&a.onUpdate(y)},onComplete:()=>{s(),a.onComplete&&a.onComplete()}};if(Gn(a)||(f={...f,...Nn(t,f)}),f.duration&&(f.duration=ne(f.duration)),f.repeatDelay&&(f.repeatDelay=ne(f.repeatDelay)),!d||!p||Cn.current||a.type===!1||Wt.skipAnimations)return _n(f);if(!r.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=Bn(e,t,f);if(y)return y}return he(f)};function me(t){return!!(D(t)&&t.add)}const ot=t=>/^\-?\d*\.?\d+$/.test(t),ct=t=>e=>e.test(t),Hn={test:t=>t==="auto",parse:t=>t},ut=[Se,m,$t,W,Kt,zt,Hn],ee=t=>ut.find(ct(t)),Xn=[...ut,_,ae],Yn=t=>Xn.find(ct(t));function qn(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,G(n))}function Zn(t,e){const n=An(t,e);let{transitionEnd:r={},transition:s={},...a}=n?t.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const o=wn(a[i]);qn(t,i,o)}}function Jn(t,e,n){var r,s;const a=Object.keys(e).filter(o=>!t.hasValue(o)),i=a.length;if(i)for(let o=0;o<i;o++){const u=a[o],c=e[u];let l=null;Array.isArray(c)&&(l=c[0]),l===null&&(l=(s=(r=n[u])!==null&&r!==void 0?r:t.readValue(u))!==null&&s!==void 0?s:e[u]),l!=null&&(typeof l=="string"&&(ot(l)||st(l))?l=parseFloat(l):!Yn(l)&&ae.test(c)&&(l=rt(u,c)),t.addValue(u,G(l,{owner:t})),n[u]===void 0&&(n[u]=l),l!==null&&t.setBaseTarget(u,l))}}function Qn(t,e){return e?(e[t]||e.default||e).from:void 0}function er(t,e,n){const r={};for(const s in t){const a=Qn(s,e);if(a!==void 0)r[s]=a;else{const i=n.getValue(s);i&&(r[s]=i.get())}}return r}function tr({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function nr(t,e){const n=t.get();if(Array.isArray(e)){for(let r=0;r<e.length;r++)if(e[r]!==n)return!0}else return n!==e}function rr(t,e,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:a=t.getDefaultTransition(),transitionEnd:i,...o}=t.makeTargetAnimatable(e);const u=t.getValue("willChange");r&&(a=r);const c=[],l=s&&t.animationState&&t.animationState.getState()[s];for(const d in o){const p=t.getValue(d),f=o[d];if(!p||f===void 0||l&&tr(l,d))continue;const y={delay:n,elapsed:0,...at(a||{},d)};if(window.HandoffAppearAnimations){const S=t.getProps()[nn];if(S){const I=window.HandoffAppearAnimations(S,d,p,re);I!==null&&(y.elapsed=I,y.isHandoff=!0)}}let g=!y.isHandoff&&!nr(p,f);if(y.type==="spring"&&(p.getVelocity()||y.velocity)&&(g=!1),p.animation&&(g=!1),g)continue;p.start(it(d,p,f,t.shouldReduceMotion&&E.has(d)?{type:!1}:y));const b=p.animation;me(u)&&(u.add(d),b.then(()=>u.remove(d))),c.push(b)}return i&&Promise.all(c).then(()=>{i&&Zn(t,i)}),c}const Be=()=>({min:0,max:0}),lt=()=>({x:Be(),y:Be()});function sr({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function ar(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ir(t,e){return sr(ar(t.getBoundingClientRect(),e))}function or(t){return t instanceof SVGElement&&t.tagName!=="svg"}function ft(t,e,n){const r=D(t)?t:G(t);return r.start(it("",r,e,n)),r.animation}const cr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function ur(t){const e=cr.exec(t);if(!e)return[,];const[,n,r]=e;return[n,r]}function we(t,e,n=1){const[r,s]=ur(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const i=a.trim();return ot(i)?parseFloat(i):i}else return Ve(s)?we(s,e,n+1):s}function lr(t,{...e},n){const r=t.current;if(!(r instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(s=>{const a=s.get();if(!Ve(a))return;const i=we(a,r);i&&s.set(i)});for(const s in e){const a=e[s];if(!Ve(a))continue;const i=we(a,r);i&&(e[s]=i,n||(n={}),n[s]===void 0&&(n[s]=a))}return{target:e,transitionEnd:n}}const fr=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),dt=t=>fr.has(t),dr=t=>Object.keys(t).some(dt),_e=t=>t===Se||t===m,je=(t,e)=>parseFloat(t.split(", ")[e]),Le=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const s=r.match(/^matrix3d\((.+)\)$/);if(s)return je(s[1],e);{const a=r.match(/^matrix\((.+)\)$/);return a?je(a[1],t):0}},pr=new Set(["x","y","z"]),hr=ie.filter(t=>!pr.has(t));function mr(t){const e=[];return hr.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const H={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Le(4,13),y:Le(5,14)};H.translateX=H.x;H.translateY=H.y;const gr=(t,e,n)=>{const r=e.measureViewportBox(),s=e.current,a=getComputedStyle(s),{display:i}=a,o={};i==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{o[c]=H[c](r,a)}),e.render();const u=e.measureViewportBox();return n.forEach(c=>{const l=e.getValue(c);l&&l.jump(o[c]),t[c]=H[c](u,a)}),t},yr=(t,e,n={},r={})=>{e={...e},r={...r};const s=Object.keys(e).filter(dt);let a=[],i=!1;const o=[];if(s.forEach(u=>{const c=t.getValue(u);if(!t.hasValue(u))return;let l=n[u],d=ee(l);const p=e[u];let f;if(Ze(p)){const y=p.length,g=p[0]===null?1:0;l=p[g],d=ee(l);for(let b=g;b<y&&p[b]!==null;b++)f?Et(ee(p[b])===f):f=ee(p[b])}else f=ee(p);if(d!==f)if(_e(d)&&_e(f)){const y=c.get();typeof y=="string"&&c.set(parseFloat(y)),typeof p=="string"?e[u]=parseFloat(p):Array.isArray(p)&&f===m&&(e[u]=p.map(parseFloat))}else d!=null&&d.transform&&(f!=null&&f.transform)&&(l===0||p===0)?l===0?c.set(f.transform(l)):e[u]=d.transform(p):(i||(a=mr(t),i=!0),o.push(u),r[u]=r[u]!==void 0?r[u]:e[u],c.jump(p))}),o.length){const u=o.indexOf("height")>=0?window.pageYOffset:null,c=gr(e,t,o);return a.length&&a.forEach(([l,d])=>{t.getValue(l).set(d)}),t.render(),Bt&&u!==null&&window.scrollTo({top:u}),{target:c,transitionEnd:r}}else return{target:e,transitionEnd:r}};function vr(t,e,n,r){return dr(e)?yr(t,e,n,r):{target:e,transitionEnd:r}}const Vr=(t,e,n,r)=>{const s=lr(t,e,r);return e=s.target,r=s.transitionEnd,vr(t,e,n,r)};function br(t,e,n){const{willChange:r}=e;for(const s in e){const a=e[s],i=n[s];if(D(a))t.addValue(s,a),me(r)&&r.add(s);else if(D(i))t.addValue(s,G(a,{owner:t})),me(r)&&r.remove(s);else if(i!==a)if(t.hasValue(s)){const o=t.getValue(s);!o.hasAnimated&&o.set(a)}else{const o=t.getStaticValue(s);t.addValue(s,G(o!==void 0?o:a,{owner:t}))}}for(const s in n)e[s]===void 0&&t.removeValue(s);return e}const se=new WeakMap,pt=Object.keys(Ce),xr=pt.length,Oe=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],wr=Ae.length;class Sr{constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:s,visualState:a},i={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>re.render(this.render,!1,!0);const{latestValues:o,renderState:u}=a;this.latestValues=o,this.baseTarget={...o},this.initialValues=n.initial?{...o}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=i,this.isControllingVariants=Ee(n),this.isVariantNode=on(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...l}=this.scrapeMotionValuesFromProps(n,{});for(const d in l){const p=l[d];o[d]!==void 0&&D(p)&&(p.set(o[d],!1),me(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,se.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),_t.current||jt(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lt.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){se.delete(this.current),this.projection&&this.projection.unmount(),pe(this.notifyUpdate),pe(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const r=E.has(e),s=n.on("change",i=>{this.latestValues[e]=i,this.props.onUpdate&&re.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{s(),a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},r,s,a){let i,o;for(let u=0;u<xr;u++){const c=pt[u],{isEnabled:l,Feature:d,ProjectionNode:p,MeasureLayout:f}=Ce[c];p&&(i=p),l(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),f&&(o=f))}if((this.type==="html"||this.type==="svg")&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:l,dragConstraints:d,layoutScroll:p,layoutRoot:f}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!l||d&&rn(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,layoutScroll:p,layoutRoot:f})}return o}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Oe.length;r++){const s=Oe[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a=e["on"+s];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=br(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<wr;r++){const s=Ae[r],a=this.props[s];(ze(a)||a===!1)&&(n[s]=a)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=G(n,{owner:this}),this.addValue(e,r)),r}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props,s=typeof r=="string"||typeof r=="object"?(n=qe(this.props,r))===null||n===void 0?void 0:n[e]:void 0;if(r&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!D(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Ut),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class ht extends Sr{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...r},s){const a=er(r,e||{},this);if(s){Jn(this,r,a);const i=Vr(this,r,a,n);n=i.transitionEnd,r=i.target}return{transition:e,transitionEnd:n,...r}}}function Tr(t){return window.getComputedStyle(t)}class Ar extends ht{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(E.has(n)){const r=Fe(n);return r&&r.default||0}else{const r=Tr(e),s=(Ke(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return ir(e,n)}build(e,n,r,s){Ge(e,n,r,s.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Ye(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;D(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,r,s){He(e,n,r,s)}}class Cr extends ht{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(E.has(n)){const r=Fe(n);return r&&r.default||0}return n=Xe.has(n)?n:Te(n),e.getAttribute(n)}measureInstanceViewportBox(){return lt()}scrapeMotionValuesFromProps(e,n){return xn(e,n)}build(e,n,r,s){vn(e,n,r,this.isSVGTag,s.transformTemplate)}renderInstance(e,n,r,s){bn(e,n,r,s)}mount(e){this.isSVGTag=Vn(e.tagName),super.mount(e)}}function mt(t,e,n){var r;if(typeof t=="string"){let s=document;n?((r=n[t])!==null&&r!==void 0||(n[t]=s.querySelectorAll(t)),t=n[t]):t=s.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}function Fr(t,e){let n;const r=()=>{const{currentTime:s}=e,i=(s===null?0:s.value)/100;n!==i&&t(i),n=i};return re.update(r,!0),()=>pe(r)}const Pr=nt(()=>window.ScrollTimeline!==void 0);class gt{constructor(e){this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e){const n=this.animations.map(r=>{if(Pr()&&r.attachTimeline)r.attachTimeline(e);else return r.pause(),Fr(s=>{r.time=r.duration*s},e)});return()=>{n.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}stop(){this.runAll("stop")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Mr(t){return typeof t=="object"&&!Array.isArray(t)}function Ir(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=or(t)?new Cr(e,{enableHardwareAcceleration:!1}):new Ar(e,{enableHardwareAcceleration:!0});n.mount(t),se.set(t,n)}function Rr(t,e=100){const n=Gt({keyframes:[0,e],...t}),r=Math.min(Ht(n),Xt);return{type:"keyframes",ease:s=>n.next(r*s).value/e,duration:ve(r)}}function ke(t,e,n,r){var s;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(s=r.get(e))!==null&&s!==void 0?s:t}const Dr=(t,e,n)=>{const r=e-t;return((n-t)%r+r)%r+t};function Br(t,e){return Yt(t)?t[Dr(0,t.length,e)]:t}function _r(t,e,n){for(let r=0;r<t.length;r++){const s=t[r];s.at>e&&s.at<n&&(Zt(t,s),r--)}}function jr(t,e,n,r,s,a){_r(t,s,a);for(let i=0;i<e.length;i++)t.push({value:e[i],at:qt(s,a,r[i]),easing:Br(n,i)})}function Lr(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const Or="easeInOut";function kr(t,{defaultTransition:e={},...n}={},r){const s=e.duration||.3,a=new Map,i=new Map,o={},u=new Map;let c=0,l=0,d=0;for(let p=0;p<t.length;p++){const f=t[p];if(typeof f=="string"){u.set(f,l);continue}else if(!Array.isArray(f)){u.set(f.name,ke(l,f.at,c,u));continue}let[y,g,b={}]=f;b.at!==void 0&&(l=ke(l,b.at,c,u));let S=0;const I=(V,x,A,P=0,F=0)=>{const T=Nr(V),{delay:O=0,times:j=Qt(T),type:oe="keyframes",...ce}=x;let{ease:X=e.ease||"easeOut",duration:B}=x;const Y=typeof O=="function"?O(P,F):O,ue=T.length;if(ue<=2&&oe==="spring"){let Z=100;if(ue===2&&Kr(T)){const Q=T[1]-T[0];Z=Math.abs(Q)}const J={...ce};B!==void 0&&(J.duration=ne(B));const $=Rr(J,Z);X=$.ease,B=$.duration}B??(B=s);const q=l+Y,R=q+B;j.length===1&&j[0]===0&&(j[1]=1);const le=j.length-T.length;le>0&&en(j,le),T.length===1&&T.unshift(null),jr(A,T,X,j,q,R),S=Math.max(Y+B,S),d=Math.max(R,d)};if(D(y)){const V=Ne(y,i);I(g,b,We("default",V))}else{const V=mt(y,r,o),x=V.length;for(let A=0;A<x;A++){g=g,b=b;const P=V[A],F=Ne(P,i);for(const T in g)I(g[T],Wr(b,T),We(T,F),A,x)}}c=l,l+=S}return i.forEach((p,f)=>{for(const y in p){const g=p[y];g.sort(Lr);const b=[],S=[],I=[];for(let x=0;x<g.length;x++){const{at:A,value:P,easing:F}=g[x];b.push(P),S.push(Jt(0,d,A)),I.push(F||"easeOut")}S[0]!==0&&(S.unshift(0),b.unshift(b[0]),I.unshift(Or)),S[S.length-1]!==1&&(S.push(1),b.push(null)),a.has(f)||a.set(f,{keyframes:{},transition:{}});const V=a.get(f);V.keyframes[y]=b,V.transition[y]={...e,duration:d,ease:I,times:S,...n}}}),a}function Ne(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function We(t,e){return e[t]||(e[t]=[]),e[t]}function Nr(t){return Array.isArray(t)?t:[t]}function Wr(t,e){return t[e]?{...t,...t[e]}:{...t}}const $r=t=>typeof t=="number",Kr=t=>t.every($r);function yt(t,e,n,r){const s=mt(t),a=s.length,i=[];for(let o=0;o<a;o++){const u=s[o];se.has(u)||Ir(u);const c=se.get(u),l={...n};typeof l.delay=="function"&&(l.delay=l.delay(o,a)),i.push(...rr(c,{...e,transition:l},{}))}return new gt(i)}const zr=t=>Array.isArray(t)&&Array.isArray(t[0]);function Er(t,e,n){const r=[];return kr(t,e,n).forEach(({keyframes:a,transition:i},o)=>{let u;D(o)?u=ft(o,a.default,i.default):u=yt(o,a,i),r.push(u)}),new gt(r)}const Ur=t=>{function e(n,r,s){let a;return zr(n)?a=Er(n,r,t):Mr(r)?a=yt(n,r,s):a=ft(n,r,s),a}return e},Gr=Ur(),Hr="_carousel_156nm_2",Xr="_content_156nm_6",Yr="_imageWrapper_156nm_12",qr="_canvasWrapper_156nm_24",Zr="_canvas_156nm_24",Jr="_placeholder_156nm_37",Qr="_button_156nm_52",es="_nav_156nm_108",ts="_navButton_156nm_115",L={carousel:Hr,content:Xr,imageWrapper:Yr,canvasWrapper:qr,canvas:Zr,placeholder:Jr,button:Qr,nav:es,navButton:ts},ns=`varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  if (reduceMotion) {
    // Simple crossfade
    vec4 _currentImage = texture2D(currentImage, vUv);
    vec4 _nextImage = texture2D(nextImage, vUv);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  } else {
    // Liquid distortion effect
    vec2 uv = vUv;
    vec4 _currentImage;
    vec4 _nextImage;
    float intensity = 0.6;

    vec4 orig1 = texture2D(currentImage, uv);
    vec4 orig2 = texture2D(nextImage, uv);

    vec2 distortedPosition = vec2(
      uv.x + direction * (dispFactor * (orig2.r * intensity)),
      uv.y + direction * (dispFactor * (orig2 * intensity))
    );

    vec2 distortedPosition2 = vec2(
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))
    );

    _currentImage = texture2D(currentImage, distortedPosition);
    _nextImage = texture2D(nextImage, distortedPosition2);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  }
}
`,rs=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function $e(t,e,n,r){if(e!==null)return e;const s=n.length,a=(t-1+s)%s,i=(t+1)%s;return r>0?i:a}const fs=({width:t,height:e,images:n,placeholder:r,...s})=>{const[a,i]=v.useState(!1),[o,u]=v.useState(0),[c,l]=v.useState(!1),[d,p]=v.useState(!0),[f,y]=v.useState(),[g,b]=v.useState(),S=v.useRef(),I=v.useRef(),V=v.useRef(),x=v.useRef(),A=v.useRef(),P=v.useRef(),F=v.useRef(),T=v.useRef(!1),O=v.useRef(),j=v.useRef(),oe=v.useRef(),ce=Ot(),X=bt(S,!0),B=v.useRef(),Y=v.useRef(),ue=`Slide ${o+1} of ${n.length}. ${n[o].alt}`;v.useEffect(()=>(a&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[a]),v.useEffect(()=>{const h=[t/-2,t/2,e/2,e/-2,1,1e3];return F.current=new wt({canvas:S.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),P.current=new St(...h),A.current=new Tt,F.current.setPixelRatio(2),F.current.setClearColor(1118481,1),F.current.setSize(t,e),F.current.domElement.style.width="100%",F.current.domElement.style.height="auto",A.current.background=new At(1118481),P.current.position.z=1,()=>{T.current=!1,Ct(A.current),Ft(F.current)}},[e,t]),v.useEffect(()=>{let h=!0;return X&&!c&&(async()=>{const C=F.current.capabilities.getMaxAnisotropy(),k=n.map(async N=>{const ge=N.srcSet?await xt(N):N.src,z=await Pt.loadAsync(ge);return await F.current.initTexture(z),z.colorSpace=Mt,z.minFilter=Pe,z.magFilter=Pe,z.anisotropy=C,z.generateMipmaps=!1,z}),K=await Promise.all(k);h&&(x.current=new It({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:K[0]},nextImage:{type:"t",value:K[1]},reduceMotion:{type:"b",value:ce}},vertexShader:rs,fragmentShader:ns,transparent:!1,opacity:1}),V.current=new Rt(t,e,1),I.current=new Dt(V.current,x.current),I.current.position.set(0,0,0),A.current.add(I.current),l(!0),y(K),requestAnimationFrame(()=>{F.current.render(A.current,P.current)}))})(),()=>{h=!1}},[e,n,X,c,ce,t]);const q=v.useCallback(({index:h,direction:w=1})=>{if(!f)return;u(h);const{uniforms:C}=x.current;C.nextImage.value=f[h],C.direction.value=w;const k=()=>{C.currentImage.value=f[h],C.dispFactor.value=0,T.current=!1};C.dispFactor.value!==1&&(T.current=!0,Gr(C.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:K=>{C.dispFactor.value=K},onComplete:k}))},[f]),R=v.useCallback(({direction:h,index:w=null,...C})=>{if(!c)return;if(T.current){cancelAnimationFrame(oe.current),oe.current=requestAnimationFrame(()=>R({direction:h,index:w,...C}));return}const k=$e(o,w,f,h);q({index:k,direction:h,...C})},[q,o,c,f]),le=v.useCallback(h=>{if(h===o)return;const w=h>o?1:-1;R({direction:w,index:h})},[o,R]);v.useEffect(()=>{const h=()=>{const w=S.current.getBoundingClientRect();b(w)};return window.addEventListener("resize",h),h(),()=>{window.removeEventListener("resize",h)}},[]),v.useEffect(()=>{let h;const w=()=>{h=requestAnimationFrame(w),T.current&&F.current.render(A.current,P.current)};return h=requestAnimationFrame(w),()=>{cancelAnimationFrame(h)}},[]),v.useEffect(()=>{if(r){const h=()=>{p(!1)},w=B.current;return w.addEventListener("transitionend",h),()=>{w&&w.removeEventListener("transitionend",h)}}},[r]);const Z=v.useCallback(h=>{if(T.current||!x.current||!f)return;j.current=h;const w=Math.abs(h),C=g.width;O.current=h>0?-1:1;const k=1-(w-C)/C*-1,K=$e(o,null,n,O.current),N=x.current.uniforms,ge=Math.min(Math.max(k,0),1);N.currentImage.value=f[o],N.nextImage.value=f[K],N.direction.value=O.current,N.dispFactor.value=ge,requestAnimationFrame(()=>{F.current.render(A.current,P.current)})},[g,o,n,f]),J=v.useCallback(()=>{if(!x.current)return;const h=x.current.uniforms,w=(1-h.dispFactor.value)*1e3,C=Math.abs(j.current),k=g.width*.2;j.current=0,!T.current&&(C===0||!C||(C>k?R({duration:w,direction:O.current}):(h.currentImage.value=h.nextImage.value,h.nextImage.value=h.currentImage.value,h.dispFactor.value=1-h.dispFactor.value,R({direction:O.current*-1,index:o}))))},[g,o,R]),$=v.useCallback(h=>{Z(h.clientX-Y.current)},[Z]),Q=v.useCallback(()=>{i(!1),J(),document.removeEventListener("pointerup",Q),document.removeEventListener("pointermove",$)},[$,J]),vt=v.useCallback(h=>{Y.current=h.clientX,i(!0),document.addEventListener("pointermove",$),document.addEventListener("pointerup",Q)},[$,Q]),Vt=h=>{switch(h.key){case"ArrowRight":R({direction:1});break;case"ArrowLeft":R({direction:-1});break}};return M.jsxs("div",{className:L.carousel,onKeyDown:Vt,...s,children:[M.jsxs("div",{className:L.content,children:[M.jsxs("div",{className:L.imageWrapper,"data-dragging":a,onPointerDown:vt,style:kt({aspectRatio:`${t} / ${e}`}),children:[M.jsx("div",{"aria-atomic":!0,className:L.canvasWrapper,"aria-live":"polite","aria-label":ue,role:"img",children:M.jsx("canvas",{"aria-hidden":!0,className:L.canvas,ref:S})}),d&&r&&M.jsx("img",{"aria-hidden":!0,className:L.placeholder,"data-loaded":c&&!!f,src:r,ref:B,alt:"",role:"presentation"})]}),M.jsx("button",{className:L.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>R({direction:-1}),children:M.jsx(ss,{})}),M.jsx("button",{className:L.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>R({direction:1}),children:M.jsx(as,{})})]}),M.jsx("div",{className:L.nav,children:n.map((h,w)=>M.jsx("button",{className:L.navButton,onClick:()=>le(w),"aria-label":`Jump to slide ${w+1}`,"aria-pressed":w===o},h.alt))})]})};function ss(){return M.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:M.jsx("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function as(){return M.jsx("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:M.jsx("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}export{fs as Carousel};