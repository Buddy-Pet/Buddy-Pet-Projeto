module.exports = (sequelize, dataTypes) => {
    const cols = {
        id_categoria: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: dataTypes.STRING
        }
    }

    const config = {
        tableName: 'categorias',
        timestamps: false
    }

    return sequelize.define('Categoria', cols, config);
}