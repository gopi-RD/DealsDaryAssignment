
const modelEmployee=require("../models/Employee");


// Get All Employees
const getAllEmployees=async (request, response) => {
    try{

        const employee= await modelEmployee.find({}) 
        response.status(200).json(employee)

    }catch(err){
        response.status(400).json({error:`Invalid request data ${err}`})       
    }
}


// Get Employee by ID 

const getEmployeeById=async (request, response) => {
    try{
        const {employeeId}=request.params
        console.log(employeeId)
        const employee = await modelEmployee.findById({_id:employeeId})
        if(!employee){
            return response.status(404).json({error:`Employee not found`})
        }
        response.status(200).json(employee)

    }catch(err){
        response.status(400).json({error:`Invalid request data ${err}`})       
    }
}


// Add New Employee 

const addEmployee=async (request, response) => {
    try{
        const {name,email,designation,gender,mobile,course,image_url,mca_status,bca_status,bsc_status}=request.body 
        // Check if user already exists 
        const newEmployee=new modelEmployee({
            name,
            email,
            designation,
            gender,
            mobile,
            course,
            image_url,
            mca_status,
            bca_status,
            bsc_status,
        })
        const employee = await newEmployee.save()
        response.status(201).json({message:`Successfully created employee`})

    }catch(err){
        response.status(400).json({error:`Invalid request data ${err}`})       
    }
}

// Update Employee by ID    


const updateEmployee=async (request, response) => {

    try{
        const {employeeId}=request.params
        const {name,email,designation,gender,mobile,course,image_url,mca_status,bca_status,bsc_status}=request.body 
        const updatedEmployee=await modelEmployee.findByIdAndUpdate({_id:employeeId},{name,email,designation,gender,mobile,course,image_url,mca_status,bca_status,bsc_status}); 
        if(!updatedEmployee){
            return response.status(404).json({error:`Employee not found`})
        }
        response.status(200).json({message:`Updated employe Successfully`})

    }
    catch(err){
        response.status(400).json({error:`Invalid request data ${err}`})       
    }
}


// Delete Employee by ID 

   
const deleteEmployee=async (request, response) => {
    try{
        const {employeeId}=request.params
        const deletedEmployee=await modelEmployee.findByIdAndDelete({_id:employeeId})
        if(!deletedEmployee){
            return response.status(404).json({error:`Employee not found`})
        }
        response.status(200).json({message:"Employee deleted successfully"})

    }catch(err){
        response.status(400).json({error:`Invalid request data ${err}`})       
    }
}



module.exports={getAllEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee}