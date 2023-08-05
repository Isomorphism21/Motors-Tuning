import mongoose from "mongoose";

const RolSchema = mongoose.Schema({
    rol:{
        type:String,
        required:true,

    }
})

const rol = mongoose.model("roles", RolSchema);

export default rol;