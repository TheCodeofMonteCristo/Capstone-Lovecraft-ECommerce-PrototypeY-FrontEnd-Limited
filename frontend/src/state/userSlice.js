// userSlice.js - Manages user-related state and actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for the user
interface UserState {
  user: { name: string; email: string } | null;  // Stores user data (null if no user is logged in)
  isAuthenticated: boolean;  // Authentication status (true if logged in, false if not)
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

// Create a slice for user-related actions and state
const userSlice = createSlice({
  name: 'user',  // Slice name
  initialState,  // Initial state of the slice
  reducers: {
    // Action to set user data when logging in
    loginUser(state, action: PayloadAction<{ name: string; email: string }>) {
      state.user = action.payload;  // Store user data
      state.isAuthenticated = true;  // Set authentication status to true
    },
    // Action to log out the user
    logoutUser(state) {
      state.user = null;  // Clear user data
      state.isAuthenticated = false;  // Set authentication status to false
    },
    // Action to update user profile
    updateUser(state, action: PayloadAction<{ name: string; email: string }>) {
      state.user = action.payload;  // Update user data
    },
  },
});

// Export the actions (so they can be dispatched from components)
export const { loginUser, logoutUser, updateUser } = userSlice.actions;

// Export the reducer to be used in the store
export default userSlice.reducer;
