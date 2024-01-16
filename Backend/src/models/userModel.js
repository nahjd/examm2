const mongoose = require("mongoose")

const peopleSchema=mongoose.Schema({
    id:String,
    name:String,
    about:String,
    price:String
},
{collection:"people", timestamps: true}

)

const people=mongoose.model("people",peopleSchema)

module.exports= people

