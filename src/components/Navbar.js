import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { ContactContext } from '../contexts/ContactContext'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(5),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const { contacts } = useContext(ContactContext)

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography className={classes.title} variant='h6' color='inherit'>
            Contacts
          </Typography>
          <Typography variant='subtitle2' color='inherit'>
            Currently you have {contacts.length} contacts
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
