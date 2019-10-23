var socket = io();


//Escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexcion con el servidor");
});

//Enviar informacion
socket.emit("enviarMensaje", {
    usuario: 'Romario',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log("Respuesta server", resp);
});


//Escuchar info
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor", mensaje);
})