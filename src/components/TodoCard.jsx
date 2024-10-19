import { useEffect, useState } from "react";
import { FilesIcon, MessageIcon, ThreeDotsIcon } from "../SVGIcons";
import TodoCardInvitedProf from "../assets/TodoCardInvitedProf.svg";
import { useDispatch } from "react-redux";
import { removeTodo } from "../app/todoSlice";

const InfoView = ({ name, count, Icon }) => {
  return (
    <div className="flex items-center">
      <Icon size="16" />
      <p className="text-[#787486] text-xs ml-1">
        {count} {name}
      </p>
    </div>
  );
};

const TodoCard = ({ todoInfo }) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const dispatch = useDispatch();
  const [priorityColor, setPriorityColor] = useState({
    txt: "#D58D49",
    bg: "#DFA87433",
  });

  const priorityText = ["High", "Low", "Completed"];

  const deleteTodo = () => {
    dispatch(removeTodo({ id: todoInfo.id, type: todoInfo.type }));
    setIsDroppedDown(false);
  };

  useEffect(() => {
    let txt = "#D58D49";
    let bg = "#DFA87433";

    // High
    if (todoInfo.priority == "0") {
      txt = "#D8727D";
      bg = "#D8727D1A";
    }
    // Completed
    else if (todoInfo.priority == "2") {
      txt = "#68B266";
      bg = "#83C29D33";
    }

    setPriorityColor({ txt, bg });
  }, [todoInfo]);

  return (
    <div className="w-full h-fit bg-white rounded-2xl px-4 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        <p
          className="text-xs font-medium w-fit h-fit px-2 py-1 rounded-[4px]"
          style={{
            color: priorityColor.txt,
            backgroundColor: priorityColor.bg,
          }}
        >
          {priorityText[parseInt(todoInfo?.priority)]}
        </p>

        <div className="relative">
          <div onClick={() => setIsDroppedDown(!isDroppedDown)}>
            <ThreeDotsIcon />
          </div>

          <div
            className={`w-fit h-fit bg-white shadow-2xl absolute px-4 py-2 rounded-md ${
              isDroppedDown ? "flex" : "hidden"
            }`}
          >
            <p
              className="text-sm font-semibold text-red-400 cursor-pointer"
              onClick={deleteTodo}
            >
              Delete
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-3">
        <p className="text-[#0D062D] text-lg font-semibold">{todoInfo?.name}</p>
        <p className="text-[#787486] text-xs leading-4 mt-2">
          {todoInfo?.desp}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <img src={TodoCardInvitedProf} />
        <div className="flex items-center space-x-2">
          <InfoView name={"Comments"} count={11} Icon={MessageIcon} />
          <InfoView name={"Files"} count={0} Icon={FilesIcon} />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
