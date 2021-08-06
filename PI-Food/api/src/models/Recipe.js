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
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
     }
  });
};
