import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      title: "to shit",
      id: 1,
      completed: true,
    },
    {
      title: "to piss",
      id: 2,
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo: (state, action) => {
      let needed = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[needed].completed = !state.todos[needed].completed;
    },
    deleteTodo: (state, action) => {
      let newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
