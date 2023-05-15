const xTo = 0.01 * document.querySelector('.container').offsetWidth;
const xFrom = document.querySelector('.container').offsetWidth;
export const showMenuAnims = () => {
    const master = gsap.timeline();
    master.to('.menu', {x: -xTo, duration: 1.2});
};

export const hideMenuAnims = () => {
    const master = gsap.timeline();
    master.to('.menu', {x: xFrom, duration: 1.2});
}