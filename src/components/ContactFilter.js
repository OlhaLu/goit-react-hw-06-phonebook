import React from 'react';
import T from 'prop-types';

const ContactFilter = ({ filter, onChangeFilter }) => (
  <label>
    Filter contacts
    <input
      type="text"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);

ContactFilter.propTypes = {
  filter: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default ContactFilter;
