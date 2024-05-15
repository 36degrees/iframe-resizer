/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/child 5.0.0-RC.1 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-RC.1",t=10,n="data-iframe-size";const o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),a=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptl spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja aolu fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu <p>pmyhtl-ylzpgly</> vwapvuz av <i>NWSc3</>.<iy><iy>Mvy tvyl pumvythapvu wslhzl zll: <b>oaawz://pmyhtl-ylzpgly.jvt/nws</>","<i>NWSc3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Aopz spjluzl hssvdz fvb av bzl <p>pmyhtl-ylzpgly</> pu Vwlu Zvbyjl wyvqljaz, iba pa ylxbpylz fvby wyvqlja av il wbispj, wyvcpkl haaypibapvu huk il spjluzlk bukly clyzpvu 3 vy shaly vm aol NUB Nlulyhs Wbispj Spjluzl.<iy><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-vwlu zvbyjl wyvqlja vy dlizpal, fvb dpss ullk av wbyjohzl h svd jvza vul aptl jvttlyjphs spjluzl.<iy><iy>Mvy tvyl pumvythapvu cpzpa <b>oaawz://pmyhtl-ylzpgly.jvt/wypjpun</>."];Object.fromEntries(["2cgs7fdf4xb","1c9ctcccr4z","1q2pc4eebgb","ueokt0969w","w2zxchhgqz","1umuxblj2e5"].map(((e,t)=>[e,Math.max(0,t-1)])));const r=e=>(e=>e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))))(a[e]),l={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},c={height:()=>(ae("Custom height calculation function not defined"),Ae.auto()),width:()=>(ae("Custom width calculation function not defined"),ke.auto())},s={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},u=128,d={},m="checkVisibility"in window,f="auto",p="[iFrameSizer]",h=p.length,y={max:1,min:1,bodyScroll:1,documentElementScroll:1},g=["body"],v="scroll";let b,w,z=!0,S="",$=0,j="",E=null,O="",M=!0,C=!1,P=null,T=!0,A=!1,k=1,I=f,x=!0,N="",R={},B=!0,L=!1,q=0,W=!1,D="",H="child",F=null,U=!1,V=window.parent,J="*",Z=0,Q=!1,X="",Y=1,G=v,K=window,_=()=>{ae("onMessage function not defined")},ee=()=>{},te=null,ne=null;const oe=e=>""!=`${e}`&&void 0!==e;const ie=(...e)=>[`[iframe-resizer][${D}]`,...e].join(" "),ae=(...e)=>console?.warn(ie(...e)),re=(...e)=>console?.warn((e=>t=>window.chrome?e(t.replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m")):e(t.replaceAll("<br>","\n").replaceAll(/<[/a-z]+>/gi,"")))(ie)(...e)),le=e=>re(e);function ce(){!function(){try{U="iframeParentListener"in window.parent}catch(e){}}(),function(){const e=e=>"true"===e,t=N.slice(h).split(":");D=t[0],$=void 0===t[1]?$:Number(t[1]),C=void 0===t[2]?C:e(t[2]),L=void 0===t[3]?L:e(t[3]),z=void 0===t[6]?z:e(t[6]),j=t[7],I=void 0===t[8]?I:t[8],S=t[9],O=t[10],Z=void 0===t[11]?Z:Number(t[11]),R.enable=void 0!==t[12]&&e(t[12]),H=void 0===t[13]?H:t[13],G=void 0===t[14]?G:t[14],W=void 0===t[15]?W:e(t[15]),b=void 0===t[16]?b:Number(t[16]),w=void 0===t[17]?w:Number(t[17]),M=void 0===t[18]?M:e(t[18]),t[19],X=t[20]||X,q=void 0===t[21]?q:Number(t[21])}(),function(){function e(){const e=window.iFrameResizer;_=e?.onMessage||_,ee=e?.onReady||ee,"number"==typeof e?.offset&&(M&&(b=e?.offset),C&&(w=e?.offset)),J=e?.targetOrigin||J,I=e?.heightCalculationMethod||I,G=e?.widthCalculationMethod||G}function t(e,t){return"function"==typeof e&&(c[t]=e,e="custom"),e}if(1===q)return;"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),I=t(I,"height"),G=t(G,"width"))}(),function(){void 0===j&&(j=`${$}px`);se("margin",function(e,t){t.includes("-")&&(ae(`Negative CSS value ignored for ${e}`),t="");return t}("margin",j))}(),se("background",S),se("padding",O),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body)}(),q<0?le(`${r(q+2)}${r(2)}`):X.codePointAt(0)>4||q<2&&le(r(3)),function(){if(!X||""===X||"false"===X)return void re(`<rb>Legacy version detected on parent page</>\n\nThe version of <i>iframe-resizer</> you are using on the parent page does not match the child page. \n\nWhilst running a differnet version on the parent and child pages will most likely work, it is not a supported configuration and you are reccommend to upgrade the version on the parent page to v${e} to match the child page.\n`);X!==e&&re(`<rb>Version mismatch</>\n\nThe parent and child pages are running different versions of <i>iframe resizer</>.\n\nParent page: ${X} - Child page: ${e}.\n`)}(),pe(),he(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&re("<rb>Deprecated Attributes</>\n          \nThe <b>data-iframe-height</> and <b>data-iframe-width</> attributes have been deprecated and replaced with the single <b>data-iframe-size</> attribute. Use of the old attributes will be removed in a future version of <i>iframe-resizer</>.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===I&&(I="autoOverflow"),"auto"===G&&(G="autoOverflow")),me(),function(){if(1===q)return;K.parentIframe=Object.freeze({autoResize:e=>(!0===e&&!1===z?(z=!0,ye()):!1===e&&!0===z&&(z=!1,de("remove"),F?.disconnect(),E?.disconnect()),Le(0,0,"autoResize",JSON.stringify(z)),z),close(){Le(0,0,"close")},getId:()=>D,getPageInfo(e){if("function"==typeof e)return te=e,Le(0,0,"pageInfo"),void re("<rb>Deprecated Method</>\n          \nThe <b>getPageInfo()</> method has been deprecated and replaced with  <b>getParentProperties()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n");te=null,Le(0,0,"pageInfoStop")},getParentProperties(e){if("function"!=typeof e)throw new TypeError("parentIFrame.getParentProperties(callback) callback not a function");return ne=e,Le(0,0,"parentInfo"),()=>{ne=null,Le(0,0,"parentInfoStop")}},moveToAnchor(e){R.findTarget(e)},reset(){Be()},scrollTo(e,t){Le(t,e,"scrollTo")},scrollToOffset(e,t){Le(t,e,"scrollToOffset")},sendMessage(e,t){Le(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){I=e,pe()},setWidthCalculationMethod(e){G=e,he()},setTargetOrigin(e){J=e},resize(e,t){xe("size",`parentIFrame.size(${`${e||""}${t?`,${t}`:""}`})`,e,t)},size(e,t){re("<rb>Deprecated Method</>\n          \nThe <b>size()</> method has been deprecated and replaced with  <b>resize()</>. Use of this method will be removed in a future version of <i>iframe-resizer</>.\n"),this.resize(e,t)}}),K.parentIFrame=K.parentIframe}(),function(){if(!0!==W)return;function e(e){Le(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){o(window.document,t,e)}t("mouseenter"),t("mouseleave")}(),ye(),R=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);Le(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?Le(0,0,"inPageLink",`#${o}`):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){o(window,"hashchange",a)}function c(){setTimeout(a,u)}function s(){r(),l(),c()}R.enable&&(1===q?re("In page linking requires a Profesional or Business license. Please see https://iframe-resizer.com/pricing for more details."):s());return{findTarget:i}}(),xe("init","Init message from host page"),ee(),B=!1}function se(e,t){void 0!==t&&""!==t&&"null"!==t&&document.body.style.setProperty(e,t)}function ue(e){({add(t){function n(){xe(e.eventName,e.eventType)}d[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=d[e];delete d[e],i(window,e,t)}})[e.method](e.eventName)}function de(e){ue({method:e,eventType:"After Print",eventName:"afterprint"}),ue({method:e,eventType:"Before Print",eventName:"beforeprint"}),ue({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function me(){const e=document.querySelectorAll(`[${n}]`);A=e.length>0,P=A?e:Ee(document)()}function fe(e,t,n,o){return t!==e&&(e in n||(ae(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in s&&re(`<rb>Deprecated ${o}CalculationMethod (${e})</>\n\nThis version of <i>iframe-resizer</> can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`)),e}function pe(){I=fe(I,f,Ae,"height")}function he(){G=fe(G,v,ke,"width")}function ye(){!0===z&&(de("add"),E=function(){function e(e){e.forEach(Se),me()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return t.observe(n,o),t}const n=t();return{disconnect(){n.disconnect()}}}(),F=new ResizeObserver(ge),ze(window.document))}function ge(e){xe("resizeObserver",`resizeObserver: ${function(e){switch(!0){case!oe(e):return"";case oe(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case oe(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(oe(e.className)?`.${e.className}`:"")}}(e[0].target)}`)}const ve=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},be=()=>[...Ee(document)()].filter(ve);function we(e){e&&F.observe(e)}function ze(e){[...be(),...g.flatMap((t=>e.querySelector(t)))].forEach(we)}function Se(e){"childList"===e.type&&ze(e.target)}function $e(e){const t=(n=e).charAt(0).toUpperCase()+n.slice(1);var n;let o,i=0,a=P.length,r=0,c=performance.now();P.forEach((t=>{A||!m||t.checkVisibility(l)?(i=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),i>r&&(r=i,o=t)):a-=1})),c=performance.now()-c;const s=`\nParsed ${a} element${a=""} in ${c.toPrecision(3)}ms\n${t} ${A?"tagged ":""}element found at: ${r}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(o)}`;return c<1.1||B||A||re(`<rb>Performance Warning</>\n\nCalculateing the page size took an excessive amount of time. To improve performace add the <b>data-iframe-size</> attribute to the ${e} most element on the page.\n${s}`),r}const je=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Ee=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");let Oe=!1;function Me({ceilBoundingSize:e,dimension:t,getDimension:n,isHeight:o,scrollSize:i}){if(!Oe)return Oe=!0,n.taggedElement();const a=o?"bottom":"right";return re(`<rb>Detected content overflowing html element</>\n    \nThis causes <i>iframe-resizer</> to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${a} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the <b><HTML></> element or alternatively you can add the attribute <b>data-iframe-size</> to the elements on the page that you want <i>iframe-resizer</> to use when calculating the dimensions of the iframe. \n  \nWhen present the <i>${a} margin of the ${o?"lowest":"right most"} element</> with a <b>data-iframe-size</> attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${i} > document size: ${e})`),o?I="autoOverflow":G="autoOverflow",n.taggedElement()}const Ce={height:0,width:0},Pe={height:0,width:0};function Te(e,t){function n(){return Pe[i]=a,Ce[i]=c,a}const o=e===Ae,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),l=Math.floor(a),c=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e);switch(!0){case!e.enabled():return c;case!t&&0===Pe[i]&&0===Ce[i]:if(e.taggedElement(!0)<=r)return n();break;case Q&&a===Pe[i]&&c===Ce[i]:return Math.max(a,c);case 0===a:return c;case!t&&a!==Pe[i]&&c<=Ce[i]:return n();case!o:return t?e.taggedElement():Me({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:c});case!t&&a<Pe[i]:case c===l||c===r:case a>c:return n();case!t:return Me({ceilBoundingSize:r,dimension:i,getDimension:e,isHeight:o,scrollSize:c})}return Math.max(e.taggedElement(),n())}const Ae={enabled:()=>M,getOffset:()=>b,type:"height",auto:()=>Te(Ae,!1),autoOverflow:()=>Te(Ae,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ae.bodyOffset(),custom:()=>c.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...je(Ae)),min:()=>Math.min(...je(Ae)),grow:()=>Ae.max(),lowestElement:()=>$e("bottom"),taggedElement:()=>$e("bottom")},ke={enabled:()=>C,getOffset:()=>w,type:"width",auto:()=>Te(ke,!1),autoOverflow:()=>Te(ke,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>c.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...je(ke)),min:()=>Math.min(...je(ke)),rightMostElement:()=>$e("right"),scroll:()=>Math.max(ke.bodyScroll(),ke.documentElementScroll()),taggedElement:()=>$e("right")};function Ie(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=Z);return i=void 0===n?Ae[I]():n,a=void 0===o?ke[G]():o,M&&e(k,i)||C&&e(Y,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(M&&I in y||C&&G in y)&&Be():(Ne(),k=i,Y=a,Le(k,Y,e))}function xe(e,t,n,o){document.hidden||Ie(e,0,n,o)}function Ne(){Q||(Q=!0,requestAnimationFrame((()=>{Q=!1})))}function Re(e){k=Ae[I](),Y=ke[G](),Le(k,Y,e)}function Be(e){const t=I;I=f,Ne(),Re("reset"),I=t}function Le(e,t,n,o,i){q<0||(void 0!==i||(i=J),function(){const a=`${D}:${`${e+(b||0)}:${t+(w||0)}`}:${n}${void 0===o?"":`:${o}`}`;U?window.parent.iframeParentListener(p+a):V.postMessage(p+a,i)}())}function qe(e){const t={init:function(){N=e.data,V=e.source,ce(),T=!1,setTimeout((()=>{x=!1}),u)},reset(){x||Re("resetPage")},resize(){xe("resizeParent")},moveToAnchor(){R.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();te?te(JSON.parse(e)):Le(0,0,"pageInfoStop")},parentInfo(){const e=o();ne?ne(Object.freeze(JSON.parse(e))):Le(0,0,"parentInfoStop")},message(){const e=o();_(JSON.parse(e))}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};p===`${e.data}`.slice(0,h)&&(!1!==T?a()&&t.init():function(){const o=n();o in t?t[o]():i()||a()||ae(`Unexpected message (${e.data})`)}())}function We(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function De(e){return qe(e),K}"undefined"!=typeof window&&(window.iframeChildListener=e=>qe({data:e,sameDomian:!0}),o(window,"message",qe),o(window,"readystatechange",We),We());try{top?.document?.getElementById("banner")&&(K={},window.mockMsgListener=De,i(window,"message",qe),define([],(()=>De)))}catch(e){}}();
