import mongoose from "mongoose";

const bandasDeFrenoSchema = mongoose.Schema({
    Marca:{
        type:String,
        required:true,
        trim:true
    },
    TipoDeUnion:{
        type:String,
        required:true,
        trim:true
    },
    Precio:{
        type:Number,
        required:true,
        trim:true
    },
    Espesor:{
        type:String,
        required:true,
        trim:true
    },
    Diametro:{
        type:String,
        required:true,
        trim:true
    },
    Stock:{
        type:String,
        required:true,
        trim:true
    }
    },
    {
        timestamps: true
    }
)

const bandasDeFreno = mongoose.model("BandasDeFreno", bandasDeFrenoSchema);

export default bandasDeFreno;