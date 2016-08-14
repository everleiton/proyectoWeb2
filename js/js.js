$(document).ready(function() {
  datoproyecto();
  datopersona();
  menus();
  eliminar();
  espera();
  ocultarespera();
  obtenerid();
});
var x = 0;
var y = 0;



function menus() {
  $("#context-menu").hide();
  //mostramos el menú con click derecho
  $(document).bind("contextmenu", function(e) {
    $("#context-menu").css({
      'display': 'block',
      'left': e.pageX,
      'top': e.pageY
    });
    x = e.pageX;
    y = e.pageY;
    return false;
  });
  //cuando hagamos click, el menú desaparecerá
  $(document).click(function(e) {
    if (e.button == 0) {
      $("#context-menu").css("display", "none");
    }
  });
  //si pulsamos escape, el menú desaparecerá
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $("#context-menu").css("display", "none");
    }
  });
  (function() {
    
    var dialogButton = document.querySelector('.addpro');
    var dialog = document.querySelector('#dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
      $('#dialog').css('left' + this.x + '; top' + this.y);
      
    }
    dialogButton.addEventListener('click', function() {
      dialog.showModal();
      $('#dialog').css('left' + this.x + '; top' + this.y);
    });
    dialog.querySelector('button:not([disabled])').addEventListener('click', function() {
      dialog.close();
    });
  }());
  
  (function() {
    
    var dialogButton = document.querySelector('.addper');
    var dialog = document.querySelector('#dialog2');
    if (!dialog.showModal) {
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






function datoproyecto() {
  /////////////////Datos de proyecto//////////////////////
  $('#btnagregarproyecto').click(function() {
    var nom = document.getElementById('nombreproyecto').value;
    if (nom === "") {
      $('#nombreproyecto').css('border-color: red');
      alert("No debe dejar espacio en blanco");
    } else {
      crearcuadro(nom);    
      dialog.close();
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem('Nombre', nom);
    }
    document.getElementById("nombreproyecto").value = null;
    
  });
}


function crearcuadro(nombre) {
  $('.contenedor').append(' <div class="proyecto" id="pro-'+nombre+'" ><div class="nombre">'+
  '  <div> <img src="./imagenes/proyecto.png" height="16px" width="16px" alt="imagen no encontrada" /></div>'+
  '  <div><h5>'+nombre+'</h5></div> <div class="menucuadro"><ul id="menu">'+
  '  <li id="opciones"><img src="./imagenes/menu.png" id="ico" height="30px" width="30px" alt="imagen no encontrada" />'+
  '  <ul><li id="editar"><a href="">Editar</a></li><li id="eliminar"><a href="">Eliminar</a></li>'+
  '  </ul></li></ul></div></h5></div><div class="persona"  ondrop="soltar(event)" ondragover="permitirSoltar(event)"> </div></div>');
}
function datopersona() {
  ///////////////Datos de persona/////////////////
  $('#btnagregarpersona').click(function() {
    var per = document.getElementById('nombrepersona').value;
    if (per == "") {
      $('#nombrepersona').css('border-color: red');
      
    } else {
      crearpersona(per);    
      dialog2.close();
      /*Guardando los datos en el LocalStorage*/
      localStorage.setItem('Nombre', nom);
    }
    document.getElementById("nombrepersona").value = null;
    
  });
}

function crearpersona(persona) {
  $('.espera').append('<div class="cuadritopersona" draggable="true" ondragstart="arrastrar(event)" id= '+persona+'>'+
  '<div><img  draggable="false" src="./imagenes/face.png" alt="" height="50px" width="50px" /></div>'+
  '<div><h6 draggable="false" id="nombrecarita">'+persona+'</h6></div></div>');
}


function eliminar(){
  //  var id=  document.getElementById("#proyecto").addEventListener('click', Ejecutar, false);
  $('#elimminar').click(function(event) {
    
    $('#'+id).remove();
    
  });
  
}

function espera(){
  $('#mostrarespera').click(function(event) {
    $('#mostrarespera').css("visibility","hidden");
    $('.espera').css("visibility","visible");
    $('#ocultarespera').css("visibility","visible");
    
  });
}

function ocultarespera(){
  $('#ocultarespera').click(function(event) {
    $('#mostrarespera').css("visibility","visible");
    $('#ocultarespera').css("visibility","hidden");
    $('.espera').css("visibility","hidden");
    
  });
}

function obtenerid(){
  $("div").click(function() {
    var oID = $(this).attr("id");
    //alert(oID);
  });
}
/*
elem.find('.deleteprojectclick').click(function() {
deleteProject(elem);
});
*/



function btnEditar_Click(event) {
  
  txtTitulo.value = this.elemento.titulo;
  txtDescripcion.value = this.elemento.descripcion;
  ddlTipo.value = this.elemento.tipo;
  
}
/*
Selección de elementos en base al nombre de clase

$('div.myClass'); // si se especifica el tipo de elemento,
// se mejora el rendimiento de la selección


SELECCIONAR VARIOS
$('[id^=pro]')


*/