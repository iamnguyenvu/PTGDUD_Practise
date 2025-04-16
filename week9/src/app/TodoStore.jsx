import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from "../features/TodoSlice"

const todoStore = configureStore({
    reducer: {
        todo: TodoSlice
    }
})

export default todoStore