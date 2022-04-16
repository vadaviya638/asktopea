const express= require("express")
const app= express();
require("dotenv").config({path:'config.env' })
const router=require('./router/auth')
require('./db/conn')

const path = require("path");



app.use(express.json())
app.use(express.urlencoded({extended:true}))
const User=require('./model/usershema')

//router file linked
app.use(require('./router/auth'))

//api
app.use('/api',router) 
// app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "/../f/build/index.html"));
// });
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(__dirname));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../f/public/index.html`));
  } catch (e) {
    res.send("Welcome to stackoverflow clone");
  }
});
//middlware
// const middlware= function (req,res,next) {
//     console.log("hello i am middlware");
//     next();
// }
// app.get('/',(req,res)=> {
//     res.send("hello world i am ")
// })

// app.get("/about",(req,res)=>{
//     res.send("hello i am about")
// })
// app.get("/contact",(req,res)=>{
//     res.send("hello i am contact")
// })




app.get("/signin",(req,res)=>{
    res.send("hello i am login")
})
app.get("/signup",(req,res)=>{
    console.log("hello my register");
    res.send("hello i am register")
})

app.listen(2999,function () {
    console.log("server is running on 2999");
})
