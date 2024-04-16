/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/child 5.0.0-alpha.4 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              http://iframe-resizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link http://iframe-resizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="5.0.0-alpha.4",t=10,n="data-iframe-size",o=(e,t,n,o)=>e.addEventListener(t,n,o||!1),i=(e,t,n)=>e.removeEventListener(t,n,!1),a={contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0},r={height:()=>(le("Custom height calculation function not defined"),Ae.auto()),width:()=>(le("Custom width calculation function not defined"),ke.auto())},l={bodyOffset:1,bodyScroll:1,offset:1,documentElementOffset:1,documentElementScroll:1,documentElementBoundingClientRect:1,max:1,min:1,grow:1,lowestElement:1},s=128,c={},u="checkVisibility"in window,d="auto",m={reset:1,resetPage:1,init:1},f="[iFrameSizer]",h=f.length,p={max:1,min:1,bodyScroll:1,documentElementScroll:1},g=["body"],y="scroll";let v,w=!0,b="",z=0,$="",S=null,M="",O=!0,j=!1,E=null,T=!0,C=!1,P=1,I=d,A=!0,k="",N={},R=!0,x=!1,L=0,H=!1,B="",q=0,W=0,F="child",D=null,J=!1,U=window.parent,V="*",Z=0,Q=!1,Y=1,X=y,G=window,K=()=>{le("onMessage function not defined")},_=()=>{},ee=null,te=null;const ne=e=>e.charAt(0).toUpperCase()+e.slice(1),oe=e=>""!=`${e}`&&void 0!==e;function ie(e){switch(!0){case!oe(e):return"";case oe(e.id):return`${e.nodeName.toUpperCase()}#${e.id}`;case oe(e.name):return`${e.nodeName.toUpperCase()} (${e.name})`;default:return e.nodeName.toUpperCase()+(oe(e.className)?`.${e.className}`:"")}}const ae=(...e)=>[`${f}[${B}]`,...e].join(" "),re=(...e)=>x&&console?.log(ae(...e)),le=(...e)=>console?.warn(ae(...e)),se=(...e)=>console?.warn(((...e)=>window.chrome?ae(...e).replaceAll("<br>","\n").replaceAll("<rb>","[31;1m").replaceAll("</>","[m").replaceAll("<b>","[1m").replaceAll("<i>","[3m").replaceAll("<u>","[4m"):ae(...e).replaceAll(/\u001B\[[\d;]*m/gi,""))(...e)),ce=e=>se(e.replaceAll(/[A-Za-z]/g,(e=>String.fromCodePoint((e<="Z"?90:122)>=(e=e.codePointAt(0)+19)?e:e-26))));function ue(){!function(){try{J="iframeParentListener"in window.parent}catch(e){re("Cross domain iframe detected.")}}(),function(){const e=e=>"true"===e,t=k.slice(h).split(":");B=t[0],z=void 0===t[1]?z:Number(t[1]),j=void 0===t[2]?j:e(t[2]),x=void 0===t[3]?x:e(t[3]),w=void 0===t[6]?w:e(t[6]),$=t[7],I=void 0===t[8]?I:t[8],b=t[9],M=t[10],Z=void 0===t[11]?Z:Number(t[11]),N.enable=void 0!==t[12]&&e(t[12]),F=void 0===t[13]?F:t[13],X=void 0===t[14]?X:t[14],H=void 0===t[15]?H:e(t[15]),q=void 0===t[16]?q:Number(t[16]),W=void 0===t[17]?W:Number(t[17]),O=void 0===t[18]?O:e(t[18]),v=t[19]}(),re(`Initialising iFrame v${e} (${window.location.href})`),function(){function e(){const e=window.iFrameResizer;re(`Reading data from page: ${JSON.stringify(e)}`),K=e?.onMessage||K,_=e?.onReady||_,q=e?.offsetHeight||q,W=e?.offsetWidth||W,V=e?.targetOrigin||V,I=e?.heightCalculationMethod||I,X=e?.widthCalculationMethod||X}function t(e,t){return"function"==typeof e&&(re(`Setup custom ${t}CalcMethod`),r[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(e(),I=t(I,"height"),X=t(X,"width"));re(`TargetOrigin for parent set to: ${V}`)}(),function(){L=["1jqr0si6pnt","foo","bar"].indexOf(v),-1===L&&""!==v&&(L=-2);re("Mode set to",L)}(),function(){void 0===$&&($=`${z}px`);de("margin",function(e,t){t.includes("-")&&(le(`Negative CSS value ignored for ${e}`),t="");return t}("margin",$))}(),de("background",b),de("padding",M),function(){const e=document.createElement("div");e.style.clear="both",e.style.display="block",e.style.height="0",document.body.append(e)}(),function(){const e=e=>e.style.setProperty("height","auto","important");e(document.documentElement),e(document.body),re('HTML & body height set to "auto !important"')}(),L<0?ce(`${ve[L+2]}${ve[2]}`):0===L&&ce(ve[3]),ge(),ye(),function(){let e=!1;const t=t=>document.querySelectorAll(`[${t}]`).forEach((o=>{e=!0,o.removeAttribute(t),o.setAttribute(n,null)}));t("data-iframe-height"),t("data-iframe-width"),e&&se("\n[31;1mDeprecated Attributes[m\n          \nThe [1mdata-iframe-height[m and [1mdata-iframe-width[m attributes have been deprecated and replaced with the single [1mdata-iframe-size[m attribute. Use of the old attributes will be removed in a future version of [3miframe-resizer[m.")}(),document.querySelectorAll(`[${n}]`).length>0&&("auto"===I&&(I="autoOverflow",re('data-iframe-size attribute found on page, using "autoOverflow" calculation method for height')),"auto"===X&&(X="autoOverflow",re('data-iframe-size attribute found on page, using "autoOverflow" calculation method for width'))),he(),G.parentIFrame={autoResize:e=>(!0===e&&!1===w?(w=!0,we()):!1===e&&!0===w&&(w=!1,fe("remove"),D?.disconnect(),S?.disconnect()),Be(0,0,"autoResize",JSON.stringify(w)),w),close(){Be(0,0,"close")},getId:()=>B,getPageInfo(e){if("function"==typeof e)return ee=e,Be(0,0,"pageInfo"),void se("\n[31;1mDeprecated Method (getPageInfo()[m\n          \nThe [1mgetPageInfo()[m method has been deprecated and replaced with  [1mgetParentInfo()[m. Use of this method will be removed in a future version of [3miframe-resizer[m.\n");ee=null,Be(0,0,"pageInfoStop")},getParentInfo(e){if("function"==typeof e)return te=e,void Be(0,0,"parentInfo");te=null,Be(0,0,"parentInfoStop")},moveToAnchor(e){N.findTarget(e)},reset(){He("parentIFrame.reset")},scrollTo(e,t){Be(t,e,"scrollTo")},scrollToOffset(e,t){Be(t,e,"scrollToOffset")},sendMessage(e,t){Be(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod(e){I=e,ge()},setWidthCalculationMethod(e){X=e,ye()},setTargetOrigin(e){re(`Set targetOrigin: ${e}`),V=e},size(e,t){Re("size",`parentIFrame.size(${e||""}${t?`,${t}`:""})`,e,t)}},function(){if(!0!==H)return;function e(e){Be(0,0,e.type,`${e.screenY}:${e.screenX}`)}function t(t,n){re(`Add event listener: ${n}`),o(window.document,t,e)}t("mouseenter","Mouse Enter"),t("mouseleave","Mouse Leave")}(),we(),N=function(){const e=()=>({x:document.documentElement.scrollLeft,y:document.documentElement.scrollTop});function n(n){const o=n.getBoundingClientRect(),i=e();return{x:parseInt(o.left,t)+parseInt(i.x,t),y:parseInt(o.top,t)+parseInt(i.y,t)}}function i(e){function t(e){const t=n(e);re(`Moving to in page link (#${o}) at x: ${t.x}y: ${t.y}`),Be(t.y,t.x,"scrollToOffset")}const o=e.split("#")[1]||e,i=decodeURIComponent(o),a=document.getElementById(i)||document.getElementsByName(i)[0];void 0===a?(re(`In page link (#${o}) not found in iFrame, so sending to parent`),Be(0,0,"inPageLink",`#${o}`)):t(a)}function a(){const{hash:e,href:t}=window.location;""!==e&&"#"!==e&&i(t)}function r(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&o(e,"click",t)}document.querySelectorAll('a[href^="#"]').forEach(e)}function l(){o(window,"hashchange",a)}function c(){setTimeout(a,s)}function u(){re("Setting up location.hash handlers"),r(),l(),c()}N.enable?u():re("In page linking not enabled");return{findTarget:i}}(),Re("init","Init message from host page"),_(),R=!1}function de(e,t){void 0!==t&&""!==t&&"null"!==t&&(document.body.style.setProperty(e,t),re(`Body ${e} set to "${t}"`))}function me(e){({add(t){function n(){Re(e.eventName,e.eventType)}c[t]=n,o(window,t,n,{passive:!0})},remove(e){const t=c[e];delete c[e],i(window,e,t)}})[e.method](e.eventName),re(`${ne(e.method)} event listener: ${e.eventType}`)}function fe(e){me({method:e,eventType:"After Print",eventName:"afterprint"}),me({method:e,eventType:"Before Print",eventName:"beforeprint"}),me({method:e,eventType:"Ready State Change",eventName:"readystatechange"})}function he(){const e=document.querySelectorAll(`[${n}]`);C=e.length>0,E=C?e:Te(document)()}function pe(e,t,n,o){return t!==e&&(e in n||(le(`${e} is not a valid option for ${o}CalculationMethod.`),e=t),e in l&&se(`\n[31;1mDeprecated ${o}CalculationMethod (${e})[m\n\nThis version of [3miframe-resizer[m can auto detect the most suitable ${o} calculation method. It is recommended that you remove this option.`),re(`${o} calculation method set to "${e}"`)),e}function ge(){I=pe(I,d,Ae,"height")}function ye(){X=pe(X,y,ke,"width")}const ve=["<iy><yi>Puchspk Spjluzl Rlf</><iy><iy>","<iy><yi>Tpzzpun Spjluzl Rlf</><iy><iy>","Aopz spiyhyf pz hchpshisl dpao ivao Jvttlyjphs huk Vwlu-Zvbylz spjluzlz.<iy><iy><i>Jvttlyjphs Spjluzl</><iy>Mvy jvttlyjphs bzl, <p>pmyhtl-ylzpgly</> ylxbpylz h svd jvza vul aptul spjluzl mll. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>.<iy><iy><i>Vwlu Zvbyjl Spjluzl</><iy>Pm fvb hyl bzpun aopz spiyhyf pu h uvu-jvtlyjphs vwlu zvbyjl wyvqlja, fvb jhu bzl pa mvy myll bukly aol alytz vm aol NWS C3 Spjluzl. Av jvumpyt fvb hjjlwa aolzl alytz, wslhzl zla aol <i>spjlujl</> rlf pu pmyhtlYlzpgl vwapvuz av <i>'NWS-C3'</>.<iy><iy>Mvy tvyl pumvythapvu vu aol Nub Wbispj Spjluzl <iy><b>oaaw://pmyhtl-ylzpgly.jvt/vwlu-zvbyjl-spjluzl</>","<i>NWS-C3 Spjluzl Clyzpvu</><iy><iy>Aopz clyzpvu vm <p>pmyhtl-ylzpgly</> pz ilpun bzlk bukly aol alytz vm aol <i>NWS C3</> spjluzl. Pm fvb hyl bzpun aopz spiyhyf pu h jvttlyjphs wyvqlja, fvb dpss ullk av wbyjohzl h svd jvza vul aptl spjluzl. Mvy tvyl pumvythapvu cpzpa <b>oaaw://pmyhtl-ylzpgly.jvt/wypjpun</>."];function we(){!0===w?(fe("add"),S=function(){function e(e){e.forEach(Oe),he()}function t(){const t=new window.MutationObserver(e),n=document.querySelector("body"),o={attributes:!1,attributeOldValue:!1,characterData:!1,characterDataOldValue:!1,childList:!0,subtree:!0};return re("Create <body/> MutationObserver"),t.observe(n,o),t}const n=t();return{disconnect(){re("Disconnect MutationObserver"),n.disconnect()}}}(),D=new ResizeObserver(be),Me(window.document)):re("Auto Resize disabled")}function be(e){Re("resizeObserver",`resizeObserver: ${ie(e[0].target)}`)}const ze=e=>{const t=getComputedStyle(e);return""!==t?.position&&"static"!==t?.position},$e=()=>[...Te(document)()].filter(ze);function Se(e){e&&(D.observe(e),re(`Attached resizeObserver: ${ie(e)}`))}function Me(e){[...$e(),...g.flatMap((t=>e.querySelector(t)))].forEach(Se)}function Oe(e){"childList"===e.type&&Me(e.target)}function je(e){const t=ne(e);let n,o=0,i=E.length,r=0,l=performance.now();E.forEach((t=>{if(!C&&u&&!t.checkVisibility(a))return re(`Skipping non-visable element: ${ie(t)}`),void(i-=1);o=t.getBoundingClientRect()[e]+parseFloat(getComputedStyle(t).getPropertyValue(`margin-${e}`)),o>r&&(r=o,n=t)})),l=performance.now()-l;const s=`\nParsed ${i} element${i=""} in ${l.toPrecision(3)}ms\n${t} ${C?"tagged ":""}element found at: ${r}px\nPosition calculated from HTML element: ${function(e){const t=e?.outerHTML?.toString();return t?t.length<30?t:`${t.slice(0,30).replaceAll("\n"," ")}...`:e}(n)}`;return l<1.1||R||C?re(s):se(`\n[31;1mPerformance Warning[m\n\nCalculateing the page size took an excessive amount of time. To improve performace add the [1mdata-iframe-size[m attribute to the ${e} element on the page.\n${s}`),r}const Ee=e=>[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll(),e.documentElementBoundingClientRect()],Te=e=>()=>e.querySelectorAll("* :not(head):not(meta):not(base):not(title):not(script):not(link):not(style):not(map):not(area):not(option):not(optgroup):not(template):not(track):not(wbr):not(nobr)");const Ce={height:0,width:0},Pe={height:0,width:0};function Ie(e,t){function n(){return Pe[i]=a,Ce[i]=s,a}const o=e===Ae,i=o?"height":"width",a=e.documentElementBoundingClientRect(),r=Math.ceil(a),l=Math.floor(a),s=(e=>e.documentElementScroll()+Math.max(0,e.getOffset()))(e),c=`HTML: ${a}  Page: ${s}`;switch(!0){case!e.enabled():return s;case!t&&0===Pe[i]&&0===Ce[i]:if(re(`Initial page size values: ${c}`),e.taggedElement(!0)<=r)return n();break;case Q&&a===Pe[i]&&s===Ce[i]:return re(`Size unchanged: ${c}`),Math.max(a,s);case 0===a:return re(`Page is hidden: ${c}`),s;case!t&&a!==Pe[i]&&s<=Ce[i]:return re(`New HTML bounding size: ${c}`,"Previous bounding size:",Pe[i]),n();case!t&&a<Pe[i]:return re("HTML bounding size decreased:",c),n();case s===l||s===r:return re("HTML bounding size equals page size:",c),n();case a>s:return re(`Page size < HTML bounding size: ${c}`),n();case!t:re(`Switch to autoOverflow: ${c}`),function({ceilBoundingSize:e,dimension:t,isHeight:n,scrollSize:o}){const i=n?"bottom":"right";se(`\n[31;1mDetected content overflowing html element[m\n    \nThis causes [3miframe-resizer[m to fall back to checking the position of every element on the page in order to calculate the correct dimensions of the iframe. Inspecting the size, ${i} margin, and position of every visable HTML element will have a performace impact on more complex pages. \n\nTo fix this issue, and remove this warning, you can either ensure the content of the page does not overflow the [1m<HTML>[m element or alternatively you can add the attribute [1mdata-iframe-size[m to the elements on the page that you want [3miframe-resizer[m to use when calculating the dimensions of the iframe. \n  \nWhen present the [3m${i} margin of the ${n?"lowest":"right most"} element[m with a [1mdata-iframe-size[m attribute will be used to set the ${t} of the iframe.\n    \n(Page size: ${o} > document size: ${e})`),n?(re(`Switching from ${I} to autoOverflow`),I="autoOverflow"):(re(`Switching from ${X} to autoOverflow`),X="autoOverflow")}({ceilBoundingSize:r,dimension:i,isHeight:o,scrollSize:s});break;default:re(`Content overflowing HTML element: ${c}`)}return Math.max(e.taggedElement(),n())}const Ae={enabled:()=>O,getOffset:()=>q,type:"height",auto:()=>Ie(Ae,!1),autoOverflow:()=>Ie(Ae,!0),bodyOffset:()=>{const{body:e}=document,n=getComputedStyle(e);return e.offsetHeight+parseInt(n.marginTop,t)+parseInt(n.marginBottom,t)},bodyScroll:()=>document.body.scrollHeight,offset:()=>Ae.bodyOffset(),custom:()=>r.height(),documentElementOffset:()=>document.documentElement.offsetHeight,documentElementScroll:()=>document.documentElement.scrollHeight,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().bottom,max:()=>Math.max(...Ee(Ae)),min:()=>Math.min(...Ee(Ae)),grow:()=>Ae.max(),lowestElement:()=>je("bottom"),taggedElement:()=>je("bottom")},ke={enabled:()=>j,getOffset:()=>W,type:"width",auto:()=>Ie(ke,!1),autoOverflow:()=>Ie(ke,!0),bodyScroll:()=>document.body.scrollWidth,bodyOffset:()=>document.body.offsetWidth,custom:()=>r.width(),documentElementScroll:()=>document.documentElement.scrollWidth,documentElementOffset:()=>document.documentElement.offsetWidth,documentElementBoundingClientRect:()=>document.documentElement.getBoundingClientRect().right,max:()=>Math.max(...Ee(ke)),min:()=>Math.min(...Ee(ke)),rightMostElement:()=>je("right"),scroll:()=>Math.max(ke.bodyScroll(),ke.documentElementScroll()),taggedElement:()=>je("right")};function Ne(e,t,n,o){let i,a;!function(){const e=(e,t)=>!(Math.abs(e-t)<=Z);return i=Math.ceil(void 0===n?Ae[I]():n),a=Math.ceil(void 0===o?ke[X]():o),O&&e(P,i)||j&&e(Y,a)}()&&"init"!==e?!(e in{init:1,size:1})&&(O&&I in p||j&&X in p)&&He(t):(xe(),P=i,Y=a,Be(P,Y,e))}function Re(e,t,n,o){document.hidden?re("Page hidden - Ignored resize request"):(e in m||re(`Trigger event: ${t}`),Ne(e,t,n,o))}function xe(){Q||(Q=!0,re("Trigger event lock on"),requestAnimationFrame((()=>{Q=!1,re("Trigger event lock off"),re("--")})))}function Le(e){P=Ae[I](),Y=ke[X](),Be(P,Y,e)}function He(e){const t=I;I=d,re(`Reset trigger event: ${e}`),xe(),Le("reset"),I=t}function Be(e,t,n,o,i){L<0||(void 0!==i?re(`Message targetOrigin: ${i}`):i=V,function(){const a=`${B}:${`${e+q}:${t+W}`}:${n}${void 0===o?"":`:${o}`}`;re(`Sending message to host page (${a}) via ${J?"sameDomain":"postMessage"}`),J?window.parent.iframeParentListener(f+a):U.postMessage(f+a,i)}())}function qe(e){const t={init:function(){k=e.data,U=e.source,ue(),T=!1,setTimeout((()=>{A=!1}),s)},reset(){A?re("Page reset ignored by init"):(re("Page size reset by host page"),Le("resetPage"))},resize(){Re("resizeParent","Parent window requested size check")},moveToAnchor(){N.findTarget(o())},inPageLink(){this.moveToAnchor()},pageInfo(){const e=o();re(`PageInfo received from parent: ${e}`),ee?ee(JSON.parse(e)):Be(0,0,"pageInfoStop"),re(" --")},parentInfo(){const e=o();re(`ParentInfo received from parent: ${e}`),te?te(Object.freeze(JSON.parse(e))):Be(0,0,"parentInfoStop"),re(" --")},message(){const e=o();re(`onMessage called from parent: ${e}`),K(JSON.parse(e)),re(" --")}},n=()=>e.data.split("]")[1].split(":")[0],o=()=>e.data.slice(e.data.indexOf(":")+1),i=()=>"iframeResize"in window||void 0!==window.jQuery&&""in window.jQuery.prototype,a=()=>e.data.split(":")[2]in{true:1,false:1};f===`${e.data}`.slice(0,h)&&(!1!==T?a()?t.init():re(`Ignored message of type "${n()}". Received before initialization.`):function(){const o=n();o in t?t[o]():i()||a()||le(`Unexpected message (${e.data})`)}())}function We(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}function Fe(e){return qe(e),G}"undefined"!=typeof window&&(window.iframeChildListener=e=>qe({data:e,sameDomian:!0}),o(window,"message",qe),o(window,"readystatechange",We),We());try{top?.document?.getElementById("banner")&&(G={},window.mockMsgListener=Fe,i(window,"message",qe),define([],(()=>Fe)))}catch(e){}}();
