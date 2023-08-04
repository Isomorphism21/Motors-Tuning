import mongoose from "mongoose";

const UsuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, 'Name is required']
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password is required']
    },
    imagen:{
        type:String,
    },
    rol:{
        type:String,
        required: true,
        default: 'USER',
        /* enum: ['ADMIN','USER'] */
    },
    estado:{
        type:Boolean,
        default: true
    }
})

const Usuario = mongoose.model("usuarios", UsuarioSchema);

export default Usuario;