'use client'
import { createSlice  } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
  userData:[]
}

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  }
})

export const { setUserData } = loginSlice.actions

export default loginSlice.reducer