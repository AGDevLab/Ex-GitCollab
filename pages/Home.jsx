import { contactService } from "../services/contact.service.js";
const { useEffect, useState } = React;
import { useSelector, useDispatch } from "react-redux";
import { contactService } from "../services/contact.service.js";
import { SET_CONTACTS } from "../store/store.js"; // Import the action type directly

export function Home() {
  //   const [contacts, setContacts] = useState(contactService.renderCards())

  //   useEffect(() => {
  //     loadContacts()
  //   }, [])

  // Access the contacts state from the Redux store
  const contacts = useSelector((state) => state.contacts);
  // Get the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  // Function to load contacts and dispatch the SET_CONTACTS action
  function loadContacts() {
    contactService.renderCards();
    dispatch({ type: SET_CONTACTS, contacts: nums }); // Dispatch the action directly with contacts data
  }
  //   if (!contacts) return <div>Loading...</div>
  return (
    <React.Fragment>
      <section className="home">
        <h1>Simple Home Page</h1>
        {loadContacts()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          obcaecati quae facere praesentium quis id modi nihil quisquam odio cum
          porro nisi dolores rerum animi, illum velit explicabo quia harum!
        </p>
      </section>
    </React.Fragment>
  );
}
