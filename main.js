
let li = document.querySelectorAll('.leftBox ul li');
let div = document.querySelectorAll('.contentBox');

li.forEach(element => {
    element.addEventListener('click' ,e=>{
        gsap.from(".contentBox",{
            duration:0.5,
            opacity:0,
            scale:0.01,
            ease:"ease"
        })
        e.target.style.borderRight='27px solid #89AD91';
        li.forEach(element=>{
            if(element!==e.target){
                element.style.borderRight='27px solid rgba(255, 255, 255, .0)';
            }
        })
        console.log(e.target);
        let menuPos = e.target.getAttribute('data');
        let query = document.querySelector(menuPos);
        div.forEach(element=>{
            if(element!==query){
                element.style.display='none';
            }
        })
        query.style.display='block';
    })
});

gsap.from(".boxHome",{
    duration:1.5,
    opacity:0,
    scale:0.3,
    ease:"ease"
})


