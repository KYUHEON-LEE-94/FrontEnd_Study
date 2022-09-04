document.querySelectorAll('.remote li a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:"smooth"
        })

    })
})

const sections = document.querySelectorAll('section')
const menus = document.querySelectorAll('ul.remote li a');
const h1Elem = document.querySelector('h1');

window.addEventListener('scroll', function(){
    let current = "";
    sections.forEach(function(section){
        //getBoundingClientRect 자기자신의 위치값이 어디인지를 알려줌
        const sectionTop = window.scrollY + section.getBoundingClientRect().top
        if(window.scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
        h1Elem.className =''
        menus.forEach(function(menu,idx){
            menu.className ='';
           const href = menu.getAttribute('href').substring(1);
           if(href == current){
            if(idx%2 == 0){
                menu.classList.add('white')
            }else{
                menu.classList.add('black')
            }

            if(idx == 0 ||idx%2 ===1){
                h1Elem.classList.add('red')
            }else{
                h1Elem.classList.add('white')
            }
           }
        })
    })

    sections.forEach(function(section, i){

        section.addEventListener('wheel', function(event){
            event.preventDefault();

            if(!event){
                event= window.event
            }
            if(event.wheelDelta){
                delta = event.wheelDelta
            }
            let moveTop = window.scrollY
            let currentSection = sections[i]

            if(delta<0){
                moveTop = window.pageYOffset+currentSection.nextElementSibling.getBoundingClientRect().top
            }else{
                moveTop = window.pageYOffset+currentSection.previousElementSibling.getBoundingClientRect().top
            }
            const body = document.querySelector('html')
            window.scrollTo({top:moveTop,left:0, behavior:"smooth"})
        })
        
    })

})