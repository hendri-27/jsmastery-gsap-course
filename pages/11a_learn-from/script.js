import gsap from "gsap";

const repeat = document.querySelector('.repeat');

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.95,
  duration: 0.6,
  delay: 0.2,
  ease: "power4.out",
  stagger: 0.2,
});

repeat.addEventListener('click', () => {
  animation.restart();
})

// gsap.from(".card-1", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 0.6,
//   delay: 0.2,
//   ease: "power4.out",
// });
// gsap.from(".card-2", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 0.6,
//   delay: 0.5,
//   ease: "power4.out",
// });
// gsap.from(".card-3", {
//   y: 60,
//   opacity: 0,
//   scale: 0.95,
//   duration: 0.6,
//   delay: 0.8,
//   ease: "power4.out",
// });


// demo-2 create pop up box
const repeat2 = document.querySelector('.repeat2')

const animation2 = gsap.from(".box", {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: 'back.out(1.7)',
  duration: 0.3,
});

repeat2.addEventListener('click', () => {
  animation2.restart();
})