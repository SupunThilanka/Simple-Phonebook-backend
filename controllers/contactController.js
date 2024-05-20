const asyncHandler = require('express-async-handler'); // asyncHandler is automatically pass the error to the errorHandler middleware. throw and catch errors
const Contact = require('../models/contactModels');

// @desc GET all contacts
// @route GET /api/contacts
// @access Public 
const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
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
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contact);
});

// @desc Get required contacts
// @route get /api/contacts
// @access Public 
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
// @access Public 
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
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
// @access Public 
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne();
    res.status(200).json({message:"Contact deleted"});
});


module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};