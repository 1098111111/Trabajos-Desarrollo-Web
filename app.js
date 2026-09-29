// app.js (Raíz)
const express = require('express');
const path = require('path');
const app = express();

// Configurar motor de vistas (Cambiado a 'vistas' por requerimiento)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

// Middleware para leer datos de formularios POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importar y usar las rutas
const mainRoutes = require('./rutas/mainRoutes');
app.use('/', mainRoutes);

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});