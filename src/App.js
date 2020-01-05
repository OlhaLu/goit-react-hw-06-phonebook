import React, { useState, useEffect, useReducer } from 'react';
import shortid from 'shortid';
import localStorage from './localStorage';

import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      return [...state, payload.contacts];

    case 'REMOVE_CONTACT':
      return state.filter(contact => contact.id !== payload.contactId);

    case 'SET_STORAGE':
      return payload.contacts;

    default:
      return state;
  }
};

function App() {
  const [contacts, dispatch] = useReducer(contactReducer, []);

  useEffect(() => {
    const contacts = localStorage.getLocalStorage('contacts');

    if (contacts) {
      dispatch({
        type: 'SET_STORAGE',
        payload: {
          contacts,
        },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.saveLocalStorage('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    dispatch({
      type: 'ADD_CONTACT',
      payload: {
        contact,
      },
    });
  };

  const removeContact = contactId => {
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: {
        contactId,
      },
    });
  };

  const [filter, setFilter] = useState('');

  const changeFilter = e => setFilter(e.target.value);

  const getFilteredContact = createSelector(
    [getContact, getFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.text.toLowerCase().includes(filter.toLowerCase()),
      );
    },
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactFilter value={value} onChange={onChangeFilter} />
      <ContactList list={contacts} deleteContant={deleteContact} />
    </>
  );
}

export default App;
