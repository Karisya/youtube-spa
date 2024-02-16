import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: false,
    reducers: {
        setSearch: (state, action) => {
            return action.payload
        },
    }
})

export const { setSearch } = searchSlice.actions
export default searchSlice.reducer

