const { lerDados } = require("../helper/manipularDados");
const produtosModel = require("../model/produtosModel");
const detalhesPagina = {
	aves: {
		title: 'Aves',
		description: 'Pássaros são aves bastante singulares e especiais, principalmente por manterem os dias dos tutores mais felizes com suas diferentes cantorias, cores e diversidades. Mas é preciso tomar alguns cuidados para ter um viveiro ou gaiola com pássaros e, principalmente, oferecer tudo que eles precisam para viver bem.'
	},
	gatos: {
		title: 'Gatos',
		description: 'Adotou um ou já tem um felino em casa? Então, você veio ao lugar certo, pois aqui na Petz tem tudo o que seu gato precisa. Com uma variedade incrível de itens, com certeza, seu peludinho ficará muito confortável e feliz no lar.'
	},
	cachorros: {
		title: 'Cachorros',
		description: 'Todo tutor de cachorro deve estar atento às necessidades e cuidados básicos para uma vida pet tranquila, saudável e feliz. Pensando nisso, é imprescindível obter itens como uma ração de qualidade, brinquedos educativos, casinha de cachorro, medicamentos e outros objetos indispensáveis.'
	},
	outros: {
		title: 'Outros',
		description: 'Os animais de estimação pequenos necessitam de muito cuidado e atenção. Isso porque eles são muito mais sensíveis que os bichinhos domésticos de portes maiores e dependem totalmente de seus tutores. Portanto, para garantir o bem-estar do seu amigo pet, é preciso se atentar a alguns fatores.'
	},
	promocoes: {
		title: 'Promoções',
		description: 'Para que o pet receba todos os cuidados necessários no seu dia a dia, o tutor precisa buscar sempre oferecer as melhores rações, acessórios, medicamentos e produtos de higiene de qualidade.  Com a promoção Pet Shop aqui da Buddy Pet, fica muito mais fácil proporcionar o bem-estar completo para seu amigão sem gastar muito. Confira!'
	},
}

module.exports = {
	index(req, res) {
		const { category } = req.query;

		let produtos;

		if (category) {
			produtos = produtosModel.findByCategory(category);
		} else {
			produtos = produtosModel.findAll();
		}

		// res.send(produtos);
		res.render('produtos', { ...detalhesPagina[category], produtos })
	},

	create(req, res) {
		res.render('formularioCriarProdutos', { title: "Formulário" });
	},

	edit(req, res) {
		const { id } = req.params;
		const produto = produtosModel.findById(id);

		res.render('formularioEditarProdutos', { title: "Formulário", produto });
	},

	show(req, res) {
		const { id } = req.params;
		const produto = produtosModel.findById(id);

		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	},

	store(req, res) {
		const { nome, preco, descricao, categoria, tipoProduto } = req.body;
		const imagem = req.file.filename;
		const produtos = produtosModel.store({ nome, preco, descricao, categoria, tipoProduto, imagem });
		const produto = produtos.at(-1)
			
		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	},

	update(req, res) {
		const { id } = req.params;
		const imagem = req.file.filename;
		const { nome, preco, descricao, categoria, tipoProduto } = req.body;
		const produtoAtualizado = produtosModel.update(id, { nome, preco, descricao, categoria, tipoProduto, imagem });
		
		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto: produtoAtualizado });
	},

	delete(req, res) {
		const { id } = req.params;
		const produtosAtualizado = produtosModel.delete(id);

		res.send(produtosAtualizado);
	},

}







