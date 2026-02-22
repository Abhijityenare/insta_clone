const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        username:{
            type:String,
            unique:[true,'User name already exists'],
            required:[true,"User name is required"]
        },
        email:{
            type:String,
            unique:[true,"email is already exists"],
            required:[true,"email is required"]
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        bio:String,
        profileImage:{
            type:String,
            default:"https://ik.imagekit.io/bt6ajn1hfv/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp"
        }
})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;