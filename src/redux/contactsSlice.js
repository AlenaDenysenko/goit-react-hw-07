import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`/contacts/${contactId}`);
  return contactId;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

export const selectFilteredContacts = createSelector(
  (state) => state.contacts.items,
  (state) => state.contacts.filter,
  (items, filter) => items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  )
);


