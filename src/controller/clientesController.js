const { Clientes } = require('../models');

module.exports = {
    async list (req, res) {
        const clientes = await Clientes.findAll();

        res.render('clientes', {clientes})
    },

    async create(req, res) {
		res.render('criarConta', { title: "Criar Conta" });
	},

    async store(req, res) {
		const { nome, email, telefone, nascimento, cpf, senha } = req.body;
		const produto = await Clientes.create({ 
			nome, 
			email, 
			telefone, 
			data_nascimento: nascimento, 
			cpf,
            senha
		 });

		res.render('detalhesProduto', { title: 'Detalhes do Produto', produto });
	}
}