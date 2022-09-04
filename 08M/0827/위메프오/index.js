let winH;
let sectCount=$('section').length
 
$('.remote li a').click(function(){
    let href=$(this).attr('href')
    let secTop=$(href).offset().top
    $('html').animate({'scrollTop':secTop})

    $('.remote li a').removeClass('black')
    $(this).addClass('black')
})

//마우스 휠을 아래로 내렸을때, -150이 키값 
$('section').mousewheel(function(e,delta){
    if(delta>0){
        // alert('up')
        let prev=$(this).prev().offset().top
        $('html').stop().animate({'scrollTop':prev})

    }else if(delta<0){
        //  alert('down')
        let next=$(this).next().offset().top
        $('html').stop().animate({'scrollTop':next})
    }

})

$(window).scroll(function(){
     winH=$(window).height()
    let scrTop=$(this).scrollTop()


$('section').each(function(i){
    let secTop = $(this).offset().top
    if(scrTop >= secTop){
        $('.remote li a').removeClass('black')
        $('.remote li a').eq(i).addClass('black')

 
    }
})

})