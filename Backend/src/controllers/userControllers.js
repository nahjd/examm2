const mongoose=require("mongoose")

const people=require("./../models/userModel")

const getAlluser= async (req,res)=>{
    let found= await people.find({})
    res.send(found)
}

const userDelete= async (req,res)=>{
    let deleted = await people.getByIdAndDelete({_id:req.params._id})
}

const userPost = async (req, res) => {
    let found = await new people(req.body)
    found.save()

}

module.exports={
    getAlluser,
    userDelete,
    userPost

}