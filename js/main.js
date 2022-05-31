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
  closeExames();
  fecharDepoimento();

});

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
          marginTop: "-300%",
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


// Abre o card de exames
function openExames(exame){
   
  // explode o objeto em variaveis

  let { exameNome, sobre, link } = exame;
  document.getElementById('name-procedimento-card-mobile').innerHTML = exameNome;
  document.getElementById('sobre-card-exames-mobile').innerHTML = sobre;
  document.getElementById('link-card-exames').setAttribute('href', link);
   
  $("#div-card-exames-mobile")
  .velocity({
    bottom: "20px",
  }, {
    duration: 500,
    easing: [5, 5],
    delay:1,
});

openMask();

 }


 function closeExames(){
   
  $("#div-card-exames-mobile")
  .velocity({
    bottom: "-150%",
  }, {
    duration: 300,
    easing: [5, 5],
    delay:1,
});

closeMask();

 }


 function lerDepoimento(depoimento){

    let {nomeDepoimento, fotoDepoimento, sobreDepoimento} = depoimento;

     $("#div-card-depoimentos-aberto")
       .velocity({
         bottom: "20px",
       }, {
         duration: 500,
         easing: [5, 5],
         delay: 1,
       });
    
    document.getElementById('nome-depoimento-card').innerHTML = nomeDepoimento;
    document.getElementById('sobre-deppimento-card-aberto').innerHTML = sobreDepoimento;
    document.getElementById('foto-depoimento').setAttribute('src', fotoDepoimento);

     openMask();
 }

 function fecharDepoimento(){

  $("#div-card-depoimentos-aberto")
  .velocity({
    bottom: "-250%",
  }, {
    duration: 600,
    easing: [5, 5],
    delay: 1,
  });
  
  closeMask();

 }

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


