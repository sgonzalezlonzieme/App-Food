const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.4



module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
       type: DataTypes.UUID,
       primaryKey: true,
       allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    spoonacularScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false,
     }
  });
};
