// citySlice.js - Manages city-related state and actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state for cities
interface CityState {
  cities: Array<{ id: string; name: string; description: string }>;  // List of all cities
  selectedCity: { id: string; name: string; description: string } | null;  // Details of the selected city
}

const initialState: CityState = {
  cities: [],  // Start with an empty array of cities
  selectedCity: null,  // No city is selected by default
};

// Create a slice for city-related actions and state
const citySlice = createSlice({
  name: 'cities',  // Slice name
  initialState,  // Initial state of the slice
  reducers: {
    // Action to set the list of cities
    setCities(state, action: PayloadAction<Array<{ id: string; name: string; description: string }>>) {
      state.cities = action.payload;  // Set cities list
    },
    // Action to select a specific city
    selectCity(state, action: PayloadAction<{ id: string; name: string; description: string }>) {
      state.selectedCity = action.payload;  // Set the selected city details
    },
    // Action to clear the selected city
    clearSelectedCity(state) {
      state.selectedCity = null;  // Clear selected city
    },
  },
});

// Export the actions (so they can be dispatched from components)
export const { setCities, selectCity, clearSelectedCity } = citySlice.actions;

// Export the reducer to be used in the store
export default citySlice.reducer;
