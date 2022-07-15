const dados = require("../models/criarContaModel")

const criarcontaController = {
	index: function(req, res, next) {
		res.render('criarConta', { title: dados.title });
	}
}


module.exports = criarcontaController