const mongoose =require('mongoose')
mongoose.connect('mongodb://localhost:27017/iroid');
let db = mongoose.connection;
module.exports=db;