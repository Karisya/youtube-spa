import { createSlice } from '@reduxjs/toolkit'

const termSlice = createSlice({
    name: 'term',
    initialState: "",
    reducers: {
        setTerm: (state, action) => {
            return action.payload
        },
    }
})

export const { setTerm } = termSlice.actions
export default termSlice.reducer

