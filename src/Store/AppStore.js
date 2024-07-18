import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'



const AppStore = configureStore({
    user: userSlice
})


export default AppStore