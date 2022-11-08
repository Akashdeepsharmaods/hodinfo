import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    last:{type:Number, required:true, trim:true},
    buy:{type:Number, required:true, trim:true},
    sale:{type:Number, required:true, trim:true},
    volume:{type:mongoose.Decimal128, required:true, trim:true},
    base_unit:{type:String, trim:true}

})
const userModel = mongoose.model("info", userSchema)

export default userModel