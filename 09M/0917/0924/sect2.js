let liElems = document.querySelectorAll('ul.page li');
let aElems = document.querySelectorAll('ul.page li a');
let verticalWrap = document.querySelector('.verticalWrap');
let arrowPrev =document.querySelector('.prev');
let arrownext =document.querySelector('.next');
let videoWrap = document.querySelector('.videoWrap')

//클릭횟수 카운트
let count = 0;

liElems.forEach((element,idx) =>{    
    element.addEventListener('click', function(e){
        e.preventDefault();       
        active(idx);
    })
})


function arrowControl(arrow){
    arrow.addEventListener('click', function(e){
            e.preventDefault();
        if(arrow == arrownext){
            Prev();
        }else{
            next();
        }

        })    
}

arrowControl(arrownext)
arrowControl(arrowPrev)


function Prev(){
    count++;
    if(count >=1)arrowPrev.classList.remove('stop');
    if(count > 2)arrownext.classList.add('stop');
    active(count);
}

function next(){
    count--;
    if(count ==0){
        arrowPrev.classList.add('stop');
    }
    active(count);
}



function activeA(idx){
    aElems.forEach(a =>{
        a.classList.remove('on');
    })
    aElems[idx].classList.add('on');
}

//+++
function goToSlide(idx){
    videoWrap.style.left=(idx*-100)+"%"
    verticalWrap.style.top=(idx*-484)+"px"
} 
//==============

function active(count){
    activeA(count);
    goToSlide(count);
}