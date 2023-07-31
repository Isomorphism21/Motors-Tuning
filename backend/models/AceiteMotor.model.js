import mongoose from "mongoose";

const AceiteMotorSchema = mongoose.Schema({
    Marca:{
        type:String,
        required:true,
        trim:true
    },
    Tipo:{
        type:String,
        required:true,
        trim:true
    },
    Referencia:{
        type:String,
        required:true,
        trim:true
    },
    Precio:{
        type:Number,
        required:true,
        trim:true
    },
    Viscosidad:{
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
);

const AceiteMotor = mongoose.model("Aceites", AceiteMotorSchema);

export default AceiteMotor;