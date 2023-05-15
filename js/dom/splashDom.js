import {splashAnimsExit} from "../anims/splashAnim.js";

export const splashScreen = ()=>{
    const user = localStorage.getItem("visitorType");
    if(!user) {
        document.querySelector(".splash").classList.remove("hide");
        document.querySelector('.go>button').addEventListener('click',()=>{
            splashAnimsExit()
            setTimeout(()=>{
                document.querySelector('.splash').classList.add("hide");
                localStorage.setItem("visitorType", "1");
            }, 1200);
        });
    }
}