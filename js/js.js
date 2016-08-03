$(document).ready(function() {
    data();
    menus();
    enter();
});
var x = 0;
var y = 0;

function enter() {

    document.onkeypress = function(e) {
        var esIE = (document.all);
        var esNS = (document.layers);
        tecla = (esIE) ? event.keyCode : e.which;
        if (tecla == 13) {
            alert("Ud. ha presionado la tecla Enter");
            return false;
        }
    }

}

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






function data() {
    $('#btnagregarproyecto').click(function() {
        var nom = document.getElementById('nombreproyecto').value;
        if (nom == 'LKNJB') {
            $('#nombreproyecto').css('border-color: red');

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
    $('.contenedor').append('<div class="proyecto" id="' + nombre + '"><div class="nombre"><div> <img src="./imagenes/proyecto.png" height="16px" width="16px" alt="imagen no encontrada" /></div>' +
        '    <div><h5>' + nombre + '</h5></div><div class="botonopcionescuadro">' +
        '  <button id="menu-speed' + nombreproyecto + '" class="mdl-button mdl-js-button mdl-button--icon"><img src="./imagenes/menu.png" height="30px" width="30px" alt="imagen no encontrada" /></button>' +
        '<ul class="mdl-menu mdl-js-menu" for="menu-speed' + nombreproyecto + '">' +
        '<li class="mdl-menu__item" id="">Editar</li><li class="mdl-menu__item" id="">Eiminar</li></ul></div></h5></div><div class="persona"> </div> </div>');


}


function btnEditar_Click(event) {

    txtTitulo.value = this.elemento.titulo;
    txtDescripcion.value = this.elemento.descripcion;
    ddlTipo.value = this.elemento.tipo;

}
/*
Selección de elementos en base al nombre de clase

$('div.myClass'); // si se especifica el tipo de elemento,
                  // se mejora el rendimiento de la selección
*/