const dados = require("../models/gatosModel")

const gatosController = {
	gatos: function(req, res, next) {
		res.render('gatos', { title: dados.title });
	}
}


module.exports = gatosController