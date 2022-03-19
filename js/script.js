$(function() {
    let header = $('header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });

   $(function() {
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
   });
$(function(){
    const mediaQuery = window.matchMedia('(max-width: 480px)')
   let elem = $('.page__scheme');
   let elem2 = $('.scheme__grid');
   let elem3 = $('.scheme__box');
    if (mediaQuery.matches) {
        elem.addClass('swiper-container');
        elem2.addClass('swiper-wrapper');
        elem3.addClass('swiper-slide');
        new Swiper('.page__scheme',{
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
            },
        });
    }
})
$(function(){
    const mediaQuery = window.matchMedia('(min-width: 480px)')
    if(mediaQuery.matches){
        elem.removeClass('swiper-container');
        elem2.removeClass('swiper-wrapper');
        elem3.removeClass('swiper-slide');
    }
})