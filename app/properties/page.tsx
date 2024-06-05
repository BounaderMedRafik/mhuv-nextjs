"use client";
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import DashItem from "@/components/dashboard/DashItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function page() {
  const { user } = useUser();

  const [houses, setHouses] = useState([{}]);

  const fetchHouses = async () => {
    const { data, error } = await supabase
      .from("houses")
      .select("*")
      .eq("email", user?.primaryEmailAddress);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
      });
      // console.log(error);
    }
    if (data) {
      setHouses(data);
      // console.log(data);
    }
  };

  fetchHouses();
  return (
    <div>
      <div className="wrapper py-10">
        <div className="text-4xl font-black">Dashboard</div>
        <div className=" mt-10">
          <div className="w-full  flex flex-col justify-center items-center gap-3">
            {houses.length > 0 ? (
              <div>
                {houses.map((item, i) => (
                  <div className="mt-4" key={i}>
                    <DashItem
                      buttonsless
                      //@ts-ignore
                      id={item.id}
                      //@ts-ignore
                      phone={item.phone}
                      //@ts-ignore
                      pic={item.picture}
                      //@ts-ignore
                      email={item.email}
                      //@ts-ignore
                      name={item.fullname}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div>There is no data</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
