import { contactService } from '../services/contact.service.js'
const { useEffect, useState } = React
const { useSelector, useDispatch } = ReactRedux
import { SET_CONTACTS } from '../store/store.js' // Import the action type directly
const { Link } = ReactRouterDOM

export function Home() {
  useEffect(() => {
    loadContacts()
  }, [])

  const contacts = useSelector((state) => state.contacts)

  const dispatch = useDispatch()

  function loadContacts() {
    const nums = contactService.renderNums()
    dispatch({ type: SET_CONTACTS, contacts: nums }) // Dispatch the
  }

  if (contacts.length === 0) return <div>Loading...</div>

  return (
    <React.Fragment>
      <section className='home'>
        <h1>Simple Home Page</h1>
        {contacts.map((num, index) => (
          <button key={index} className='number'>
            {num}
          </button>
        ))}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          obcaecati quae facere praesentium quis id modi nihil quisquam odio cum
          porro nisi dolores rerum animi, illum velit explicabo quia harum!
        </p>
        <Link to='/contacts'>Go to Contacts</Link>{' '}
        {/* Add a link to the ContactIndex */}
      </section>
    </React.Fragment>
  )
}
