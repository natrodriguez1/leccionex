'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicio.init({
    id_servicio: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    precio: DataTypes.DOUBLE,
    supervisor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};