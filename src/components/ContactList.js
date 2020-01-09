import React from 'react';
import T from 'prop-types';

const ContactList = ({ contacts, removeContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>Name : {contact.name}</span>
        <span>Number : {contact.number}</span>
        <button type="button" onClick={() => removeContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      number: T.string,
    }),
  ).isRequired,

  removeContact: T.func.isRequired,
};

export default ContactList;
