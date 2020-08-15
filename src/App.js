import React from 'react'
import Navbar from './components/Navbar'
import ContactList from './components/ContactList'
import ContactContextProvider from './contexts/ContactContext'

const App = () => {
  return (
    <div className='App'>
      <ContactContextProvider>
        <Navbar />
        <ContactList />
      </ContactContextProvider>
    </div>
  )
}

export default App
