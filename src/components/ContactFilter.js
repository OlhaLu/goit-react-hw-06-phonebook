import React from 'react';
import { connect } from 'react-redux';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import * as contactActions from '../redux/contacts/contactActions';

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

const mapStateToProps = state => {
  return {
    value: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: value => dispatch(contactActions.changeFilter(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactsFilter);