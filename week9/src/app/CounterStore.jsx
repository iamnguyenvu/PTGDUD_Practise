import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

const CounterStore = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default CounterStore