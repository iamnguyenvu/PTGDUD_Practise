import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({id: ++nextId, text: action.payload, completed: false})
        },
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },
        toggle: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const { add, remove, toggle } = todoSlice.actions

export default todoSlice.reducer