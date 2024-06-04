import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const dashLinks = [
  {
    name: "all houses",
    link: "/dashboard",
  },
  {
    name: "accepted houses",
    link: "/dashboard/accepted-houses",
  },
  {
    name: "declined houses",
    link: "/dashboard/declined-houses",
  },
];

const DashNavigation = () => {
  return (
    <div>
      <div className="flex items-center justify-center border-b border-black/20 gap-1">
        {dashLinks.map((item, i) => (
          <div key={i}>
            <Link href={item.link}>
              <Button variant={"link"} size={"sm"}>
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashNavigation;
