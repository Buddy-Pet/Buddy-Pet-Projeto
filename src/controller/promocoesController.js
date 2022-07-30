const dados = require("../model/promocoesModel")

const promocoesController = {
	promocoes: function(req, res, next) {
		res.render('promocoes', { title: dados.title });
	}
}


module.exports = promocoesController