const dados = require("../model/quemsomosModel")

const quemsomosController = {
	quemsomos: function(req, res, next) {
		res.render('quemsomos', { title: dados.title });
	}
}


module.exports = quemsomosController