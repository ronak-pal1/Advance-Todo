import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  toDo: [],
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

const transferTodoFun = (state, action) => {
  const todoTypes = ["toDo", "inProgress", "done"];
  console.log("todo transferred");

  const transferInfo = action.payload;
  console.log(transferInfo.type);

  state[todoTypes[transferInfo.type]] = state[
    todoTypes[transferInfo.type]
  ].filter((todo) => todo.id != transferInfo.id);
  state[todoTypes[transferInfo.toType]].push({
    id: transferInfo.id,
    type: transferInfo.toType,
    name: transferInfo.name,
    desp: transferInfo.desp,
    priority: transferInfo.priority,
  });

  localStorage.setItem("todos", JSON.stringify(state));
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoFun,
    removeTodo: removeTodoFun,
    transferTodo: transferTodoFun,
  },
});

export const { addTodo, removeTodo, transferTodo } = todoSlice.actions;

export default todoSlice.reducer;
