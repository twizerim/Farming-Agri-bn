
import mongoose from "mongoose";

const contactschemas = new mongoose.Schema({

    fullname:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
    
    sendAt:{type:Date,default:new Date(Date.now())},

})

const Contact = mongoose.model("Contact",contactschemas)

export default Contact