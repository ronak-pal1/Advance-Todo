import { useEffect, useState } from "react";
import { CloseIcon } from "../SVGIcons";

const AddTodo = ({ setIsAddingTodo, isAddingTodo }) => {
  const [currentTodoInfo, setCurrentTodoInfo] = useState({
    dotColor: "#5030E5",
    name: "To Do",
  });

  useEffect(() => {
    if (isAddingTodo.todoNo == 0)
      setCurrentTodoInfo({ dotColor: "#5030E5", name: "To Do" });
    else if (isAddingTodo.todoNo == 1)
      setCurrentTodoInfo({ dotColor: "#FFA500", name: "In Progress" });
    else if (isAddingTodo.todoNo == 2)
      setCurrentTodoInfo({ dotColor: "#8BC48A", name: "Done" });
  }, [isAddingTodo]);

  const closeTodo = () => {
    setIsAddingTodo({ state: false, todoNo: isAddingTodo.todoNo });
  };

  return (
    <div className="w-full h-full px-6 py-10">
      {/* Add todo heading */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: currentTodoInfo.dotColor }}
          ></div>
          <p className="text-[#0D062D] font-medium text-xl ml-4">
            Add {currentTodoInfo.name}
          </p>
        </div>

        <div onClick={closeTodo}>
          <CloseIcon />
        </div>
      </div>

      <div className="mt-10 space-y-7">
        <div>
          <label for="prioprity" className="font-medium">
            Prioprity :{" "}
          </label>

          <select name="prioprity" className="outline-none text-xs">
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Name"
          className="text-2xl outline-none w-full border-b py-3"
        />
        <input
          type="text"
          placeholder="Description"
          className="text-lg outline-none w-full border-b py-3"
        />
      </div>

      <div className="w-full flex justify-center mt-5">
        <button className="bg-[#5030E5] text-white px-5 py-3 text-xs rounded-md">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
