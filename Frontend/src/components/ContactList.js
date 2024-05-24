import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {    // props is used to passed as an argument from App.js(we want to pass the contacts array to ContactList component)
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} />
        );
});
    
        return <div className="ui celled list">{renderContactList}</div>;

};

export default ContactList;