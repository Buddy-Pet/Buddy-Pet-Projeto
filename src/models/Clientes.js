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
            type: dataTypes.STRING, 
            defaultValue: "0000000000" 
        },

        senha: {
            type: dataTypes.STRING
        },

        admin: {
            type: dataTypes.BOOLEAN 
        },

        data_nascimento: {
            type: dataTypes.STRING
        },

        cpf: {
            type: dataTypes.STRING
        }

    }

    const config = {
        tableName: 'clientes',
        timestamps: false
    }

    return sequelize.define('Clientes', cols, config);
}