const acessarController = {acessar: function(req, res, next) {
		res.render('acessar', { title: "Acessar Conta" });
	}
}


module.exports = acessarController