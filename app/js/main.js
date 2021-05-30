
$(function () {
   $('.menu__btn').on('click', () =>{
      $('.rightside-menu').removeClass('rightside-menu--close');
   });
   $('.rightside-menu__close').on('click', () =>{
      $('.rightside-menu').addClass('rightside-menu--close');
   });

   $('.menu__btn1-add').on('click', () =>{
      $('.menu').toggleClass('menu--open');
   });
   if(window.innerWidth<=650){
      $('#-measures').appendTo($('.work-path__items-box'));
   }
   $('.top__slider').slick({
      dots:true,
      arrows:false,
      fade:true,
      autoplay:true,
   });
   $('.contact-slider').slick({
      dots:true,
      arrows:false,
      slidesToShow: 10,
      slidesToScroll: 10,
      responsive: [
         {
           breakpoint: 1700,
           settings: {
             slidesToShow: 8,
             slidesToScroll: 8,
           }
         },
         {
           breakpoint: 1511,
           settings: {
             slidesToShow: 6,
             slidesToScroll: 6
           }
         },
         {
           breakpoint: 1201,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 4
           }
         },
         {
            breakpoint: 840,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 630,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
       ]
   });
   $('.article__slider-box').slick({
      prevArrow:'<button type="button" class="article-slider__arrow  article-slider__arrow-pr"><img src="images/prev_img.svg" alt="prev_arr"></button>',
      nextArrow:'<button type="button" class="article-slider__arrow  article-slider__arrow-ne"><img src="images/next_img.svg" alt="next_arr"></button>',
   });

   var mixer = mixitup('.gallery__inner', {
      load: {
         filter:".bedroom",
      },
   });
});