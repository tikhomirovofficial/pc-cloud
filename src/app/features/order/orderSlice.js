import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    sending: false,
    success: null,
    form: {
        city: "",
        street: "",
        house: "",
        entrance: "",
        flat: "",
        phone: "+7"
    }

}
export const createOrder = createAsyncThunk(
    'order/create',
    async (_, { dispatch }) => {
        return await new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    status: true
                })
            }, 1000)
        })
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrder: (state) => {
            state.form = initialState.form
            state.sending = initialState.sending
            state.success = initialState.success
        },
        handleOrderForm: (state, action) => {
            console.log(action.payload);
            state.form[action.payload.key] = action.payload.val
        }
    },
    extraReducers: (builder) => {
        // ORDER
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.sending = false
            state.success = true
        })
        builder.addCase(createOrder.pending, (state, action) => {
            state.sending = true
        })
        builder.addCase(createOrder.rejected, (state, action) => {
            state.sending = false
            state.success = false
        })

    }
})

// Action creators are generated for each case reducer function
export const { resetOrder, handleOrderForm} = orderSlice.actions

export const orderReducer = orderSlice.reducer;