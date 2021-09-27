const routerAuth = require('express').Router();

const { 
    login
 } = require('../controllers/auth.controllers');

routerAuth.post('/login', login)


module.exports = routerAuth;