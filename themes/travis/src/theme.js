

import './js/navigation';
import './js/skip-link-focus-fix';

import './sass/style.scss';

import 'lazysizes';
  
import  THREE from './js/vendor/three-bundle.js';
import {  EffectComposer, EffectPass, RenderPass, GlitchEffect } from "postprocessing";





const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const travTarget = new THREE.Vector2();
const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

var headerScene = new THREE.Scene();
var headerCamera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 30);
var headerRenderer = new THREE.WebGLRenderer();
var headerComposer = new EffectComposer(headerRenderer); 
headerRenderer.setSize(window.innerWidth, window.innerHeight);

const headerTarg = document.getElementById('topGl');
headerTarg.appendChild(headerRenderer.domElement);

let texturer = new THREE.TextureLoader();


headerCamera.position.set(0, 0, 25);


let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 30);
headerScene.add(directionalLight);

headerComposer.addPass(new RenderPass(headerScene, headerCamera));

let glitchDelay = new THREE.Vector2;
let glitchDuration = new THREE.Vector2;
glitchDelay.x = 2.5;
glitchDelay.y =  6;
glitchDuration.x = 0.2;
glitchDuration.y =  0.4;  
// const effectPass = new EffectPass(headerCamera, new GlitchEffect({
//   delay: glitchDelay,
//   duration: glitchDuration
// }));
// effectPass.renderToScreen = true;
// headerComposer.addPass(effectPass);
  const clock = new THREE.Clock()

///BG
  var bgImg = new THREE.MeshBasicMaterial({
    map: texturer.load(headerTarg.getAttribute('data-imageBg'))
  })
  



  var bgShape = new THREE.PlaneGeometry(40,20);
  var bgObj = new THREE.Mesh(bgShape, bgImg);
  bgObj.position.set(0,2,0);
  headerScene.add(bgObj);
  
    
  //Travis
  var travisImg = new THREE.MeshLambertMaterial({
    map: texturer.load(headerTarg.getAttribute('data-travisImg')),
    alphaMap: texturer.load(headerTarg.getAttribute('data-travisAlpha'))
  });
  travisImg.transparent = true;

  var travAspect = .645645646;
  var travSize = 2    
  var travisShape = new THREE.PlaneGeometry( travAspect*travSize,travSize);
  var travisObj = new THREE.Mesh(travisShape,  travisImg);
  travisObj.position.set(0, 0, 21);
  
  let isTravis = false;
  function travisIn() {
    isTravis = true;
    headerScene.add(travisObj);
  }
  //Over
  
  var overImg = new THREE.MeshLambertMaterial({
    map: texturer.load(headerTarg.getAttribute('data-imageOver')),
    refractionRatio: 0.2  
  });
  overImg.blending = THREE.AdditiveBlending;
  var overShape = new THREE.PlaneGeometry(50, 30);
  var overObj = new THREE.Mesh(overShape, overImg);
  overObj.position.set(1,-1, 2  );
  headerScene.add(overObj);

  

function animate() {
  if (isTravis == false) {
    travisIn();
  }
  requestAnimationFrame(animate);
  target.x = (1 - mouse.x) * 0.000125;
  target.y = (1 - mouse.y) * 0.00008;
  travTarget.x = target.x*-1;
  travTarget.y = target.y*-1;
  travisObj.position.x += 0.05 * (travTarget.x - travisObj.position.x)
  travisObj.position.y += 0.05 * (travTarget.y - travisObj.position.y)
  headerCamera.rotation.x += 0.05 * (target.y - headerCamera.rotation.x);
  headerCamera.rotation.y += 0.05 * (target.x - headerCamera.rotation.y);
  headerRenderer.render(headerScene, headerCamera);
}
animate();

function headerMouse(event ) {
  mouse.x = ( event.clientX - windowHalf.x );
  mouse.y = ( event.clientY - windowHalf.x );
}

function onResize(event) {

  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set(width / 2, height / 2);

  headerCamera.aspect = width / height;
  headerCamera.updateProjectionMatrix();
  headerRenderer.setSize(width, height);

}
window.addEventListener('resize', onResize, false);
headerTarg.addEventListener('mousemove', headerMouse);


function initBlotters() {
  if (typeof Blotter == 'function') {
    var text = new Blotter.Text("Broken Record", {
      family: "'Levi', 'Levi Marker', levi",
      size: 90,
      weight: 700,
      fill: "#202020",
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40,
      paddingBottom: 40,
    });



    var blotterMaterial = new Blotter.LiquidDistortMaterial();
    // Set the default blotterMaterial uniform values.
      // blotterMaterial.uniforms.uSineDistortSpread.value = .18;
      // blotterMaterial.uniforms.uSpeed.value = .038;
      blotterMaterial.uniforms.uVolatility.value = .008;
      blotterMaterial.uniforms.uSpeed.value = 0;
      blotterMaterial.uniforms.uVolatility.value = .12;
      // blotterMaterial.uniforms.uApplyBlur.value = 1;
      // blotterMaterial.uniforms.uAnimateNoise.value = 1;
      // blotterMaterial.uniforms.uRotation.value = .018;
      // blotterMaterial.uniforms.uSineDistortAmplitude.value = 0.08;
      // blotterMaterial.uniforms.uNoiseDistortVolatility.value = 0.11;
    // blotterMaterial.uniforms.uAnimateNoise.value = 1.0;
    // blotterMaterial.uniforms.uVolatility.value = 0.05;
    // blotterMaterial.uniforms.uSeed.value = 0.4;


    var blotter = new Blotter(blotterMaterial, {
      texts: text
    });

    var elem = document.getElementById("plain-text");
    var scope = blotter.forText(text);
    elem.classList.add('blotter-loaded');
    scope.appendTo(elem);
    // Blotter.start();
    
    //renderer
    var blotEnder = THREE.Vector2;
    blotEnder.x = blotEnder.y = 0;
    
    function animateBlotter () {
      requestAnimationFrame(animateBlotter);
      
      blotEnder.x = 0.01 * (mouse.x*4 - blotEnder.x)
      blotEnder.y = 0.01 * (mouse.y*4 - blotEnder.y)
      elem.style.transform = 'translate3d(' +blotEnder.x + 'px, ' +  blotEnder.y + 'px, 0)';
      // console.log(blotterTarg.x);

    }
    animateBlotter();
    headerTarg.addEventListener('mousemove', animateBlotter)
  } else {
    setTimeout(() => {
      initBlotters();
    }, 500);
  }
}
window.addEventListener('load', () => {
  // console.log(Blotter);
  initBlotters();
})







let maxTilt = 15;
const rotationCoef = 0.15;

  // this.calibrated = false;
  

  // setInterval(() => {
  //   this.calibrated = false;
  // },20000);

  // window.addEventListener('deviceorientation', (e) => {
  //   if(!this.calibrated) {
  //     this.startBeta = e.beta.toFixed(2);
  //     this.startGamma = e.gamma.toFixed(2);
  //     this.calibrated = true;
  //   }
  //   // console.log(e.beta.toFixed(1),e.gamma.toFixed(1));
  //   this.mouseTargetY = clamp(this.startBeta - e.beta,-this.maxTilt, this.maxTilt)/this.maxTilt;
  //   this.mouseTargetX = -clamp(this.startGamma - e.gamma,-this.maxTilt, this.maxTilt)/this.maxTilt;
  //   console.log(this.mouseTargetX.toFixed(1),this.mouseTargetY.toFixed(1));
  // }, true);

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  
        let y = event.do.gamma *  rotationCoef;
        let x = event.do.beta * rotationCoef;
  
        mouse.x = clamp(x, -maxTilt, maxTilt) / maxTilt;
        mouse.y = -clamp(y, -maxTilt, maxTilt) / maxTilt;
        
  
}
