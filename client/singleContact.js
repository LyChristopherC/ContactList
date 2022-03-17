import React from 'react';
import Favorite from './Favorite';

function singleContact(props) {
  return (
    <div id="single-contact">
      <img src={props.selectedContact.imageUrl} />
      <div id="contact-info">
        <p>Name: {props.selectedContact.name}</p>
        <p>Email: {props.selectedContact.email}</p>
        <p>Phone: {props.selectedContact.phone}</p>
        <Favorite
          selectContact={props.selectContact}
          contact={props.selectedContact}
        />
      </div>
    </div>
  );
}

export default singleContact;
