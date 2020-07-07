import React, { useState, useEffect, useReducer, useMemo } from 'react';
import shortid from 'shortid';
import localStorage from './localStorage';
import ContactForm from './components/ContactForm';
import ContactFilter from './components/ContactFilter';
import ContactList from './components/ContactList';

const contactReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      return [...state, payload.contact];

    case 'REMOVE_CONTACT':
      return state.filter(contact => contact.id !== payload.id);

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

    if (!contact.name || !contact.number) {
      alert('Please input name and number');
      return;
    }

    const findUniqName = contacts.find(user => user.name === contact.name);

    if (findUniqName) {
      alert(`${contact.name} is alredy in contacts`);
      return;
    }
  };

  const removeContact = id => {
    dispatch({
      type: 'REMOVE_CONTACT',
      payload: {
        id,
      },
    });
  };

  const [filter, setFilter] = useState('');

  const onChangeFilter = e => setFilter(e.target.value);

  const contactsFilter = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [contacts, filter]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactFilter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={contactsFilter} removeContact={removeContact} />
    </>
  );
}

export default App;
