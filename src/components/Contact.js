import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';




function Contact(props) {
    return (
        <div className="Contact">
            <img
                className="avatar"
                src={props.avatar}
                alt={props.name}
            />
            <div className="status">
                <p className="name">{props.name}</p>
                <div className={props.online ? 'status-online' : 'status-offline'}>
                </div>
                <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>

            </div>
        </div>

    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   online: PropTypes.bool.isRequired,
};
export default Contact;