
//PRECARGA DE IMAGENES
this.addEventListener("DOMContentLoaded", preloadImages, true);

var loadedImages = 0;
//CARGAR ACA TODAS LAS IMAGENES QUE USA EL BANNER
var imageArray = new Array('dl_loading.gif','dl_replyicon.png', "img1.png",  "cta.png", "pill.png", "text1.png",  "text2.png", "text3.png",  "text4.png", "background.jpg");

function preloadImages(e) {
    for (var i = 0; i < imageArray.length; i++) {
        var tempImage = new Image();

        tempImage.addEventListener("load", trackProgress, true);
        tempImage.src = imageArray[i];
    }
}

function trackProgress() {
    loadedImages++;

    if (loadedImages == imageArray.length) {
        imagesLoaded();
    }
}


/* Detectar si es IOs */
var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (is_Mac == true || iOS == true) {      
        scrollValue = 297; } else { scrollValue = 300; }

/* Detectar si es IE */
if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){
  setTimeout(function(){ssb.refresh()},10100);
}

/* Detectar si es Android */
if (navigator.userAgent.match(/Android/)) {
 
}


function imagesLoaded() {
    
      document.getElementById('loader-container').style.display = 'none';
         document.getElementById('banner_content').style.display = 'block';

    initAnimations();

}

// VARIABLES GLOBALES
_tt = new TimelineMax();

function initAnimations(){

    initHandlers()
	_tt

.set(['#text1','#text2', '#text3', '#text4'], {opacity:0, y:-10})
.set(['#img1','#cta'], {opacity:0, x:-300})
.set(['#pill'], {opacity:0})

.staggerTo(['#text1', '#text2'],1,{y:0, opacity:1, ease:Power1.easeInOut},0.3, 0)
.staggerTo(['#text3', '#text4'],1,{y:0, opacity:1, ease:Power1.easeInOut},0.3, 2.5)

.to(['#img1'],1,{x:0, opacity:1, ease:Power1.easeInOut}, 2.5)
.to("#areaLogo", 0, {zIndex:151, ease:Power1.easeInOut}, 2.5)
.to(['#pill'],1,{opacity:1, ease:Power1.easeInOut},3.5)
.to(['#cta'],1,{x:0, opacity:1, ease:Power1.easeInOut},4)
.to("#areaCta", 0, {zIndex:152, ease:Power1.easeInOut}, 4)

.to('#img1',1,{onComplete:function(){
        setTimeout(startScrolling,1000);
    }},4.5)/**/
;
}

function initHandlers(){
    
    //Estos botones tienen que estar en el html y tambien los clicktags
    var pi = document.getElementById("pi");
/*    var medwatch = document.getElementById("medwatch");
*/  var mg = document.getElementById("mg");
    var clickTag1 = document.getElementById("clickTag");
    var clickTag4 = document.getElementById("areaLogo");
    var clickTag5 = document.getElementById("areaCta");

    clickTag5.addEventListener('mouseup', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('areaCta', window.clickTag5 );

    })
    
    clickTag4.addEventListener('mouseup', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('areaLogo', window.clickTag4 );

    })

    pi.addEventListener('mousedown', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('PrescribingInformation', window.clickTag2 );

    })

 /*   medwatch.addEventListener('mousedown', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('Medwatch', window.clickTagMedwatch );

    })
*/
    mg.addEventListener('mousedown', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('MedicationGuide', window.clickTag3 );

    })

    clickTag1.addEventListener('mouseup', function(event){
       
     if (window.event) {  window.event.returnValue = false; }
     event.preventDefault();
     Enabler.exit('clickTag', window.clickTag1 );

    })

    //Si se comento el html del replay comentar tambien estas lineas
var replay = document.getElementById("replay");
    replay.addEventListener('click', function(){

         _tt.play(0);
        stopScrolling();
        currentScrollHeight=0;
        document.getElementById('main_content').scrollTop=0;
        if(window.autoscroll){
            setTimeout(function(){startScrolling()},timeautoscroll);
        }
    })

}


/////////////////////////////////scroll code////////////////////////////////////////////

function startScrolling(){scrollInterval=window.setInterval(function(){var a=document.getElementById("main_content");divScrollHeight=a.scrollHeight,currentScrollHeight+=incrementedScrollHeight,divScrollHeight>currentScrollHeight?a.scrollTop=currentScrollHeight:clearInterval(scrollInterval)},80)}function stopScrolling(){document.getElementById("main_content"),clearInterval(scrollInterval)}var innerwrap=document.getElementById("main_content");divScrollHeight=0,incrementedScrollHeight=1,currentScrollHeight=0;var scrollInterval,ssb={aConts:[],mouseY:0,N:0,asd:0,sc:0,sp:0,to:0,scrollbar:function(a,b,c,d,e,f,g,h){window.autoscroll=b;window.timeautoscroll=c;var i=document.getElementById(a),j=document.getElementById(a).parentNode.id;if(con=document.getElementById(j),i.style.height=e+"px",i.style.overflow="auto",document.getElementById(j).style.width=d+"px",document.getElementById(j).style.height=e+"px",i.addEventListener("wheel",function(){stopScrolling()}),i.addEventListener("touchstart",function(){stopScrolling()}),!ssb.init())return!1;var k=i.cloneNode(!1);return 1==b&&(scrollInterval=setTimeout(startScrolling,c)),k.style.overflow="",i.parentNode.appendChild(k),k.appendChild(i),i.style.position="",i.style.left=i.style.top="12px",ssb.aConts[ssb.N++]=i,i.sg=!1,i.st=this.create_div("ssb_st",i,k),i.sb=this.create_div("ssb_sb",i,k),i.su=this.create_div("ssb_up",i,k),i.sd=this.create_div("ssb_down",i,k),i.sb.onmousedown=function(a){return this.cont.sg||(a||(a=window.event),ssb.asd=this.cont,this.cont.yZ=a.screenY,this.cont.sZ=i.scrollTop,this.cont.sg=!0,this.className="ssb_sb ssb_sb_down"),!1},i.st.onmousedown=function(a){stopScrolling(),a||(a=window.event),ssb.asd=this.cont,ssb.mouseY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop;for(var b=this.cont,c=0;null!=b;b=b.offsetParent)c+=b.offsetTop;this.cont.scrollTop=(ssb.mouseY-c-this.cont.ratio*this.cont.offsetHeight/2-this.cont.sw)/this.cont.ratio,this.cont.sb.onmousedown(a)},i.su.onmousedown=i.su.ondblclick=function(){return ssb.mousedown(this,-1),!1},i.sd.onmousedown=i.sd.ondblclick=function(){return ssb.mousedown(this,1),!1},i.su.onmouseout=i.su.onmouseup=ssb.clear,i.sd.onmouseout=i.sd.onmouseup=ssb.clear,i.sb.onmouseover=function(){return this.cont.sg||(this.className="ssb_sb ssb_sb_over"),!1},i.sb.onmouseout=function(){return this.cont.sg||(this.className="ssb_sb"),!1},i.ssb_onscroll=function(){this.ratio=(this.offsetHeight-g*this.sw)/this.scrollHeight,this.sb.style.top=Math.floor(this.sw+this.scrollTop*this.ratio-h)+"px"},i.sw=8,i.ssb_onscroll(),ssb.refresh(),ssb.parametros(d,f,i),i.onscroll=i.ssb_onscroll,i},init:function(){function a(a,b,c){return window.addEventListener?(a.addEventListener(b,c,!1),ssb.w3c=!0,!0):!!window.attachEvent&&a.attachEvent("on"+b,c)}return!(window.oper||!window.addEventListener&&!window.attachEvent)&&(a(window.document,"mousemove",ssb.onmousemove),a(window.document,"mouseup",ssb.onmouseup),a(window,"resize",ssb.refresh),!0)},parametros:function(a,b,c){b||(document.getElementsByClassName("ssb_up")[0].style.display="none",document.getElementsByClassName("ssb_down")[0].style.display="none"), document.getElementsByClassName("scrollbarcon")[0].setAttribute("id", "scrollbarcon"),document.getElementsByClassName("scrollbarcon")[0].style.top = "0",document.getElementsByClassName("scrollbarcon")[0].style.position = "relative",c.style.width=a+20+"px",document.getElementsByClassName("ssb_sb")[0].onclick=function(){stopScrolling()},document.getElementsByClassName("ssb_sb")[0].addEventListener("mousedown",function(){stopScrolling()})},create_div:function(a,b,c){var d=document.createElement("div");return d.cont=b,d.className=a,c.appendChild(d),d},clear:function(){return clearTimeout(ssb.to),ssb.sc=0,!1},refresh:function(){for(var a=0,b=ssb.N;b>a;a++){var c=ssb.aConts[a];c.ssb_onscroll(),c.sb.style.width=c.st.style.width=c.su.style.width=c.su.style.height=c.sd.style.width=c.sd.style.height=c.sw+"px",c.sb.style.height=Math.ceil(Math.max(.5*c.sw,c.ratio*c.offsetHeight)+1)+"px"}},arrow_scroll:function(){0!=ssb.sc&&(ssb.asd.scrollTop+=6*ssb.sc/ssb.asd.ratio,ssb.to=setTimeout(ssb.arrow_scroll,ssb.sp),ssb.sp=32)},mousedown:function(a,b){0==ssb.sc&&(a.cont.sb.className="ssb_sb ssb_sb_down",ssb.asd=a.cont,ssb.sc=b,ssb.sp=400,ssb.arrow_scroll())},onmousemove:function(a){a||(a=window.event),ssb.mouseY=a.screenY,ssb.asd.sg&&(ssb.asd.scrollTop=ssb.asd.sZ+(ssb.mouseY-ssb.asd.yZ)/ssb.asd.ratio)},onmouseup:function(a){a||(a=window.event);var b=a.target?a.target:a.srcElement;ssb.asd&&document.releaseCapture&&ssb.asd.releaseCapture(),ssb.asd&&(ssb.asd.sb.className=b.className.indexOf("scrollbar")>0?"ssb_sb ssb_sb_over":"ssb_sb"),document.onselectstart="",ssb.clear(),ssb.asd.sg=!1}};
window.onload = function() {
  
 ssb.scrollbar("main_content", false, 2000, 300, 70,false,2,9);
 setTimeout(function(){ssb.refresh();},200);

//parametro 1 - id de contenedor
//parametro 2 - true o false para Scroll
//parametro 3 - tiempo en milisegundos al que deberia empezar a scrollear
//parametro 4 - ancho scroll area en px
//parametro 5 - alto scroll area en px
//parametro 6 - mostrar botones arriba/abajo (true/false)
//parametro 7 - offsetBottom (valores mas bajos y/o negativos hacen que excursione mas abajo)
//parametro 8 - offsetTop (valores mas altos  hacen que excursione mas ariba)

//ancho y alto de los botones editar en css las clases ssb_up y ssb_down con !important
//para editar la linea guia editar en el css la clase ssb_st con !important

};