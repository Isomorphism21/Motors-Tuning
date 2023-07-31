import mongoose from "mongoose";

const pastillasFrenoSchema = mongoose.Schema({
    Material:{
        type:String,
        required:true,
        trim:true
    },
    Posicion:{
        type:String,
        required:true,
        trim:true
    },
    Precio:{
        type:Number,
        required:true,
        trim:true
    },
    Marca:{
        type:String,
        required:true,
        trim:true
    },
    Stock:{
        type:Number,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true
    }
)

const pastillasFreno = mongoose.model("PastillasFrenos", pastillasFrenoSchema);

export default pastillasFreno;