let sect4slideWrap = document.querySelector('#sect4 .slideWrap');
let sect4LiElems = document.querySelectorAll('#sect4 .menu li');
console.log(sect4slideWrap);
sect4LiElems.forEach((elemnt, idx)=>{
    elemnt.addEventListener('click', function(){
        goToSlide(idx);
    })
})

function goToSlide(idx){
    sect4slideWrap.style.left = (idx*100)+"%"
    alert(idx*100+"%")
}
