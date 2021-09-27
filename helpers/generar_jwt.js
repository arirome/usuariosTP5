
const { token } = require("morgan")

const jwt= require ('jsonwebtoken')
const user = require("../models/user")

const generar_jwt= (id= '')=>{

   return new Promise((resolve, reject)=>{


    const payload={
        id
    }

    jwt.sign(payload, process.env.SECRET, (err, token)=>{
        if (err) {

            reject('error al generar el token')
            
        }
        resolve(token)
    })
   })
}

module.exports={
    generar_jwt
}