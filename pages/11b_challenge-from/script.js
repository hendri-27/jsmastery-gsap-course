import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  // Animate from initial state for a more dynamic entry
  gsap.from('.card-front', {
    rotateY: 0,
    ease: "power1.in"
  });
  gsap.from('.card-back', {
    rotateY: 180,
    ease: "power1.in"
  });
  // Then animate to the flipped state
  gsap.to('.card-front', {
    rotateY: -180,
    ease: "power.out",
  });
  gsap.to('.card-back', {
    rotateY: 0,
    ease: "power.out",
  });
});

card.addEventListener("mouseleave", () => {
  // Animate from flipped state for a more dynamic exit
  gsap.from('.card-front', {
    rotateY: -180,
    ease: "power1.in"
  });
  gsap.from('.card-back', {
    rotateY: 0,
    ease: "power1.in"
  });
  // Then animate back to the original state
  gsap.to('.card-front', {
    rotateY: 0,
    ease: "power.out",
  });
  gsap.to('.card-back', {
    rotateY: 180,
    ease: "power.out",
  });
});
