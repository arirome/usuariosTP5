const routerAuth = require('express').Router();

//enviar informacion del usuario logueado 
const { 
    login
 } = require('../controllers/auth.controllers');

routerAuth.post('/login', login)


module.exports = routerAuth;