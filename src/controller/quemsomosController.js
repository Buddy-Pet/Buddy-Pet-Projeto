const dados = require("../model/quemSomosModel")

const quemSomosController = {
	quemsomos: function(req, res, next) {
		res.render('quemSomos', { title: dados.title });
	}
}


module.exports = quemSomosController