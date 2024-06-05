"use client";
import DashItem from "@/components/dashboard/DashItem";
import React, { useEffect, useState } from "react";
import supabase from "../supabase/supabaseClient";
import { toast, useToast } from "@/components/ui/use-toast";

export default function page() {
  const toast = useToast();
  const [fetch, setFetch] = useState(null);
  const [houses, setHouses] = useState([{}]);

  useEffect(() => {
    const fetchHouses = async () => {
      const { data, error } = await supabase
        .from("houses")
        .select()
        .eq("status", "waiting");

      if (error) {
        // console.log(error);
      }
      if (data) {
        setHouses(data);
        // console.log(data);
      }
    };

    fetchHouses();
  }, []);
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
