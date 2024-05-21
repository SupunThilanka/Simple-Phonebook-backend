const asyncHandler = require('express-async-handler'); // asyncHandler is automatically pass the error to the errorHandler middleware. throw and catch errors
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// @desc Register a user
// @route POST /api/users/register
// @access Public 
const registerUser = asyncHandler(async (req, res) => {
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const userAvailable = await User.findOne({email:email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword
    });

    console.log(`User ${user} is created`);
    if(user){
        res.status(201).json({
            _id:user._id,
            email:user.email,
        });
    }

    else{
        res.status(400);
        throw new Error("User data is not valid");
    }

});
// @desc login a user
// @route POST /api/users/login
// @access Public 
const loginUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const user = await User.findOne({email:email});

    //compare password with hashedpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id,
            },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: "15m"}
    );
        res.status(200).json({accessToken});
    }
    else{
        res.status(400);
        throw new Error("Invalid email or password");
    }
    
    // res.json({message:"Login the user"});
});
// @desc get a user
// @route GET /api/users/current
// @access Private 
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser,loginUser,currentUser};