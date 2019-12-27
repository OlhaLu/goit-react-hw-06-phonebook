import React from 'react';
import T from 'prop-types';

const ContactsFilter = ({ value, onChangeFilter }) => (
  <label>
    Filter contacts
    <input
      type="text"
      value={value}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

ContactsFilter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default ContactsFilter;
