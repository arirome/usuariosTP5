const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/user');
const User = require('../models/user');



ctrlHome.rutaGet = async (req, res) => {

    const id = req.params.id;
    const users = await User.findById(id) 

    res.json(users);
}

ctrlHome.rutaPost = async (req, res) => {
    const {username,password,rol} = req.body;
    try {
      const user= new User({username,password,rol});
      
      await user.save();
      res.json({
        msg: 'usuario creado con exito',

      });
    } catch (error) {
      console.log("Error al crear el nuevo usuario: ", error);
      res.status(500).json({ msg: "Error al crear nuevo usuario" });
    }
}


ctrlHome.rutaPut = async (req, res) => {
    
    const id = req.params.id;
    const alumno = req.body;
    const user = await User.findByIdAndUpdate(id,alumno,{ new: true })

    res.json({
        msg: 'alumno actualizado correctamente',
        user
    })
}

ctrlHome.rutaDelete = async (req, res) => {
    const  id = req.params.id;
    
    try {
       
        await User.findByIdAndDelete(id)

        res.json({
            msg: 'alumno eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar alumno: ', error)
    }
}

module.exports = ctrlHome;