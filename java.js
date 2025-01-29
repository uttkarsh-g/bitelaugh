const ham=()=>{
let link =document.querySelector(".nav-link");
let open =document.querySelector(".op");
let close =document.querySelector(".cl");

open.addEventListener("click",()=>{
    open.style.display="none";
    link.style.display="flex";
    link.classList.toggle('ham')
    close.style.display="block";

})
close.addEventListener("click",()=>{
    link.style.display="";
    open.style.display="";
    link.classList.toggle('ham')
    close.style.display="none";

})
link.addEventListener("click",()=>{
    link.style.display="";
    open.style.display="";
    link.classList.remove('ham');
    close.style.display="none";

})






}
ham()

let heroanima =()=>{
    let anihero = gsap.timeline();
anihero.from(".main-area-nav",{
    y:-300,
},1)

anihero.from(".simg",{
    x:-100,
opacity: 0,
})
anihero.from(".timg",{
    x:100,
opacity: 0,
})

anihero.from(".bite",{
    y:100,
opacity: 0,
})
anihero.from(".laugh",{
    y:100,
opacity: 0,
})
anihero.from(".para",{
    y:100,
opacity: 0,
})
}
heroanima()

let ab=()=>{

gsap.from(".topdiv-ab",{
opacity: 0,
scrollTrigger:{
    trigger:"topdiv-ab",
    scroller:"body",
    // markers:true,
    start:"15% 50%",
    end:"20% 40%",
    scrub:3,
}
})

gsap.from(".sl",{
    y:100,
    opacity: 0,
    scrollTrigger:{
        trigger:"topdiv-ab",
        scroller:"body",
        // markers:true,
        start:"30% 50%",
        end:"34% 40%",
        scrub:3,
    }
    })



}
ab()

const gl=()=>{
gsap.from(".gal",{
opacity: 0,
scrollTrigger:{
    trigger:"gal",
    scroller:"body",
    // markers:true,
    start:"75% 50%",
    end:"78% 40%",
    scrub:3,
}
})
}
gl()





/* MENU */

const menu =()=>{
let mc =document.querySelector(".mc");
let sd =document.querySelector(".sld");
let de =document.querySelector(".de");
let bev =document.querySelector(".be");

let mco =document.querySelector(".main-course");
let sal =document.querySelector(".sald");
let des =document.querySelector(".dessert");
let bee =document.querySelector(".beve");


mc.addEventListener("click",()=>{  
mco.style.display="grid";
sal.style.display="none";
des.style.display="none";
bee.style.display="none";
});

sd.addEventListener("click",()=>{  
sal.style.display="grid";
mco.style.display="none";
des.style.display="none";
bee.style.display="none";
});

de.addEventListener("click",()=>{  
des.style.display="grid";
sal.style.display="none";
mco.style.display="none";
bee.style.display="none";
});

bev.addEventListener("click",()=>{  
bee.style.display="grid";
sal.style.display="none";
des.style.display="none";
mco.style.display="none";
});














}
menu()