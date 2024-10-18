import {
  AddIcon2,
  DateIcon,
  DropdownIcon,
  EditIcon,
  FilterIcon,
  LinkIcon,
  MenuLayoutIcon,
  ShareIcon,
  TileLayoutIcon,
} from "../SVGIcons";
import InvitedProfiles from "../assets/InvitedProfiles.svg";
import TodoContainer from "./TodoContainer";

const CustomButton = ({ name, Icon, isDropDown }) => {
  return (
    <div className="flex items-center space-x-3 w-fit h-fit border rounded-md border-[#787486] px-3 py-2 ">
      <Icon />
      <p className="text-[#787486] font-medium">{name}</p>
      {isDropDown && <DropdownIcon size={"16"} />}
    </div>
  );
};

const MainDash = () => {
  return (
    <>
      <div className="w-full h-full bg-transparent absolute top-0 left-0 flex justify-center items-center hidden ">
        <div className="w-1/2 h-96 bg-white shadow-2xl rounded-2xl"></div>
      </div>
      <div className="flex flex-[0.853] flex-col px-10 py-6 w-full h-full overflow-y-scroll">
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
              />
              <CustomButton name={"Today"} Icon={DateIcon} isDropDown={true} />
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
          <TodoContainer name={"To Do"} color={"#5030E5"} canAdd={true} />
          <TodoContainer name={"On Progress"} color={"#FFA500"} canAdd={true} />
          <TodoContainer name={"Done"} color={"#8BC48A"} canAdd={true} />
        </div>
      </div>
    </>
  );
};

export default MainDash;
