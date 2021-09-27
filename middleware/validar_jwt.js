const {response, request}=require('express')
const jwt= require('jsonwebtoken')
const User= require('../models/user')

const validar_jwt= async(req=request,res=response, next)=>{

    const token=req.header('x-token')
    console.log(token)
    //se verifica el token que viene de los headers

    if (!token) {

        return res.status(401).json({
            msg:'token inavalido (no existe token)'
        })        
    }

try {
    
    const {id}=jwt.verify(token, process.env.SECRET)

    console.log(id)
    const usuario= await User.findById(id)
console.log(usuario)
    if (!usuario) {

        return res.status(401).json({
            msg:'token inavalido (no existe usuario)'
        })        
        
    }

    req.usuario=usuario

    next()

} catch (error) {

    console.log(error)
    return res.status(401).json({
        msg:'token inavalido (error al generar el token)'
    })  
    
    



    
}
   
}

module.exports={

    validar_jwt
}