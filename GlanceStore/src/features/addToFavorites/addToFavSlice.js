import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
         toggleLike: (state, { payload: favItem}) => {
            
            const inFav = state.some(i => i.id === favItem.id)

            if (inFav) {
                const index = state.findIndex(item => item.id === favItem.id)

            if (index !== -1) {
                state.splice(index, 1)
            }
            } else {
                state.push(favItem)
            }
         }
    }
})

export const { actions: favActions } = favoritesSlice;
export const { reducer: favReducer } = favoritesSlice;