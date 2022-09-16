const quemSomosController = {
	quemsomos: function(req, res, next) {
		res.render('quemSomos', { title: "Quem Somos" });
	}
}


module.exports = quemSomosController