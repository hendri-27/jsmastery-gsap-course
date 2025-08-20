import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.6,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.1,
    }
  );
});

// this is using stagger
// gsap.fromTo(
//   bars,
//   {
//     scaleY: 0.4,
//   },
//   {
//     scaleY: 1.6,
//     duration: 0.6,
//     ease: "sine.inOut", // the ease is outside because this ease is for group to be seamless, if it is inside the stagger, it will looks different cause it is will based on each individual
//     stagger: { // this is for each bar
//       each: 0.1, // each bar having delay 0.1 s
//       repeat: -1, // each bar having repeat infinite
//       yoyo: true, // each bar having yoyo effect
//     },
//   }
// );
