import { configureStore } from '@reduxjs/toolkit'

import videoSlice from './slices/videoSlice'
import clickSlice from './slices/clickSlice'
import searchSlice from './slices/searchSlice'
import selectedVideoClice from './slices/selectedVideoClice'
import termSlice from './slices/termSlice'
import showSlice from './slices/showSlice'
import nameSlice from './slices/nameSlice'
import videoCountSlice from './slices/videoCountSlice'
import favoritesSlice from './slices/favoritesSlice'
import editItemSlice from './slices/editItemSlice'
import editShowSlice from './slices/editShowSlice'

const store = configureStore({
    reducer: {
        videos: videoSlice,
        search: searchSlice,
        click: clickSlice,
        selectedVideo: selectedVideoClice,
        term: termSlice,
        show: showSlice,
        favorites: favoritesSlice,
        name: nameSlice,
        videoCount: videoCountSlice,
        editItem: editItemSlice,
        editShow: editShowSlice,
    }
})

export default store