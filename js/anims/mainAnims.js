export const showAnims = (name, value)=>{
    const master = gsap.timeline();
    master.to(name,{y:value, duration: 1.2});
};

export const hideAnims = (name, value)=>{
    console.log("fired");
    const master = gsap.timeline();
    master.to(name,{y:value,duration: 1.2});
}

export const breakdownAnimHide = ()=>{
    const master = gsap.timeline();
    master.to(".other-data", {y:-400, duration: 0.33});
    master.to(".temp-data", {y:-400, duration: 0.33});
    master.to("#surfing", {y:-400, duration: 0.33});
}

export const breakdownAnimShow = ()=>{
    const master = gsap.timeline();
    master.to("#surfing", {y:0, duration: 0.5});
    master.to(".temp-data", {y:0, duration: 0.5});
    master.to(".other-data", {y:0, duration: 0.5});
}
