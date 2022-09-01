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
        tablename: 'categorias',
        timestamp: true
    }

    return sequelize.define('categorias', cols, config);
}