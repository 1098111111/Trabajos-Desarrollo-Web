// rutas/mainRoutes.js
const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// Rutas principales
router.get('/', mainController.index);

// Rutas de Autenticación (Login y Registro)
router.get('/login', mainController.login);
router.post('/login', mainController.procesarLogin);

router.get('/register', mainController.register);
router.post('/register', mainController.procesarRegistro);

// Ruta de productos
router.post('/productos', mainController.guardarProducto);

module.exports = router;