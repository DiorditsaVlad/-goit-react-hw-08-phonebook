import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./phonebook-actions";

const itemsReducer = createReducer([], {
  [actions.fetchContactSuccess]: (_, action) => action.payload,
  [actions.addContactsSuccess]: (state, action) => {
    return [action.payload, ...state];
  },

  [actions.deleteContactsSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
