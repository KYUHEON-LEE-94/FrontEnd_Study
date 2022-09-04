let winH;
let sectCount=$('section').length
 
$('.menu li a').click(function(){
    let href=$(this).attr('href')
    let secTop=$(href).offset().top
    $('html').animate({'scrollTop':secTop})

    $('.menu li').removeClass('on')
    $(this).parent().addClass('on')
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
    $('h1').text(scrTop)

//    if(scrTop>=0 && scrTop<winH*1){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(0).addClass('on')
//    }
//    if(scrTop>=winH*1 && scrTop<winH*2){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(1).addClass('on')
//    }
//    if(scrTop>=winH*2 && scrTop<winH*3){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(2).addClass('on')
//    }
//    if(scrTop>=winH*3 && scrTop<winH*4){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(3).addClass('on')
//    }
//    if(scrTop>=winH*4 && scrTop<winH*5){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(4).addClass('on')
//    }
  
// for(let i=0;i<=sectCount;i++){

//    if(scrTop>=winH*i && scrTop<winH*(i+1)){
//     $('.menu li').removeClass('on')
//     $('.menu li').eq(i).addClass('on')
//    }
// }

$('section').each(function(i){
    let secTop = $(this).offset().top
    if(scrTop >= secTop){
        $('.menu li').removeClass('on')
        $('.menu li').eq(i).addClass('on')

        if(i == 1 || i == 4){
            $('h1').removeClass();
            $('h1').addClass('blue')
            console.log(i);
        }else{
            $('h1').removeClass()
            $('h1').addClass('black')
            console.log(i);
        }
    }
})

})