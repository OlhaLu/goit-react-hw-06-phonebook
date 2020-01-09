import React from 'react';
import T from 'prop-types';

const ContactFilter = ({ value, onChange }) => (
  <label>
    Filter contacts
    <input type="text" value={value} onChange={onChange} />
  </label>
);

ContactFilter.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default ContactFilter;
