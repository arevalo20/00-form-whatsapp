document.querySelector('#submit').addEventListener('click', function () {

    // let cliente = document.querySelector('#cliente').value;
    // let fecha = document.querySelector('#fecha').value;
    // let hora = document.querySelector('#hora').value;
    // let barbero = document.querySelector('#barbero').value;
    // let servicio = document.querySelector('#servicio').value;

    let fecha = document.querySelector('#fecha').value;
    let ciudad = document.querySelector('#ciudad').value;
    let estado = document.querySelector('#estado').value;
    let denuncia = document.querySelector('#denuncia').value;

    // let url = "https://api.whatsapp.com/send?phone=522224738550&text=*_La Neta Noticias_*%0A*Reservas*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu reserva*%0A" + fecha + "%0A*Indica la hora de tu reserva*%0A" + hora + "%0A*Barbero de preferencia*%0A" + barbero + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + servicio;

    let url = "https://api.whatsapp.com/send?phone=522224738550&text=*_La Neta Noticias_*%0A*DENUNCIA*%0A%0A*Fecha*%0A" + fecha + "%0A*Indica la ciudad*%0A" + ciudad + "%0A*Indica el estado*%0A" + estado + "%0A*¿Cuál es tu denuncia?*%0A" + denuncia;
    window.open(url);

});