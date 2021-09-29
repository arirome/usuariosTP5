const router = require('express').Router();
const { validarCampos } = require('../helpers/validacionCampos.js');
const { body, check } = require('express-validator');
const { 
    rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers/user.controllers');
const {
    validar_jwt,
    siExisterol,
    isadmin,
    roluser
}= require('../middleware')

//leer informacion del usuario y realizar las validaciones de los campos y del token
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

//enviar informacion del usuario y realizar las validaciones de los campos y del token
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

 //actualizar informacion del usuario y realizar las validaciones de los campos y del token
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

//eliminar informacion del usuario y realizar las validaciones de los campos y del token
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