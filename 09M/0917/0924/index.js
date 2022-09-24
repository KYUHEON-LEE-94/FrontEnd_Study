let lnb = document.querySelector('.lnb');
let rnb = document.querySelector('.rnb');
let lnbliElems = document.querySelectorAll('.lnb li.main');
let rnbliElems = document.querySelectorAll('.rnb li.main');
let lnbsub = document.querySelectorAll('.lnb ul.sub')
let rnbsub = document.querySelectorAll('.rnb ul.sub')



function hide (where,elems,sub){ 
    where.addEventListener('mouseleave', function(){
        elems.forEach(element =>{
            element.classList.remove('on')
            sub.forEach(subele =>{
                subele.style.display = 'none'
            })
        })
    })
}


function show (where,elems,sub){ 
        where.addEventListener('mouseover', function(){
            elems.forEach(element =>{
                element.classList.add('on')
                sub.forEach(subele =>{
                    subele.style.display = 'block'
                })
            })
        })
}


show(lnb,lnbliElems,lnbsub);
hide(lnb,lnbliElems,lnbsub)
show(rnb,rnbliElems,rnbsub);
hide(rnb,rnbliElems,rnbsub)
