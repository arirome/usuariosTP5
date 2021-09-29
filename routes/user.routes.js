const router = require('express').Router();
const {validar_jwt}=require('../middleware/validar_jwt')
const { validarCampos } = require('../helpers/validacionCampos.js');
const { body, check } = require('express-validator');
const{isadmin,roluser}= require('../middleware/validar_rutasprotegidas')
const { 
    rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers/user.controllers');

 const { siExisterol} = require('../middleware/validar_roles');



router.get('/get-user',
body('username', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('rol', 'el rol seleccionado no es válida')
.not()
.isEmpty()
.custom(siExisterol),

validar_jwt,
roluser('admin', 'collaborator', 'communt'),
validarCampos,
rutaGet)

//enviar informacion

router.post('/create-user',

body('username', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),


body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('rol', 'el rol seleccionado no es válida')
.not()
.isEmpty()
.custom(siExisterol),

validar_jwt,
roluser('admin', 'collaborator'),
validarCampos,
 rutaPost)

router.put('/edit-user/:id',

body('username', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('rol', 'el rol seleccionado no es válida')
.not()
.isEmpty()
.custom(siExisterol),

validar_jwt,
isadmin,
validarCampos,
rutaPut,)


router.delete('/delete-user/:id',

body('username', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),

body('rol', 'el rol seleccionado no es válida')
.not()
.isEmpty()
.custom(siExisterol),

validar_jwt,
isadmin,
validarCampos,
rutaDelete)

module.exports = router;