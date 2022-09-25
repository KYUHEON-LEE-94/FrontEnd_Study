let newtab = document.querySelector('.new');
let recommandtab = document.querySelector('.recommand');
let swipertab = document.querySelectorAll('.swiper')
let tabs = document.querySelectorAll('.tab')

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      clickable: true,
      
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  
  tabs.forEach((tab, idx)=>{
    tab.addEventListener('click', function(){
        tabsActive(idx)
        tabshow(idx);
    })
  })

  function tabshow(idx){
    swipertab.forEach(tab =>{
        tab.style.display = 'none';
    })
    swipertab[idx].style.display = 'block';
} 

function tabsActive(idx){
    tabs.forEach(tab =>{
        tab.classList.remove('on')
    })
    tabs[idx].classList.add('on')
}


