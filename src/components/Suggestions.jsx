import React, { useState } from "react";
import { useContext } from "react";
import { ReactComponent as ProfilePhoto } from "../assets/icons/circle-user-solid.svg";
import { UserContext } from "../pages/HomePage";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Suggestions() {
  const userInfo = useContext(UserContext);
  function signOutFunction() {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <div className="w-[320px] space-y-2 flex flex-col items-center absolute right-64 top-12  bg-[#121212]">
      <div className="grid grid-cols-5 gap-2 items-center ">
        <div>
          <ProfilePhoto className="w-14" />
        </div>
        <div>
          <p className="text-white">{userInfo.email}</p>
          <p className="text-gray-400">Musk</p>
        </div>
        <div className="col-start-5">
          <p className="text-blue-700 text-sm cursor-pointer">Switch</p>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <p className="text-gray-500 font-bold">Suggestions for you </p>
        <p className="pr-4 text-white font-semibold text-sm cursor-pointer">
          See All
        </p>
      </div>

      <div className=" w-full">
        <div className="grid grid-cols-5 gap-2 items-center h-12 ">
          <div>
            <ProfilePhoto className="w-8" />
          </div>
          <div className="col-span-3">
            <p className="text-white">markzuckerberg2</p>
            <p className="text-xs text-gray-400 ">
              Followed by dualipa + 15 more
            </p>
          </div>
          <div className="col-start-5">
            <p className="text-blue-700 text-sm cursor-pointer">Follow</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 items-center h-12">
          <div>
            <ProfilePhoto className="w-8" />
          </div>
          <div className="col-span-3">
            <p className="text-white">markzuckerberg2</p>
            <p className="text-xs text-gray-400 ">
              Followed by dualipa + 12 more
            </p>
          </div>
          <div className="col-start-5">
            <p className="text-blue-700 text-sm cursor-pointer">Follow</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-2 items-center h-12">
          <div>
            <ProfilePhoto className="w-8" />
          </div>
          <div className="col-span-3">
            <p className="text-white">markzuckerberg2</p>
            <p className="text-xs text-gray-400 ">
              Followed by dualipa + 13 more
            </p>
          </div>
          <div className="col-start-5">
            <p className="text-blue-700 text-sm cursor-pointer">Follow</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 items-center h-12">
          <div>
            <ProfilePhoto className="w-8" />
          </div>
          <div className="col-span-3">
            <p className="text-white">markzuckerberg2</p>
            <p className="text-xs text-gray-400 ">
              Followed by dualipa + 11 more
            </p>
          </div>
          <div className="col-start-5">
            <p className="text-blue-700 text-sm cursor-pointer">Follow</p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 items-center h-12">
          <div>
            <ProfilePhoto className="w-8" />
          </div>
          <div className="col-span-3">
            <p className="text-white">markzuckerberg2</p>
            <p className="text-xs text-gray-400 ">Followed by dualipa 1 more</p>
          </div>
          <div className="col-start-5">
            <p className="text-blue-700 text-sm cursor-pointer">Follow</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          signOutFunction();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Suggestions;
