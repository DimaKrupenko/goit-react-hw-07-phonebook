import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsSlice } from './userSlice';
import { filtersSlice } from './filtersSlice';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsApi, contactsReducer } from './contactsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
// });

// const persistClickReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    // contacts: persistClickReducer,
    filters: filtersSlice.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
