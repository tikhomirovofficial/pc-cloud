import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productsResponse } from './productsResponse'

const initialState = {
    items: [],
    categories: [
        {
            id: 1,
            name: "Готовые ПК"
        },
        {
            id: 2,
            name: "Смартфоны"
        },
        {
            id: 3,
            name: "Комплектующие"
        },
        {
            id: 4,
            name: "Периферия"
        }
    ],
    loading: false

}
export const getAllProductsAndCategories = createAsyncThunk(
    'products/get',
    async (_, { dispatch }) => {
        return await new Promise((res, rej) => {
            setTimeout(() => {
                res(productsResponse)
            }, 1000)
        })
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // CATEGORIES
        builder.addCase(getAllProductsAndCategories.fulfilled, (state, action) => {
            state.items = action.payload.products
            state.loading = false
        })
        builder.addCase(getAllProductsAndCategories.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllProductsAndCategories.rejected, (state, action) => {
            state.loading = false
        })

    }
})

// Action creators are generated for each case reducer function
export const { } = productsSlice.actions

export const productReducer = productsSlice.reducer;