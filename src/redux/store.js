'use client'
import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './loginSlice'


export const store = configureStore({
  reducer: {
     user:loginSlice.reducer
  },
})