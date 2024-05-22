import React from "react";

const ContactList = (props) => {    // props is used to passed as an argument from App.js(we want to pass the contacts array to ContactList component)
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
});
    
        return <div className="ui celled list">{renderContactList}</div>;

};

export default ContactList;