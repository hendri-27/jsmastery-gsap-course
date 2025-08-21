import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  backgroundColor: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25,
  duration: 2,
});

repeat.addEventListener("click", () => {
  animation.restart();
});

// My answer
// gsap.to('.box', {
//   opacity: 1,
//   rotation: 360,
//   background: "#ff6f61",
//   borderRadius: '50%',
//   scale: 1.25,
//   duration: 2,
//   ease: "bounce",
//   repeat: -1,
//   yoyo: true,
//   repeatDelay: 2,
//   stagger: 1,
// })
