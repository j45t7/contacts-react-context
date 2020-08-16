import { v4 as uuidv4 } from 'uuid'

export const ContactReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          firstName: action.contact.firstName,
          lastName: action.contact.lastName,
          phone: action.contact.phone,
          email: action.contact.email,
          id: uuidv4(),
        },
      ]
    case 'REMOVE_CONTACT':
      return state.filter((contact) => contact.id !== action.id)
    default:
      return state
  }
}
