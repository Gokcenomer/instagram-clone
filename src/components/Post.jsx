import React from "react";
import { ReactComponent as ProfilePhoto } from "../assets/icons/circle-user-solid.svg";
import { ReactComponent as Like } from "../assets/icons/heart-regular.svg";
import { ReactComponent as Comment } from "../assets/icons/comment-regular.svg";
import { ReactComponent as Share } from "../assets/icons/paper-plane-regular.svg";
import { ReactComponent as Save } from "../assets/icons/bookmark-regular.svg";
import { ReactComponent as Emoji } from "../assets/icons/face-smile-regular.svg";

function Post() {
  return (
    <article className="w-[470px] bg-black  border-[1px] border-gray-700 rounded-md">
      <div className="   text-white flex justify-between items-center gap-2 p-2">
        <ProfilePhoto className="w-8 h-auto fill-white" />
        <p className=" after:content-['*'] flex-1">elonmusk5000</p>
        <button className="pr-2">...</button>
      </div>
      <div className="w-[470px] h-[512px] bg-slate-800"></div>
      <div className="bg-black">
        <div className="fill-white flex items-center justify-between p-2">
          <div className="space-x-2">
            <button>
              <Like className="w-6 h-6" />
            </button>
            <button>
              <Comment className="w-6 h-6" />
            </button>
            <button>
              <Share className="w-6 h-6 " />
            </button>
          </div>
          <button>
            <Save className="w-6 h-6 " />
          </button>
        </div>
        <div>
          <p className="text-white px-2 py-1">Liked by gandalf and others</p>
        </div>
        <div>
          <p className="text-white font-semibold px-2 py-1 ">
            elonmusk5000
            <span> </span>
            <span textCount className=" text-sm overflow-y-hidden">
              Livestream interview in 15 mins at Morgan Stanley Conference
            </span>
          </p>
        </div>

        <div>
          <p className="text-gray-300 px-2 py-1 text-sm">
            View all 12 comments
          </p>
        </div>
        <div>
          <p className=" text-gray-300 px-2 py-1 text-xs">
            35 MINUTES AGO
            <span></span>
            <span className="text-white "> See translation</span>
          </p>
        </div>
        <div className="my-2 w-full h-[1px] bg-gray-500"> </div>

        <div className="px-2 py-2 flex justify-center items-center gap-2">
          <Emoji className="w-6 fill-white " />
          <input
            type="text"
            className="bg-black text-white flex-1 border-none outline-none "
            placeholder="Add a comment..."
          />
          <button className="text-blue-500 font-black">Post</button>
        </div>
      </div>
    </article>
  );
}

export default Post;
