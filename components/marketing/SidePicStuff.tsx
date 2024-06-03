import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const SidePicStuff = () => {
  return (
    <div className=" w-full h-[50vh] flex items-center">
      <div className=" w-1/2 flex items-center  justify-center bg-red-200 h-full">
        <div className=" max-w-md">
          <div className=" font-semibold text-4xl">
            Lorem ipsum dolor sit amet.
          </div>
          <div className=" font-thin text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            placeat. Nihil, minima!
          </div>
          <div>
            <Button>
              <div className="flex items-center gap-2">
                <div>Start Now</div>
                <div>
                  <ArrowRight size={17} />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-full overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default SidePicStuff;
