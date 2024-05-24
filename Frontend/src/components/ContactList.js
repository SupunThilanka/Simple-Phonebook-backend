import React from "react";
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
    
        return <div className="ui celled list">{renderContactList}</div>;

};

export default ContactList;