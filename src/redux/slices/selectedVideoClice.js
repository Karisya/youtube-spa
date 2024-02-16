import { createSlice } from '@reduxjs/toolkit'

const selectedVideoSlice = createSlice({
    name: 'selectedVideo',
    initialState: null,
    reducers: {
        setSelectedVideo: (state, action) => {
            return action.payload
        },
    }
})

export const { setSelectedVideo } = selectedVideoSlice.actions
export default selectedVideoSlice.reducer