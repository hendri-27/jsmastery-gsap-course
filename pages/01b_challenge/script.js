gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    // pulsing glow animation
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});

// my answer
// gsap.to(".card", {
//   ease: "power1.inOut", // for animation smoothness
//   boxShadow: "0 0px 50px rgba(255, 255, 255, 1)", // change the boxshadow end state
//   repeat: -1, // make it loop infinite
//   yoyo: true, // make it back and forth between start state and end state
//   duration: 2, // make duration animation is 2s
// });
