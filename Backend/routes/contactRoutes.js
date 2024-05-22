const express = require("express"); // router is a part of express
const router = express.Router();  // we have to use router in our app for easy routing
const {getContacts,createContact,getContact,updateContact,deleteContact} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);  // we have validate the Token below all the routes. so it can be done by use it. if we have one route there is a way to do it see the userRoutes.js
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
