
var tl = gsap.timeline({
    repeat:-1
});


tl
.to(".imgContainer" ,{
    ease: Expo.easeInOut,
    width:"100%",
    duration:1,
    stagger:3
}, 'a')
.to(".left .text" ,{
    ease: Expo.easeInOut,
    stagger:3,
    top:"-50%"
}, 'a')
.to(".left .text" ,{
    delay:3,
    ease: Expo.easeInOut,
    stagger:3,
    top:"-200%"
}, 'a')
