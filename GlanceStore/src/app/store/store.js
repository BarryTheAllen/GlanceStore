import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '../../features/addToCart/cartSlice'
import { favReducer } from '../../features/addToFavorites/addToFavSlice'

const rootReducer = combineReducers({
  cart: cartReducer,
  favorites: favReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store