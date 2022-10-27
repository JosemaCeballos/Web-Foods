const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        //defaultValue: "No summary",
      },
      healthScore: {
        type: DataTypes.INTEGER,
        //defaultValue: 0,
      },
      steps: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://cdn.dribbble.com/users/189859/screenshots/3639645/abc.gif",
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
