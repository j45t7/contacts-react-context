import React, { useState, useContext } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import IconButton from '@material-ui/core/IconButton'
import { v4 as uuidv4 } from 'uuid'

import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import { ContactContext } from '../contexts/ContactContext'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
  },
}))

const ContactList = () => {
  const classes = useStyles()
  const { contacts } = useContext(ContactContext)
  if (contacts.length)
    return (
      <Container className={classes.root} maxWidth='md'>
        <>
        {contacts.map((contact) => (
          <ContactDetails contact={contact} key={contact.id} />
        ))}
        </>
        {/* <IconButton onClick={addContact} aria-label='add'>
        <AddCircleOutlineIcon fontSize='large' />
      </IconButton> */}
       
      </Container>
    )
}

export default ContactList
