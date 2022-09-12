const { Clientes } = require('../models');

module.exports = {
    async list (req, res) {
        const clientes = await Clientes.findAll();

        res.render('clientes', {clientes})
    }
}