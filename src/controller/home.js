const dados = require("../model/homeModel")

const homeController = {
	home: function(req, res, next) {
		res.render('home', { title: dados.title });
	}
}


module.exports = homeController