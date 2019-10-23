const { io } = require('../server');

io.on("connection", (client) => {
    console.log('usuario conectado');

    client.emit("enviarMensaje", {
        usuario: "Admin",
        Mensaje: "Bienvenido a la aplicacion"
    })

    //Escuchar
    client.on("disconnect", () => {
        console.log("usuario desconectado");
    });

    //Escuchar cliente
    client.on("enviarMensaje", (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "Todo salio bien"
        //     });
        // } else {
        //     callback({
        //         resp: "Todo salio mal!!!!!"
        //     });
        // }
    });

});