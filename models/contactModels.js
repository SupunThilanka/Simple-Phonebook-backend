const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,   //id should be created by mongodb
        required: true,     // this field is required
        ref: 'User'
    },
    name: {
        type : String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type : String,
        required: [true, "Please add the contact email"],
    },
    phone: {
        type : String,
        required: [true, "Please add the contact phone"],
    }
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Contact', contactSchema);