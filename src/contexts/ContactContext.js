import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
  const [contacts, setContacts] = useState([
    {
      id: uuidv4(),
      firstName: 'Justyna',
      lastName: 'Marciniak',
      phone: '123456',
      email: 'justyna@gmail.com',
    },
    {
      id: uuidv4(),
      firstName: 'Ryu',
      lastName: 'Tsukata',
      phone: '123456',
      email: 'ryu@gmail.com',
    },
  ])

  const addContact = (firstName, lastName, phone, email) => {
    setContacts([
      ...contacts,
      { firstName, lastName, phone, email, id: uuidv4() },
    ])
  }

  const removeContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <ContactContext.Provider value={{ contacts, addContact, removeContact }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
