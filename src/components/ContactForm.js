import React, { useState, useRef } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const nameID = useRef(shortid.generate());

  const onChangeName = e => {
    const name = e.target.value;
    setName(name);
  };

  const [number, setNumber] = useState('');
  const numberID = useRef(shortid.generate());

  const onChangeNumber = e => {
    const number = e.target.value;
    setNumber(number);
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <span>Name: </span>
      <input
        type="text"
        name="name"
        onChange={onChangeName}
        id={nameID.current}
        value={name}
      />

      <span>Phone number: </span>
      <input
        type="number"
        name="number"
        onChange={onChangeNumber}
        id={numberID.current}
        value={number}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

export default ContactForm;
