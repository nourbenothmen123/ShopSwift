const  mongoose  =require("mongoose")
const categorie =require("./categorie.js");
const articleSchema=mongoose.Schema({
    reference:{ type: String, required: true,unique:true },
    designation:{ type: String, required: true,unique:true },
    prix:{ type: Number, required: false },
    marque:{ type: String, required: true },
    qtestock:{ type: Number, required: false },
    imageart:{ type: String, required: false },
    categorieID: {type:mongoose.Schema.Types.ObjectId,
    ref:categorie}
    })
    module.exports=mongoose.model('article',articleSchema)