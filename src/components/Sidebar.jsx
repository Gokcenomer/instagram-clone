import React from "react";
import { ReactComponent as Home } from "../assets/icons/house-solid.svg";
import { ReactComponent as Search } from "../assets/icons/magnifying-glass-solid.svg";
import { ReactComponent as Explore } from "../assets/icons/compass-regular.svg";
import { ReactComponent as Reels } from "../assets/icons/clapperboard-solid.svg";
import { ReactComponent as Messages } from "../assets/icons/message-regular.svg";
import { ReactComponent as Notifcations } from "../assets/icons/heart-regular.svg";
import { ReactComponent as Create } from "../assets/icons/square-plus-regular.svg";
import { ReactComponent as More } from "../assets/icons/bars-solid.svg";
import { ReactComponent as ProfilePhoto } from "../assets/icons/circle-user-solid.svg";

function Sidebar() {
  return (
    <aside className="bg-black flex flex-col w-[300px] h-screen p-8  flex-wrap  justify-between fixed left-0 top-0  border-r-[1px] border-gray-700  ">
      <ul className="display gap-4 flex flex-col justify-between grow-1  ">
        <h1 className="font-semibold text-2xl text-white mb-8 pl-2 ">
          Instagram
        </h1>

        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2 w-full">
          <Home className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Home</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Search className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Search</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Explore className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Explore</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Reels className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Reels</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Messages className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Messages</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Notifcations className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Notifications</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <Create className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Create</p>
        </li>
        <li className="flex gap-2 hover:bg-slate-600  cursor-pointer p-2">
          <ProfilePhoto className="w-4 fill-white" />
          <p className="text-white text-xl font-normal">Profile</p>
        </li>
      </ul>
      <div className="flex gap-2 hover:bg-slate-600 pl-4 cursor-pointer p-2">
        <More className="w-4 fill-white" />
        <p className="text-white text-xl font-normal">More</p>
      </div>
    </aside>
  );
}

export default Sidebar;
