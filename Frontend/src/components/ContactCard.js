import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
        const {id, name, email } = props.contact;
    return (
        
        <div className="item">
            <img className='ui avatar image' src={user} alt='user' />
            <div className="content" style = {{}}>
                <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}} >
                <div className="header">{name}</div>
                <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon" 
            style={{ color: "red", marginTop: "7px",float:"right" }}
            onClick={() => props.clickHandler(id)} //this is the function that we passed as props from ContactList.js
            ></i>
        </div>
    )
}

export default ContactCard;