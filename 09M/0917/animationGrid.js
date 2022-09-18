const frame = "#sec3 .inner"
const box = "article"
const speed = '.35s'
const acriveClass ='on'
const btn = document.querySelectorAll('.itemMenu ul li')
let grid;

window.addEventListener("load", function(){
    init()
})

function init(){
    grid  = new Isotope(frame, {
        itemSelector: box,
        olumnWidth: box,
        transitionDuration:speed
        
    })
}

function filter(btnFilter){
    btnFilter.array.forEach(item => {
        item.addEventListener('click', function(e){
            e.preventDefault()
            const sort = e.currentTarget.querySelector('a').getAttribute('href')
            grid.arrange({filter:sort})
            btnFilter.forEach(item =>{
                item.classList.remove(activeClass)
            });
            
        })
    });
}

