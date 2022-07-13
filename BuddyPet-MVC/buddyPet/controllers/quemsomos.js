const dados = require("../models/quemsomosModel")

const quemsomosController = {
	index: function(req, res, next) {
		res.render('quemsomos', { title: dados.title });
	}
}


module.exports = quemsomosController