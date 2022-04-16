const mongoose = require("mongoose")
const questionSchema=new mongoose.Schema({
    title:String,
    body:String,
    tags:[],
    created_at:{
        type:Date,
        default:Date.now(),
    },
    user:Object,
    Comment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    },
})


module.exports=mongoose.model("Questions",questionSchema)