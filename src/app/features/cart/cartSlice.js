import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalSum: 0,
    totalSumWithSales: 0

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setTotalSum: (state, action) => {
            state.totalSum = action.payload
        },
        setTotalSalesSum: (state, action) => {
            state.totalSum = action.payload
        },
        addProduct: (state, action) => {
            state.items = [...state.items, {
                ...action.payload,
                count: 1
            }]
        },
        plusProduct: (state, action) => {
            state.items = state.items.map(item => {
                if (item.id == action.payload) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }
                return item
            })
        },
        minusProduct: (state, action) => {
            const productToMinus = state.items.find(item => item.id === action.payload);
            if (productToMinus) {
                if (productToMinus.count > 1) {
                    state.items = state.items.map(item => {
                        if (item.id == action.payload) {
                            return {
                                ...item,
                                count: item.count - 1
                            }
                        }
                        return item
                    })
                }
            }
        },
        removeProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
})

// Action creators are generated for each case reducer function
export const { plusProduct, minusProduct, setTotalSalesSum, setTotalSum, removeProduct, addProduct } = cartSlice.actions

export const cartReducer = cartSlice.reducer;