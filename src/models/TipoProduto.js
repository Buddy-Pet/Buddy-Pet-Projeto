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

    const TipoProduto = sequelize.define('TipoProduto', cols, config);

    TipoProduto.associate = (models) => {
        TipoProduto.hasMany(models.Produtos, {
          as: 'produtos', 
          foreignKey: 'id_tipo_produto'
        });
      }
    
    return TipoProduto
}