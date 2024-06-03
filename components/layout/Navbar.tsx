import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className=" border-b border-black/20">
      <div className="wrapper flex items-center justify-between">
        <div className=" font-semibold">logo/name</div>
        <div className="flex items-center gap-2">
          <div>
            <Button>Signin</Button>
          </div>
          <div>
            <Button variant={"secondary"}>Regestrer</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
