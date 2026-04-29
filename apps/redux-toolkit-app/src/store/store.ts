import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from "./habit-slice"

export default configureStore({
    reducer: {
        habits: habitsReducer
    },
})