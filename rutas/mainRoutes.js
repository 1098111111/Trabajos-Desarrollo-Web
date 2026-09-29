// rutas/mainRoutes.js
const express = require('express');
const router = express.Router();

// CORREGIDO: Apunta directo a '../controller/mainController' desde la carpeta rutas
const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.post('/login', mainController.procesarLogin);
router.get('/register', mainController.register);
router.post('/register', mainController.procesarRegistro);
router.post('/productos', mainController.guardarProducto);

module.exports = router;