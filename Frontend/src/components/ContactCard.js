import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
        const {id, name, email } = props.contact;
    return (
        
        <div className="item">
            <img className='ui avatar image' src={user} alt='user' />
            <div className="content" style = {{}}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" 
            style={{ color: "red", marginTop: "7px",float:"right" }}
            onClick={() => props.clickHandler(id)} //this is the function that we passed as props from ContactList.js
            ></i>
        </div>
    )
}

export default ContactCard;