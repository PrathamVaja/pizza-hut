import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../fetures/cartSlice'

export default configureStore({
  reducer: {
    allCart : cartReducer,
  }
})