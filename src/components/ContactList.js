import React, { useContext } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import ContactDetails from './ContactDetails'
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
      </Container>
    )
}

export default ContactList
