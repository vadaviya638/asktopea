const mongoose = require("mongoose")


//database
mongoose.connect('mongodb://localhost:27017/simyou',function (err) {
  if (err) {
      console.log("db connection fail......");
  } else {
      console.log('db connection successfully...');
  }  
})