var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursorblur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrblur.style.left = dets.x -162.5+ "px";
    crsrblur.style.top = dets.y -162.5 + "px";
  });
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav", {     //gsap is a library in js usee to give animations.
    backgroundColor: "#000",
    duration: 0.5,   //how much time after the animation will appear
    height: "110px",  //height of the animation
    scrollTrigger: {   //animation which is used to give effect after scrolling down the page..
      trigger: "#nav",  //part on which the animation has to be applied.
      scroller: "body",  //part on which the animation  effect should remain after scrolling down 
      start: "top -10%",  //timer that when to start the animation 
      end: "top -11%",
      scrub: 1, //links animation to the scrollbar allowing to move forward and to move reverse backwards..
    },
});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers:true,
        start: "top -30%",
        end: "top -100%",
        scrub: 2,
    },
});
gsap.from("#about img,#about-us", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    markers:true,
    start: "top 80%",
    end: "top 70%",
    scrub: 2,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});
gsap.from("#comma1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#comma1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#comma2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#comma1",
    scroller: "body",
    markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 4,
  },
});

