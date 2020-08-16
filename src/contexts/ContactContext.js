import React, { createContext, useReducer, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ContactReducer } from '../reducers/ContactReducer'

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
  const [contacts, dispatch] = useReducer(ContactReducer, [
    // {
    //   id: uuidv4(),
    //   firstName: 'Justyna',
    //   lastName: 'Marciniak',
    //   phone: '123456',
    //   email: 'justyna@gmail.com',
    // },
    // {
    //   id: uuidv4(),
    //   firstName: 'Ryu',
    //   lastName: 'Tsukata',
    //   phone: '123456',
    //   email: 'ryu@gmail.com',
    // },
  ], ()=>{
    const localData = window.localStorage.getItem('contacts')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(()=>{
window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
