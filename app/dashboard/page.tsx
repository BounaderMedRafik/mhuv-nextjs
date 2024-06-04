import DashItem from "@/components/dashboard/DashItem";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="wrapper py-10">
        <div className="text-4xl font-black">Dashboard</div>
        <div className=" mt-10">
          <DashItem
            phone="062515648"
            email="bounaderrafik@gmail.com"
            name="محمد رفيق"
            pic="https://i.ytimg.com/vi/CYDK50DKFgA/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA3vRl8JKlJOQDqTQSTy0g54IgjHg"
          />
        </div>
      </div>
    </div>
  );
}
