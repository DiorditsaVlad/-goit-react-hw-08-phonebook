import React, { useState } from "react";
import { connect } from "react-redux";

import contactsOperations from "../../redux/phonebook/phonebook-operations";
import styles from "./ContactForm.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";

function ContactForm({ submitHandler }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  ///////////////////
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  ///////////////////
  const inputChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "number":
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const nameInContact = name.toLowerCase().trim();
    const isInContact = contacts.find(
      (cont) => cont.name.toLowerCase().trim() === nameInContact
    );
    if (isInContact) {
      alert(`${name} is already in contact`);
      return;
    }
    dispatch(submitHandler({ name, number }));

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            onChange={inputChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label className={styles.form}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.add_btn}>
          Add contact
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submitHandler: (info) => dispatch(contactsOperations.addContact(info)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
