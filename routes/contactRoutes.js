const express = require("express"); // router is a part of express
const router = express.Router();  // we have to use router in our app for easy routing
const {getContacts,createContact,getContact,updateContact,deleteContact} = require("../controllers/contactController");


router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
