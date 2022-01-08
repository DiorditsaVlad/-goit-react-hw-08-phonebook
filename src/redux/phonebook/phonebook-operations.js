import axios from "axios";

import actions from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const getContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)));
};

const addContact = (info) => (dispatch) => {
  const contact = info;
  dispatch(actions.addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactsSuccess(data)))
    .catch((error) => dispatch(actions.addContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(dispatch(actions.deleteContactsSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactsError(error)));
};

const operations = {
  getContacts,
  addContact,
  deleteContact,
};

export default operations;
