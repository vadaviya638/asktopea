const express= require('express')
const router=express.Router()
const bcrypt=require("bcrypt")
const jwt= require('jsonwebtoken')
const authenticate=require("../middlware/authenticate")
const cookieparser=require("cookie-parser")
const questionRouter=require("./Question")  
const answerRouter=require("./Answer")
const commentRouter=require("./Comment")

require('../db/conn')
const User=require("../model/usershema")

router.get('/',(req,res)=> {
    // res.send("hello world i am server from router ")
console.log((req.body));
})

router.use("/questions",questionRouter)
router.use("/answer",answerRouter)
router.use("/comment",commentRouter)

// using promises

// router.post('/register',function (req,res) {

// const { name,email,phone, work,password,cpassword}= req.body

// if(!name || !email || !phone || ! work || !password || !cpassword)
//     return res.status(422).json({err:'please fill the complete details'})
// // console.log((name));
// // console.log((req.body.email));
// // res.json({message:req.body})


// User.findOne({email:email})
// .then((userexits)=>{
//     if (userexits) {
//     return res.status(422).json({err:'email alredy exits'})
//     }
//     const user= new User({name,email,phone, work,password,cpassword})

//     user.save().then(()=>{
//         res.status(201).json({message:"user register succesfully"});
//     }).catch((err)=>res.status(500).json({error:"failed to register"}))
// }).catch((err) => {console.log(err);})
// })



// using async-await
router.post('/register',async function (req,res) {

const { name,email,phone,work,password,cpassword}= req.body;

if(!name || !email || !phone || !work || !password || !cpassword)
    return res.status(422).json({err:'please fill the complete details'})


try {
    const userexits= await User.findOne({email:email})

    if (userexits) {
        res.status(422).json({err:'email alredy exits'})
    }else if(password != cpassword){
        res.status(422).json({err:'password are not matched...'})
    }else{
        

        const user= new User({name,email,phone,work,password,cpassword})
        await user.save()
        res.status(201).json({message:"user register succesfully"});
    }



} catch (error) {
    console.log(error);
}
})

//login route

router.post('/signin', async function (req,res) {
    
    try {
        const {email,password}=req.body;
        if (!email || !password) {
         return   res.status(400).json({error:"please filled the data"})
        }
        const userLogin= await User.findOne({email:email })
        // console.log(userLogin);


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            const  token = await userLogin.generateAuthToken();
            console.log(token);
            
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })

            if (!isMatch) {
                res.status(400).json({error:".....invalid credientials"})
                
            } else {
                res.status(200).json({message:"user successfully login"})  
            }
            
        } else {
            res.status(400).json({error:"....invalid credientials"})
        }
    } catch (err) {
        console.log(err);
    }

})


// contact us ka page
router.use(cookieparser())

router.get("/contact",authenticate,(req,res)=>{
    res.send(req.rootuser)
})
router.get("/tags",authenticate,(req,res)=>{
    res.send(req.rootuser)
})
router.get("/question",authenticate,(req,res)=>{
    res.send(req.rootuser)
})
router.get("/home",authenticate,(req,res)=>{
    res.send(req.rootuser)

})
router.get("/logout",(req,res)=>{
    console.log("hello logout page");
    res.clearCookie("jwtoken",{path:'/'})
    res.status(200).send('user logout')

})
module.exports=router