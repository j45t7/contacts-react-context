import React, { useContext } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
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
  return contacts.length ? (
    <Container className={classes.root} maxWidth='md'>
      <>
        {contacts.map((contact) => (
          <ContactDetails contact={contact} key={contact.id} />
        ))}
      </>
    </Container>
  ) : (
    <Container className={classes.root} maxWidth='md'>
      <Typography color='textSecondary' gutterBottom>
        No contacts.
      </Typography>
    </Container>
  )
}

export default ContactList
