const Roles = require('../models/roles');

const siExisterol = async (rol = '')=> {
    const rolEcontrado = await Roles.findOne({rol})

    if(!rolEcontrado){
        throw new Error('el rol especificado no existe')
    }
}



module.exports = {
    siExisterol
}