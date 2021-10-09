document.addEventListener("DOMContentLoaded", function (e) {
  // variables
  var loadedImage = 0;
  var images = [];
  var exit = document.querySelector(".exit");
  var bannerContent = document.querySelector(".banner-content");

  var bannerConfig = {
    width: 300,
    height: 600
  }

  var cl = { 
    blue: ["#4c9eac", "#007482"],
    lightblue: ["#007482", "#4c9eac"],
  };

  var colors = {topleft:cl.blue[0], bottomright:cl.blue[1]};
  var grad_speed=2;
  var tl_grad = new TimelineMax({paused:true, repeat:-1, yoyo:true});
  tl_grad.to(colors, grad_speed/2, {colorProps:{topleft:cl.blue[0], bottomright:cl.blue[1]}, onUpdate:colorize, onUpdateParams:[".js-wave-blue"]});
  tl_grad.to(colors, grad_speed, {colorProps:{topleft:cl.lightblue[0], bottomright:cl.lightblue[1]}, onUpdate:colorize, onUpdateParams:[".js-wave-blue"]});
  
  function colorize(element) {
    TweenLite.set(element, {background: "linear-gradient(42deg," + colors.topleft + "0%, " + colors.topleft + "19%, " + colors.bottomright + "100%)"});
  }


  // list all animating elements
  var julie = document.querySelector(".julie");
  var ctaBtn = document.querySelector(".cta-btn");
  var yellowWave = document.querySelector(".js-wave-yellow");
  var blueWave = document.querySelector(".js-wave-blue");
  var h1 = document.querySelector(".js-headline-1");
  var h2 = document.querySelector(".js-headline-2");
  var h3 = document.querySelector(".js-headline-3");
  var f1 = document.querySelector(".js-frame-1");
  var f2 = document.querySelector(".js-endframe");
  var efh = document.querySelector(".js-endframe-headline");
  var efh2 = document.querySelector(".js-endframe-headline-2");
  var exit = document.querySelector(".js-exit");

  // timelines
  var bannerTL;

  function bannerAnimation() {
    tl_grad.play();


    bannerTL = new TimelineMax({ paused: false });

    bannerTL
    .to(julie, 0.5, { opacity: 1, ease: Expo.in }, "+=0")
    .to(yellowWave, 1, { y: -52, ease: Expo.out }, "+=0.5")
    .to(blueWave, 1, { y: -63, ease: Expo.out }, "-=1")
    .to(h1, 1, { y: 0, opacity: 1, ease: Expo.out }, "+=.5")
    .to(h2, 1, { y: 0, opacity: 1, ease: Expo.out }, "+=.2")
    .to([h1, h2], 1, { y: -10, opacity: 0, ease: Expo.out }, "+=2")
    .to(h3, 1, { y: 0, opacity: 1, ease: Expo.out }, "+=.2")
    .to(h3, 1, { y: -10, opacity: 0, ease: Expo.out }, "+=2")
    .to(f1, 1, { opacity: 0, ease: Expo.out }, "+=0")
    .to(f2, 1, { opacity: 1, ease: Expo.out }, "-=1")
    .to(efh, 0, { y: 0, opacity: 1, ease: Expo.out }, "-=1")
    .to(exit, 0, { y: -300,}, "-=1")
    .to(efh, .5, { opacity: 0, ease: Expo.out }, "+=.5")
    .to(efh2, 0, {y: 0}, "-=.5")
    .to(efh2, .5, { opacity: 1, ease: Expo.out,
      onComplete: function(){
      setTimeout(startScrolling,2000);
      tl_grad.pause();
    } }, "+=.5");

    function ctaOnHover() {
      ctaBtn.classList.toggle("hovered");
    }
  }

  /////////////////////////////////scroll code////////////////////////////////////////////

  function startScrolling(){scrollInterval=window.setInterval(function(){var a=document.getElementById("main_content");divScrollHeight=a.scrollHeight,currentScrollHeight+=incrementedScrollHeight,divScrollHeight>currentScrollHeight?a.scrollTop=currentScrollHeight:clearInterval(scrollInterval)},80)}function stopScrolling(){document.getElementById("main_content"),clearInterval(scrollInterval)}var innerwrap=document.getElementById("main_content");divScrollHeight=0,incrementedScrollHeight=1,currentScrollHeight=0;var scrollInterval,ssb={aConts:[],mouseY:0,N:0,asd:0,sc:0,sp:0,to:0,scrollbar:function(a,b,c,d,e,f,g,h){window.autoscroll=b;window.timeautoscroll=c;var i=document.getElementById(a),j=document.getElementById(a).parentNode.id;if(con=document.getElementById(j),i.style.height=e+"px",i.style.overflow="auto",document.getElementById(j).style.width=d+"px",document.getElementById(j).style.height=e+"px",i.addEventListener("wheel",function(){stopScrolling()}),i.addEventListener("touchstart",function(){stopScrolling()}),!ssb.init())return!1;var k=i.cloneNode(!1);return 1==b&&(scrollInterval=setTimeout(startScrolling,c)),k.style.overflow="",i.parentNode.appendChild(k),k.appendChild(i),i.style.position="",i.style.left=i.style.top="12px",ssb.aConts[ssb.N++]=i,i.sg=!1,i.st=this.create_div("ssb_st",i,k),i.sb=this.create_div("ssb_sb",i,k),i.su=this.create_div("ssb_up",i,k),i.sd=this.create_div("ssb_down",i,k),i.sb.onmousedown=function(a){return this.cont.sg||(a||(a=window.event),ssb.asd=this.cont,this.cont.yZ=a.screenY,this.cont.sZ=i.scrollTop,this.cont.sg=!0,this.className="ssb_sb ssb_sb_down"),!1},i.st.onmousedown=function(a){stopScrolling(),a||(a=window.event),ssb.asd=this.cont,ssb.mouseY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;for(var b=this.cont,c=0;null!=b;b=b.offsetParent)c+=b.offsetTop;this.cont.scrollTop=(ssb.mouseY-c-this.cont.ratio*this.cont.offsetHeight/2-this.cont.sw)/this.cont.ratio,this.cont.sb.onmousedown(a)},i.su.onmousedown=i.su.ondblclick=function(){return ssb.mousedown(this,-1),!1},i.sd.onmousedown=i.sd.ondblclick=function(){return ssb.mousedown(this,1),!1},i.su.onmouseout=i.su.onmouseup=ssb.clear,i.sd.onmouseout=i.sd.onmouseup=ssb.clear,i.sb.onmouseover=function(){return this.cont.sg||(this.className="ssb_sb ssb_sb_over"),!1},i.sb.onmouseout=function(){return this.cont.sg||(this.className="ssb_sb"),!1},i.ssb_onscroll=function(){this.ratio=(this.offsetHeight-g*this.sw)/this.scrollHeight,this.sb.style.top=Math.floor(this.sw+this.scrollTop*this.ratio-h)+"px"},i.sw=8,i.ssb_onscroll(),ssb.refresh(),ssb.parametros(d,f,i),i.onscroll=i.ssb_onscroll,i},init:function(){function a(a,b,c){return window.addEventListener?(a.addEventListener(b,c,!1),ssb.w3c=!0,!0):!!window.attachEvent&&a.attachEvent("on"+b,c)}return!(window.oper||!window.addEventListener&&!window.attachEvent)&&(a(window.document,"mousemove",ssb.onmousemove),a(window.document,"mouseup",ssb.onmouseup),a(window,"resize",ssb.refresh),!0)},parametros:function(a,b,c){b||(document.getElementsByClassName("ssb_up")[0].style.display="none",document.getElementsByClassName("ssb_down")[0].style.display="none"), document.getElementsByClassName("scrollbarcon")[0].setAttribute("id", "scrollbarcon"),document.getElementsByClassName("scrollbarcon")[0].style.top = "0",document.getElementsByClassName("scrollbarcon")[0].style.position = "relative",c.style.width=a+20+"px",document.getElementsByClassName("ssb_sb")[0].onclick=function(){stopScrolling()},document.getElementsByClassName("ssb_sb")[0].addEventListener("mousedown",function(){stopScrolling()})},create_div:function(a,b,c){var d=document.createElement("div");return d.cont=b,d.className=a,c.appendChild(d),d},clear:function(){return clearTimeout(ssb.to),ssb.sc=0,!1},refresh:function(){for(var a=0,b=ssb.N;b>a;a++){var c=ssb.aConts[a];c.ssb_onscroll(),c.sb.style.width=c.st.style.width=c.su.style.width=c.su.style.height=c.sd.style.width=c.sd.style.height=c.sw+"px",c.sb.style.height=Math.ceil(Math.max(.5*c.sw,c.ratio*c.offsetHeight)+1)+"px"}},arrow_scroll:function(){0!=ssb.sc&&(ssb.asd.scrollTop+=6*ssb.sc/ssb.asd.ratio,ssb.to=setTimeout(ssb.arrow_scroll,ssb.sp),ssb.sp=32)},mousedown:function(a,b){0==ssb.sc&&(a.cont.sb.className="ssb_sb ssb_sb_down",ssb.asd=a.cont,ssb.sc=b,ssb.sp=400,ssb.arrow_scroll())},onmousemove:function(a){a||(a=window.event),ssb.mouseY=a.screenY,ssb.asd.sg&&(ssb.asd.scrollTop=ssb.asd.sZ+(ssb.mouseY-ssb.asd.yZ)/ssb.asd.ratio)},onmouseup:function(a){a||(a=window.event);var b=a.target?a.target:a.srcElement;ssb.asd&&document.releaseCapture&&ssb.asd.releaseCapture(),ssb.asd&&(ssb.asd.sb.className=b.className.indexOf("scrollbar")>0?"ssb_sb ssb_sb_over":"ssb_sb"),document.onselectstart="",ssb.clear(),ssb.asd.sg=!1}};
  window.onload = function() {

  ssb.scrollbar("main_content", false, 2000, 300, 223,false,2,9);
  setTimeout(function(){ssb.refresh();},200);

  };

  function preload() {
    images = [
      "./images/julie.png",
      "./images/wave-yellow.png",
      "./images/F1-H.png",
      "./images/F2-H.png",
      "./images/F3-H.png",
      "./images/F4-H.png",
      "./images/F5-H.png",
      "./images/endframe-bg.jpg",
      "./images/rev-logo.jpg",
      "./images/bms-logo.png"
    ];

    for (var i = 0; i < images.length; i++) {
      var imageObj = new Image();
      imageObj.src = images[i];
      imageObj.addEventListener("load", iLoad, false);
    }

  }

  function iLoad() {
    loadedImage++;
    if (images.length == loadedImage) {
      init();
    }
  }

  function init() {

    bannerContent.classList.add("banner-content--active");
    bannerAnimation();

  }

  preload();
});