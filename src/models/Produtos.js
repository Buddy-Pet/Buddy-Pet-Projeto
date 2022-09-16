module.exports = (sequelize, dataTypes) => {
	const cols = {
            id_produto: {
					type: dataTypes.INTEGER,
					primaryKey: true,
					autoIncrement: true
			},

			nome: {
                type: dataTypes.STRING
            },

            preco: {
				type: dataTypes.DECIMAL(12,2)
			},

            descricao: {
                type: dataTypes.STRING
            },

			quantidade: {
				type: dataTypes.INTEGER
			},

			id_tipo_produto: {
				type: dataTypes.INTEGER
			},

			id_categoria: {
				type: dataTypes.INTEGER
			}

	}

	const config = {
			tableName: 'produtos',
			timestamps: false
	}

	const Produtos = sequelize.define('Produtos', cols, config);

	Produtos.associate = (models) => {
	  Produtos.belongsTo(models.TipoProduto, {
		as: 'tipo_produto', 
		foreignKey: 'id_tipo_produto'
	  }),
	  Produtos.belongsTo(models.Categoria, {
		as: 'categorias', 
		foreignKey: 'id_categoria'
	  });
	}
	  	
	return Produtos
}