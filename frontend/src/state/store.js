// store.js - Configures the Redux store and provides state to the app
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  // Import user slice to manage user state
import cityReducer from './citySlice';  // Import city slice to manage city-related state

// Configure the Redux store using Redux Toolkit
export const store = configureStore({
  reducer: {
    user: userReducer,  // User state is managed by userSlice
    cities: cityReducer,  // City state is managed by citySlice
  },
});

// Export the type for RootState (for TypeScript usage)
export type RootState = ReturnType<typeof store.getState>;

// Export the dispatch function (for dispatching actions)
export type AppDispatch = typeof store.dispatch;
