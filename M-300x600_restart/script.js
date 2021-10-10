

document.addEventListener("DOMContentLoaded", function () {

// variables
const bottomDiv = document.querySelector('.bottom');
var scrollIncrement = 0;

// ******* AUTO-SCROLL ********
setTimeout(function autoScroll() {
  var myVar = setInterval(scrollTo, 200);

  // slowly scroll ISI
  function scrollTo() {
    scrollIncrement= scrollIncrement + 2;
    bottomDiv.scrollTo({
      top: scrollIncrement,
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
    myVar = setInterval(scrollTo, 200);
    console.log('mouse is out of bottom div')
  });

}, 2000);







console.log(bottomDiv.scrollHeight); // 1206

// man fade in 
  gsap.to(".man", {
    duration: 1.25,
    opacity: 1,
    ease: "power3.inOut"
  });

// man enlarge
gsap.to(".man", {
  duration: 1.25,
  delay: 16,
  scale: 1.25,
  paddingTop: 105,
  ease: "power3.inOut"
});


// hl1 drop down + fade in
  gsap.to(".hl1", {
    duration: 1.5,
    delay: 1,
    opacity: 1,
    ease: "power2.inOut",
    y: 200
  });

// hl2 fade in
  gsap.to(".hl2", {
    duration: 1.75,
    delay: 1,
    opacity: 1,
    ease: "power3.inOut"
  });

// hl 1 + 2 fade OUT
  gsap.to(".hl12", {
    duration: 1.75,
    delay: 4,
    opacity: 0,
    ease: "power3.inOut"
  });

  // hl3 fade in
  gsap.to(".hl3", {
    duration: 2,
    delay: 5,
    opacity: 1,
    ease: "power3.inOut"
  });

  // hl3 fade out
  gsap.to(".hl3", {
    duration: 2,
    delay: 9,
    opacity: 0,
    ease: "power3.inOut"
  });

  // hl4 fade in
  gsap.to(".hl4", {
    duration: 2.5,
    delay: 10,
    opacity: 1,
    ease: "power3.inOut"
  });

  // hl4 fade out
  gsap.to(".hl4", {
    duration: 2,
    delay: 14,
    opacity: 0,
    ease: "power3.inOut"
  });

  // cta fade in
  gsap.to(".cta", {
    duration: 2.25,
    delay: 16,
    opacity: 1,
    ease: "power3.inOut"
  });

});