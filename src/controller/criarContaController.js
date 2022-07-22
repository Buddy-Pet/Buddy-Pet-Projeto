const dados = require("../model/criarContaModel")

const criarcontaController = {
	criarConta: function(req, res, next) {
		res.render('criarConta', { title: dados.title });
	}
}


module.exports = criarcontaController