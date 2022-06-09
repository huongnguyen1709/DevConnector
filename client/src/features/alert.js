import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
    name: 'alert',
    initialState: [],
    reducers: {
        set_alert: (state, action) => state = [...state, action.payload],
        remove_alert: (state, action) => state.filter(alert => alert.id === action.payload)
    }
})

export default alertSlice.reducer