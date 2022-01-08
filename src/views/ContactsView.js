import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";

function ContactsView() {
  return (
    <>
      <Filter />
      <ContactForm />
      <ContactList />
    </>
  );
}
export default ContactsView;
