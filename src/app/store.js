import { configureStore } from "@reduxjs/toolkit"
import accessTokenReducer from "../features/accessTokenSlice"


const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        
    }
})

export default store
