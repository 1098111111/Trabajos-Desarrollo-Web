// rutas/mainRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// Ruta principal que llama al controlador
router.get('/', mainController.index);

// Ruta para procesar el formulario de productos
router.post('/productos', mainController.guardarProducto);

module.exports = router;