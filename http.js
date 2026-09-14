const http = require('http');
const equipo= '127.0.0.1';
const puerto = 3001;
const app = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end('Hola este es mi primer servidor');
});
app.listen(puerto,equipo, ()=>{
    console.log(`Servidor activo en el puerto: ${puerto}\nURL del servidor: http://${equipo}:${puerto}/`);
});