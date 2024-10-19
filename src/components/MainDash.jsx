import { useEffect, useState } from "react";
import {
  AddIcon2,
  DateIcon,
  DropdownIcon,
  EditIcon,
  FilterIcon,
  LinkIcon,
  MenuLayoutIcon,
  ShareIcon,
  TickIcon,
  TileLayoutIcon,
} from "../SVGIcons";
import InvitedProfiles from "../assets/InvitedProfiles.svg";
import TodoContainer from "./TodoContainer";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

const CustomButton = ({
  name,
  Icon,
  isDropDown,
  isFunctional = true,
  setFiltering,
}) => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const dropdown = () => {
    if (!isFunctional) return;

    setIsDroppedDown(!isDroppedDown);
  };

  const [isFilteringSelected, setIsFilteringSelected] = useState(false);

  return (
    <div className="w-fit h-fit relative">
      <div
        className="flex items-center space-x-3 w-fit h-fit border rounded-md border-[#787486] px-3 py-2 cursor-pointer"
        onClick={dropdown}
      >
        <Icon />
        <p className="text-[#787486] font-medium">{name}</p>
        {isDropDown && <DropdownIcon size={"16"} />}
      </div>
      {isDropDown && isDroppedDown && (
        <div className="absolute w-52 px-4 py-4 h-fit bg-white shadow-2xl rounded-md [&>*]:text-[#0D062D] [&>*]:font-medium [&>*]:cursor-pointer">
          <div
            onClick={() => {
              setFiltering((value) => !value);
              setIsFilteringSelected(!isFilteringSelected);
            }}
            className="flex items-center justify-between"
          >
            <p>By prioprity</p>
            {isFilteringSelected && <TickIcon />}
          </div>
        </div>
      )}
    </div>
  );
};

const MainDash = () => {
  const [isAddingTodo, setIsAddingTodo] = useState({ state: false, todoNo: 0 });
  const todos = useSelector((state) => state);
  const [isFiltering, setFiltering] = useState(false);
  const [allToDo, setAllToDo] = useState([]);
  const [allInProgress, setAllInProgress] = useState([]);
  const [allDone, setAllDone] = useState([]);

  const filterByPriority = (arr) => {
    // high -> low -> completed
    // 0 -> 1 -> 2

    return arr.sort((todo1, todo2) => {
      return parseInt(todo1.priority) - parseInt(todo2.priority);
    });
  };

  useEffect(() => {
    if (isFiltering) {
      setAllToDo(filterByPriority([...todos?.toDo]));
      setAllInProgress(filterByPriority([...todos?.inProgress]));
      setAllDone(filterByPriority([...todos?.done]));
    } else {
      setAllToDo(todos?.toDo);
      setAllInProgress(todos?.inProgress);
      setAllDone(todos?.done);
    }
  }, [isFiltering, todos]);

  return (
    <>
      <div
        className={`w-full h-full bg-transparent absolute top-0 left-0 ${
          isAddingTodo.state ? "flex" : "hidden"
        } justify-center items-center z-50 `}
      >
        <div className="w-1/2 h-fit bg-white shadow-2xl rounded-2xl z-50">
          <AddTodo
            setIsAddingTodo={setIsAddingTodo}
            isAddingTodo={isAddingTodo}
          />
        </div>
      </div>
      <div className="flex flex-[0.860] flex-col px-10 py-6 w-full h-full overflow-y-scroll">
        {/* Top project info part */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <p className="text-[46px] font-semibold">Mobile App</p>
              <EditIcon />
              <LinkIcon />
            </div>

            <div className="flex items-center">
              <div className="flex items-center px-3 py-1">
                <div className="bg-[#5030E533] rounded-md">
                  <AddIcon2 size={"18"} />
                </div>
                <p className="text-[#5030E5] font-medium ml-2">Invite</p>
              </div>
              <img src={InvitedProfiles} />
            </div>
          </div>

          {/* Filters, Share and layout buttons */}
          <div className="flex items-center mt-6 justify-between">
            <div className="flex items-center space-x-3">
              <CustomButton
                name={"Filter"}
                Icon={FilterIcon}
                isDropDown={true}
                isFiltering={false}
                setFiltering={setFiltering}
              />
              <CustomButton
                name={"Today"}
                Icon={DateIcon}
                isDropDown={true}
                isFunctional={false}
              />
            </div>

            <div className="flex items-center space-x-6">
              <CustomButton
                name={"Share"}
                Icon={ShareIcon}
                isDropDown={false}
              />
              <div className="flex items-center border-l border-[#787486] space-x-6 pl-5">
                <TileLayoutIcon />
                <MenuLayoutIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom todo cards part */}
        <div className="flex flex-1 items-center space-x-5 mt-8">
          <TodoContainer
            todoNo={0}
            name={"To Do"}
            color={"#5030E5"}
            canAdd={true}
            setIsAddingTodo={setIsAddingTodo}
            allTodos={allToDo}
          />
          <TodoContainer
            todoNo={1}
            name={"On Progress"}
            color={"#FFA500"}
            canAdd={true}
            setIsAddingTodo={setIsAddingTodo}
            allTodos={allInProgress}
          />
          <TodoContainer
            todoNo={2}
            name={"Done"}
            color={"#8BC48A"}
            canAdd={true}
            setIsAddingTodo={allDone}
            allTodos={todos?.done}
          />
        </div>
      </div>
    </>
  );
};

export default MainDash;
