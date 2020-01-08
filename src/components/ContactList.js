import React from 'react';
import T from 'prop-types';

const ContactList = ({ filter, removeContact }) => (
  <ul>
    {filter.map(contact => (
      <li key={contact.id}>
        <span>{contact.name}</span>
        <span>{contact.number}</span>
        <button type="button" onClick={() => removeContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  filter: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string,
      number: T.string,
    }),
  ).isRequired,

  removeContact: T.func.isRequired,
};

export default ContactList;
