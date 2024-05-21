const asyncHandler = require('express-async-handler'); // asyncHandler is automatically pass the error to the errorHandler middleware. throw and catch errors
const Contact = require('../models/contactModels');

// @desc GET all contacts
// @route GET /api/contacts
// @access Private  
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

// @desc Create new contacts
// @route POST /api/contacts
// @access Private  
const createContact = asyncHandler(async(req, res) => {  // what is async? It's a promise with MONGODB,MYSQL to work with them
    console.log("The request body is ",req.body);
    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id // first we are going through the jwt middleware and then we are getting the user id from req.user
    });

    res.status(201).json(contact);
});

// @desc Get required contacts
// @route get /api/contacts
// @access Private 
const getContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});



// @desc Update required contacts
// @route Put /api/contacts
// @access Private 
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("You are not authorized to update this contact");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
    
});

// @desc Delete required contacts
// @route Delete /api/contacts
// @access Private  
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("You are not authorized to delete this contact");
    }
    await Contact.deleteOne(_id:req.params.id);
    res.status(200).json({message:"Contact deleted"});
});


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};