import gsap from "gsap";

export const scaleOutIn = (element) => {
  const tl = gsap.timeline();
  tl.to(element, { scale: 1.1, duration: 0.5 });
  tl.to(element, { scale: 1, duration: 0.5 });
};
export const scaleOut = (element) => {
  const tl = gsap.timeline();
  tl.to(element, { scale: 1.1, duration: 0.25 });
};

export const scaleIn = (element) => {
  const tl = gsap.timeline();
  tl.to(element, { scale: 1, duration: 0.25 });
};

export const diagonalMoveAndScaleAway = (mode, elementOne, elementTwo) => {
  // if (mode === 0) {
  //   const tl = gsap.timeline();
  //   tl.to(elementOne, { yPercent: 10, xPercent: 10, scale: 1.1 });
  //   tl.to(elementTwo, { yPercent: -10, xPercent: -10, scale: 1.1 });
  // }
  // gsap.to(elementOne, { yPercent: -10, xPercent: -10, scale: 1.1 });
  // gsap.to(elementTwo, { yPercent: 10, xPercent: 10, scale: 1.1 });
};

export const moveCardOutRight = (el, func) => {
  const tl = gsap.timeline();
  tl.to(el, { x: 1500, duration: 0.5, onComplete: func });
};

export const moveCardOutLeft = (el, func) => {
  const tl = gsap.timeline();
  tl.to(el, { x: -1500, duration: 0.5, onComplete: func });
};
