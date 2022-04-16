const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const jwt= require('jsonwebtoken')



const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
        token:{
        type:String,
        required:true
    }
}
]
})


//hashing password

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        
        this.password= await bcrypt.hash(this.password, 10)
        this.cpassword= await bcrypt.hash(this.cpassword, 10)
    }
})

//we are generating token
UserSchema.methods.generateAuthToken = async function () {
    try {
        let token= jwt.sign({_id: this._id},process.env.SECRET_KEY)
        this.tokens= this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (err) {
        console.log(err);
    }
}

const User=mongoose.model('user',UserSchema)
module.exports = User

