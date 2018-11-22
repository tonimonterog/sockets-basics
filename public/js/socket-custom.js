var socket = io();

// Escuchar sucesos -> on
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor');
});

// Para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Toni',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar el cliente
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});