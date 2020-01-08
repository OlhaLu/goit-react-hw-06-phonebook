import React, { useState, useRef } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const nameID = useRef(shortid.generate());

  const onChangeName = e => {
    setName({ text: e.target.value });
  };

  const [number, setNumber] = useState('');
  const numberID = useRef(shortid.generate());

  const onChangeNumber = e => {
    setNumber({ text: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmit}>
      <span>Name </span>
      <input
        type="text"
        value={name}
        name="name"
        onChange={onChangeName}
        id={nameID.current}
      />
      <span>Phone number </span>
      <input
        type="number"
        value={number}
        name="number"
        onChange={onChangeNumber}
        id={numberID.current}
      />
      <button type="submit">Save contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

export default ContactForm;
