
module.exports = (sequelize, dataTypes) => {
    const cols = {
        id_pedido: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },

        n_pedidos: {
            type: dataTypes.STRING
        },

        data_pedido: {
            type: dataTypes.STRING
        },

        endereco: {
            type: dataTypes.STRING
        },

      

    }

    const config = {
        tableName: 'pedidos',
        timestamps: false ,
     
}
    const Pedidos = sequelize.define('Pedidos', cols, config);

    Pedidos.associate = (models) => {
        Pedidos.belongsTo(models.Clientes, {
          as: 'clientes', 
          foreignKey: 'id_cliente'
        });
      }
    
    return Pedidos
}
