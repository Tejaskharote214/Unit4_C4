const mongoose = require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://tejas214:tejas2140@cluster0.vddg6.mongodb.net/tejas214?retryWrites=true&w=majority");
}