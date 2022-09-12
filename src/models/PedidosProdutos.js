module.exports = (sequelize, dataTypes) => {
	const cols = {
			id_pedido_produto: {
					type: dataTypes.INTEGER,
					primaryKey: true,
					autoIncrement: true
			},

			valor: {
					type: dataTypes.DECIMAL(12,2)
			},

			desconto: {
				type: dataTypes.DECIMAL(12,2)
			},

			quantidade: {
					type: dataTypes.INTEGER
			},

			id_pedido: {
				type:           dataTypes.INTEGER,
				references:     'pedidos',
				referencesKey:  'id_pedidos'
			},

			id_produto: {
				type:           dataTypes.INTEGER,
				references:     'produtos',
				referencesKey:  'id_produto'
			}

	}

	const config = {
			tableName: 'pedidos_produtos',
			timestamps: false
	}

	return sequelize.define('PedidosProdutos', cols, config);
}