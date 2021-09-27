const router = require('express').Router();
const {validar_jwt}=require('../middleware/validar_jwt')
const { 
    rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers/user.controllers');



router.get('/:id', rutaGet)

router.post('/createuser', validar_jwt, rutaPost)

router.put('/:id', rutaPut)

router.delete('/:id', rutaDelete)

module.exports = router;