'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicioxareas', {
      id_servicio: {
        type: Sequelize.INTEGER
      },
      id_area: {
        type: Sequelize.INTEGER
      },
      servicios_id_servicios: {
        type: Sequelize.INTEGER
      },
      area_id_area: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servicioxareas');
  }
};