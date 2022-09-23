const { Produtos, TipoProduto, Categoria } = require("../models");

const detalhesPagina = {
	aves: {
		title: 'Aves',
		description: 'Pássaros são aves bastante singulares e especiais, principalmente por manterem os dias dos tutores mais felizes com suas diferentes cantorias, cores e diversidades. Mas é preciso tomar alguns cuidados para ter um viveiro ou gaiola com pássaros e, principalmente, oferecer tudo que eles precisam para viver bem.',
		base: '/aves'
	},
	gatos: {
		title: 'Gatos',
		description: 'Adotou um ou já tem um felino em casa? Então, você veio ao lugar certo, pois aqui na Petz tem tudo o que seu gato precisa. Com uma variedade incrível de itens, com certeza, seu peludinho ficará muito confortável e feliz no lar.',
		base: '/gatos'
	},
	cachorros: {
		title: 'Cachorros',
		description: 'Todo tutor de cachorro deve estar atento às necessidades e cuidados básicos para uma vida pet tranquila, saudável e feliz. Pensando nisso, é imprescindível obter itens como uma ração de qualidade, brinquedos educativos, casinha de cachorro, medicamentos e outros objetos indispensáveis.',
		base: '/cachorros'
	},
	outros: {
		title: 'Outros',
		description: 'Os animais de estimação pequenos necessitam de muito cuidado e atenção. Isso porque eles são muito mais sensíveis que os bichinhos domésticos de portes maiores e dependem totalmente de seus tutores. Portanto, para garantir o bem-estar do seu amigo pet, é preciso se atentar a alguns fatores.',
		base: '/outros'
	},
	promocoes: {
		title: 'Promoções',
		description: 'Para que o pet receba todos os cuidados necessários no seu dia a dia, o tutor precisa buscar sempre oferecer as melhores rações, acessórios, medicamentos e produtos de higiene de qualidade.  Com a promoção Pet Shop aqui da Buddy Pet, fica muito mais fácil proporcionar o bem-estar completo para seu amigão sem gastar muito. Confira!',
		base: '/promocoes'
	},
}

module.exports = {
	async index(req, res) {
		const { category, tipoProduto } = req.params;

		res.locals.url = '/produtos' + detalhesPagina[category].base;

		let produtos = await Produtos.findAll({
			include: {
				model: Categoria,
				where: {
					nome: category
				}
			}
		});
		
		if (tipoProduto) {
			produtos = produtos.filter(produto => produto.tipoProduto == tipoProduto)
		}

		res.render('produtos', { ...detalhesPagina[category], produtos })
	},

	async create(req, res) {
		res.render('formularioCriarProdutos', { title: "Formulário" });
	},

	async edit(req, res) {
		const { id } = req.params;
		const produto = await Produtos.findByPk(id);
		if(produto){
			res.render('formularioEditarProdutos', { title: "Formulário", produto });
		} else{
			res.render('produtoNaoEncontrado')
		}
	},

	async show(req, res) {
		const { id } = req.params;
		const produto = await Produtos.findByPk(id);

		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	},

	async store(req, res) {
		const { nome, preco, descricao, id_categoria, id_tipo_produto } = req.body;
		const imagem = req.file.filename;
		const produto = await Produtos.create({ 
			nome, 
			preco: Number(preco), 
			descricao, 
			id_categoria, 
			id_tipo_produto, 
			imagem
		 });

		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	},

	async update(req, res) {
		const { id } = req.params;
		const imagem = req.file.filename;
		const { nome, preco, descricao, categoria, tipoProduto } = req.body;
		const produtoAtualizado = await Produtos.update({ nome, preco, descricao, categoria, tipoProduto, imagem }, { where: {id_produto:id} });

		//res.render('detalhesProduto', { title: 'Detalhes do Produto', produto: produtoAtualizado });
		res.redirect('/produtos/detalhesProduto/' + id)
	},

	async destroy(req, res) {
		const { id } = req.params;
		const produtosAtualizado = await Produtos.destroy({ where: {id} });

		res.send(produtosAtualizado);
	},

}







