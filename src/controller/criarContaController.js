const criarcontaController = {
	criarConta: function(req, res, next) {
		res.render('criarConta', { title: "Criar Conta" });
	}
}


module.exports = criarcontaController