const dados = require("../models/politicasModel")

const politicasController = {
	index: function(req, res, next) {
		res.render('politicas', { title: dados.title });
	}
}


module.exports = politicasController