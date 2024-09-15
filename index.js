const express=require("express")
const app = express()
const dotEnv=require("dotenv")
const mongoose=require("mongoose") 
const cors=require("cors")
const PORT=process.env.PORT || 3000
const userRoutes=require("./routes/User") 
const employeeRoutes=require("./routes/Employee")
 
dotEnv.config()



app.use(express.json())
app.use(cors())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("Connected to MongoDB")).catch((error)=>console.log(`DB Error is ${error}`));

app.use("/user",userRoutes)
app.use("/employe-details",employeeRoutes)
app.listen(PORT,()=>{
    console.log(`Server  is running on port ${PORT}`)
})

app.get("/",(request,response)=>{
    response.send("Welcome to Deals Dray Assignment!")
})