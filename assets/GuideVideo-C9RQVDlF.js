import{j as te}from"./jsx-runtime-CkxqCPlQ.js";import{g as Z,R as U}from"./index-DJO9vBfz.js";var ie={exports:{}},pe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ye=pe,he=ye;function se(){}function le(){}le.resetWarningCache=se;var ve=function(){function r(a,i,o,d,p,c){if(c!==he){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}r.isRequired=r;function e(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:le,resetWarningCache:se};return t.PropTypes=t,t};ie.exports=ve();var ge=ie.exports;const y=Z(ge);var me=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var a,i,o;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),a=o.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=a;i--!==0;){var d=o[i];if(!r(e[d],t[d]))return!1}return!0}return e!==e&&t!==t};const Pe=Z(me);var F={exports:{}},ue;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/ue=function(){var r={},e={};return r.on=function(t,a){var i={name:t,handler:a};return e[t]=e[t]||[],e[t].unshift(i),i},r.off=function(t){var a=e[t.name].indexOf(t);a!==-1&&e[t.name].splice(a,1)},r.trigger=function(t,a){var i=e[t],o;if(i)for(o=i.length;o--;)i[o].handler(a)},r};var be=ue,L={exports:{}},_e=function(e,t,a){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof t=="function"&&(a=t,t={}),t=t||{},a=a||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async="async"in t?!!t.async:!0,o.src=e,t.attrs&&we(o,t.attrs),t.text&&(o.text=""+t.text);var d="onload"in o?re:Se;d(o,a),o.onload||re(o,a),i.appendChild(o)};function we(r,e){for(var t in e)r.setAttribute(t,e[t])}function re(r,e){r.onload=function(){this.onerror=this.onload=null,e(null,r)},r.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),r)}}function Se(r,e){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,r))}}(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=_e,a=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default=function(o){var d=new Promise(function(p){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){p(window.YT);return}else{var c=window.location.protocol==="http:"?"http:":"https:";(0,a.default)(c+"//www.youtube.com/iframe_api",function(s){s&&o.trigger("error",s)})}var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),p(window.YT)}});return d},r.exports=e.default})(L,L.exports);var Ee=L.exports,j={exports:{}},q={exports:{}},B={exports:{}},I=1e3,N=I*60,V=N*60,D=V*24,Ce=D*365.25,Ae=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return Oe(r);if(t==="number"&&isNaN(r)===!1)return e.long?Re(r):Te(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Oe(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),a=(e[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return t*Ce;case"days":case"day":case"d":return t*D;case"hours":case"hour":case"hrs":case"hr":case"h":return t*V;case"minutes":case"minute":case"mins":case"min":case"m":return t*N;case"seconds":case"second":case"secs":case"sec":case"s":return t*I;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function Te(r){return r>=D?Math.round(r/D)+"d":r>=V?Math.round(r/V)+"h":r>=N?Math.round(r/N)+"m":r>=I?Math.round(r/I)+"s":r+"ms"}function Re(r){return k(r,D,"day")||k(r,V,"hour")||k(r,N,"minute")||k(r,I,"second")||r+" ms"}function k(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}(function(r,e){e=r.exports=i.debug=i.default=i,e.coerce=c,e.disable=d,e.enable=o,e.enabled=p,e.humanize=Ae,e.names=[],e.skips=[],e.formatters={};var t;function a(n){var s=0,l;for(l in n)s=(s<<5)-s+n.charCodeAt(l),s|=0;return e.colors[Math.abs(s)%e.colors.length]}function i(n){function s(){if(s.enabled){var l=s,f=+new Date,h=f-(t||f);l.diff=h,l.prev=t,l.curr=f,t=f;for(var u=new Array(arguments.length),g=0;g<u.length;g++)u[g]=arguments[g];u[0]=e.coerce(u[0]),typeof u[0]!="string"&&u.unshift("%O");var v=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,function(m,_){if(m==="%%")return m;v++;var b=e.formatters[_];if(typeof b=="function"){var O=u[v];m=b.call(l,O),u.splice(v,1),v--}return m}),e.formatArgs.call(l,u);var P=s.log||e.log||console.log.bind(console);P.apply(l,u)}}return s.namespace=n,s.enabled=e.enabled(n),s.useColors=e.useColors(),s.color=a(n),typeof e.init=="function"&&e.init(s),s}function o(n){e.save(n),e.names=[],e.skips=[];for(var s=(typeof n=="string"?n:"").split(/[\s,]+/),l=s.length,f=0;f<l;f++)s[f]&&(n=s[f].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.substr(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function d(){e.enable("")}function p(n){var s,l;for(s=0,l=e.skips.length;s<l;s++)if(e.skips[s].test(n))return!1;for(s=0,l=e.names.length;s<l;s++)if(e.names[s].test(n))return!0;return!1}function c(n){return n instanceof Error?n.stack||n.message:n}})(B,B.exports);var Ie=B.exports;(function(r,e){var t={};e=r.exports=Ie,e.log=o,e.formatArgs=i,e.save=d,e.load=p,e.useColors=a,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function a(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(n){try{return JSON.stringify(n)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function i(n){var s=this.useColors;if(n[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+n[0]+(s?"%c ":" ")+"+"+e.humanize(this.diff),!!s){var l="color: "+this.color;n.splice(1,0,l,"color: inherit");var f=0,h=0;n[0].replace(/%[a-zA-Z%]/g,function(u){u!=="%%"&&(f++,u==="%c"&&(h=f))}),n.splice(h,0,l)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function d(n){try{n==null?e.storage.removeItem("debug"):e.storage.debug=n}catch{}}function p(){var n;try{n=e.storage.debug}catch{}return!n&&typeof process<"u"&&"env"in process&&(n=t.DEBUG),n}e.enable(p());function c(){try{return window.localStorage}catch{}}})(q,q.exports);var Ne=q.exports,G={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],r.exports=e.default})(G,G.exports);var Ve=G.exports,Q={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],r.exports=e.default})(Q,Q.exports);var De=Q.exports,W={exports:{}},z={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},r.exports=e.default})(z,z.exports);var xe=z.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=xe,a=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},r.exports=e.default})(W,W.exports);var ke=W.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ne,a=s(t),i=Ve,o=s(i),d=De,p=s(d),c=ke,n=s(c);function s(h){return h&&h.__esModule?h:{default:h}}var l=(0,a.default)("youtube-player"),f={};f.proxyEvents=function(h){var u={},g=function(T){var S="on"+T.slice(0,1).toUpperCase()+T.slice(1);u[S]=function(C){l('event "%s"',S,C),h.trigger(T,C)}},v=!0,P=!1,m=void 0;try{for(var _=p.default[Symbol.iterator](),b;!(v=(b=_.next()).done);v=!0){var O=b.value;g(O)}}catch(x){P=!0,m=x}finally{try{!v&&_.return&&_.return()}finally{if(P)throw m}}return u},f.promisifyPlayer=function(h){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g={},v=function(S){u&&n.default[S]?g[S]=function(){for(var C=arguments.length,R=Array(C),E=0;E<C;E++)R[E]=arguments[E];return h.then(function(w){var A=n.default[S],de=w.getPlayerState(),H=w[S].apply(w,R);return A.stateChangeRequired||Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(de)===-1?new Promise(function(K){var ce=function X(){var fe=w.getPlayerState(),ee=void 0;typeof A.timeout=="number"&&(ee=setTimeout(function(){w.removeEventListener("onStateChange",X),K()},A.timeout)),Array.isArray(A.acceptableStates)&&A.acceptableStates.indexOf(fe)!==-1&&(w.removeEventListener("onStateChange",X),clearTimeout(ee),K())};w.addEventListener("onStateChange",ce)}).then(function(){return H}):H})}:g[S]=function(){for(var C=arguments.length,R=Array(C),E=0;E<C;E++)R[E]=arguments[E];return h.then(function(w){return w[S].apply(w,R)})}},P=!0,m=!1,_=void 0;try{for(var b=o.default[Symbol.iterator](),O;!(P=(O=b.next()).done);P=!0){var x=O.value;v(x)}}catch(T){m=!0,_=T}finally{try{!P&&b.return&&b.return()}finally{if(m)throw _}}return g},e.default=f,r.exports=e.default})(j,j.exports);var Ye=j.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},a=be,i=n(a),o=Ee,d=n(o),p=Ye,c=n(p);function n(l){return l&&l.__esModule?l:{default:l}}var s=void 0;e.default=function(l){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u=(0,i.default)();if(s||(s=(0,d.default)(u)),f.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');f.events=c.default.proxyEvents(u);var g=new Promise(function(P){if((typeof l>"u"?"undefined":t(l))==="object"&&l.playVideo instanceof Function){var m=l;P(m)}else s.then(function(_){var b=new _.Player(l,f);return u.on("ready",function(){P(b)}),null})}),v=c.default.promisifyPlayer(g,h);return v.on=u.on,v.off=u.off,v},r.exports=e.default})(F,F.exports);var Me=F.exports;const Ue=Z(Me);var Fe=Object.defineProperty,Le=Object.defineProperties,je=Object.getOwnPropertyDescriptors,ae=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,ne=(r,e,t)=>e in r?Fe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,$=(r,e)=>{for(var t in e||(e={}))qe.call(e,t)&&ne(r,t,e[t]);if(ae)for(var t of ae(e))Be.call(e,t)&&ne(r,t,e[t]);return r},J=(r,e)=>Le(r,je(e)),Ge=(r,e,t)=>new Promise((a,i)=>{var o=c=>{try{p(t.next(c))}catch(n){i(n)}},d=c=>{try{p(t.throw(c))}catch(n){i(n)}},p=c=>c.done?a(c.value):Promise.resolve(c.value).then(o,d);p((t=t.apply(r,e)).next())});function Qe(r,e){var t,a;if(r.videoId!==e.videoId)return!0;const i=((t=r.opts)==null?void 0:t.playerVars)||{},o=((a=e.opts)==null?void 0:a.playerVars)||{};return i.start!==o.start||i.end!==o.end}function oe(r={}){return J($({},r),{height:0,width:0,playerVars:J($({},r.playerVars),{autoplay:0,start:0,end:0})})}function We(r,e){return r.videoId!==e.videoId||!Pe(oe(r.opts),oe(e.opts))}function ze(r,e){var t,a,i,o;return r.id!==e.id||r.className!==e.className||((t=r.opts)==null?void 0:t.width)!==((a=e.opts)==null?void 0:a.width)||((i=r.opts)==null?void 0:i.height)!==((o=e.opts)==null?void 0:o.height)||r.iframeClassName!==e.iframeClassName||r.title!==e.title}var $e={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Je={videoId:y.string,id:y.string,className:y.string,iframeClassName:y.string,style:y.object,title:y.string,loading:y.oneOf(["lazy","eager"]),opts:y.objectOf(y.any),onReady:y.func,onError:y.func,onPlay:y.func,onPause:y.func,onEnd:y.func,onStateChange:y.func,onPlaybackRateChange:y.func,onPlaybackQualityChange:y.func},Y=class extends U.Component{constructor(r){super(r),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,a;return(a=(t=this.props).onReady)==null?void 0:a.call(t,e)},this.onPlayerError=e=>{var t,a;return(a=(t=this.props).onError)==null?void 0:a.call(t,e)},this.onPlayerStateChange=e=>{var t,a,i,o,d,p,c,n;switch((a=(t=this.props).onStateChange)==null||a.call(t,e),e.data){case Y.PlayerState.ENDED:(o=(i=this.props).onEnd)==null||o.call(i,e);break;case Y.PlayerState.PLAYING:(p=(d=this.props).onPlay)==null||p.call(d,e);break;case Y.PlayerState.PAUSED:(n=(c=this.props).onPause)==null||n.call(c,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,a;return(a=(t=this.props).onPlaybackRateChange)==null?void 0:a.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,a;return(a=(t=this.props).onPlaybackQualityChange)==null?void 0:a.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=J($({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=Ue(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,a,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let o=!1;const d={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(d.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(d.endSeconds=this.props.opts.playerVars.end)),o){(a=this.internalPlayer)==null||a.loadVideoById(d);return}(i=this.internalPlayer)==null||i.cueVideoById(d)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(r){return Ge(this,null,function*(){ze(r,this.props)&&this.updatePlayer(),We(r,this.props)&&(yield this.resetPlayer()),Qe(r,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return U.createElement("div",{className:this.props.className,style:this.props.style},U.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},M=Y;M.propTypes=Je;M.defaultProps=$e;M.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var Ze=M;const He=({videoId:r})=>{const e={width:"360",height:"233",playerVars:{autoplay:0,rel:0,modestbranding:0}};return te.jsx("article",{className:"overflow-hidden rounded-xl shadow-lg shadow-gray-500",children:te.jsx(Ze,{videoId:r,opts:e})})};He.__docgenInfo={description:"",methods:[],displayName:"GuideVideo",props:{videoId:{required:!0,tsType:{name:"string"},description:""}}};export{He as G};
