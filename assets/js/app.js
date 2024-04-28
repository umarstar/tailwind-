
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          1021: {
            slidesPerView: 2,
          },
          1227: {
            slidesPerView: 2,
          },
          1441: {
            slidesPerView: 3,
          },
        },
      });
