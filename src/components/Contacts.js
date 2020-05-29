import React from 'react';
import Contactcard from './Contactcard';

const Contacts = ({contacts}) => {
    return(
        <div>
            {contacts.map(contact => {
                return (
                    <Contactcard
                        key = {contact._id}
                        id = {contact._id}
                        name = {contact.name}
                        email = {contact.email}
                        phoneNumber = {contact.phoneNumber}
                    />
                );
            })}
        </div>
    )
}

export default Contacts;