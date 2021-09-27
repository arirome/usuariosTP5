const { response, request } = require('express')

const isadmin = (req = request, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se intenta verificar el role sin validar el token'
        });
    };

    const { nombre, rol } = req.usuario;

    if (rol !== 'admin') {
        return res.status(401).json({
            msg: `no es Administrador`
        });
    }


    next();

};

const iscollaborator = (req = request, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se intenta verificar el role sin validar el token'
        });
    };

    const { nombre, rol } = req.usuario;

    if (rol !== 'collaborator') {
        return res.status(401).json({
            msg: `no es collaborator`
        });
    }


    next();

};

module.exports={

    isadmin,
  
}