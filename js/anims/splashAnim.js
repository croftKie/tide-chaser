export const splashAnims = ()=>{
    gsap.fromTo(
        "#splashLogo",
        {y: -300},
        {y: 0, ease: "elastic.out(0.5, 0.3)", duration: 1.5, delay: 1}
    );
    gsap.fromTo(
        ".tip",
        {x:-300},
        {x:0, ease:"elastic.out(0.5,0.3)", duration:1}
    );
    gsap.fromTo(
        ".go",
        {y: 100, opacity: 0},
        {y:0,ease:"elastic.out(1,0.3)", opacity: 100, duration:1.5, delay:2}
    );
};

export const splashAnimsExit = ()=>{
    gsap.to(
        "#splashLogo",
        {y: -300, duration: 1});
    gsap.to(
        ".tip",
        {opacity:0, duration:1});
    gsap.to(
        ".go",
        {y: 200, opacity: 0, duration:1});
}

