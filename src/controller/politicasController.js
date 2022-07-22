const dados = require("../model/politicasModel")

const politicasController = {
	politicas: function(req, res, next) {
		res.render('politicas', { title: dados.title });
	}
}


module.exports = politicasController