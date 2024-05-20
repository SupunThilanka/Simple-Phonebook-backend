const asyncHandler = require('express-async-handler'); // asyncHandler is automatically pass the error to the errorHandler middleware. throw and catch errors

// @desc GET all contacts
// @route GET /api/contacts
// @access Public 
const getContacts = asyncHandler(async(req, res) => {
    res.status(200).json({message:"Get all contacts"});
});

// @desc Create new contacts
// @route POST /api/contacts
// @access Public 
const createContact = asyncHandler(async(req, res) => {  // what is async? It's a promise with MONGODB,MYSQL to work with them
    console.log("The request body is ",req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    res.status(200).json({message:"Create contact"});
});

// @desc Get required contacts
// @route get /api/contacts
// @access Public 
const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

// @desc Update required contacts
// @route Put /api/contacts
// @access Public 
const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

// @desc Delete required contacts
// @route Delete /api/contacts
// @access Public 
const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
});


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};