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

    const Categoria = sequelize.define('Categoria', cols, config);

    Categoria.associate = (models) => {
        Categoria.hasMany(models.Produtos, {
          as: 'produtos', 
          foreignKey: 'id_categoria'
        });
      }
    
    return Categoria
}


    
