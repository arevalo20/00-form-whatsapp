document.querySelector('#submit').addEventListener('click', function () {

    // let cliente = document.querySelector('#cliente').value;
    // let fecha = document.querySelector('#fecha').value;
    // let hora = document.querySelector('#hora').value;
    // let barbero = document.querySelector('#barbero').value;
    // let servicio = document.querySelector('#servicio').value;

    let ciudad = document.querySelector('#ciudad').value;
    let estado = document.querySelector('#estado').value;
    let denuncia = document.querySelector('#denuncia').value;

    let url = 'https://api.whatsapp.com/send?phone=522224738550&text=*_La Neta Noticias_*%0A*DENUNCIA*%0A%0A*Indica la ciudad*%0A' + ciudad + '%0A*Indica el estado*%0A' + estado + '%0A*¿Cuál es tu denuncia?*%0A' + denuncia;

    window.open(url);

});