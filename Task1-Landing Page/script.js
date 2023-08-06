const faders = document.querySelectorAll(".fade-in")
const options ={
    threshold:0.5,
    rootMargin: "0px 0px -100px 0px"
}
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        return;
        }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},options);
faders.forEach(faders=>{
    appearOnScroll.observe(faders)
})