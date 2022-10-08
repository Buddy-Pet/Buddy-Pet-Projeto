const carrinhoController = {
	carrinho: function(req, res, next) {
		res.render('carrinho', { title: "Carrinho" });
	}
}


module.exports = carrinhoController