
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated:false,
  loading: false,
  tokens:{},
  error: '',
  localToken: localStorage.getItem('accessToken0'),
}

// Generates pending, fulfilled and rejected action types
export const fetchTokens = createAsyncThunk('accessToken/fetchTokens',({username,password}) => {
  console.log(password,username)
  return axios
    .post("http://localhost:4200/user/login", {
      username,
      password,
    })
    .then(response =>{
      return response.data})
    .catch(error => console.log(error))
})

const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers:{
    logOut: state =>{
      state.loading = false
      state.isAuthenticated =false
      state.tokens = {}
      state.error = ""
     }
  },
  extraReducers: builder => {
    builder.addCase(fetchTokens.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchTokens.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      state.tokens = action.payload
      state.error = ''
    })
    builder.addCase(fetchTokens.rejected, (state, action) => {
      state.loading = false
      state.tokens = {}
      state.error = action.error.message
    })
  }
})

export default accessTokenSlice.reducer
export const {logOut} = accessTokenSlice.actions


