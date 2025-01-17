// src/redux/exampleSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state and reducers for the example slice
const exampleSlice = createSlice({
    name: 'example',
    initialState: { data: [] },
    reducers: {
        // Define a reducer to set the data
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Export the actions generated by createSlice
export const { setData } = exampleSlice.actions;
// Export the reducer to be used in the rootReducer
export default exampleSlice.reducer;
