import * as contactTypes from './contactTypes';

export const add = contacts => {
  return {
    type: contactTypes.ADD_CONTACT,
    payload: {
      contacts
    },
  };
};

export const remove = id => {
  return {
    type: contactTypes.REMOVE_CONTACT,
    payload: {
      id,
    },
  };
};

export const changeFilter = filter => {
  return {
    type: contactTypes.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
};
