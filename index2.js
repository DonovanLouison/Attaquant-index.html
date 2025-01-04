let lastScroll = 0
let header = document.querySelector('header')

let cursor = document.querySelector('.cursor')
let barre = document.querySelector('.header-list')
console.log(barre);



window.addEventListener('scroll', ()=>{
    if (window.scrollY < 870) {
        header.style.setProperty("--top", 0 + "px")
    }  
    else if (window.scrollY < lastScroll){
        header.style.setProperty("--top", 0 + "px")
    }
    else {
        header.style.setProperty("--top", -130 + "px")
    }
lastScroll = window.scrollY
}
)

window.addEventListener('scroll', ()=>{
lastScroll = window.scrollY
        main.style.setProperty('--op', (lastScroll / 8)+ "%")}
    
)
window.addEventListener('mousemove', (e)=>{
cursor.style.setProperty('--top', e.pageY + "px")
cursor.style.setProperty('--left', e.pageX + "px")
})



