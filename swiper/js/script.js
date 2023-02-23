var swiper_relit = new Swiper(".s1", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    // loop: true,
    // loopedSlides:9,
    preloadImages: true,
    loop: false,
    // rewind:true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
      dynamicMainBullets: 4,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper_shadow = new Swiper(".s2", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    preloadImages: true,
    // loop: true,
    // loopedSlides:9,
    loop: false,
    // rewind:true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: false,
      dynamicMainBullets: 4,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

