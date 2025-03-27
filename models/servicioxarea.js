'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicioxarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicioxarea.init({
    id_servicio: DataTypes.INTEGER,
    id_area: DataTypes.INTEGER,
    servicios_id_servicios: DataTypes.INTEGER,
    area_id_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'servicioxarea',
    tableName: 'servicioxareas'
  });
  return servicioxarea;
};