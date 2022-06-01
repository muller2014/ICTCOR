   
   // swipers home
// Banner desktop
var mySwiper = new Swiper('.swiper-banner-home-desktop', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    updateOnWindowResize: true,
    navigation: {
      nextEl: '.controle-sb-home-d',
      prevEl: '.controle-sb-home-e',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });



   // Banner mobile
  var mySwiper = new Swiper('.swiper-banner-home-mobile', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    updateOnWindowResize: true,
    navigation: {
      prevEl: '.proximo-cta',
      nextEl: '.anterior-cta',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });


   // Slides exames desktop
   var mySwiper = new Swiper('.swiper-card-exames-ds', {
    freeMode: {
               enabled: true,
               sticky: false,
               minimumVelocity: 0.1,
               speed: 1000,
               momentum: true,
               momentumVelocityRatio: 5,
   
           },
            navigation: {
         prevEl: '.left-exames',
         nextEl: '.right-exames',
           },
   
           breakpoints: {
               50: {
                   slidesPerView: 1.2,
                   spaceBetween: 10,
               },
   
               350: {
                   slidesPerView: 1.45,
                   spaceBetween: 0,
               },
               
   
               500: {
                   slidesPerView: 1,
                   spaceBetween: 10,
               },
               700: {
                   slidesPerView: 1.8,
                   spaceBetween: 10,
               },
               800: {
                slidesPerView: 2,
                spaceBetween: 10,
               },
               1000: {
                   slidesPerView: 2.5,
                   spaceBetween: 10,
               },
               1200: {
                   slidesPerView: 3.1,
                   spaceBetween: 10,
               },
   
               1480: {
                   slidesPerView: 3.7,
                   spaceBetween: 10,
               },
               1600: {
                   slidesPerView: 4.2,
                   spaceBetween: 100,
               },
               1900: {
                   slidesPerView: 5,
                   spaceBetween:100,
               }
   
           }
       });


  var mySwiper = new Swiper('.swiper-card-exames-mobile', {
    freeMode: {
        enabled: true,
        sticky: false,
        minimumVelocity: 0.1,
        momentum: true,
        momentumVelocityRatio: 5,

    },

    breakpoints: {
        50: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },

        350: {
            slidesPerView: 1.45,
            spaceBetween: 0,
        },

        400: {
          slidesPerView: 1.6,
          spaceBetween: 0,
      },

        500: {
            slidesPerView: 2.4,
            spaceBetween: 10,
        },
     

    }
});

  var mySwiper = new Swiper('#swiper-cards-corpo-clinico', {
        freeMode: {
            enabled: true,
            sticky: false,
            minimumVelocity: 0.1,
            momentum: true,
            momentumVelocityRatio: 5,
        },

        breakpoints: {
            50: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },

            350: {
                slidesPerView: 1.50,
                spaceBetween: 15,
            },

            400: {
              slidesPerView: 1.5,
              spaceBetween: 0,
          },

            500: {
              slidesPerView: 2.2,
              spaceBetween: 10,
          },

            700: {
              slidesPerView: 2.6,
              spaceBetween: 10,
          },

        }
    });


    var mySwiper = new Swiper('#testimonials-swiper', {
        freeMode: {
            enabled: true,
            sticky: false,
            minimumVelocity: 0.1,
            momentum: true,
            momentumVelocityRatio: 5,
        },

        breakpoints: {
            50: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },

            350: {
                slidesPerView: 1.50,
                spaceBetween: 30,
            },
            
            400: {
              slidesPerView: 1.5,
              spaceBetween: 0,
          },

            500: {
              slidesPerView: 2.2,
              spaceBetween: 10,
          },

            700: {
              slidesPerView: 2.6,
              spaceBetween: 10,
          },

        }
    });


  // Swiper depoimentos desktop
  var mySwiper = new Swiper('#view-swiper-depoimentos-ds', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    updateOnWindowResize: true,
    navigation: {
      prevEl: '.left-depoimentos',
      nextEl: '.right-depoimentos',
    },


    breakpoints: {
      50: {
          slidesPerView: 1.2,
          spaceBetween: 10,
      },

      350: {
          slidesPerView: 1.45,
          spaceBetween: 0,
      },

      500: {
          slidesPerView: 2.4,
          spaceBetween: 10,
      },
      700: {
          slidesPerView: 1.9,
          spaceBetween: 10,
      },
      1000: {
          slidesPerView: 1.93,
          spaceBetween: 10,
      },
      1200: {
          slidesPerView: 1.93,
          spaceBetween: 10,
      },

      1480: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1600: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      1900: {
          slidesPerView: 3,
          spaceBetween:10,
      }

  }
   
  });