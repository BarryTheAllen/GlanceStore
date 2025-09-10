import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleCart: (state, { payload: cartItem}) => {
            const inCart = state.some(i => i.id === cartItem.id)

            if (inCart) {
                const index = state.findIndex(item => item.id === cartItem.id)

            if(index !== -1) {
                state.splice(index, 1)
            }
            } else {
                state.push({ ...cartItem, quantity: 1 })
            }
        },
        incrementQuantity: (state, { payload: itemId }) => {
            const item = state.find(item => item.id === itemId);

            if (item) {
                item.quantity += 1;
            }
            
        },
        decrementQuantity: (state, { payload: itemId }) => {

            const item = state.find(item => item.id === itemId);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, { payload: itemId }) => {
            return state.filter(item => item.id !== itemId);
        }
    }
})

export const { actions: cartActions } = cartSlice;
export const { reducer: cartReducer } = cartSlice;