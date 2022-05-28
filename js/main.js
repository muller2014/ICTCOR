$(document).ready(function() {


$('#btn-menu-mobile, .btn-menu-tablet').click(function(){
   
   openMenu();

});


$('#close-menu-mobile-topo').click(function(){

  closeMenu();

});


$('.abrir-telefones').click(function(){

   openWindowPhone();

});

$('.fechar-telefones').click(function(){

  closeWindowPhone();

});


$('#mask').click(function(){

  closeWindowPhone();
  closeMenu();

});





function openMenu(){

    $("#menu-mobile-list-out")
        .velocity({
          width: "90%",
        }, {
          duration: 1,
          easing: [5, 5],
      });


       $("#menu-mobile-list")
        .velocity({
         right: "0px",
        }, {
          duration: 900,
          easing: [5, 5],
          delay:5,
      });  

        openMask();

}


function closeMenu(){

   $("#menu-mobile-list")
        .velocity({
          right: "-800px",
        }, {
          duration: 500,
          easing: [5, 5],
          
      });  


    $("#menu-mobile-list-out")
        .velocity({
          width: "0%",
        }, {
          duration: 1,
          easing: [5, 5],
          delay:550,
      });

    closeMask();

}


function openWindowPhone(){

     $("#window-call-now")
        .velocity({
          marginTop: "0%",
        }, {
          duration: 500,
          easing: [5, 5],
      });
      
      openMask();

}


function closeWindowPhone(){


       $("#window-call-now")
        .velocity({
          marginTop: "-200%",
        }, {
          duration: 600,
          easing: [5, 5],
      });

      closeMask();


}


function openMask(){

     $("#mask")
        .velocity({
          height: "100%",
        }, {
          duration: 1,
          easing: [5, 5],
      });

      $("#mask")
        .velocity({
          opacity:0.95,
        }, {
          duration: 600,
          delay:2,
      });   

}

function closeMask(){

   $("#mask")
      .velocity({
        opacity:0,
      }, {
        duration: 280,
    }); 


  $("#mask")
    .velocity({
          height: "0%",
        }, {
          duration: 1,
          easing: [5, 5],
          delay:300,
    });

}

  
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
                slidesPerView: 2.4,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 2.6,
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2.7,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3.1,
                spaceBetween: 10,
            },

            1480: {
                slidesPerView: 3.6,
                spaceBetween: 10,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 100,
            },
            1900: {
                slidesPerView: 5,
                spaceBetween:100,
            }

        }
    });

  

  // Swiper depoimentos desktop
  var mySwiper = new Swiper('#view-swiper-depoimentos-ds', {
    direction: 'horizontal',
    loop: true,
    speed: 800,
    autoHeight: true,
    slidesPerView: 2.93,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    updateOnWindowResize: true,
    navigation: {
      prevEl: '.left-depoimentos',
      nextEl: '.right-depoimentos',
    },
   
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

            500: {
                slidesPerView: 2.4,
                spaceBetween: 10,
            },
            700: {
                slidesPerView: 2.6,
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 3.5,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },

            1480: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            1600: {
                slidesPerView: 5.5,
                spaceBetween: 10,
            },
            1900: {
                slidesPerView: 7,
                spaceBetween: 10,
            }

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

        }
    });
  
   
     var mySwiper = new Swiper('#faixa-videos-mb', {
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

        }
    });


   
     // Troca o tamanho da Navbar
    window.onscroll = function() {
      scrollFunction();
    };

     function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 220) {
        document.getElementById("desktop-menu").style.marginTop = "-50px";

      } else {
        document.getElementById("desktop-menu").style.marginTop = "0px";
 
        }

      };  


});