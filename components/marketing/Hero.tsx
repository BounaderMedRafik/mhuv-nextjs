import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <div className=" w-1/2 h-full flex justify-center items-center">
        <div className="text-5xl font-black max-w-md text-center  leading-normal">
          افتتاح تسجيلات مديرية السكن لتوزيع السكنات في الجزائر
        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <img
          src="/photo1.png"
          className=" w-full h-full object-cover object-center"
          alt=""
        />

        <img
          className=" max-w-md absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          src="/teboun.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
