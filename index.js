import express from 'express';
import router from './routes/index.js';

//? Crear el servidor
const app = express();

//? Habilitando las rutas
app.use('/', router);

app.listen(5000);
console.log('Funcionando en el puerto 5000 🔥🔥')