const express = require("express");  // we need to install express as 'npm i express'
const errorHandler = require("./middleware/errorHandler"); // error Handler is a middleware which have made by us
const dotenv = require("dotenv").config(); // we have to install dotenv as 'npm i dotenv'
const connectDB = require("./config/dbConnection"); // we have to connect our app with mongodb database

connectDB(); //conncetDB is a function which is in dbConnection.js
const app = express();  //we have to use express in our app, app is a object of express

const port = process.env.PORT || 5000;   // server will run on port 5001, process.env.port is for dotenv. so .env file has the port number 5001

app.use(express.json());    // we have use json format in our app. so we have to use it

// app.get('/api/contacts', (req, res) => {
//     res.status(200).json({message:"Get all contacts"});
// });
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);  //  we have to use this.


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

