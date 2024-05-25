import React from 'react';
import user from '../images/user.png';
import {Link} from 'react-router-dom';

const ContactDetail = (props) => {
    console.log("contactdetails=",props);
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                    <div className="content">
                        <div className="header">Supun</div> 
                        <div className="description">supun thilanka sandaruwan</div>
                    </div>
            </div>  
        </div>
    );
};

export default ContactDetail;



