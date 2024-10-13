function send() {

    const nombre = document.getElementById('Nombre').value;
    const telefono = document.getElementById('Telefono').value;
    const email = document.getElementById('email').value;
    const modelo = document.getElementById('modelo').value;


    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerText = `¡Envío realizado exitosamente! Nombre: ${nombre}, Teléfono: ${telefono}, Correo: ${email}, Modelo: ${modelo}`;}