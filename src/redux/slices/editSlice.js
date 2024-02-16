import { createSlice } from '@reduxjs/toolkit'

const editSlice = createSlice({
    name: 'edit',
    initialState: null,
    reducers: {
        setEdit: (state, action) => {
            return action.payload
        },
    }
})

export const { setEdit } = editSlice.actions
export default editSlice.reducer