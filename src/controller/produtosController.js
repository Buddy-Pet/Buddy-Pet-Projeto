const { lerDados } = require("../helper/manipularDados");
const produtosModel = require("../model/produtosModel")

module.exports = {
	index(req, res){
		const { category } = req.query;

		let produtos;

		if(category){
			produtos = produtosModel.findByCategory(category);
		} else {
			produtos = produtosModel.findAll();
		}
		
		res.send(produtos);
	},

	show(req, res){
		const { id } = req.params;
		const produto = produtosModel.findById(id);

		res.send(produto);
	},

	store(req, res){
		const { nome, preco, descricao, categoria } = req.body;

		const produtos = produtosModel.store({ nome, preco, descricao, categoria })

		res.send(produtos);
	},

	update(req, res){
		const { id } = req.params;
		const { nome, preco, descricao, categoria } = req.body;

		const produtoAtualizado = produtosModel.update(id, { nome, preco, descricao, categoria })
		
		res.send(produtoAtualizado);
	},

	delete(req, res){
		const { id } = req.params;
		const produtosAtualizado = produtosModel.delete(id);

		res.send(produtosAtualizado);
	},

	cachorros: function(req, res, next){
		res.render('produtos', {title: 'Cachorros', description: "Todo tutor de cachorro deve estar atento às necessidades e cuidados básicos para uma vida pet tranquila, saudável e feliz. Pensando nisso, é imprescindível obter itens como uma ração de qualidade, brinquedos educativos, casinha de cachorro, medicamentos e outros objetos indispensáveis.", produtos: produtosModel.findByCategory('cachorros') });
	},
	gatos: function(req, res, next){
		res.render('produtos', {title: 'Gatos', description: "O gato é um dos animais domésticos mais procurados para companhia. Independentes, esses animais carregam fortes heranças de seus ancestrais felinos, como o instinto da caça, muito reproduzido em suas brincadeiras. Esse animal adorável, no entanto, precisa de cuidados para viver mais e com bem-estar. Na Buddy Pet você encontra alimentos, medicamentos, brinquedos e todos os artigos para seu gato!", produtos: produtosModel.findByCategory('gatos')});
	},
	aves: function(req, res, next){
		res.render('produtos', {title: 'Aves', description: "Pássaros são aves bastante singulares e especiais, principalmente por manterem os dias dos tutores mais felizes com suas diferentes cantorias, cores e diversidades. Mas é preciso tomar alguns cuidados para ter um viveiro ou gaiola com pássaros e, principalmente, oferecer tudo que eles precisam para viver bem", produtos:produtosModel.findByCategory('Aves')});
	},
	outros: function(req, res, next){
		res.render('produtos', {title: 'Outros', description: "", produtos:produtosModel.findByCategory('outros')});
	}
}


