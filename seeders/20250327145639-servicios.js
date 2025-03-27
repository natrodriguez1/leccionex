'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicios',[{
      nombre: 'consultoría de contenido',
      descripcion: ('descripcion de consultoría de contenido'),
      precio: 100.00,
      supervisor: 'Ana Rodriguez',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Consultoría en Infraestructura de TI',
      descripcion: 'Asesoría especializada en la configuración y optimización de infraestructuras tecnológicas para empresas.',
      precio: 150.00,
      supervisor: 'Carlos Pérez',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Gestión de Recursos Humanos',
      descripcion: 'Consultoría para la implementación de estrategias de recursos humanos, incluyendo reclutamiento, capacitación y bienestar laboral.',
      precio: 120.00,
      supervisor: 'Laura Gómez',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Planificación Financiera',
      descripcion: 'Consultoría para la elaboración de estrategias financieras, presupuestos y análisis de riesgos para mejorar la rentabilidad.',
      precio: 180.00,
      supervisor: 'Jorge Martín',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Estrategias de Marketing Digital',
      descripcion: 'Consultoría para el desarrollo de estrategias de marketing en redes sociales, SEO, SEM y campañas publicitarias online.',
      precio: 140.00,
      supervisor: 'Clara Ruiz',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Optimización de Atención al Cliente',
      descripcion: 'Consultoría para mejorar la experiencia del cliente a través de canales digitales y la automatización de procesos de atención.',
      precio: 110.00,
      supervisor: 'Antonio Sánchez',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Gestión Logística y Supply Chain',
      descripcion: 'Consultoría para la optimización de la cadena de suministro, gestión de inventarios y distribución de productos de manera eficiente.',
      precio: 160.00,
      supervisor: 'Verónica López',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Mejora de Procesos de Producción',
      descripcion: 'Consultoría para la mejora continua de procesos productivos, optimización de recursos y reducción de tiempos de producción.',
      precio: 130.00,
      supervisor: 'Felipe Hernández',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Consultoría en Salud y Seguridad Laboral',
      descripcion: 'Asesoría especializada en la creación e implementación de protocolos de salud y seguridad en el entorno laboral.',
      precio: 140.00,
      supervisor: 'María Fernández',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Investigación y Desarrollo de Nuevos Productos',
      descripcion: 'Consultoría en la creación e innovación de nuevos productos, desde la fase de investigación hasta su comercialización.',
      precio: 200.00,
      supervisor: 'Pedro Martínez',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Estrategias de Ventas y Negociación',
      descripcion: 'Consultoría para desarrollar y mejorar las estrategias de ventas, capacitación en técnicas de negociación y gestión de equipos comerciales.',
      precio: 150.00,
      supervisor: 'Elena Ruiz',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
