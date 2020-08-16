import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

import { ContactContext } from '../contexts/ContactContext'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    margin: 'auto',
    paddingBottom: 10,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    paddingBottom: theme.spacing(1),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    paddingRight: theme.spacing(1),
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  buttons: {
    marginLeft: theme.spacing(1),
    alignItems: 'flex-end',
  },
}))

const ContactForm = (props) => {
  const classes = useStyles()
  const { dispatch } = useContext(ContactContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const empty =
    firstName === '' || lastName === '' || phone === '' || email === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_CONTACT',
      contact: {
        firstName,
        lastName,
        phone,
        email,
      },
    })
    setFirstName('')
    setLastName('')
    setPhone('')
    setEmail('')
  }

  return (
    <Container className={classes.root} maxWidth='md'>
      <Paper className={classes.paper}>
        <div>
          <Typography className={classes.heading}>Add a New Contact</Typography>
        </div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstName'
                label='First Name'
                value={firstName}
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                autoComplete='lname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='phone'
                label='Phone'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid className={classes.buttons}>
              <Button size='small'>Cancel</Button>
              <Button
                className={classes.submit}
                disabled={empty}
                type='submit'
                size='small'
                value='add-contact'
                color='primary'
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default ContactForm
