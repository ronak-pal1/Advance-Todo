import {
  AddIcon1,
  HomeIcon,
  LightIcon,
  MembersIcon,
  MessageIcon,
  SettingsIcon,
  TaskIcon,
  ThreeDotsIcon,
} from "../SVGIcons";

const SideBarCol = ({ Icon, name }) => {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <Icon />
      <p className="text-[#787486] font-medium ml-4">{name}</p>
    </div>
  );
};

const ProjectCol = ({ name, color, isSelected }) => {
  return (
    <div
      className={`flex items-center justify-between w-full ${
        isSelected && "bg-[#5030E514]"
      } px-2 py-1 rounded-md cursor-pointer`}
    >
      <div className="flex items-center">
        <div className={`w-2 h-2 ${color} rounded-full`}></div>

        <p
          className={`${
            isSelected
              ? "text-[#0D062D] font-semibold"
              : "text-[#787486] font-medium"
          } ml-3`}
        >
          {name}
        </p>
      </div>

      {isSelected && <ThreeDotsIcon />}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex-[0.140] border-r border-[#DBDBDB] w-full h-full  px-3">
      <div className="flex flex-1 flex-col">
        {/* Top portion */}

        <div className="flex flex-col items-start space-y-4 py-6  border-b border-[#DBDBDB]">
          <SideBarCol Icon={HomeIcon} name={"Home"} />
          <SideBarCol Icon={MessageIcon} name={"Messages"} />
          <SideBarCol Icon={TaskIcon} name={"Tasks"} />
          <SideBarCol Icon={MembersIcon} name={"Members"} />
          <SideBarCol Icon={SettingsIcon} name={"Settings"} />
        </div>

        {/* Bottom portion */}
        <div className="flex flex-1 flex-col py-6">
          {/* Portion heading */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold">My projects</p>
            <AddIcon1 />
          </div>

          {/* projects list */}
          <div className="flex flex-col items-star py-6 space-y-2">
            <ProjectCol
              name={"Mobile App"}
              color={"bg-[#7AC555]"}
              isSelected={true}
            />
            <ProjectCol
              name={"Website Redesign"}
              color={"bg-[#FFA500]"}
              isSelected={false}
            />
            <ProjectCol
              name={"Design System"}
              color={"bg-[#E4CCFD]"}
              isSelected={false}
            />
            <ProjectCol
              name={"Wireframes"}
              color={"bg-[#76A5EA]"}
              isSelected={false}
            />
          </div>
        </div>

        {/* Thoughts container */}
        <div className="bg-[#F5F5F5] flex flex-col items-center justify-center rounded-2xl px-3 pb-4">
          <div className="rounded-full px-5 py-4 bg-[#F5F5F5] -mt-7">
            <div>
              <LightIcon />
            </div>
          </div>

          <p className="text-sm font-medium">Thoughts Time</p>
          <p className="text-xs text-[#787486] text-center py-2">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
          </p>

          <button className="w-full text-sm font-medium bg-white rounded py-1">
            Write a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
