import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  {
    id: nanoid(),
    name: 'Alberto Moreno',
    number: '1111',
  },
  { id: nanoid(), name: 'Roberto Carlos', number: '22222' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { deleteContacts, addContacts } = contactsSlice.actions;
