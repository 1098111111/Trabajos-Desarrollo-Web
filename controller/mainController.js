// controller/mainController.js
const data = require('../data/barberiaData');

const mainController = {
    index: (req, res) => {
        // Renderiza la vista index mandándole los datos de la barbería
        res.render('index', { 
            servicios: data.servicios,
            colaboradores: data.colaboradores 
        });
    },
    guardarProducto: (req, res) => {
        // Lógica para capturar el formulario del producto
        const nuevoServicio = req.body;
        console.log("Producto recibido:", nuevoServicio);
        res.redirect('/');
    }
};

module.exports = mainController;