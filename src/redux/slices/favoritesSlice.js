import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            state.push(action.payload)
        },
        deleteFavorites: (state, action) => {
            let newState = state.filter(item => item.key !== action.payload)
            localStorage.setItem('requestsList', JSON.stringify(newState));
            return newState
        },
        submitEdits: (state, action) => {
            return state.map((todo) => {
                if (todo.key === action.payload.key) {
                    return {
                        ...todo, term: action.payload.term, name: action.payload.name, sort: action.payload.sort, videoCount: action.payload.videoCount
                    }
                }
                return todo
            });
        }

    }
})

export const { addToFavorites, deleteFavorites, submitEdits } = favoritesSlice.actions
export default favoritesSlice.reducer