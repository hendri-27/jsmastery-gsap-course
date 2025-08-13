gsap.to('.card', {
  opacity: 1, // ending state of opacity
  scale: 1, // ending state of scale
  duration: 5, // in seconds,
  onComplete: () => { // callback function when the first animation is complete run, will run this function
    gsap.to('.card', {
      y: -20, // the ending state should be from start state
      repeat: -1, // -1 will loop indefinitely or infinite loop
      yoyo: true, // will make the element is back and fort
      duration: 0.5, // the duration to the final state
    })
  }
})