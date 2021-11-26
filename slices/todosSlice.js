import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [{
      title: "to shit",
      id: 1,
      completed: false
  },
  {
    title: "to piss",
    id: 2,
    completed: false
    }   
],
}

export const todosSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("adding")
      console.log(action.payload)
      state.todos.push(action.payload)
    },
    complete: (state, action) => {
        let needed = state.todos.findIndex((todo) => todo.id === action.payload)
        state.todos[needed].completed = !state.todos[needed].completed
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, complete } = todosSlice.actions

export default todosSlice.reducer