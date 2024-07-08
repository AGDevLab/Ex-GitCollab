// const { useEffect, useState } = React
const { useSelector } = ReactRedux

// import React from 'react';

export function ContactIndex() {
  // Access the contacts state from the Redux store
  const contacts = useSelector((state) => state.contacts)

  if (contacts.length === 0) return <div>Loading...</div>

  return (
    <div className='contact-index'>
      <h2>Contact Index</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
    </div>
  )
}
