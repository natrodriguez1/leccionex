'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('servicioxareas', {
        fields: ['id_servicio'],
        name: 'servicio_id_fk',
        type: 'foreign key',
        references: {
        table: 'servicios',
        field: 'id_servicio'
      },
        onDelete: 'cascade',
        onUpdate: 'set null'
      });
      await queryInterface.addConstraint('servicioxareas', {
        fields: ['id_area'],
        name: 'area_id_fk',
        type: 'foreign key',
        references: {
        table: 'areas',
        field: 'id_area'
      },
        onDelete: 'cascade',
        onUpdate: 'set null'
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('servicioxareas', 'area_id_fk')
    await queryInterface.removeConstraint('servicioxareas', 'servicio_id_fk')
  }
};
