'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let [servicios, servicios_metadata] = await queryInterface.sequelize.query('SELECT id_servicio FROM servicios')
    let [areas, areas_metadata] = await queryInterface.sequelize.query('SELECT id_area FROM areas')
    await queryInterface.bulkInsert('servicioxareas', [
      {id_servicio: servicios[0].id_servicio, id_area: areas[3].id_area, servicios_id_servicios: servicios[0].id_servicio, area_id_area:areas[3].id_area, createdAt: new Date(), updatedAt: new Date() },
      {id_servicio: servicios[1].id_servicio, id_area: areas[0].id_area, servicios_id_servicios: servicios[1].id_servicio, area_id_area:areas[0].id_area, createdAt: new Date(), updatedAt: new Date() },
      {id_servicio: servicios[2].id_servicio, id_area: areas[1].id_area, servicios_id_servicios: servicios[2].id_servicio, area_id_area:areas[1].id_area, createdAt: new Date(), updatedAt: new Date() },
      {id_servicio: servicios[3].id_servicio, id_area: areas[2].id_area, servicios_id_servicios: servicios[3].id_servicio, area_id_area:areas[2].id_area, createdAt: new Date(), updatedAt: new Date() },
      {id_servicio: servicios[4].id_servicio, id_area: areas[3].id_area, servicios_id_servicios: servicios[4].id_servicio, area_id_area:areas[3].id_area, createdAt: new Date(), updatedAt: new Date() },

    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicioxareas', null, {});
  }
};
