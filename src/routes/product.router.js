const { getAll, create, getOne, remove, update, SetImage } = require('../controllers/product.controller');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');

const routerProduct = express.Router();

routerProduct.route('/')
    .get(getAll)
    .post(verifyJWT,create);

routerProduct.route('/:id')
    .get(getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);
routerProduct.route('/id/images')
    .post(SetImage)

module.exports = routerProduct;