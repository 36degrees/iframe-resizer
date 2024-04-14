/*!
 *  @preserve
 *  
 *  @module     iframe-resizer/parent 5.0.0-alpha.4 (iife) 
 *
 *  @license    GPL-3.0 for non-commercial use only.
 *              For commercial use, you must purchase a license from
 *              https://iframeresizer.com/pricing
 * 
 *  @desciption Keep same and cross domain iFrames sized to their content 
 *
 *  @author     David J. Bradshaw <dave@bradshaw.net>
 * 
 *  @see        {@link https://iframeresizer.com}
 * 
 *  @copyright  (c) 2013 - 2024, David J. Bradshaw. All rights reserved.
 */


!function(){"use strict";const e="[iframeResizer]";const n=n=>`${e}[${function(e){return window.top===window.self?`Host page: ${e}`:window?.parentIFrame?.getId?`${window.parentIFrame.getId()}: ${e}`:`Nested host page: ${e}`}(n)}]`,t=(e,t,...i)=>window?.console[e](n(t),...i),i=(e,...n)=>t("info",e,...n),o=(e,...n)=>t("warn",e,...n),r=(n,t)=>window?.console.warn(((n,...t)=>[`${e}[${n}]`,...t].join(" "))(n,window.chrome?t:t.replaceAll(/\u001B\[[\d;]*m/gi,""))),a="[iFrameSizer]",s=a.length,c=Object.freeze({max:1,scroll:1,bodyScroll:1,documentElementScroll:1}),d=(e,n,t,i)=>e.addEventListener(n,t,i||!1),l=(e,n,t)=>e.removeEventListener(n,t,!1),u=e=>!Number.isNaN(e);var f={};var m=Object.freeze({autoResize:!0,bodyBackground:null,bodyMargin:null,bodyPadding:null,checkOrigin:!0,direction:"vertical",inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"auto",id:"iFrameResizer",log:!0,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,offsetHeight:0,offsetWidth:0,postMessageTarget:null,sameDomain:!1,scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"auto",onClose:()=>!0,onClosed(){},onInit:!1,onMessage:null,onMouseEnter(){},onMouseLeave(){},onReady:e=>{"function"==typeof f[e.id].onInit&&(r(e.id,"\n[31;1mDeprecated Option[m\n\nThe [1monInit()[m function is deprecated and has been replaced with [1monReady()[m. It will be removed in a future version of iFrame Resizer.\n      "),f[e.id].onInit(e))},onResized(){},onScroll:()=>!0}),h={position:null,version:"5.0.0-alpha.4"};function g(e){function n(){c("Height"),c("Width"),T(B),v(),C("onResized",B)}function t(e){if("border-box"!==e.boxSizing)return 0;return(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function r(e){if("border-box"!==e.boxSizing)return 0;return(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function c(e){const n=Number(f[D][`max${e}`]),t=Number(f[D][`min${e}`]),i=e.toLowerCase();let o=Number(B[i]);o<t&&(o=t),o>n&&(o=n),B[i]=`${o}`}function u(e){return L.slice(L.indexOf(":")+7+e)}const m=(e,n)=>(t,i)=>{const o={};var r,a;r=function(){R(`Send ${e} (${t})`,`${e}:${n()}`,i)},o[a=i]||(r(),o[a]=requestAnimationFrame((()=>{o[a]=null})))},g=(e,n)=>()=>{const t=n=>()=>{f[r]?e(n,r):o()};function i(e,n){n(window,"scroll",t("scroll")),n(window,"resize",t("resize window"))}function o(){i(0,l),a.disconnect()}const r=D,a=new ResizeObserver(t("iframe observed"));i(0,d),a.observe(document.body,{attributes:!0,childList:!0,subtree:!0}),f[r]&&(f[r][`stop${n}`]=o)},w=e=>()=>{e in f[D]&&(f[D][e](),delete f[D][e])},x=m("pageInfo",(function(){const e=document.body.getBoundingClientRect(),n=B.iframe.getBoundingClientRect(),{scrollY:t,scrollX:i,innerHeight:o,innerWidth:r}=window,{clientHeight:a,clientWidth:s}=document.documentElement;return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(a,o||0),clientWidth:Math.max(s,r||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:t,scrollLeft:i,documentHeight:a,documentWidth:s,windowHeight:o,windowWidth:r})})),M=m("parentInfo",(function(){const{iframe:e}=B,{scrollWidth:n,scrollHeight:t}=document.documentElement,{width:i,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:c,scale:d}=window.visualViewport;return JSON.stringify({iframe:e.getBoundingClientRect(),document:{scrollWidth:n,scrollHeight:t},viewport:{width:i,height:o,offsetLeft:r,offsetTop:a,pageLeft:s,pageTop:c,scale:d}})})),k=g(x,"PageInfo"),N=g(M,"ParentInfo"),E=w("stopPageInfo"),W=w("stopParentInfo");function F(e){const n=e.getBoundingClientRect();return y(),{x:Math.floor(Number(n.left)+Number(h.position.x)),y:Math.floor(Number(n.top)+Number(h.position.y))}}function H(e){const n=e?F(B.iframe):{x:0,y:0};let t=((e,n)=>({x:Number(e.width)+n.x,y:Number(e.height)+n.y}))(B,n);window.top===window.self?(h.position=t,O()):window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):o(D,"Unable to scroll to requested position, window.parentIFrame not found")}function O(){!1!==C("onScroll",h.position)?v():z()}function S(e){let n={};if(0===Number(B.width)&&0===Number(B.height)){const e=u(9).split(":");n={x:e[1],y:e[0]}}else n={x:B.width,y:B.height};C(e,{iframe:B.iframe,screenX:Number(n.x),screenY:Number(n.y),type:B.type})}const C=(e,n)=>p(D,e,n);let L=e.data,B={},D=null;"[iFrameResizerChild]Ready"!==L?a===`${L}`.slice(0,s)&&L.slice(s).split(":")[0]in f?(B=function(){const e=L.slice(s).split(":"),n=e[1]?Number(e[1]):0,i=f[e[0]]?.iframe,o=getComputedStyle(i);return{iframe:i,id:e[0],height:n+t(o)+r(o),width:Number(e[2]),type:e[3]}}(),D=B.id,D?(function(e){if(!f[e])throw new Error(`${B.type} No settings for ${e}. Message was: ${L}`)}(D),B.type in{true:1,false:1,undefined:1}||(f[D].loaded=!0,function(){let e=!0;return null===B.iframe&&(o(D,`The iframe (${B.id}) was not found.`),e=!1),e}()&&function(){const{origin:n,sameDomain:t}=e;if(t)return!0;let i=f[D]?.checkOrigin;if(i&&"null"!=`${n}`&&!(i.constructor===Array?function(){let e=0,t=!1;for(;e<i.length;e++)if(i[e]===n){t=!0;break}return t}():function(){const e=f[D]?.remoteHost;return n===e}()))throw new Error(`Unexpected message received from: ${n} for ${B.iframe.id}. Message was: ${e.data}. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.`);return!0}()&&function(){switch(f[D]?.firstRun&&f[D]&&(f[D].firstRun=!1),B.type){case"close":b(B.iframe);break;case"message":e=u(6),C("onMessage",{iframe:B.iframe,message:JSON.parse(e)});break;case"mouseenter":S("onMouseEnter");break;case"mouseleave":S("onMouseLeave");break;case"autoResize":f[D].autoResize=JSON.parse(u(9));break;case"scrollTo":H(!1);break;case"scrollToOffset":H(!0);break;case"pageInfo":x("start",D),k();break;case"parentInfo":M("start",D),N();break;case"pageInfoStop":E();break;case"parentInfoStop":W();break;case"inPageLink":!function(e){const n=e.split("#")[1]||"",t=decodeURIComponent(n);let i=document.getElementById(t)||document.getElementsByName(t)[0];i?function(){const e=F(i);h.position={x:e.x,y:e.y},O()}():window.top!==window.self&&window.parentIFrame&&window.parentIFrame.moveToAnchor(n)}(u(9));break;case"reset":$(B);break;case"init":n(),function(e){try{f[e].sameDomain=!!f[e]?.iframe?.contentWindow?.iframeChildListener}catch(n){f[e].sameDomain=!1}}(D),C("onReady",B.iframe);break;default:if(0===B.width&&0===B.height)return void o(`Unsupported message received (${B.type}), this is likely due to the iframe containing a later version of iframe-resizer than the parent page`);if(0===B.width||0===B.height)return;if(document.hidden)return;n()}var e}())):o("iframeResizer received messageData without id, message was: ",L)):i(D,`Ignored: ${L}`):Object.keys(f).forEach((e=>R("iFrame requested init",I(e),e)))}function p(e,n,t){let i=null,o=null;if(f[e]){if(i=f[e][n],"function"!=typeof i)throw new TypeError(`${n} on iFrame[${e}] is not a function`);o=i(t)}return o}function w(e){const n=e.id;delete f[n]}function b(e){const n=e.id;if(!1!==p(n,"onClose",n)){try{e.parentNode&&e.remove()}catch(e){o(e)}p(n,"onClosed",n),w(e)}}function y(e){null===h.position&&(h.position={x:window.scrollX,y:window.scrollY})}function z(){h.position=null}function v(e){null!==h.position&&(window.scrollTo(h.position.x,h.position.y),z())}function $(e){y(e.id),T(e),R("reset","reset",e.id)}function T(e){const n=e.id;function t(n){const t=`${e[n]}px`;e.iframe.style[n]=t}f[n].sizeHeight&&t("height"),f[n].sizeWidth&&t("width")}function R(e,n,t,s){f[t]&&(f[t]?.postMessageTarget?function(){const{postMessageTarget:e,targetOrigin:o}=f[t];if(f[t].sameDomain)try{return void f[t].iframe.contentWindow.iframeChildListener(a+n)}catch(e){i(t,"Same domain connection failed. Trying cross domain"),f[t].sameDomain=!1}e.postMessage(a+n,o)}():o(t,`[${e}] IFrame(${t}) not found`),s&&f[t]?.warningTimeout&&(f[t].msgTimeout=setTimeout((function(){void 0!==f[t]&&(f[t].loaded||f[t].loadErrorShown||(f[t].loadErrorShown=!0,r(t,`\n[31;1mNo response from iFrame[m\n            \nThe iframe ([3m${t}[m) has not responded within ${f[t].warningTimeout/1e3} seconds. Check [1miFrameResizer.contentWindow.js[m has been loaded in the iframe.\n\nThis message can be ignored if everything is working, or you can set the [1mwarningTimeout[m option to a higher value or zero to suppress this warning.\n`)))}),f[t].warningTimeout)))}function I(e){const n=f[e];return[e,"8",n.sizeWidth,n.log,"32",n.enablePublicMethods,n.autoResize,n.bodyMargin,n.heightCalculationMethod,n.bodyBackground,n.bodyPadding,n.tolerance,n.inPageLinks,"child",n.widthCalculationMethod,n.mouseEvents,n.offsetHeight,n.offsetWidth,n.sizeHeight,h.version].join(":")}let x=0;var M=e=>n=>{function t(e){if(!e)return{};if("object"!=typeof e)throw new TypeError("Options is not an object");return("sizeWidth"in e||"sizeHeight"in e||"autoResize"in e)&&r(i,'\n[31;1mDeprecated Optionm\n\nThe [1msizeWidth[m, [1msizeHeight[m and [1mautoResize[m options have been replaced with new [1mdirection[m option which expects values of [3m"vertical"[m, [3m"horizontal"[m or [3m"horizontal"[m.\n'),e}const i=function(t){if(t&&"string"!=typeof t)throw new TypeError("Invaild id for iFrame. Expected String");return""!==t&&t||(n.id=t=function(){let n=e?.id||m.id+x++;return null!==document.getElementById(n)&&(n+=x++),n}(),(e||{}).log),t}(n.id);return i in f&&"iFrameResizer"in n?o(i,"Ignored iFrame, already setup."):(!function(e){var o;f[i]={iframe:n,firstRun:!0,remoteHost:n?.src.split("/").slice(0,3).join("/"),...m,...t(e)},function(){if("horizontal"===f[i].direction)return f[i].sizeWidth=!0,void(f[i].sizeHeight=!1);if("none"===f[i].direction)return f[i].sizeWidth=!1,f[i].sizeHeight=!1,void(f[i].autoResize=!1);if("vertical"!==f[i].direction)throw new TypeError(i,`Direction value of "${f[i].direction}" is not valid`)}(),null===f[i].postMessageTarget&&(f[i].postMessageTarget=n.contentWindow),f[i].targetOrigin=!0===f[i].checkOrigin?""===(o=f[i].remoteHost)||null!==o.match(/^(about:blank|javascript:|file:\/\/)/)?"*":o:"*"}(e),N(),function(){switch(n.style.overflow=!1===f[i]?.scrolling?"hidden":"auto",f[i]?.scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=f[i]?f[i].scrolling:"no"}}(),function(){function e(e){const t=f[i][e];1/0!==t&&0!==t&&(n.style[e]=u(t)?`${t}px`:t)}function t(e){if(u(`min${e}`)&&u(`max${e}`)&&f[i][`min${e}`]>f[i][`max${e}`])throw new Error(`Value for min${e} can not be greater than max${e}`)}t("Height"),t("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),function(){const{bodyMargin:e}=f[i];"number"!=typeof e&&"0"!==e||(f[i].bodyMargin=`${e}px`)}(),function(e){const{id:t}=n;d(n,"load",(function(){R("iFrame.onload",e,t,!0),function(){const e=f[i]?.firstRun,t=f[i]?.heightCalculationMethod in c;!e&&t&&$({iframe:n,height:0,width:0,type:"init"})}()})),R("init",e,t,!0)}(I(i)),f[i]&&(f[i].iframe.iFrameResizer={close:b.bind(null,f[i].iframe),disconnect:w.bind(null,f[i].iframe),removeListeners(){r(i,"\n[31;1mDeprecated Method Namem\n\nThe [removeListeners()[m method has been renamed to [disconnect()[m.\n"),this.disconnect()},resize:R.bind(null,"Window resize","resize",i),moveToAnchor(e){R("Move to anchor",`moveToAnchor:${e}`,i)},sendMessage(e){R("Send Message",`message:${e=JSON.stringify(e)}`,i)}})),n?.iFrameResizer};function k(){!1===document.hidden&&function(e,n){const t=e=>f[e]?.autoResize&&!f[e]?.firstRun;Object.keys(f).forEach((function(i){t(i)&&R(e,n,i)}))}("Tab Visible","resize")}const N=(e=>{let n=!1;return function(){return n?void 0:(n=!0,Reflect.apply(e,this,arguments))}})((()=>{d(window,"message",g),d(document,"visibilitychange",k),window.iframeParentListener=e=>g({data:e,sameDomain:!0})})),E="[iframeResizer] ";window.iframeResize=function(){function e(e){switch(!0){case!e:throw new TypeError(`${E}iframe is not defined`);case!e.tagName:throw new TypeError(`${E}Not a valid DOM element`);case"IFRAME"!==e.tagName.toUpperCase():throw new TypeError(`${E}Expected <IFRAME> tag, found <${e.tagName}>`);default:n(e),t.push(e)}}let n,t;return function(i,o){if("undefined"==typeof window)return[];switch(n=M(i),t=[],typeof o){case"undefined":case"string":document.querySelectorAll(o||"iframe").forEach(e);break;case"object":e(o);break;default:throw new TypeError(`${E}Unexpected data type (${typeof o})`)}return Object.freeze(t)}}(),window.iFrameResize=function(...e){r("","Deprecated: iFrameResize(), please use iframeResize()"),window.iframeResize(...e)}}();
