// controller/mainController.js
const data = require('../data/barberiaData');
const usuarios = require('../data/usuariosData');

const mainController = {
    index: (req, res) => {
        res.render('index', { 
            servicios: data.servicios,
            colaboradores: data.colaboradores 
        });
    },
    
    // Mostrar vista de Login
    login: (req, res) => {
        res.render('auth/login');
    },

    // Procesar Login
    procesarLogin: (req, res) => {
        const { email, password } = req.body;
        const usuarioEncontrado = usuarios.find(u => u.email === email && u.password === password);
        
        if (usuarioEncontrado) {
            res.redirect('/');
        } else {
            res.send("Credenciales incorrectas. <a href='/login'>Volver a intentar</a>");
        }
    },

    // Mostrar vista de Registro
    register: (req, res) => {
        res.render('auth/register');
    },

    // Procesar Registro
    procesarRegistro: (req, res) => {
        const { nombre, email, password } = req.body;
        usuarios.push({ nombre, email, password });
        console.log("Usuarios actualizados:", usuarios);
        res.redirect('/login');
    },

    guardarProducto: (req, res) => {
        const nuevoServicio = req.body;
        console.log("Producto recibido:", nuevoServicio);
        res.redirect('/');
    }
};

module.exports = mainController;y