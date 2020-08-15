import React from 'react'
import Navbar from './components/Navbar'
import ContactList from './components/ContactList'
import ContactForm from './components/ContactForm'

import ContactContextProvider from './contexts/ContactContext'

const App = () => {
  return (
    <div className='App'>
      <ContactContextProvider>
        <Navbar />
        <ContactList />
        <ContactForm />
      </ContactContextProvider>
    </div>
  )
}

export default App
