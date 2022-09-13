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
				type: dataTypes.INTEGER
			},

			id_produto: {
				type: dataTypes.INTEGER
			},
			
			
			

	}

	const config = {
			tableName: 'pedidos_produtos',
			timestamps: false
	}

	const PedidosProdutos = sequelize.define('PedidosProdutos', cols, config);

	PedidosProdutos.associate = (models) => {
	  PedidosProdutos.belongsTo(models.Pedidos, {
		as: 'pedidos', 
		foreignKey: 'id_pedido'
	  }),
	  PedidosProdutos.belongsTo(models.Produtos, {
		as: 'produtos', 
		foreignKey: 'id_produto'
	  });
	} 
	  	
	return PedidosProdutos
}