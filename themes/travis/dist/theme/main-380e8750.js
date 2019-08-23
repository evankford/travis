/*!
 * 
 * travis
 * 
 * @author evankford (evankerrickford@gmail.com) <http://evankerrickford.com>
 * @version 0.1.0
 * @link UNLICENSED
 * @license UNLICENSED
 * 
 * Copyright (c) 2019 evankford (evankerrickford@gmail.com) <http://evankerrickford.com>
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackiotravisthemeJsonp=window.wpackiotravisthemeJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var i=n(5);!function(){var e,t,n,a;if((e=document.getElementById("site-navigation"))&&void 0!==(t=e.querySelector("button")))if(void 0!==(n=e.querySelector("ul"))){n.setAttribute("aria-expanded","false"),n.classList.contains("nav-menu")||n.classList.add("nav-menu"),t.onclick=function(){e.classList.contains("toggled")?(e.classList.remove("toggled"),t.setAttribute("aria-expanded","false"),n.setAttribute("aria-expanded","false")):(e.classList.add("toggled"),t.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"))},a=n.querySelectorAll("a");var o=!0,r=!1,s=void 0;try{for(var d,l=a[Symbol.iterator]();!(o=(d=l.next()).done);o=!0){var c=d.value;c.addEventListener("focus",u,!0),c.addEventListener("blur",u,!0)}}catch(e){r=!0,s=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw s}}!function(e){var t,n=this,i=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window){t=function(e){var t,i=n.parentNode;if(i.classList.contains("focus"))i.classList.remove("focus");else{for(e.preventDefault(),t=0;t<i.parentNode.children.length;++t)i!==i.parentNode.children[t]&&i.parentNode.children[t].classList.remove("focus");i.classList.add("focus")}};var a=!0,o=!1,r=void 0;try{for(var s,d=i[Symbol.iterator]();!(a=(s=d.next()).done);a=!0){s.value.addEventListener("touchstart",t,!1)}}catch(e){o=!0,r=e}finally{try{a||null==d.return||d.return()}finally{if(o)throw r}}}}(e)}else t.style.display="none";function u(){for(var e=this;!e.classList.contains("nav-menu");)"LI"===e.tagName&&(e.classList.contains("focus")?e.classList.remove("focus"):e.classList.add("focus")),Object(i.a)("self"),e=e.parentElement}}();n(8),n(9),n(10);var a=n(0);n(11);window.THREE=a,n(13);var o=a,r=n(3),s=new o.Vector2,d=new o.Vector2,l=new o.Vector2,c=new o.Vector2(window.innerWidth/2,window.innerHeight/2),u=new o.Scene,v=new o.PerspectiveCamera(40,window.innerWidth/window.innerHeight,.1,30),w=new o.WebGLRenderer,m=new r.a(w);w.setSize(window.innerWidth,window.innerHeight);var f=document.getElementById("topGl");f.appendChild(w.domElement);var p=new o.TextureLoader;v.position.set(0,0,25);var y=new o.DirectionalLight(16777215,1);y.position.set(0,0,30),u.add(y),m.addPass(new r.b(u,v));var h=new o.Vector2,g=new o.Vector2;h.x=2.5,h.y=6,g.x=.2,g.y=.4;new o.Clock;var x=new o.MeshBasicMaterial({map:p.load(f.getAttribute("data-imageBg"))}),L=new o.PlaneGeometry(40,20),b=new o.Mesh(L,x);b.position.set(0,2,0),u.add(b);var E=new o.MeshLambertMaterial({map:p.load(f.getAttribute("data-travisImg")),alphaMap:p.load(f.getAttribute("data-travisAlpha"))});E.transparent=!0;var A=new o.PlaneGeometry(1.291291292,2),B=new o.Mesh(A,E);B.position.set(0,0,21);var M=!1;var S=new o.MeshLambertMaterial({map:p.load(f.getAttribute("data-imageOver")),refractionRatio:.2});S.blending=o.AdditiveBlending;var V=new o.PlaneGeometry(50,30),I=new o.Mesh(V,S);I.position.set(1,-1,2),u.add(I),function e(){0==M&&(M=!0,u.add(B)),requestAnimationFrame(e),d.x=125e-6*(1-s.x),d.y=8e-5*(1-s.y),l.x=-1*d.x,l.y=-1*d.y,B.position.x+=.05*(l.x-B.position.x),B.position.y+=.05*(l.y-B.position.y),v.rotation.x+=.05*(d.y-v.rotation.x),v.rotation.y+=.05*(d.x-v.rotation.y),w.render(u,v)}(),window.addEventListener("resize",function(e){var t=window.innerWidth,n=window.innerHeight;c.set(t/2,n/2),v.aspect=t/n,v.updateProjectionMatrix(),w.setSize(t,n)},!1),f.addEventListener("mousemove",function(e){s.x=e.clientX-c.x,s.y=e.clientY-c.x}),window.addEventListener("load",function(){!function e(){if("function"==typeof Blotter){var t=function e(){requestAnimationFrame(e),l.x=.01*(4*s.x-l.x),l.y=.01*(4*s.y-l.y),r.style.transform="translate3d("+l.x+"px, "+l.y+"px, 0)"},n=new Blotter.Text("Broken Record",{family:"'Levi', 'Levi Marker', levi",size:90,weight:700,fill:"#202020",paddingLeft:40,paddingRight:40,paddingTop:40,paddingBottom:40}),i=new Blotter.LiquidDistortMaterial;i.uniforms.uVolatility.value=.008,i.uniforms.uSpeed.value=0,i.uniforms.uVolatility.value=.12;var a=new Blotter(i,{texts:n}),r=document.getElementById("plain-text"),d=a.forText(n);r.classList.add("blotter-loaded"),d.appendTo(r);var l=o.Vector2;l.x=l.y=0,t(),f.addEventListener("mousemove",t)}else setTimeout(function(){e()},500)}()});var q=15,T=.15;window.addEventListener("deviceorientation",function(e){var t=e.do.gamma*T,n=e.do.beta*T;s.x=clamp(n,-q,q)/q,s.y=-clamp(t,-q,q)/q},!0)},6:function(e,t,n){n(7),e.exports=n(14)},8:function(e,t){/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1)},9:function(e,t,n){}},[[6,1,2]]]);
//# sourceMappingURL=main-380e8750.js.map