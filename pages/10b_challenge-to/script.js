import gsap from "gsap"

const showToastLoop = () => {
  gsap.to('.one', {
    y: -160,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".one", {
        y: -230,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power4.out",
        delay: 2,
      })
      gsap.to(".two", {
        y: -160,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power4.out",
        delay: 2,
        onComplete: () => {
          gsap.to(".toast", {
            delay: 2.5,
            y: -230,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(".toast", {
                y: -140,
              })
              setTimeout(showToastLoop, 2500)
            }
          })
        }
      })
    }
  })
}

showToastLoop()