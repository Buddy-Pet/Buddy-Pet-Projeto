module.exports = (sequelize, dataTypes) => {
    const cols = {
        id_tipo_produto: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'tipo_produto',
        timestamps: false
    }

    return sequelize.define('TipoProduto', cols, config);
}