
const liElem = document.querySelectorAll('nav li');
liElem.forEach(function(item, idx){
    // console.log(item, idx)
    let img = item.querySelector('a img');
    let out = img.src;
    let hover = img.getAttribute('data-hover');
    console.log(hover);
    img.onmouseover = function(){
        img.src = hover;
    }
    img.onmouseout = function(){
        img.src = out;
    }
})

