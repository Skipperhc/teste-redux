import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './ConterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})