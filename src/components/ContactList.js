import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import contactsSelectors from '../redux/contacts/contactsSelectors';

class ContactList extends Component {
  render() {
    const { contacts = [] } = this.props;
    return (
      <ul>
        {contacts.map(({ id }) => (
          <ContactListItem key={id} id={id} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: contactsSelectors.getFilteredContact(state),
  };
};

export default connect(mapStateToProps)(ContactList);
