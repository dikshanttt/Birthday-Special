(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),e,!1);var t=e.exports;e.exports.create;var n={nickname:`Diduuu`,fullName:`Sakshi`,relationship:`Mero Mutu • My Dearest Sister & Best Friend Forever`,navLinks:[{label:`Home`,href:`#welcome`},{label:`Celebration`,href:`#celebration`},{label:`Memories`,href:`#memories`},{label:`Letter`,href:`#letter`},{label:`Surprise`,href:`#surprise`}],welcome:{badge:`✨ Mero Pyari Diduuu • Best Sister Forever 💜`,greeting:`Someone very special has a birthday today… ♡`,subGreeting:`(and that's you, Diduuu!) 🥹💜`,ctaButton:`🎁 Open Your Surprise`,handwrittenNote:`A little surprise for my Diduuu — with lots of love ♡`,unbiologicalNote:`To the sweetest, most amazing sister 🪻`},celebration:{crown:`👑`,title:`Happy Birthday, Mero Diduuu! 🎂💜`,subtitle:`May your day be as bright and beautiful as your heart! 🪻`,pillButton:`Keep being you 💜`,cakeCaption:`Click the candles to blow them out and make a wish! ✨`,wishGrantedMessage:`✨ Make a wish, Diduuu! May every single dream of yours come true this year! 🎂🎉`,showcaseCard:{image:`./images/memories/17.jpeg`,caption:`You deserve all the happiness in the world 💜`,tapeColor:`purple`,stickyNote:[`Kind 🌷`,`Funny 😂`,`Beautiful 🪻`,`Chosen by Heart 💜`,`My Diduuu 💜`]}},memoriesSection:{title:`Little Moments of My Favourite Diduuu 💜`,subtitle:`From a naughty little kid to the amazing, wonderful soul you are today! 😂❤️`,categories:[{id:`all`,label:`All Memories 📸`},{id:`childhood`,label:`Naughty Kid Days 🐣`},{id:`recent`,label:`Growing Beautiful 🌷`},{id:`bond`,label:`Bond of Hearts 🫶🏻`}],items:[{id:1,src:`./images/memories/1.jpeg`,title:`The Iconic Little Naughty Kid`,caption:`The naughty kid (never changed!) 🤪💖`,category:`childhood`,rotation:-2.5,tape:`purple`,sticker:`bunny`},{id:2,src:`./images/memories/2.jpeg`,title:`Pure Innocence & Smiles`,caption:`That sweet innocent smile that melted everyone's hearts 🥹🌷`,category:`childhood`,rotation:2.1,tape:`lavender`,sticker:`sparkle`},{id:3,src:`./images/memories/3.jpeg`,title:`Little Explorer`,caption:`Always curious, always ready for mischief! 😂✨`,category:`childhood`,rotation:-1.8,tape:`violet`,sticker:`star`},{id:4,src:`./images/memories/4.jpeg`,title:`Growing up so fast`,caption:`Growing up into such a kind and beautiful soul ♡`,category:`childhood`,rotation:2.8,tape:`lilac`,sticker:`heart`},{id:5,src:`./images/memories/5.jpeg`,title:`Precious Childhood`,caption:`Golden days we'll always cherish forever 🧸💛`,category:`childhood`,rotation:-2.2,tape:`plum`,sticker:`sparkle`},{id:6,src:`./images/memories/6.jpeg`,title:`The Sibling Bond`,caption:`No matter how much we tease, you're always my protector 🫂💗`,category:`childhood`,rotation:1.5,tape:`lavender`,sticker:`heart`},{id:7,src:`./images/memories/7.jpeg`,title:`Naughty Smile`,caption:`Caught in 4K planning the next prank! 🤫✨`,category:`childhood`,rotation:-3,tape:`violet`,sticker:`bunny`},{id:8,src:`./images/memories/8.jpeg`,title:`Radiant & Graceful`,caption:`From cute childhood antics to timeless grace 🌷💫`,category:`recent`,rotation:-1.5,tape:`purple`,sticker:`sparkle`},{id:9,src:`./images/memories/9.jpeg`,title:`That Unmatched Vibe`,caption:`Still the same goofy you on the inside! 😂❤️`,category:`recent`,rotation:2.4,tape:`lilac`,sticker:`heart`},{id:10,src:`./images/memories/10.jpeg`,title:`Golden Hour Glow`,caption:`Lighting up every room just by walking in ✨🌻`,category:`recent`,rotation:-2,tape:`lavender`,sticker:`star`},{id:11,src:`./images/memories/11.jpeg`,title:`Precious Smiles`,caption:`Keep smiling always, Diduuu! Your smile is contagious! 🌷`,category:`recent`,rotation:1.8,tape:`purple`,sticker:`bunny`},{id:12,src:`./images/memories/12.jpeg`,title:`Pure Aesthetic`,caption:`Queen of aesthetic poses and effortless charm 👑💅`,category:`recent`,rotation:-1.2,tape:`violet`,sticker:`heart`},{id:13,src:`./images/memories/13.jpeg`,title:`Always Cherished`,caption:`Smol Diduuu, big sister duties already 🥺🤍`,category:`recent`,rotation:2.6,tape:`lilac`,sticker:`sparkle`},{id:14,src:`./images/memories/14.jpeg`,title:`Confidence & Beauty`,caption:`Strong, graceful, and inspiring every single day 💐💖`,category:`recent`,rotation:-2.7,tape:`plum`,sticker:`star`},{id:15,src:`./images/memories/15.jpeg`,title:`Unforgettable Days`,caption:`Little you, already making every moment special 🥹🎂🤍`,category:`recent`,rotation:1.4,tape:`lavender`,sticker:`heart`},{id:16,src:`./images/memories/16.jpeg`,title:`My Favourite Person`,caption:`Forever grateful to have you as my sister 🫶🏻🌷`,category:`recent`,rotation:-1.9,tape:`violet`,sticker:`bunny`},{id:17,src:`./images/memories/17.jpeg`,title:`Pure Elegance`,caption:`A heart as beautiful as fresh spring flowers 🌷💖`,category:`recent`,rotation:2.2,tape:`purple`,sticker:`sparkle`},{id:18,src:`./images/memories/18.jpg`,title:`Sunshine Energy`,caption:`The brightest smile in the whole universe! 🌷✨`,category:`bond`,rotation:-2.4,tape:`lilac`,sticker:`star`},{id:19,src:`./images/memories/19.jpg`,title:`Ever Joyful`,caption:`Sadhai yestai sparkling and happy dekhna paam Diduuu! 🌷`,category:`recent`,rotation:1.6,tape:`lavender`,sticker:`sparkle`},{id:20,src:`./images/memories/21.jpg`,title:`Bond of Pure Love`,caption:`A bond chosen by destiny and sealed with endless care 🫶🏻💖`,category:`bond`,rotation:-1.7,tape:`purple`,sticker:`heart`},{id:21,src:`./images/memories/22.jpg`,title:`Picture Perfect`,caption:`Memories to cherish for a lifetime and beyond 📸✨`,category:`recent`,rotation:2.5,tape:`plum`,sticker:`star`},{id:22,src:`./images/memories/23.jpg`,title:`Graceful Queen`,caption:`Queen of elegance, warmth, and unmatched sweet energy 👑🌷`,category:`recent`,rotation:-2.1,tape:`violet`,sticker:`bunny`},{id:23,src:`./images/memories/24.jpg`,title:`Best Sister Forever`,caption:`Sadhai sabai bhanda pyari, mero favourite didi! 🫂💗`,category:`bond`,rotation:1.9,tape:`lavender`,sticker:`heart`},{id:24,src:`./images/memories/25.jpg`,title:`Sweet Moments`,caption:`A sweet little glimpse of pure joy and warmth 🥹🧸`,category:`childhood`,rotation:-1.5,tape:`purple`,sticker:`sparkle`},{id:25,src:`./images/memories/26.jpg`,title:`Timeless Smile`,caption:`Sadhai sabai ko pyari, sadhai hamro mutu ko didi 🌷❤️`,category:`recent`,rotation:2.3,tape:`lilac`,sticker:`bunny`},{id:26,src:`./images/memories/27.jpg`,title:`Unmatched Support`,caption:`Thank you for always being there for me, no matter what 🫶🏻💫`,category:`bond`,rotation:-2.6,tape:`plum`,sticker:`heart`},{id:27,src:`./images/memories/28.jpg`,title:`Radiant Tomorrow`,caption:`Forever cheering for you in every chapter of your life! 🥳💖`,category:`recent`,rotation:1.7,tape:`violet`,sticker:`star`},{id:28,src:`./images/memories/29.jpg`,title:`Heart to Heart`,caption:`Sadhai mero mutu ko najik hunuhuncha hajur 🫶🏻🌷`,category:`bond`,rotation:-1.8,tape:`purple`,sticker:`sparkle`},{id:29,src:`./images/memories/30.jpeg`,title:`Cherished Memories`,caption:`Every single moment spent with you is a treasure! 🌷✨`,category:`recent`,rotation:2.1,tape:`lavender`,sticker:`star`},{id:30,src:`./images/memories/31.jpeg`,title:`Infinite Joy`,caption:`Stay smiling, laughing, and shining bright always Diduuu! 💜👑`,category:`recent`,rotation:-2.3,tape:`lilac`,sticker:`heart`},{id:31,src:`./images/memories/32.jpeg`,title:`Best Sister Forever`,caption:`Mero sweetest Diduuu sadhai mero mutu mai hunuhuncha 🫂💜`,category:`bond`,rotation:1.6,tape:`plum`,sticker:`sparkle`}]},letter:{sectionHeading:`A Little Letter for You... 💌`,salutation:`Happy Birthday, Mero Diduuu! 💜`,paragraphs:[`Kaash yrrr aaja hajur sanga bhayera yo special day celebrate garna paauthe! 🥹💜 Dashain vayera ma bhetna napaye pani, hajur sadhai mero mutu ko najik hunu hunxa.`,`Hajur mero lagi ekdam special hunuhunxa! Hajur sanga ko yo pyaro nata sadhai mero mutu ma rahi rahanexa. 🫶🏻🪻💜`,`Hajurko life sadhai khusi, maya ra ramra moments le bharipurna hos. Hajurka sabai sapana pura hun, ani hajur sadhai yestai hasirakhnu haiii! 🌷💫`,`Chittai bhetera sangai ramailo garnu parxa. Teti bela samma ko lagi, yo sano card ma mero dherai saaro maya! 🫂💜`,`Dherai maya, Diduuu! 🎂💋`],closing:`— Hajurko sano bhai💜`,stickyTag:`Lopp Uhh 💜`,sidePolaroid:{image:`./images/memories/11.jpeg`,caption:`Keep smiling always! 💜`}},surprise:{quote1:`Jindagiko harek modma pani, hajurko birthday sadhai mero lagi ekdam special cha! 💜🎂 Hajurko yo naya barsa khusi, maya ra aashish le bharipurna hos. 💖✨`,quote2:`Aaja bhetna napaye pani, hajur sadhai mero mutu ko najik hunuhunxa! 🥹🫂`,quote3:`Chittai bhetera dherai ramailo garnuparxa haiii, Diduuu! 🪻`,grandTitle:`HAPPY BIRTHDAY, MERO DIDUUUU! 🎂💜`,subWish:`Sadhai khusi rahanu hos, Mero Pyari Diduuu! 💜`,psNote:`P.S. Hajurko sano gift pani baki cha haiii! 🎁😂💜`,hugButton:`Send You One More Hug 🫂`,hugSuccessMessage:`A giant warm brotherly hug has been sent straight to your heart! 🫂💜 Hajur jasto pyari didi paunu mero thulo bhagya ho! Love you always! 🥹🪻`},audio:{musicFile:`./audio/bgm.mp3`,enableSynthesizerFallback:!0}},r=new class{constructor(){this.audioCtx=null,this.isPlaying=!1,this.audioElement=null,this.melodyTimer=null,this.melodyNoteIndex=0,this.isMuted=!1,this.hasCustomAudio=!1}init(){if(!this.audioCtx&&(window.AudioContext||window.webkitAudioContext)){let e=window.AudioContext||window.webkitAudioContext;this.audioCtx=new e}this.audioElement||(this.audioElement=new Audio(`./audio/bgm.mp3`),this.audioElement.loop=!0)}playMusicBoxNote(e,t=1.2,n=0){if(this.audioCtx||this.init(),!this.audioCtx)return;this.audioCtx.state===`suspended`&&this.audioCtx.resume();let r=this.audioCtx.currentTime+n,i=this.audioCtx.createOscillator(),a=this.audioCtx.createGain();i.type=`sine`,i.frequency.setValueAtTime(e,r),a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(.18,r+.02),a.gain.exponentialRampToValueAtTime(1e-4,r+t),i.connect(a),a.connect(this.audioCtx.destination),i.start(r),i.stop(r+t)}startMusicBoxLoop(){let e={C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,B4:493.88,C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880},t=[{note:e.G4,beats:1},{note:e.G4,beats:1},{note:e.A4,beats:2},{note:e.G4,beats:2},{note:e.C5,beats:2},{note:e.B4,beats:4},{note:e.G4,beats:1},{note:e.G4,beats:1},{note:e.A4,beats:2},{note:e.G4,beats:2},{note:e.D5,beats:2},{note:e.C5,beats:4},{note:e.G4,beats:1},{note:e.G4,beats:1},{note:e.G5,beats:2},{note:e.E5,beats:2},{note:e.C5,beats:2},{note:e.B4,beats:2},{note:e.A4,beats:3},{note:e.F5,beats:1},{note:e.F5,beats:1},{note:e.E5,beats:2},{note:e.C5,beats:2},{note:e.D5,beats:2},{note:e.C5,beats:5},{note:null,beats:3}],n=()=>{if(!this.isPlaying)return;let e=t[this.melodyNoteIndex];e.note&&this.playMusicBoxNote(e.note,1.4);let r=e.beats*380;this.melodyNoteIndex=(this.melodyNoteIndex+1)%t.length,this.melodyTimer=setTimeout(n,r)};n()}toggleMusic(){return this.init(),this.audioCtx&&this.audioCtx.state===`suspended`&&this.audioCtx.resume(),this.isPlaying?(this.stop(),!1):(this.play(),!0)}play(){if(this.isPlaying=!0,this.init(),this.audioElement){let e=this.audioElement.play();if(e!==void 0){e.then(()=>{this.isPlaying?this.hasCustomAudio=!0:(this.audioElement.pause(),this.audioElement.currentTime=0)}).catch(()=>{this.hasCustomAudio=!1,this.isPlaying&&this.startMusicBoxLoop()});return}}this.startMusicBoxLoop()}stop(){this.isPlaying=!1,this.melodyTimer&&=(clearTimeout(this.melodyTimer),null),this.audioElement&&(this.audioElement.pause(),this.audioElement.currentTime=0)}playChime(){this.init(),this.audioCtx&&(this.audioCtx.state===`suspended`&&this.audioCtx.resume(),[523.25,659.25,783.99,1046.5,1318.51].forEach((e,t)=>{this.playMusicBoxNote(e,1.6,t*.08)}))}playCandleBlow(){this.init(),this.audioCtx&&(this.audioCtx.state===`suspended`&&this.audioCtx.resume(),this.audioCtx.currentTime,[880,1046.5,1318.5,1760].forEach((e,t)=>{this.playMusicBoxNote(e,1,t*.1)}))}playPop(){if(this.init(),!this.audioCtx)return;this.audioCtx.state===`suspended`&&this.audioCtx.resume();let e=this.audioCtx.currentTime,t=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();t.type=`sine`,t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(800,e+.08),n.gain.setValueAtTime(.15,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.audioCtx.destination),t.start(e),t.stop(e+.08)}},i={cake:`
    <svg class="cake-svg" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chocolate and Vanilla Birthday Cake with Candles">
      <defs>
        <radialGradient id="cakePlateGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="85%" stop-color="#f5f0ff" />
          <stop offset="100%" stop-color="#d8b4fe" stop-opacity="0.6" />
        </radialGradient>
        <!-- Rich Chocolate Sponge Gradient -->
        <linearGradient id="chocCakeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#542e14" />
          <stop offset="50%" stop-color="#42220c" />
          <stop offset="100%" stop-color="#2c1406" />
        </linearGradient>
        <!-- Creamy Velvety Vanilla Frosting -->
        <linearGradient id="vanillaFrostingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="70%" stop-color="#fffef5" />
          <stop offset="100%" stop-color="#fef9c3" />
        </linearGradient>
        <radialGradient id="flameGrad" cx="50%" cy="80%" r="70%">
          <stop offset="0%" stop-color="#fffbeb" />
          <stop offset="35%" stop-color="#fef08a" />
          <stop offset="70%" stop-color="#fb923c" />
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Plate Stand -->
      <ellipse cx="160" cy="250" rx="140" ry="24" fill="url(#cakePlateGrad)" stroke="#c084fc" stroke-width="2" />
      <ellipse cx="160" cy="247" rx="120" ry="16" fill="#ffffff" fill-opacity="0.9" />

      <!-- Cake Bottom Tier: Rich Chocolate Sponge -->
      <rect x="50" y="160" width="220" height="70" rx="16" fill="url(#chocCakeGrad)" />
      
      <!-- Middle Cream Filling Line (Vanilla cream between chocolate layers) -->
      <line x1="52" y1="195" x2="268" y2="195" stroke="#fef9c3" stroke-width="4" stroke-dasharray="8 3" opacity="0.9" />

      <!-- Frosting Drips Bottom: Velvety Vanilla Buttercream -->
      <path d="M 50 170 
               Q 65 192, 80 170 
               Q 95 198, 110 170 
               Q 130 202, 150 170 
               Q 170 197, 190 170 
               Q 210 202, 230 170 
               Q 245 192, 270 170 
               L 270 160 L 50 160 Z" fill="url(#vanillaFrostingGrad)" />

      <!-- Chocolate Truffles & Vanilla Pearls on Bottom Tier -->
      <circle cx="70" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="110" cy="225" r="4.5" fill="#2a1204" />
      <circle cx="150" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="190" cy="225" r="4.5" fill="#2a1204" />
      <circle cx="230" cy="225" r="5" fill="#fef9c3" stroke="#d97706" stroke-width="0.5" />
      <circle cx="250" cy="225" r="4.5" fill="#2a1204" />

      <!-- Golden Vanilla Script on Chocolate Bottom Tier -->
      <text x="160" y="213" font-family="'Caveat', cursive" font-size="22" font-weight="700" fill="#fef08a" text-anchor="middle">Happy Birthday 🎂✨</text>

      <!-- Cake Top Tier: Chocolate Sponge with Vanilla Frosting -->
      <rect x="85" y="105" width="150" height="60" rx="12" fill="url(#chocCakeGrad)" stroke="#78350f" stroke-width="1.5" />
      
      <!-- Top Tier Vanilla Cream Line -->
      <line x1="86" y1="135" x2="234" y2="135" stroke="#fef9c3" stroke-width="3.5" stroke-dasharray="6 2" opacity="0.85" />

      <!-- Frosting Drips Top: Velvety Vanilla -->
      <path d="M 85 115 
               Q 100 136, 115 115 
               Q 130 142, 145 115 
               Q 160 140, 175 115 
               Q 190 144, 205 115 
               Q 220 134, 235 115 
               L 235 105 L 85 105 Z" fill="url(#vanillaFrostingGrad)" />

      <!-- Whipped Vanilla Cream Dollops on Top Edge -->
      <circle cx="95" cy="105" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="120" cy="103" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="145" cy="102" r="8.5" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="160" cy="101" r="9" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="175" cy="102" r="8.5" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="200" cy="103" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />
      <circle cx="225" cy="105" r="8" fill="#ffffff" stroke="#fef3c7" stroke-width="1.5" />

      <!-- Gourmet Dark Chocolate Curls on Top -->
      <path d="M 118 95 C 112 90, 110 80, 118 75 C 126 80, 124 90, 118 95 Z" fill="#2c1406" />
      <path d="M 198 95 C 192 90, 190 80, 198 75 C 206 80, 204 90, 198 95 Z" fill="#2c1406" />
      <!-- Chocolate chip accents -->
      <circle cx="107" cy="100" r="2.5" fill="#1f0a02" />
      <circle cx="135" cy="99" r="2.5" fill="#1f0a02" />
      <circle cx="185" cy="99" r="2.5" fill="#1f0a02" />
      <circle cx="212" cy="100" r="2.5" fill="#1f0a02" />

      <!-- 3 Birthday Candles -->
      <!-- Candle 1 (Left - Vanilla Cream Striped) -->
      <g class="candle candle-1" data-candle="1">
        <rect x="117" y="45" width="8" height="40" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1" />
        <line x1="117" y1="52" x2="125" y2="56" stroke="#9333ea" stroke-width="1.5" />
        <line x1="117" y1="64" x2="125" y2="68" stroke="#9333ea" stroke-width="1.5" />
        <line x1="117" y1="76" x2="125" y2="80" stroke="#9333ea" stroke-width="1.5" />
        <line x1="121" y1="45" x2="121" y2="38" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="121" cy="27" rx="8" ry="14" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 121 16 Q 115 26, 121 34 Q 127 26, 121 16 Z" fill="url(#flameGrad)" />
        </g>
      </g>

      <!-- Candle 2 (Center - Tallest Royal Violet & Gold) -->
      <g class="candle candle-2" data-candle="2">
        <rect x="156" y="35" width="9" height="50" rx="3" fill="#c084fc" stroke="#7c3aed" stroke-width="1" />
        <line x1="156" y1="45" x2="165" y2="49" stroke="#fef08a" stroke-width="1.8" />
        <line x1="156" y1="58" x2="165" y2="62" stroke="#fef08a" stroke-width="1.8" />
        <line x1="156" y1="71" x2="165" y2="75" stroke="#fef08a" stroke-width="1.8" />
        <line x1="160.5" y1="35" x2="160.5" y2="27" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="160.5" cy="16" rx="9" ry="16" fill="#fef08a" opacity="0.75" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 160.5 4 Q 153 16, 160.5 24 Q 168 16, 160.5 4 Z" fill="url(#flameGrad)" />
        </g>
      </g>

      <!-- Candle 3 (Right - Vanilla Cream Striped) -->
      <g class="candle candle-3" data-candle="3">
        <rect x="195" y="45" width="8" height="40" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1" />
        <line x1="195" y1="52" x2="203" y2="56" stroke="#9333ea" stroke-width="1.5" />
        <line x1="195" y1="64" x2="203" y2="68" stroke="#9333ea" stroke-width="1.5" />
        <line x1="195" y1="76" x2="203" y2="80" stroke="#9333ea" stroke-width="1.5" />
        <line x1="199" y1="45" x2="199" y2="38" stroke="#451a03" stroke-width="1.5" />
        <!-- Flame -->
        <g class="flame-group">
          <ellipse class="flame flame-glow" cx="199" cy="27" rx="8" ry="14" fill="#fef08a" opacity="0.65" filter="url(#softGlow)" />
          <path class="flame flame-core" d="M 199 16 Q 193 26, 199 34 Q 205 26, 199 16 Z" fill="url(#flameGrad)" />
        </g>
      </g>
    </svg>
  `,doodleBunny:`
    <svg class="doodle-bunny" viewBox="0 0 80 80" width="48" height="48" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <!-- Ears -->
      <path d="M 28 32 C 22 15, 26 6, 32 8 C 38 10, 36 22, 34 32" fill="#fff" />
      <path d="M 46 32 C 44 22, 42 10, 48 8 C 54 6, 58 15, 52 32" fill="#fff" />
      <!-- Inner ear purple -->
      <path d="M 29 26 C 26 18, 28 12, 32 13 C 34 14, 34 22, 33 26" stroke="#a855f7" fill="#f3e8ff" stroke-width="1.5" />
      <path d="M 47 26 C 46 22, 46 14, 48 13 C 52 12, 54 18, 51 26" stroke="#a855f7" fill="#f3e8ff" stroke-width="1.5" />
      <!-- Head -->
      <circle cx="40" cy="46" r="18" fill="#fff" />
      <!-- Eyes -->
      <circle cx="34" cy="44" r="2" fill="#4c1d95" stroke="none" />
      <circle cx="46" cy="44" r="2" fill="#4c1d95" stroke="none" />
      <!-- Blush -->
      <ellipse cx="30" cy="48" rx="3" ry="1.5" fill="#e9d5ff" stroke="none" />
      <ellipse cx="50" cy="48" rx="3" ry="1.5" fill="#e9d5ff" stroke="none" />
      <!-- Nose & mouth -->
      <path d="M 40 48 L 40 50 M 37 52 Q 40 54, 40 50 Q 40 54, 43 52" stroke="#4c1d95" stroke-width="1.5" />
      <!-- Paws -->
      <path d="M 30 64 C 30 58, 36 58, 36 64" fill="#fff" />
      <path d="M 44 64 C 44 58, 50 58, 50 64" fill="#fff" />
    </svg>
  `,ribbonBow:`
    <svg class="ribbon-bow-svg" viewBox="0 0 100 60" width="60" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Left loop -->
      <path d="M 48 24 C 30 5, 10 10, 16 28 C 22 42, 44 32, 48 26 Z" fill="#a855f7" stroke="#7c3aed" stroke-width="1.8" />
      <!-- Right loop -->
      <path d="M 52 24 C 70 5, 90 10, 84 28 C 78 42, 56 32, 52 26 Z" fill="#a855f7" stroke="#7c3aed" stroke-width="1.8" />
      <!-- Left tail -->
      <path d="M 46 30 C 35 42, 24 52, 20 58 C 28 54, 38 52, 45 42 Z" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5" />
      <!-- Right tail -->
      <path d="M 54 30 C 65 42, 76 52, 80 58 C 72 54, 62 52, 55 42 Z" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5" />
      <!-- Center Knot -->
      <circle cx="50" cy="26" r="7" fill="#d8b4fe" stroke="#6d28d9" stroke-width="2" />
    </svg>
  `,tulipBouquet:`
    <svg class="tulip-bouquet-svg" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Stems -->
      <path d="M 55 60 Q 58 100, 60 135" stroke="#4ade80" stroke-width="3" stroke-linecap="round" />
      <path d="M 75 65 Q 68 100, 62 135" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 38 75 Q 48 105, 59 135" stroke="#86efac" stroke-width="3" stroke-linecap="round" />
      <!-- Leaves -->
      <path d="M 60 110 C 85 95, 90 70, 88 65 C 80 80, 65 100, 60 110 Z" fill="#86efac" stroke="#22c55e" stroke-width="1.5" />
      <path d="M 55 105 C 30 90, 25 70, 26 65 C 35 78, 50 95, 55 105 Z" fill="#4ade80" stroke="#16a34a" stroke-width="1.5" />
      <!-- Tulip 1 Center (Deep Purple) -->
      <g transform="translate(45, 20)">
        <path d="M 15 45 C 0 35, -2 15, 12 5 C 16 18, 14 35, 15 45 Z" fill="#7c3aed" />
        <path d="M 15 45 C 30 35, 32 15, 18 5 C 14 18, 16 35, 15 45 Z" fill="#8b5cf6" />
        <path d="M 15 45 C 7 30, 7 12, 15 2 C 23 12, 23 30, 15 45 Z" fill="#c084fc" stroke="#7c3aed" stroke-width="1.5" />
      </g>
      <!-- Tulip 2 Left (Lavender) -->
      <g transform="translate(20, 35) rotate(-15)">
        <path d="M 14 40 C 2 30, 0 14, 12 5 C 15 16, 13 32, 14 40 Z" fill="#9333ea" />
        <path d="M 14 40 C 26 30, 28 14, 16 5 C 13 16, 15 32, 14 40 Z" fill="#a855f7" />
        <path d="M 14 40 C 7 28, 7 12, 14 3 C 21 12, 21 28, 14 40 Z" fill="#e9d5ff" stroke="#9333ea" stroke-width="1.5" />
      </g>
      <!-- Tulip 3 Right (Amethyst) -->
      <g transform="translate(68, 30) rotate(15)">
        <path d="M 14 40 C 2 30, 0 14, 12 5 C 15 16, 13 32, 14 40 Z" fill="#6d28d9" />
        <path d="M 14 40 C 26 30, 28 14, 16 5 C 13 16, 15 32, 14 40 Z" fill="#8b5cf6" />
        <path d="M 14 40 C 7 28, 7 12, 14 3 C 21 12, 21 28, 14 40 Z" fill="#ddd6fe" stroke="#6d28d9" stroke-width="1.5" />
      </g>
    </svg>
  `,giftBox:`
    <svg class="giftbox-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="boxGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#faf5ff" />
          <stop offset="100%" stop-color="#ede9fe" />
        </linearGradient>
        <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#6d28d9" />
        </linearGradient>
        <filter id="giftDropShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#a855f7" flood-opacity="0.35" />
        </filter>
      </defs>

      <!-- Main Box Body -->
      <rect x="35" y="85" width="130" height="95" rx="8" fill="url(#boxGrad)" stroke="#a855f7" stroke-width="2" filter="url(#giftDropShadow)" />
      
      <!-- Vertical Ribbon on Body -->
      <rect x="90" y="85" width="20" height="95" fill="url(#ribbonGrad)" />
      <!-- Horizontal Ribbon on Body -->
      <rect x="35" y="125" width="130" height="18" fill="url(#ribbonGrad)" />

      <!-- Gift Tag Attached to Ribbon -->
      <g class="gift-tag-group" transform="translate(115, 105) rotate(10)">
        <!-- Tag string -->
        <line x1="0" y1="0" x2="8" y2="8" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="2,2" />
        <!-- Tag paper -->
        <rect x="5" y="6" width="60" height="42" rx="4" fill="#ffffff" stroke="#c084fc" stroke-width="1.5" />
        <circle cx="10" cy="11" r="2" fill="#7c3aed" />
        <text x="35" y="24" font-family="'Caveat', cursive" font-size="13" font-weight="700" fill="#7c3aed" text-anchor="middle">For my</text>
        <text x="35" y="38" font-family="'Caveat', cursive" font-size="14" font-weight="700" fill="#581c87" text-anchor="middle">Diduuu 💜</text>
      </g>

      <!-- Box Lid Group -->
      <g class="gift-lid-group">
        <rect x="28" y="70" width="144" height="22" rx="5" fill="url(#boxGrad)" stroke="#8b5cf6" stroke-width="2" />
        <rect x="90" y="70" width="20" height="22" fill="url(#ribbonGrad)" />
        
        <!-- Big Bow on Lid -->
        <g transform="translate(100, 70)">
          <!-- Left loop -->
          <path d="M 0 0 C -25 -25, -45 -15, -40 5 C -35 20, -10 10, 0 0 Z" fill="#a855f7" stroke="#6d28d9" stroke-width="2" />
          <!-- Right loop -->
          <path d="M 0 0 C 25 -25, 45 -15, 40 5 C 35 20, 10 10, 0 0 Z" fill="#a855f7" stroke="#6d28d9" stroke-width="2" />
          <!-- Bow Knot -->
          <circle cx="0" cy="0" r="7" fill="#e9d5ff" stroke="#6d28d9" stroke-width="2" />
        </g>
      </g>
    </svg>
  `,pushPin:`
    <svg class="push-pin" viewBox="0 0 32 32" width="26" height="26" fill="none">
      <ellipse cx="16" cy="12" rx="8" ry="6" fill="#7c3aed" stroke="#581c87" stroke-width="1.5" />
      <rect x="14" y="16" width="4" height="8" rx="2" fill="#581c87" />
      <polygon points="16,28 14,23 18,23" fill="#94a3b8" />
    </svg>
  `,washiTape:(e=`lavender`)=>{let t={purple:`rgba(168, 85, 247, 0.7)`,lavender:`rgba(216, 180, 254, 0.75)`,violet:`rgba(139, 92, 246, 0.7)`,lilac:`rgba(192, 132, 252, 0.7)`,plum:`rgba(126, 34, 206, 0.65)`,cream:`rgba(254, 243, 199, 0.75)`,pink:`rgba(232, 121, 249, 0.7)`,mint:`rgba(167, 243, 208, 0.7)`,yellow:`rgba(254, 240, 138, 0.75)`};return`<div class="washi-tape washi-tape-${e}" style="background-color: ${t[e]||t.lavender};" aria-hidden="true"></div>`}};document.addEventListener(`DOMContentLoaded`,()=>{a(),o(),s(),u(),m(),h(),v(),y(),b()});function a(){let e=document.getElementById(`heroCakeSlot`);e&&(e.innerHTML=i.cake);let t=document.getElementById(`celebrationCakeSlot`);t&&(t.innerHTML=i.cake);let n=document.getElementById(`letterRibbonSlot`);n&&(n.innerHTML=i.ribbonBow);let r=document.getElementById(`sideTulipsSlot`);r&&(r.innerHTML=i.tulipBouquet);let a=document.getElementById(`giftBoxSlot`);a&&(a.innerHTML=i.giftBox)}function o(){let e=document.getElementById(`btnOpenSurprise`);e&&e.addEventListener(`click`,e=>{e.preventDefault(),t({particleCount:95,spread:75,origin:{y:.6},colors:[`#a855f7`,`#8b5cf6`,`#7c3aed`,`#c084fc`,`#d8b4fe`,`#fef08a`]}),r.playChime();let n=document.getElementById(`celebration`);n&&n.scrollIntoView({behavior:`smooth`})})}function s(){let e=document.getElementById(`celebrationCakeSlot`),i=document.getElementById(`candlePromptText`),a=document.getElementById(`btnCelebrationPill`),o=!1,s=()=>{o=!o,o?(e.classList.add(`candles-blown`),r.playCandleBlow(),t({particleCount:110,spread:90,origin:{y:.5},colors:[`#c084fc`,`#a855f7`,`#8b5cf6`,`#d8b4fe`,`#fef08a`,`#ffffff`]}),i&&(i.innerHTML=`✨ Wish made! May all your dreams come true, Diduuu! 🎂🎉`),e.querySelectorAll(`.candle`).forEach(e=>{let t=document.createElement(`div`);t.className=`smoke-puff`,e.appendChild(t),setTimeout(()=>t.remove(),1600)})):(e.classList.remove(`candles-blown`),r.playPop(),i&&(i.innerHTML=n.celebration.cakeCaption))};e&&(e.addEventListener(`click`,s),e.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),s())})),a&&a.addEventListener(`click`,()=>{t({particleCount:50,spread:60,origin:{y:.7},colors:[`#f43f5e`,`#ec4899`,`#fbcfe8`]}),r.playPop()})}var c=0,l=n.memoriesSection.items.filter(e=>e.category===`bond`);function u(){let e=document.getElementById(`scrapbookGrid`),t=document.querySelectorAll(`.filter-btn`),r=t=>{e&&(e.innerHTML=``,t.forEach((t,n)=>{let r=document.createElement(`article`);r.className=`polaroid-card`,r.dataset.index=n,r.style.transform=`rotate(${t.rotation||0}deg)`,r.setAttribute(`tabindex`,`0`),r.setAttribute(`role`,`button`),r.setAttribute(`aria-label`,`View photo: ${t.title}`);let a=i.washiTape(t.tape||`pink`),o=`
        <div class="polaroid-media-wrap">
          <img src="${t.src}" alt="${t.title}" loading="lazy" />
        </div>
      `,s=`🌷`;t.sticker===`bunny`&&(s=`🐰`),t.sticker===`heart`&&(s=`💖`),t.sticker===`star`&&(s=`⭐`),t.sticker===`sparkle`&&(s=`✨`),r.innerHTML=`
        ${a}
        ${o}
        <div class="polaroid-meta">
          <p class="polaroid-caption">${t.caption}</p>
        </div>
        <span class="polaroid-sticker" aria-hidden="true">${s}</span>
      `,r.addEventListener(`click`,()=>{d(n)}),r.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),d(n))}),e.appendChild(r)}))};r(l),t.forEach(e=>{e.addEventListener(`click`,()=>{t.forEach(e=>{e.classList.remove(`active`),e.setAttribute(`aria-pressed`,`false`)}),e.classList.add(`active`),e.setAttribute(`aria-pressed`,`true`);let i=e.dataset.category;l=i===`all`?[...n.memoriesSection.items]:n.memoriesSection.items.filter(e=>e.category===i),r(l)})}),p()}function d(e){let t=document.getElementById(`lightboxModal`);t&&(c=e,f(),t.open||t.showModal())}function f(){document.getElementById(`lightboxModal`);let e=document.getElementById(`lightboxBody`),t=document.getElementById(`lightboxCaption`),n=document.getElementById(`lightboxCounter`),r=l[c];r&&e&&t&&(e.innerHTML=`
    <img src="${r.src}" alt="${r.title}" />
  `,t.textContent=r.caption,n&&(n.textContent=`${c+1} / ${l.length}`))}function p(){let e=document.getElementById(`lightboxModal`),t=document.getElementById(`lightboxCloseBtn`),n=document.getElementById(`lightboxPrevBtn`),r=document.getElementById(`lightboxNextBtn`);e&&(`closedBy`in HTMLDialogElement.prototype||e.addEventListener(`click`,t=>{if(t.target!==e)return;let n=e.getBoundingClientRect();n.top<=t.clientY&&t.clientY<=n.top+n.height&&n.left<=t.clientX&&t.clientX<=n.left+n.width||e.close()}),t&&t.addEventListener(`click`,()=>e.close()),n&&n.addEventListener(`click`,e=>{e.stopPropagation(),c=(c-1+l.length)%l.length,f()}),r&&r.addEventListener(`click`,e=>{e.stopPropagation(),c=(c+1)%l.length,f()}),e.addEventListener(`keydown`,e=>{e.key===`ArrowLeft`?(c=(c-1+l.length)%l.length,f()):e.key===`ArrowRight`&&(c=(c+1)%l.length,f())}))}function m(){let e=document.getElementById(`letterSalutation`),t=document.getElementById(`letterBody`),r=document.getElementById(`letterSignoff`);e&&(e.textContent=n.letter.salutation),t&&(t.innerHTML=n.letter.paragraphs.map(e=>`<p class="letter-paragraph">${e}</p>`).join(``)),r&&(r.textContent=n.letter.closing)}function h(){let e=document.getElementById(`giftBoxSlot`),i=document.getElementById(`btnSendHug`);e&&e.addEventListener(`click`,()=>{t({particleCount:95,spread:85,origin:{y:.6},colors:[`#a855f7`,`#8b5cf6`,`#c084fc`,`#d8b4fe`,`#fef08a`]}),r.playPop(),g(`🎁 Sano gift chittai hajur ko haat ma pugcha haiii! Wait for it! 🥳💜`)}),i&&i.addEventListener(`click`,()=>{t({particleCount:130,spread:100,origin:{y:.7},colors:[`#a855f7`,`#7c3aed`,`#c084fc`,`#d8b4fe`,`#fef08a`,`#ffffff`]}),r.playChime(),_(),g(n.surprise.hugSuccessMessage)})}function g(e){let t=document.getElementById(`toastHugBanner`);t&&(t.textContent=e,t.classList.add(`show`),setTimeout(()=>{t.classList.remove(`show`)},5e3))}function _(){let e=document.body,t=[`🫂`,`💜`,`✨`,`🪻`,`🌷`,`👑`,`🎂`,`💌`,`🌷`];for(let n=0;n<28;n++){let n=document.createElement(`div`);n.className=`floating-particle`,n.textContent=t[Math.floor(Math.random()*t.length)],n.style.left=`${Math.random()*95}vw`,n.style.bottom=`0px`,n.style.fontSize=`${1.2+Math.random()*1.6}rem`,n.style.animation=`floatUpward ${6+Math.random()*4}s ease-out forwards`,n.style.zIndex=`9999`,e.appendChild(n),setTimeout(()=>n.remove(),1e4)}}function v(){let e=document.getElementById(`btnBackToTop`);e&&e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})})}function y(){let e=document.getElementById(`btnToggleMusic`);e&&e.addEventListener(`click`,()=>{r.toggleMusic()?(e.classList.add(`active`),e.setAttribute(`aria-label`,`Pause music`),e.textContent=`🎵`):(e.classList.remove(`active`),e.setAttribute(`aria-label`,`Play music`),e.textContent=`🔇`)})}function b(){let e=document.getElementById(`floatingBg`);if(!e)return;let t=[`💜`,`♡`,`✨`,`🪻`,`✧`,`🌷`,`🎂`,`🧸`,`👑`];for(let n=0;n<22;n++){let n=document.createElement(`span`);n.className=`floating-particle`,n.textContent=t[Math.floor(Math.random()*t.length)],n.style.left=`${Math.random()*98}vw`,n.style.animationDelay=`${Math.random()*12}s`,n.style.animationDuration=`${12+Math.random()*10}s`,n.style.fontSize=`${.9+Math.random()*1.1}rem`,e.appendChild(n)}}