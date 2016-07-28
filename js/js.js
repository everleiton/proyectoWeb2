$(document).ready(function(){
  data();
  menus();
});

function menus() {
  $("#context-menu").hide();
  //mostramos el menú con click derecho
  $(document).bind("contextmenu", function(e){
    $("#context-menu").css({'display':'block', 'left':e.pageX, 'top':e.pageY});
    return false;
  });
  //cuando hagamos click, el menú desaparecerá
  $(document).click(function(e){
    if(e.button == 0){
      $("#context-menu").css("display", "none");
    }
  });
  //si pulsamos escape, el menú desaparecerá
  $(document).keydown(function(e){
    if(e.keyCode == 27){
      $("#context-menu").css("display", "none");
    }
  });
    (function() {

      var dialogButton = document.querySelector('.addpro');
      var dialog = document.querySelector('#dialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialogButton.addEventListener('click', function() {
        dialog.showModal();
      });
      dialog.querySelector('button:not([disabled])').addEventListener('click', function() {
        dialog.close();
      });
    }());

    (function() {

      var dialogButton = document.querySelector('.addper');
      var dialog = document.querySelector('#dialog2');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialogButton.addEventListener('click', function() {
        dialog.showModal();
      });
      dialog.querySelector('button:not([disabled])')
      .addEventListener('click', function() {
        dialog.close();
      });
    }());
  }






  function data() {
    $('#btnagregarproyecto').click(function(){
      var nom = document.getElementById('nombreproyecto').value;
    crearcuadro(nom);
  //  localStorage.removeItem('drafts.queue');

      dialog.close();
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem('Nombre', nom);
      document.getElementById("nombreproyecto").value = null;

      });
  }
  function crearcuadro(nombre) {
      $('.contenedor').append('<div class="proyecto" id=nombre ></div>');
  }
