
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
return sequelize.define('Pedidos', cols, config)
}
