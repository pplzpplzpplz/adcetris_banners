

document.addEventListener("DOMContentLoaded", function () {

// VARIABLES
const bottomDiv = document.querySelector('.bottom');

// DEBUG CONTROLS
const pauseButton = document.querySelector('.pause');
const restartButton = document.querySelector('.restart');
const playButton = document.querySelector('.play');
pauseButton.addEventListener('click', () => {tl.pause();});
restartButton.addEventListener('click', () => {tl.restart();});
playButton.addEventListener('click', () => {tl.play();});



// ******* AUTO-SCROLL ********
setTimeout(function autoScroll() {
  var myVar = setInterval(scrollByFunc, 150);

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
    myVar = setInterval(scrollByFunc, 300);
    console.log('mouse is out of bottom div')
  });

}, 2000);


// ***** GSAP *****

var tl = gsap.timeline();

// man fade in 
  tl.to(".man", {
    duration: 1.25,
    opacity: 1,
    ease: "power3.inOut"
  });

// hl1 drop down + fade in
  tl.to(".hl1", {
    duration: 1.5,
    opacity: 1,
    ease: "power2.inOut",
    y: 194
  });

// hl2 fade in
  tl.to(".hl2", {
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
  }, "+=3");

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
  }, "+=3");

  // man enlarge
  tl.to(".man", {
    duration: 1.25,
    scale: 1.25,
    paddingTop: 105,
    // transformOrigin: "top center",
    ease: "power3.inOut"
  });

  // cta fade in
  tl.to(".cta", {
    duration: 1.5,
    opacity: 1,
    ease: "power3.inOut"
  }, "-=1.25");

});