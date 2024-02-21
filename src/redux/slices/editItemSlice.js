import { createSlice } from '@reduxjs/toolkit'

const editItemSlice = createSlice({
    name: 'editItem',
    initialState: {},
    reducers: {
        setEditItem: (state, action) => {
            return action.payload
        },
    }
})

export const { setEditItem } = editItemSlice.actions
export default editItemSlice.reducer