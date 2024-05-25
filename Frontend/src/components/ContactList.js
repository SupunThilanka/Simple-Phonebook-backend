import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {    //props is used to passed as an argument from App.js(we want to pass the contacts array to ContactList component)
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id); //this is the function that we passed as props from App.js
    };


    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}/> //same as app.js(parent) to ContactList.js(child), Contactlist.js (parent) to ContactCard.js (child)
        );
});
    
    return(
    <div className ='main' style={{paddingTop:"50px"}}> 
        <h2>
        Contact List
        <Link to="/add">
        <button className="ui button blue right" style={{float:"right"}}>Add Contact</button>
        </Link>
        </h2>
        <div className="ui celled list">{renderContactList}</div>
    </div>
    );
};

export default ContactList;