gsap.from(".mid-text", {
  opacity: 0,
  duration: 1,
  y: -75,
  stagger: 0.6,
  delay: 1,
});
gsap.from(".btn", { opacity: 0, duration: 1, x: 50, delay: 2.4, stagger: 0.6 });
gsap.from(".cover-text", {
  opacity: 0,
  duration: 1,
  y: -200,
  delay: 2.2,
  stagger: 0.6,
});

const navOpen = document.querySelector(".dare"),
  navPoint = document.querySelector(".nav-open");

const tl = gsap.timeline({ paused: true, reversed: true });
tl.to(".cover", { width: "60%", ease: Power2.easeOut }).to(
  ".nav-open",
  {
    opacity: 1,
    x: 0,
    onComplete: function () {
      navPoint.style.pointerEvents = "auto";
      console.log("done");
    },
  },
  "-=0.5"
);

// fromTo(
//   ".nav-open",
//   0.5,
//   { opacity: 0, x: 50, ease: Power2.easeOut },

// );

navOpen.addEventListener("click", () => {
  console.log("click");
  tl.reversed() ? tl.play() : tl.reverse();
});
// 7 Show Click reverse
// document.getElementById("cta").addEventListener("click", () => {
//   console.log("click");
//   tl.reversed() ? tl.play() : tl.reverse();
// });

// .to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")

// let rule = CSSRulePlugin.getRule("span:after");

// 6 Show Timeline
// let tl = gsap.timeline({ defaults: { duration: 1 } });

// tl.from(".mid-text", { y: -75, stagger: 0.6, opacity: 0 }, "-=1")
//   .from(".btn", { x: 50, opacity: 0, stagger: 0.6 }, "-=1.5")
//   .from(".cover-text", { y: -200, opacity: 0, stagger: 0.6 }, "-=.5");
