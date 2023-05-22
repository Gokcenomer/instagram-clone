import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { ReactComponent as ProfilePhoto } from "../assets/icons/circle-user-solid.svg";
const Stories = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        className="bg-black p-4 w-[470px]  overflow-hidden mt-10 border-[1px] border-gray-700 rounded-md"
      >
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4 flex flex-col  items-center w-16   justify-center ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              elonmusk
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4  flex-col   w-16 flex  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 h-5  ">
              this.is.the.longest.username
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4 flex flex-col  -center w-16  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              mombojombo12312312324
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4 flex-col  w-16 flex  justify-center items-center  flex-shrink-0">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              mombojo22mbo-24
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4  flex-col   w-16 flex  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              mombojo23mbo-24
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4  flex-col   w-16 flex  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              momboasdjombo-24
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4  flex-col  i w-16 flex  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              mombojom223bo-24
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex  justify-center items-center ">
          <div className="mr-4 flex flex-col  w-16  justify-center items-center  ">
            <ProfilePhoto className="w-16 fill-white pointer cursor-pointer" />
            <p className="text-ellipsis whitespace-nowrap overflow-hidden text-white w-16 text-center h-5  ">
              mombojombo-2422
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Stories;
