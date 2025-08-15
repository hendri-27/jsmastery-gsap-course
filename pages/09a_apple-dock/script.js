import gsap from "gsap";

// Get DOM elements
const dock = document.querySelector(".dock"); // The dock container at the bottom
const icons = document.querySelectorAll(".icon"); // Individual icons inside the dock
const trigger = document.querySelector(".dock-trigger"); // Hover trigger area above the dock

// State variables to control hover and animation logic
let isDockVisible = false; // Is the dock currently visible?
let isDockHovered = false; // Is the user's mouse inside the dock?
let isTriggerHovered = false; // Is the user hovering the trigger area?
let isReadyForHover = false; // Should proximity scaling be active?
let hasDockEntered = false; // Tracks if the dock has been hovered at least once

// Mouse enters the trigger area (above the dock)
trigger.addEventListener("mouseenter", () => {
  if (hasDockEntered) {
    clearTimeout(hasDockEntered);
    hasDockEntered = true; // mark as entered
  }

  isTriggerHovered = true;

  console.log("masuk trigger area");
  if (!isDockVisible) {
    isDockVisible = true;
    showDock(); // 🧠 We'll explain this GSAP-powered function later
  }
});

// Mouse leaves the trigger
trigger.addEventListener("mouseleave", () => {
  isTriggerHovered = false;

  if (!isDockHovered) {
    hasDockEntered = setTimeout(() => {
      hasDockEntered = false;
      hideDock(); // 🧠 This too is animation logic
    }, 100);
  }
});

// Track when the mouse enters/leaves the dock
dock.addEventListener("mouseenter", () => {
  // cancel any pending hide timeout
  if (hasDockEntered) {
    clearTimeout(hasDockEntered);
    hasDockEntered = true;
  }
  isDockHovered = true;
});

dock.addEventListener("mouseleave", () => {
  isDockHovered = false;

  if (!isTriggerHovered) {
    gsap.to(icons, {
      scale: 1,
      duration: 0.5,
      ease: "back.out",
    });

    hasDockEntered = setTimeout(() => {
      hasDockEntered = false;
      hideDock();
    }, 100);
  }
});

// Mouse moves inside the dock — used for proximity-based scaling
dock.addEventListener("mousemove", (e) => {
  if (!isDockVisible || !isDockHovered || !isReadyForHover) return;

  const rect = dock.getBoundingClientRect();
  const centerX = e.clientX - rect.left;

  // This logic measures the horizontal distance of each icon from the cursor
  icons.forEach((icon) => {
    const iconRect = icon.getBoundingClientRect();
    const iconCenter = iconRect.left + iconRect.width / 2;
    const distance = Math.abs(centerX - (iconCenter - rect.left));
    const maxDistance = 120;

    const scale = Math.max(1, 1.7 - distance / maxDistance);

    // We'll animate this part using GSAP later
    gsap.to(icon, {
      scale,
      duration: 0.5,
      ease: "back.out",
    });
  });
});

const showDock = () => {
  gsap.to(dock, {
    bottom: 10,
    duration: 1,
    ease: "expo.out",
  });
  gsap.to(icons, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "back.out",
    stagger: 0.06,
    onComplete() {
      isReadyForHover = true;
    },
  });
};

const hideDock = () => {
  isDockVisible = false;
  isReadyForHover = false;
  gsap.killTweensOf(icons);
  gsap.to(icons, {
    opacity: 0,
    scale: 0,
    ease: "back.out",
    stagger: {
      from: "end",
      each: 0.06,
    },
    duration: 0.5,
  });
  gsap.to(dock, {
    bottom: -100,
    duration: 1,
    ease: "expo.out",
    delay: 0.2,
  });
};
