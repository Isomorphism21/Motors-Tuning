import mongoose from "mongoose";

const bielaSchema = mongoose.Schema({
    Nombre: {
        type:String,
        required: true,
        trim: true
    },
    Cilindraje: {
        type:String,
        required: true,
        trim: true
    },
    Precio: {
        type:Number,
        required: true,
        trim: true
    },
    Garantia: {
        type:String,
        required: true,
        trim: true
    },
    Stock: {
        type:Number,
        required: true,
        trim: true
    }
    },
    {
        timestamps: true
    }   
)

const Biela = mongoose.model("Biela", bielaSchema);

export default Biela;