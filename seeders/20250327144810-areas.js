'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let areas = ['Recursos Humanos',  'Finanzas', 'Marketing',  'Atención al Cliente',  'Logística',  'Producción',  'Salud y Seguridad',  'Investigación y Desarrollo',  'Ventas']
    for(let area of areas){
      await queryInterface.bulkInsert('areas',[{
        nombre: area,
        descripcion: ('descripcion de '+area),
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('areas', null, {});
  }
};
