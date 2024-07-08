import { contactService } from '../services/contact.service.js'
const { useEffect, useState } = React

export function Home() {
  //   const [contacts, setContacts] = useState(contactService.renderCards())

  //   useEffect(() => {
  //     loadContacts()
  //   }, [])

  function loadContacts() {
    contactService.renderCards()
  }
  //   if (!contacts) return <div>Loading...</div>
  return (
    <React.Fragment>
      <section className='home'>
        <h1>Simple Home Page</h1>
        {loadContacts()}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          obcaecati quae facere praesentium quis id modi nihil quisquam odio cum
          porro nisi dolores rerum animi, illum velit explicabo quia harum!
        </p>
      </section>
    </React.Fragment>
  )
}
