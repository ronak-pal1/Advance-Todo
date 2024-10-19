import {
  BellIcon,
  CalenderIcon,
  CloseSideBarIcon,
  DropdownIcon,
  Logo,
  NotificationIcon,
  SearchIcon,
} from "../SVGIcons";

import AccountProfile from "../assets/AccountProfile.svg";

const Header = () => {
  return (
    <header className="flex flex-1 items-center border-b border-[#DBDBDB]">
      <div className="flex flex-[0.15] items-center justify-between px-4 py-5">
        <div className="flex items-center">
          <Logo />

          <p className="text-xl font-semibold text-[#0D062D] ml-1">
            Project M.
          </p>
        </div>

        <CloseSideBarIcon />
      </div>

      <div className="flex flex-[1] items-center justify-between border-l border-[#DBDBDB] px-4 py-5">
        <div className="">
          <div className="flex items-center bg-[#F5F5F5] px-5 py-2 rounded-md">
            <SearchIcon />
            <input
              type="text"
              className="w-80 bg-transparent ml-4 outline-0 text-sm"
              placeholder="Search for anything..."
            />
          </div>
        </div>

        <div className="flex items-center">
          {/* Left part */}
          <div className="flex items-center space-x-5">
            <CalenderIcon />
            <NotificationIcon />
            <BellIcon />
          </div>

          {/* Right part */}
          <div className="flex items-center ml-10 space-x-3">
            {/* Name and address */}
            <div className="text-right">
              <p className="text-[#0D062D]">Ronak Paul</p>
              <p className="text-[#787486] text-sm">Rajasthan, India</p>
            </div>

            {/* Profile */}
            <div>
              <img
                src={AccountProfile}
                className="w-[38px] h-[38px] rounded-full"
              />
            </div>

            <DropdownIcon size={"18"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
