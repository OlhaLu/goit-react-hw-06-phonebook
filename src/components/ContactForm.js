import React, { useState, useRef } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const nameID = useRef(shortid.generate());

  onChangeName = e => {
    setName({ text: e.target.value });
  };

  const [phone, setPhone] = useState('');
  const phoneID = useRef(shortid.generate());

  onChangePhone = e => {
    setPhone({ text: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact({ name, phone });

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmit}>
      <span>Name </span>
      <input
        type="text"
        value={text}
        onChange={onChangeName}
        id={nameID.current}
      />
      <span>Phone number </span>
      <input
        type="text"
        value={phone}
        onChange={onChangePhone}
        id={phoneID.current}
      />
      <button type="submit">Save contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: T.func.isRequired,
};

export default ContactForm;
