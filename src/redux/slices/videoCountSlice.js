import { createSlice } from '@reduxjs/toolkit'

const videoCountSlice = createSlice({
    name: 'videoCount',
    initialState: 1,
    reducers: {
        setVideoCount: (state, action) => {
            return action.payload
        },
    }
})

export const { setVideoCount } = videoCountSlice.actions
export default videoCountSlice.reducer

