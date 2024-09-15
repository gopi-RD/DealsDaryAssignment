
const userController=require("../controllers/User")
const express = require('express');  
const routes=express.Router();

routes.post('/register', userController.UserRegisteration); 

routes.post('/login', userController.UserLogin); 
routes.get("/users", userController.getAllUsers)

module.exports=routes;
