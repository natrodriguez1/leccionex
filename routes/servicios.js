var express = require('express');
var router = express.Router();
module.exports = router;

const {Sequelize, Op, INTEGER} = require('sequelize');
const Servicio = require('../models').servicio;
const Area = require('../models').area;

router.get('/findAll/json',function(req, res, next) {
    Servicio.findAll({
        attributes: { exclude:["id","updatedAt"] },
        // include: [{
        //     model: Area,
        //     attributes: {include:['nombre'], exclude:["'area'.'id'", "'servicio'.'id'"]},
        //     through: {attributes: []}
        //     }],
    })
    .then(servicios => {
        res.json(servicios);
    })
    .catch(error =>
        res.status(400).send(error))
});

router.get('/findByPrice/json',function(req, res, next) {
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);
    Servicio.findAll({
        attributes: { exclude:["id","updatedAt"] },
        // include: [{
        //     model: Area,
        //     attributes: {include:['nombre'], exclude:["'area'.'id'", "'servicio'.'id'"]},
        //     through: {attributes: []}
        //     }],
        where: {
            precio: {
            [Op.between]: [lower, higher]
            }
        }
    })
    .then(servicios => {
        res.json(servicios);
    })
    .catch(error =>
        res.status(400).send(error))
});

router.get('/findById/:id/json',function(req, res, next) {
    var id = parseInt(req.query.higher);
    Servicio.findAll({
        attributes: { exclude:["id","updatedAt"] },
        // include: [{
        //     model: Area,
        //     attributes: {include:['nombre'], exclude:["'area'.'id'", "'servicio'.'id'"]},
        //     through: {attributes: []}
        //     }],
        where: {

            [Op.and]: [{id_servicio: id}]
            
        }
    })
    .then(servicios => {
        res.json(servicios);
    })
    .catch(error =>
        res.status(400).send(error))
});


router.get('/', function(req, res, next) {
    Servicio.findAll({
        attributes: { exclude: ["id","updatedAt"] }
    })
    .then(servicios => {
        res.render('index', { title: 'Servicios', arrServicios: servicios });
    })
    .catch(error => res.status(400).send(error))
});

router.get('/findByPrice/view',function(req, res, next) {
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);
    Servicio.findAll({
        attributes: { exclude:["id","updatedAt"] },
        where: {
            precio: {
            [Op.between]: [lower, higher]
            }
        }
    })
    .then(servicios => {
        res.render('servicios-by-rate', { title: 'Servicios', arrServicios: servicios });
    })
    .catch(error =>
        res.status(400).send(error))
});

router.get('/findById/view/:id',function(req, res, next) {
    let id = parseFloat(req.params.id);
    Servicio.findAll({
        attributes: { exclude:["id","updatedAt"] },
        // include: [{
        //     model: Area,
        //     attributes: {include:['nombre'], exclude:["'area'.'id'", "'servicio'.'id'"]},
        //     through: {attributes: []}
        //     }],
        where: {

            [Op.and]: [{id_servicio: id}]
            
        }
    })
    .then(servicios => {
        res.render('servicios-by-id', { title: 'Servicios', arrServicios: servicios });
    })
    .catch(error =>
        res.status(400).send(error))
});