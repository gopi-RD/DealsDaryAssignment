

const employeeController=require("../controllers/employee");
const authication=require("../middleware/verifyJWTToken")
const express = require("express"); 
const routes=express.Router(); 

routes.get("/employes",authication,employeeController.getAllEmployees);
routes.get("/employe/:employeeId",authication,employeeController.getEmployeeById);
routes.post("/employe",authication,employeeController.addEmployee);
routes.put("/employe/:employeeId",authication,employeeController.updateEmployee);
routes.delete("/employe/:employeeId",authication,employeeController.deleteEmployee); 

module.exports=routes;
