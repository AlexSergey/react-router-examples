import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './slices/user-slice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: false,
    }),
  preloadedState: {},
  reducer: {
    userReducer,
  },
});
export type IStore = ReturnType<typeof store.getState>
