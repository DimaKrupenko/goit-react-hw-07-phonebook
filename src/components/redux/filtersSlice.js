import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: { filters: '' },
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
