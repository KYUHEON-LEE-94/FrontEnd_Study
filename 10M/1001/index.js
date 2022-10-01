let sw =0;
let timerId;
const body = document.querySelector('body');
const container = document.querySelector('.container');
const slideWrap = document.querySelector('.slideWrap');
let slideElems = document.querySelectorAll('.slide');
const allBtn = document.querySelector('.allBtn');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


allBtn.addEventListener("click", function(e){
    sw = !sw;
    if(sw){
        this.classList.add('on');
        prev.style.opacity = '0';
        next.style.opacity = '0';
        allList();
    }else{
        this.classList.remove('on');
        prev.style.opacity = '1';
        next.style.opacity = '1';
    }
})

function allList(){
    container.style.width = "100%";
    slideWrap.style.width = "100%";
    slideWrap.style.flexWrap = "wrap";

    slideElems.forEach(slide =>{
        slide.style.width = "25%"
    });
    body.style.overflow ="auto";
}

let sum = 0;

next.addEventListener("click", function (e) {
    e.preventDefault();
    nextSlide();
})

prev.addEventListener("click", function (e) {
    e.preventDefault();
    prevSlide();
})

function nextSlide(){
    slideWrap.style.transition = 500+"ms";
    slideWrap.style.right = -25+"%";
    throttling(callBacknext, 500)
}


function prevSlide(){
    slideWrap.style.transition = 500+"ms";
    slideWrap.style.right = 25+"%";
    throttling(callBackprev, 500)
}


function callBacknext(){
    setTimeout(() => {
        slideWrap.append(slideWrap.firstElementChild)
        slideWrap.style.transition = 0+"ms";
        slideWrap.style.left = -25+"%";

    }, 500);
}

function callBackprev(){
    setTimeout(() => {
        slideWrap.prepend(slideWrap.lastElementChild)
        slideWrap.style.transition = 0+"ms";
        slideWrap.style.left = 25+"%";

    }, 500);
}

function throttling (callback, timeout){
    if(timerId){
        return;
    }
    timerId = true;
    setTimeout(() => {
        callback();
    }, timeout);
}


container.addEventListener('wheel', function(e){
    if(e.deltaY <0){
        prevSlide();
    }else if(e.deltaY >0){
        nextSlide();
    }
})

window.addEventListener('resize', function(){
    let deviceWid = window.outerWidth;
    devicecheck()

})

function devicecheck(){
    let deviceWid = window.outerWidth;
    if(deviceWid <= 580){
        prev.style.opacity = "0";
        next.style.opacity = "0";
        slideWrap.append(slideWrap.firstElementChild)
        mobile();
    }
}

function mobile(){
    container.style.width = "100%";
    slideWrap.style.width = "100%";
    slideWrap.style.left = 0;

    slideElems.forEach(slide =>{
        slide.style.width = "100%"
    });
    body.style.overflow ="auto";

}