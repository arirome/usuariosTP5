const { model, Schema } = require('mongoose');

const userSchema = new Schema({

    
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        
    }



});


module.exports = model('User',userSchema);