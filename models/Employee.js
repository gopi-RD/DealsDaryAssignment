const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    ,
    email:{
       type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    }
},
    {timestamps:true}
)


const employee=mongoose.model("Employee",employeeSchema);
module.exports=employee;