const xTo = 0.01 * document.querySelector("body").offsetWidth;
const xFrom = document.querySelector("body").offsetWidth;
export const showMenuAnims = () => {
  const master = gsap.timeline();
  master.to(".menu", { x: -xTo, duration: 1.2 });
};

export const hideMenuAnims = () => {
  const master = gsap.timeline();
  master.to(".menu", { x: xFrom, duration: 1.2 });
};
