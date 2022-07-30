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
    }, 2.3)
    const bigTexts = new SplitType('.bigText', {
      types: 'chars',
      absolute: false
    })
    cp.from(bigTexts.chars, {
      duration: 1,
      x: -40,
      opacity: 0,
      stagger: 0.05,
      ease: "circ.out"
      // ease: "expo.inOut"
    }, 2.3)
    cp.from(".banner-about", {
      duration: 1,
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      // ease: "expo.inOut"
    }, 2.4)
    .reverse();
    var navColor = gsap.timeline()
    navColor.to(".colorGSAP", {
      duration: .5,
      ease: "none",
      color: "#fff",
      stagger: .1
    }, 2.7);
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


  const anchorLinks = document.querySelectorAll('.a-link');
  anchorLinks.forEach((anchorLink) => {
    // let hashval = anchorLink.getAttribute('href');
    // let target = document.querySelector(hashval);
    
    anchorLink.addEventListener('click', (e) => {
      e.preventDefault();
      var slideTrans = gsap.timeline()
      slideTrans.to(".slideAnimation1", {
        duration: 1,
        x: "0%",
        ease: "expo.inOut"
      })
      // e.stopPropagation();
      // locoScroll.scrollTo(target);
      setTimeout(() =>{
        window.location.href = anchorLink.getAttribute('href');
      }, 1100)
      locoScroll.stop();
      textBlinking.reversed(!textBlinking.reversed());
      slideTrans.reversed(!slideTrans.reversed());
      textBlinkingGreen.reversed(!textBlinkingGreen.reversed());
    });
  })

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

gsap.registerPlugin(ScrollTrigger);

// $(function(){
//   $(".nav-links").on("click", function (e) {
//       let href = $(this).attr("href");
//       let hrefElement = $(href);

//       $("html, body").animate(
//           {
//               scrollTop: hrefElement.offset().top + 80,
//           },
//           1250,
//           "easeInOutExpo"
//       );
//   });
// })

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main-container"),
    // reloadOnContextChange: true,
    smooth: true,
    smoothMobile: true
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
