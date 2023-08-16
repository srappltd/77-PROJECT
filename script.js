Loco("#main");
function Loco(main){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(main),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(main, {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

Anim();
function Anim(){
    gsap.to("#page3",{
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            scrub:true,
            // markers:true,
            start:"top -.1px",
            end:"top -300%",
            pin:true
        }
    })
    gsap.to(".page3-center-cover",{
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            scrub:true,
            // markers:true,
            start:"top 0%",
            end:"top -300%",
            // pin:true
        },
        top:"-210vh"
    })

    clt = ""
    document.querySelector("#page4 h1").textContent.split("").forEach(h1=>{
        clt += `<span>${h1}</span>`
        document.querySelector("#page4 h1").innerHTML = clt;
    })
    gsap.to("#page4",{
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:true,
            start:"top 0%",
            end:"top -400%",
            pin:true
        }
    })
    gsap.to("#page4 h1 span",{
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            scrub:true,
            start:"top 0%",
            end:"top -300%",
        },
        color:"white",
        stagger:.4,
        duration:2
    })
    gsap.to("#page4",{
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            scrub:true,
            start:"top 35%",
            end:"top 20%",
        },
        opacity:0
    })
    gsap.to("#nav a",{
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            scrub:true,
            start:"top 25%",
            end:"top 15%",
        },
        color:"black"
    })

    document.querySelector("#page5").addEventListener("mousemove",dets=>{
        let x = document.querySelector(".page5-circle").offsetWidth;
        let y = document.querySelector(".page5-circle").offsetHeight;
        document.querySelector(".page5-circle").style.transform = `translate(${dets.pageX - x/2}px,${dets.pageY - y/2}px)`;
    })

    gsap.to("#page6",{
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:true,
            start:"top 0%",
            end:"top -1000%",
            pin:true
        }
    })
    gsap.to(".page6-left #slider",{
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:true,
            // markers:true,
            start:"top 0%",
            end:"top -450%",
            // pin:true
        },
        right:"100%"
    })
    gsap.to(".page6-right #slider",{
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:true,
            // markers:true,
            start:"top 0%",
            end:"top -450%",
            // pin:true
        },
        right:"-100%"
    })
    gsap.to(".page6-cover",{
        scrollTrigger:{
            trigger:"#page6 .page6-cover",
            scroller:"#main",
            scrub:true,
            markers:true,
            start:"top -350%",
            end:"top -900%",
            // pin:true
        },
        top:0
    })
    gsap.to(".page6-rotate",{
        scrollTrigger:{
            trigger:"#page6 .page6-cover",
            scroller:"#main",
            scrub:true,
            markers:true,
            start:"top -400%",
            end:"top -900%",
            // pin:true
        },
        rotate:-180
    })
    
}
