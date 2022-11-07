const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          isInt: true,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /([A-Z])\w+/,
          notEmpty: true,
        },
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      healthScore: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
          max: 100,
        },
      },
      steps: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.STRING,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
