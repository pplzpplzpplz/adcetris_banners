document.addEventListener("DOMContentLoaded", function () {

  // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
  window.addEventListener("load", function (e) {

    // VARIABLES
    // const ctaButton = document.querySelector('.cta');
    const topDiv = document.querySelector('.top');
    const bottomDiv = document.querySelector('.bottom');

    // DEBUG CONTROLS
    const pauseButton = document.querySelector('.pause');
    const restartButton = document.querySelector('.restart');
    const playButton = document.querySelector('.play');
    pauseButton.addEventListener('click', () => { tl.pause(); });
    restartButton.addEventListener('click', () => { tl.restart(); });
    playButton.addEventListener('click', () => { tl.play(); });

    // LINK 
    topDiv.addEventListener('mouseover', () => {
      topDiv.style.cursor = 'pointer';
    });
    topDiv.addEventListener('click', () => {
      window.open('https://www.adcetrispro.com/previously-untreated-stage-III-IV-classical-hodgkin-lymphoma/', '_blank');
    });

    // ******* AUTO-SCROLL ********
    setTimeout(function autoScroll() {
      var myVar = setInterval(scrollByFunc, 75);

      // slowly scroll ISI
      function scrollByFunc() {
        bottomDiv.scrollBy({
          top: 1,
          behavior: 'smooth'
        });
      }

      // if mouse is over ISI, stop scrolling
      bottomDiv.addEventListener('mouseover', function () {
        clearInterval(myVar);
        console.log('mouse is over bottom div')
      });

      // if mouse is out of ISI, start scrolling again
      bottomDiv.addEventListener('mouseout', function () {
        myVar = setInterval(scrollByFunc, 75);
        console.log('mouse is out of bottom div')
      });

    }, 2000);


    // ***** GSAP *****
    
    gsap.config({
      force3D: false
    });

    var tl = gsap.timeline({
      repeat: -1
    });
    // tl.timeScale(2.5);

    // man fade in 
    tl.to(".man", {
      duration: 1.25,
      opacity: 1,
      ease: "power3.inOut"
    });

    // dial rotate -- not in timeline
    gsap.to(".dial", {
      duration: 8,
      rotate: 360,
      ease: "none",
      repeat: -1, // -1 means infinite
      transformOrigin: "center center",
    }, "-= 1.25")

    // hl1 drop down + fade in
    tl.to(".hl1", {
      duration: 1.5,
      opacity: 1,
      ease: "power2.inOut",
      y: 30
    });

    // hl2 fade in
    tl.to([".hl2", ".hl2b"], {
      duration: 1.75,
      opacity: 1,
      ease: "power3.inOut"
    }, "-=1");

    // hl 1 + 2 fade OUT
    tl.to(".hl12", {
      duration: 1.75,
      opacity: 0,
      ease: "power3.inOut"
    }, "+=2");

    // hl3 fade in
    tl.to(".hl3", {
      duration: 2,
      opacity: 1,
      ease: "power3.inOut"
    });

    // hl3 fade out
    tl.to(".hl3", {
      duration: 1.75,
      opacity: 0,
      ease: "power3.inOut"
    }, "+=5");

    // hl4 fade in
    tl.to(".hl4", {
      duration: 2,
      opacity: 1,
      ease: "power3.inOut"
    });

    // hl4 fade out
    tl.to(".hl4", {
      duration: 2,
      opacity: 0,
      ease: "power3.inOut"
    }, "+=5");

    // man enlarge
    tl.to(".manImg", {
      duration: 1.25,
      scale: 1.25,
      // paddingTop: 105,
      transformOrigin: "top center",
      ease: "power3.inOut"
    });

    // dial enlarge
    tl.to(".dial", {
      duration: 1.25,
      scale: 1.25,
      top: 92,
      // paddingTop: 105,
      // transformOrigin: "center center",
      ease: "power3.inOut"
    }, "-=1.25");

    // cta fade in
    tl.to(".cta", {
      duration: 1.5,
      opacity: 1,
      ease: "power3.inOut"
    }, "-=1.25");

    // cta, man dial fade out
    tl.to([".cta", ".manImg", ".dial"], {
      duration: .5,
      opacity: 0,
      ease: "power3.inOut"
    }, "+=3");

  }, false);

});