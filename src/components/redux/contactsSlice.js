// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   //   baseUrl: 'https://63d8236b74f386d4efd40b2f.mockapi.io/',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63d8236b74f386d4efd40b2f.mockapi.io/',
//   }),

//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => `/contacts`,
//     }),
//   }),
// });

// export const { useFetchContacts } = contactsApi;
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;