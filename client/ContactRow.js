import React from 'react';

const ContactRow = (props) => (
  <tr key={props.id}>
    <td>{props.name}</td>
    <td>{props.phone}</td>
    <td>{props.email}</td>
  </tr>
);

export default ContactRow;
