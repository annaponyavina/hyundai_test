var mySwiper = new Swiper('.slider-container', {
    // Optional parameters
    loop: true,
    // direction: 'vertical',
    autoplay: {
        delay: 3000,
      },
      

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  })