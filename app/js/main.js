$(function () {

  $('.header-top__right-btn').on('click', function () {
    $('.header-top__right-btn__img').toggleClass('header-top__right-btn__img-open')

    $('.header-top__right-btn__img-close').toggleClass('header-top__right-btn__img--active')

    $('.header-top__right-btn__img--active').toggleClass('header-top__right-btn__img-close')

    $('.header-top__right-btn__img-close').removeClass('header-top__right-btn__img--active')
    
  });

  $('.header-top__right-btn').on('click', function () {
    $('.header-top__burger').toggleClass('header-top__burger--active')
  });


});