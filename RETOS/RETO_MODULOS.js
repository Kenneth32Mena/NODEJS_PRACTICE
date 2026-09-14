const os = require('os');
const path = require('path');
const http = require('http');
const events = require('events');

console.log(os.arch());
console.log(path.dirname(__filename));
emisor.emit('Aviso','Hola desde emisor.emit🗿')

const emisor = new events.EventEmitter();
emisor.on('Aviso', aviso => {
    console.log(`Evento personalizado emitido! ${aviso}`);
});

const equipo= '127.0.0.1';
const puerto = 3003;
const app = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end('Hola este es mi segundo servidor');
});
app.listen(puerto,equipo, ()=>{
    console.log(`Servidor activo en el puerto: ${puerto}\nURL del servidor: http://${equipo}:${puerto}/`);
});