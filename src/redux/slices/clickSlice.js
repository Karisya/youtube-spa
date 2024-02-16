import { createSlice } from '@reduxjs/toolkit'

const clickSlice = createSlice({
    name: 'click',
    initialState: 'row',
    reducers: {
        setClick: (state, action) => {
            return action.payload
        },
    }
})

export const { setClick } = clickSlice.actions
export default clickSlice.reducer