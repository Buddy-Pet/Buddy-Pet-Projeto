const dados = require("../models/criarContaModel")

const criarcontaController = {
	criarConta: function(req, res, next) {
		res.render('criarConta', { title: dados.title });
	}
}


module.exports = criarcontaController