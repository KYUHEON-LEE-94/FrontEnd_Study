// querySelector를 지정하기 위한 함수
const get =  (target) => document.querySelector(target);
const gets = (target) => document.querySelectorAll(target);

let liElems = gets('.pointer li');
let pointer = get('.dot');
let sect1 = get('#sect1');

let tabElems = gets('.tab');
let fixedArea = get('.fixedArea');
let headerElem = get('header');

let tabh3Elems = gets('.tab .desc h3');
let tabpElems = gets('.tab .desc p');
let btnElems = gets('.tab .desc .btn');
let itmeElems = gets('.tab .desc .item');

liElems.forEach((li,idx) => {
    li.addEventListener('click', function(){
        pointerAni(idx)
        liActive(idx)
        tabview(idx)
        pointEventStop();
    })
});

function pointerAni(i){
    let liWid = liElems[i].clientWidth/2
    let xPos = liElems[i].offsetLeft
    pointer.style.left =(xPos + liWid -5) +'px'
}

function liActive(i){
    liElems.forEach(element =>{
        element.classList.remove('on')
    })
    liElems[i].classList.add('on')
}

function tabview(i){
    console.log(i);
    tabElems.forEach(element =>{
        element.classList.remove('on')
    })
    tabElems[i].classList.add('on')
}

pointerAni(0);

document.addEventListener('scroll', function () {
    let scrTop = window.pageYOffset;
    let sect1Top = sect1.offsetTop;
    if(sect1Top <= scrTop){
        fixedArea.classList.add('on')
    }
    if(scrTop >= 1300){
        fixedArea.classList.remove('on')
    }
})

function pointEventAuto(){
    liElems.forEach(element =>{
        element.style.pointerEvents = 'auto'
    })
}
let timeId
function pointEventStop(){
    liElems.forEach(element =>{
        element.style.pointerEvents = 'none'
    })
    timeId = setTimeout(pointEventAuto, 1500);
}

document.addEventListener('wheel',function(e){
    if(e.deltaY >0){
        headerElem.classList.add('on')
    }else{
        headerElem.classList.remove('on')
    }
})