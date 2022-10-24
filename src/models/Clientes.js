module.exports = (sequelize, dataTypes) => {
    const cols = {
        id_cliente: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: dataTypes.STRING
        },

        email: {
            type: dataTypes.STRING
        },

        telefone: {
            type: dataTypes.STRING
        },

        senha: {
            type: dataTypes.STRING
        },

        admin: {
            type: dataTypes.BOOLEAN
        },

    }

    const config = {
        tableName: 'clientes',
        timestamps: false
    }

    return sequelize.define('Clientes', cols, config);
}