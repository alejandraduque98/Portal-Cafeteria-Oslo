'use strict'
window.onload = function () {
    var flotar = document.getElementsByClassName('flotar');

    var boton = document.getElementsByClassName('navBoton');

    var ActivarColor = false;

    boton[0].addEventListener(
        "click",
        function (evento) {

            //Estado del boton
            if (ActivarColor == false) {
                // el menu esta activo y debo mostrarlo y cambiar el estado a true (menu mostrado)
                flotar[0].style.backgroundColor = 'rgba(39, 24, 21, 0.514)';
                ActivarColor = true;


            } else {
                // el menu esta inactivo y debo guardarlo y cambiar el estado a flaso(menu oculto)
                flotar[0].style.backgroundColor = 'rgba(39, 24, 21, 0)';
                ActivarColor = false;

            }
            accion();
        }
    );

    function accion() {

        var enlace = document.getElementsByClassName('nav-enlace');


        for (var i = 0; i < enlace.length; i++) {

            enlace[i].classList.toggle('Desaparece')

        }
    }


};

