import React from 'react';
import T from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.phone}</span>
        <button type="button" onClick={() => deleteContact(contact.id)}>
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
      phone: T.string,
    }),
  ).isRequired,

  deleteContact: T.func.isRequired,
};

export default ContactList;
