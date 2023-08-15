const { getAll, create, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJWT } = require('../utils/verifyJWT');

const routerUser = express.Router();
//!===================rutas estaticas=====================
routerUser.route('/')
    .get(verifyJWT,getAll)
    .post(create);
    routerUser.route('/login')
    .post(login)



//!==========rutas dinamicas===============    
routerUser.route('/:id')
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerUser;