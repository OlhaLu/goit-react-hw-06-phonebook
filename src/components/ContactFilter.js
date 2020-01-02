import React from 'react';
import T from 'prop-types';

const ContactFilter = ({ value, onChangeFilter }) => (
  <label>
    Filter contacts
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

ContactFilter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default ContactFilter;
