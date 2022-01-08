import { createAction } from "@reduxjs/toolkit";

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");

const addContactsRequest = createAction("contacts/addContactsRequest");
const addContactsSuccess = createAction("contacts/addContactsSuccess");
const addContactsError = createAction("contacts/addContactsError");

const deleteContactsRequest = createAction("contacts/deleteContactsRequest");
const deleteContactsSuccess = createAction("contacts/deleteContactsSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");

const changeFilter = createAction("contacts/changeFilter");

const actions = {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  changeFilter,
};

export default actions;
