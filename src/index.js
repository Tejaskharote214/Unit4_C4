const express = require("express");

const connect = require("./configs/db");
const app = express();

const userController =require(".controller/user.controller");
const {register,login}= require("./controller/auth.controller");
const todoController = require("./controller/todo.controller");

app.use(express.json);

app.use("./users",userController);
app.post("/register",register);
app.post("/login",login);
app.use("/todos",todoController);

app.listen(5000, async (req,res)=>{
    try {
        await connect();
        console.log("port is here 5000");
    } catch (error) {
        console.log(error.message)
    }
})