import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({id: ++id, text: action.payload, completed: false})
        },
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { add, remove} = todoSlice.actions

export default todoSlice.reducer