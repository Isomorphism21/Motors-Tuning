import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:[true, "Digite el Nombre"]
    },
    email:{
        type:String,
        required:[true, "Digite el email"],
        unique: true
    },
    password:{
        type:String,
        required:[true, "Digite la Contraseña"]
    },
    rol:{
        type:String,
        required:true,
        /* enum:["ADMIN", "USER"], */
        default: "USER"
    },
    estado:{
        type:Boolean,
        default:true
    }
})

const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario;