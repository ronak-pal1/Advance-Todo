import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toDo: [
    {
      id: 1,
      type: 0,
      name: "this is a todo",
      desp: "this is a description",
      priority: "low",
    },
  ],
  inProgress: [],
  done: [],
};

const addTodoFun = (state, action) => {
  const todo = {
    id: nanoid(),
    type: action.payload.type,
    name: action.payload.name,
    desp: action.payload.desp,
    priority: action.payload.priority,
  };

  if (action.payload.type == 0) state.toDo.push(todo);
  else if (action.payload.type == 1) state.inProgress.push(todo);
  else if (action.payload.type == 2) state.done.push(todo);

  // Saving the state in the local storage
  localStorage.setItem("todos", JSON.stringify(state));
};

const removeTodoFun = (state, action) => {
  if (action.payload.type == 0) {
    state.toDo = state.toDo.filter((todo) => todo.id != action.payload.id);
  } else if (action.payload.type == 1) {
    state.inProgress = state.inProgress.filter(
      (todo) => todo.id != action.payload.id
    );
  } else if (action.payload.type == 2) {
    state.done = state.done.filter((todo) => todo.id != action.payload.id);
  }

  // Saving the state in the local storage
  localStorage.setItem("todos", JSON.stringify(state));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoFun,
    removeTodo: removeTodoFun,
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
