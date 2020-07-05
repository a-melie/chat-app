import React from 'react';
import './Contact.css';


const name = 'Teresa Silva';
const online = false;
const avatar = 'https://randomuser.me/api/portraits/women/81.jpg';


function Contact() {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src={avatar}
                alt={name}
            />
            <div className="status">
                <h4 className="name">{name}</h4>
                <div className={online ? 'status-online' : 'status-offline'}>
                </div>
                <p className="status-text">{online ? 'Online' : 'Offline'}</p>

            </div>
        </div>

    )
}

export default Contact;