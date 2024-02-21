import { createSlice } from '@reduxjs/toolkit'

const editShowSlice = createSlice({
    name: 'editShow',
    initialState: false,
    reducers: {
        setEditShow: (state, action) => {
            return action.payload
        },
    }
})

export const { setEditShow } = editShowSlice.actions
export default editShowSlice.reducer

