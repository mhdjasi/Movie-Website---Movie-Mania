const nav = document.getElementById('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY >= 60){
        nav.classList.add('navScroll');
    }
    else{
        nav.classList.remove('navScroll');

    }
});

