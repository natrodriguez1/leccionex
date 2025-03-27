'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.area.belongsToMany(models.servicio, { through:
        'servicioxarea', foreignKey: "id_area" } );
        }
  }
  area.init({
    id_area: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'area',
    tableName: 'areas',
  });
  return area;
};