import React from 'react';
import ContactRow from './ContactRow';
const ContactList = (props) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {props.contacts.map((el) => (
        <ContactRow
          key={el.id}
          id={el.id}
          name={el.name}
          email={el.email}
          phone={el.phone}
        />
      ))}
    </tbody>
  </table>
);

export default ContactList;
