const dados = require("../model/acessarModel")

const acessarController = {acessar: function(req, res, next) {
		res.render('acessar', { title: dados.title });
	}
}


module.exports = acessarController