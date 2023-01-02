const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.UUID, //  este tipo de dato es para que se genere un id automaticamente con un formmato que no se repita
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "gluten free",
              "dairy free",
              "ketogenic",
              "lacto ovo vegetarian",
              "vegan",
              "pescatarian",
              "paleolithic",
              "primal",
              "fodmap friendly",
              "whole 30",
            ],
          ],
        }
      },
    },
    { timestamps: false }
  );
};
