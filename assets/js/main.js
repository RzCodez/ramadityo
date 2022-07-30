

var cp = new TimelineMax()
    cp.to(".line-progress2", {
      duration: 1,
      delay: 1,
      x: "100%",
      ease: "expo.inOut"
    })
    cp.to(".transition1", {
      duration: 1.5,
      clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "expo.inOut"
    }, 1)
    setTimeout(() => {
        document.querySelector(".transition1").style.display= "none";
    }, 10000000)
    cp.from(".animate-load", {
        y: "10px",
        opacity: 0,
        duration: 1,
        ease: "circ.out",
        stagger: .1
    }, 2)
    var navColor = gsap.timeline()
    navColor.to(".colorGSAP", {
      duration: .5,
      ease: "none",
      color: "#fff",
      stagger: .1
    }, 2.5)
    cp.from(".bounce-title", {
      duration: 1,
      y: -40,
      opacity: 0,
      ease: "bounce.out"
    }, 2.4)
    const text = new SplitType('.reveal-text-ramz', {
      types: 'chars',
      absolute: false
    })
    var textBlinking = gsap.timeline();
    textBlinking.from(text.chars, {
      duration: .3,
      // y: 150,
      opacity: 0,
      // color: "#DC143C",
      stagger: 0.1,
      ease: "none"
    }, 2.3)
    textBlinking.reverse();
    var textBlinkingGreen = gsap.timeline();
    textBlinkingGreen.to(text.chars, {
      duration: .3,
      color: "#fff",
      stagger: .1,
      ease: "none"
    }, 2.9)
    textBlinkingGreen.reverse();
    cp.from(".lines-ramz", {
      duration: 1,
      scaleX: 0,
      transformOrigin: "left",
      ease: "expo.inOut"
    }, 3.5)
    .reverse();
        
        var queue = new createjs.LoadQueue(false);
    
        queue.on("fileload", handleFileComplete);
        queue.on('progress', event => {
            let progressSlide = document.querySelector('.load-percentage')
            let progressLine = document.querySelector('.line-progress2');
            let progress = Math.floor(event.progress * 100 - 11);
            let progress_line = Math.floor(event.progress * 100);
            let percent = Math.round(event.progress * 100);
            document.getElementById('num-load').innerHTML = percent;
            progressLine.style.width = `${progress_line}%`;
            let html = document.documentElement;
            if (progress == 100) {
                console.log('all done');
            }
        })
        queue.on('complete', event => {
          cp.reversed(!cp.reversed());
          textBlinking.reversed(!textBlinking.reversed());
          textBlinkingGreen.reversed(!textBlinkingGreen.reversed());
          let image = document.querySelectorAll("img")
          image.forEach(img => {
            img.addEventListener("contextmenu", (event) => {
              event.preventDefault();
            })
          })
        })
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/mountains-clouds.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220921-07-iconic-mountains-pitons-restricted.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220916-04-iconic-mountains-matterhorn-restricted.jpg');

        function handleFileComplete(event) {
          
        var item = event.item; 
        var type = item.type;


        }

var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    follower2 = $(".cursor-follower2"),
    image = $(".image-cursor");
TweenMax.set(".cursor-follower", {
  xPercent: -50,
  yPercent: -50
});
TweenMax.set(".cursor-follower2", {
    xPercent: -50,
    yPercent: -50
});
window.addEventListener("mousemove", moveCircle);

function moveCircle(e) {
  TweenMax.to(".cursor-follower", 0.3, {
    stagger: .3,
    x: e.clientX,
    y: e.clientY
  });
  TweenMax.to(".cursor-follower2", 0.4, {
    x: e.clientX,
    y: e.clientY,
    ease: "power4.easeOut"
  });
}

var cursorAnime = new TimelineMax()
    .from(".cursor-follower2",{ 
        duration: 0.1,
        scale: 1,
        ease: "circ.out",
    })
    .reverse();


$(".FxFP").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").addClass("opacity-none");
})

$(".serif").on("mouseenter", function(e) {
  $(".cursor-follower2").addClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").addClass("opacity-none");
})

$(".serif").on("mouseleave", function(e) {
  $(".cursor-follower2").removeClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").removeClass("opacity-none");
})

$(".FxFP").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("fill-on");
    cursorAnime.reversed(!cursorAnime.reversed());
    $(".cursor-follower").removeClass("opacity-none");
})

$(".exclution").on("mouseenter", function(e) {
    $(".cursor-follower2").addClass("fill-on");
    $(".cursor-follower").addClass("opacity-none");
})
$(".exclution").on("mouseleave", function(e) {
    $(".cursor-follower2").removeClass("fill-on");
    $(".cursor-follower").removeClass("opacity-none");
})


$( window ).resize( function() {
  
  if ( window.matchMedia( '(max-width:600px)' ).matches ) {

    
  } else if ( window.matchMedia( '(max-width:991px)'.matches ) ) {
    
  } else {
  }

} );
$( window ).resize();

var slideTrans = new TimelineMax()
  slideTrans.from(".slideAnimation", {
    duration: 1,
    x: "-100%",
    ease: "expo.inOut"
  })
  .reverse();

gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-container"),
    smooth: true,
    smoothMobile: true
  })

const anchorLinks = document.querySelectorAll('.a-link');

anchorLinks.forEach((anchorLink) => {


  anchorLink.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() =>{
      window.location.href = anchorLink.getAttribute('href');
    }, 1100)
    locoScroll.stop();
    textBlinking.reversed(!textBlinking.reversed());
    textBlinkingGreen.reversed(!textBlinkingGreen.reversed());
    slideTrans.reversed(!slideTrans.reversed());
  });
})

  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(".main-container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector(".main-container").style.transform ? "transform" : "fixed"
  })
  
  

var scroll = gsap.timeline();

scroll.to(".fade-gradient", {
  scrollTrigger: {
    trigger: ".hero-section",
    scroller: ".main-container",
    start: "center center",
    end: "bottom center",
    scrub: 0.05,
    // markers: true,
  },
  duration: 1,
  height: "100%"
  // y: -100
})


var aboutAnjay2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroller: ".main-container",
    start: "top center",
    end: "bottom center",
    markers: false,
    scrub: 1.5
    // toggleActions: "play none none reverse"
  }
})

var aboutAnjay = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    scroller: ".main-container",
    start: "-15% center",
    end: "bottom center"
    // markers: true,
    // toggleActions: "play none none reverse"
  }
})

aboutAnjay.from(".reveal-text", {
  duration: 1,
  y: 100,
  stagger: 0.03,
  ease: "expo.inOut"
}, .05)
aboutAnjay.from(".soc-links", {
  duration: 1,
  x: -30,
  stagger: 0.07,
  opacity: 0,
  ease: "expo.inOut"
}, .05)
aboutAnjay.from(".bounce", {
  duration: 1,
  y: -50,
  ease: "bounce.out"
}, .1)

aboutAnjay.from(".lines", {
  duration: 1.5,
  width: "0%",
  ease: "expo.inOut"
}, .2)
aboutAnjay.to(".blank-slide", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "circ.inOut",
  stagger: 0.3
}, .05)
aboutAnjay.from(".about-desc", {
  duration: 1,
  x: -30,
  color: "rgb(255,255,255, 0)",
  ease: "circ.inOut",
  stagger: 0.3
}, .05)
aboutAnjay.to(".blank-slide-person", {
  duration: 1,
  transformOrigin: "right",
  scaleX: 0,
  ease: "power3.inOut"
}, .05)
aboutAnjay.from(".person", {
  duration: 1,
  x: -100,
  scale: 1.2,
  ease: "power4.inOut"
}, .01)

var projectCont = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    scroller: ".main-container",
    start: "-10% center",
    end: "bottom center",
    markers: false
    // toggleActions: "play none none reverse"
  }
})

projectCont.from(".pr-text", {
  duration: 1,
  y: 100,
  stagger: 0.05,
  ease: "power4.out"
}, .4)
projectCont.from(".pr-desc", {
  duration: 1,
  x: -30,
  opacity: 0,
  ease: "circ.inOut"
}, 1.3)
projectCont.from(".lines-title-project",{
  duration: 1,
  scaleX: 0,
  transformOrigin: "left",
  ease: "expo.inOut"
})
projectCont.from(".pr-bounce", {
  duration: 1,
  y: -50,
  ease: "bounce.out"
})
projectCont.from(".project-desc", {
  duration: 1.5,
  // x: "-30vw",
  // stagger: 0.05,
  ease: "power4.inOut"
}, .5)

projectCont.from(".grid-items", {
  clipPath: "polygon(0 0, 100% 0%, 100% 0, 0 0)",
  stagger: 0.2
  // ease: "circ.inOut"
}, 1)
projectCont.from(".pr-tag-text", {
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  ease: "power1.out"
}, 1.8)
projectCont.from(".pr-num", {
  text: "xyz",
  duration: 2,
  opacity: 0,
  x: -20,
  ease: "power4.inOut"
}, 1.5)



var bannerImg = gsap.timeline({
  scrollTrigger: {
    trigger: ".banner-project",
    scroller: ".main-container",
    start: "-85% center",
    end: "150% center",
    // markers: true,
    scrub: .5
    // toggleActions: "play none none reverse"
  }
})


bannerImg.to(".banner-image", {
  // y: "30%",
  backgroundPosition: "center 100%"
  // ease: "power2.out"
});
const titleContact = new SplitType('.title-contact', {
  types: 'chars',
  absolute: false
})
var contactSec = gsap.timeline({
  scrollTrigger: {
    trigger: ".contacts",
    scroller: ".main-container",
    start: "-12% center",
    end: "bottom center",
    // markers: true,
    toggleActions: "play none none reverse"
  }
})
contactSec.from(titleContact.chars, {
  duration: 1,
  x: -30,
  opacity: 0,
  rotateY: "-90deg",
  // color: "#DC143C",
  stagger: 0.1,
  ease: "circ.out"
}, 0)
contactSec.from(".subtitle-contact", {
  duration: .5,
  x: -20,
  opacity: 0,
  // stagger: 0.05,
  // y: "-1.3em",
  ease: "circ.out"
}, 1)
contactSec.from(".contact-info", {
  duration: .5,
  x: -20,
  opacity: 0,
  stagger: 0.05,
  // y: "-1.3em",
  ease: "circ.out"
}, 1.3)
contactSec.from(".line-footer", {
  duration: 1.5,
  transformOrigin: "left",
  scaleX: 0,
  // opacity: 0,
  // y: "-1.3em",
  ease: "expo.inOut"
}, 1.45)
contactSec.from(".up-footer", {
  duration: 1,
  x: -30,
  opacity: 0,
  ease: "expo.out",
  stagger: 0.16
}, 1.8)


const ambatukamImg = document.querySelector(".banner-image");

const getNewBanner = async () =>
{
    var url = "https://rzcodez.github.io/banner-web/banner-img.json";    
    
    const response = await fetch(url);
    
    console.log(typeof response);
    
    const allImages = await response.json();
    
    const index = Math.floor(Math.random()*allImages.length);
    
    const image = allImages[index].img;
    
    ambatukamImg.style.backgroundImage = `url("${image}")`;
}
getNewBanner();

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();