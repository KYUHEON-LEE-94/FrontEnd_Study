// querySelector를 지정하기 위한 함수
const get =  (target) => document.querySelector(target);
const gets = (target) => document.querySelectorAll(target);

let liElems = gets('.pointer li');
let pointer = get('.dot')

let tabElems = gets('.tab');

let tabh3Elems = gets('.tab .desc h3');
let tabpElems = gets('.tab .desc p');
let btnElems = gets('.tab .desc .btn');
let itmeElems = gets('.tab .desc .item');

liElems.forEach((li,idx) => {
    li.addEventListener('click', function(){
        pointerAni(idx)
        liActive(idx)
        tabview(idx)
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
    tabElems.forEach(element =>{
        element.classList.remove('on')
    })
    tabElems[i].classList.add('on')
}

