import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFromStorage } from '../../../utils/localStorageExplorer'

const initialState = {
    items: getFromStorage("favorites") || [],
}

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavoritesProduct: (state, action) => {
            state.items = [...state.items, {
                ...action.payload
            }]
        },
        removeFavoritesProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },

    },
})

// Action creators are generated for each case reducer function
export const { removeFavoritesProduct, addFavoritesProduct } = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer;