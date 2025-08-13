gsap.to('.card', {
  ease: "power1.inOut", // for animation smoothness
  boxShadow: "0 0px 50px rgba(255, 255, 255, 1)", // change the boxshadow end state
  repeat: -1, // make it loop infinite
  yoyo: true, // make it back and forth between start state and end state
  duration: 2, // make duration animation is 2s
})