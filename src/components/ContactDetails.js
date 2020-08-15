import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import { ContactContext } from '../contexts/ContactContext'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    textAlign: 'start',
    display: 'flex',
    '& .MuiCardActions-root': {
      alignItems: 'inherit',
    },
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      display: 'inline-flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  card: {
    display: 'block',
    flexWrap: 'wrap',
    minWidth: 300,
    // width: '100%',
    margin: 'auto',
    paddingBottom: 10,
    justifyContent: 'center',
  },
  buttons: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      display: 'inline-block',
      justifyContent: 'space-evenly',
    },
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    fontSize: 16,
    textAlign: 'start',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: '20px',
    },
  },
}))

const ContactDetails = ({ contact }) => {
  const { removeContact, editContact } = useContext(ContactContext)
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <Card className={classes.root}>
        <Grid container className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color='textSecondary'
              gutterBottom
            >
              Contact
            </Typography>
            <Typography variant='h6' component='h2'>
              Name: {contact.firstName} {contact.lastName}
            </Typography>
            <Typography className={classes.pos} color='textSecondary'>
              Tel: {contact.phone}
            </Typography>
            <Typography variant='body2' component='p'>
              Email:
              <br />
              {contact.email}
            </Typography>
          </CardContent>
        </Grid>
        <CardActions>
          <Grid
            container
            className={classes.buttons}
            direction='column'
            justify='space-evenly'
          >
            <Button
              className={classes.button}
              variant='contained'
              startIcon={<EditIcon />}
              size='small'
              onClick={() => editContact(contact.newFirstName)}
            >
              Edit
            </Button>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              startIcon={<DeleteIcon />}
              size='small'
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  )
}

export default ContactDetails
