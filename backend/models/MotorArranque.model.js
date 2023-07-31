import mongoose from "mongoose";

const motorArranqueSchema = mongoose.Schema({
    Voltaje:{
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
    },
    DientesDeBendix:{
        type:Number,
        required:true,
        trim:true
    }
    },
    {
        timestamps:true
    }
)

const motorArranque = mongoose.model("MotorArranque", motorArranqueSchema);

export default motorArranque;