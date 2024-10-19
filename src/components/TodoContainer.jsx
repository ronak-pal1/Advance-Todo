import { AddIcon2 } from "../SVGIcons";
import TodoCard from "./TodoCard";

const TodoContainer = ({
  name,
  color,
  canAdd,
  setIsAddingTodo,
  todoNo,
  allTodos,
}) => {
  return (
    <div className="flex flex-col flex-[0.33] h-full bg-[#F5F5F5] rounded-2xl px-5 py-4">
      {/* Todo container heading */}
      <div
        className={`flex items-center justify-between border-b-[3px] py-3 `}
        style={{ borderBottomColor: color }}
      >
        {/* Colored dot */}
        <div className="flex items-center space-x-3">
          <div
            className={`w-2 h-2 rounded-full`}
            style={{ backgroundColor: color }}
          ></div>
          <p className="font-medium text-[#0D062D]">{name}</p>

          <p className="font-medium text-xs text-[#625F6D] bg-[#e8e6e6] px-2 py-1 rounded-full">
            {allTodos.length}
          </p>
        </div>

        {canAdd && (
          <div onClick={() => setIsAddingTodo({ state: true, todoNo: todoNo })}>
            <AddIcon2 size={"24"} />
          </div>
        )}
      </div>

      {/* all todos */}
      <div className="flex flex-col space-y-4 mt-4">
        {allTodos?.map((todo) => (
          <TodoCard key={todo.id} todoInfo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
