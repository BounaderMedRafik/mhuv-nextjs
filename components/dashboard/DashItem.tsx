"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import supabase from "@/app/supabase/supabaseClient";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const DashItem = ({
  id,
  pic,
  name,
  email,
  phone,
  buttonsless,
}: {
  id: string;
  pic: string;
  name: string;
  email: string;
  phone: string;
  buttonsless?: boolean;
}) => {
  const [house, setHouse] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchHouse = async () => {
      const { data, error } = await supabase
        .from("houses")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log("here is ur error ", error);
      }

      if (data) {
        setHouse(data);
        console.log("here is ur data ", data);
      } else {
        console.log("there is no data");
      }
    };

    fetchHouse();
  }, []);

  const handleReject = async () => {
    // some code there
    setStatus("declined");
    const { data, error } = await supabase
      .from("houses")
      .update({
        status: status,
      })
      .eq("id", id);
  };

  const handleAccept = async () => {
    // some code here

    setStatus("accepted");
    //supabase
    const { data, error } = await supabase
      .from("houses")
      .update({
        status: status,
      })
      .eq("id", id);
  };
  return (
    <div className=" max-w-3xl p-2 border border-black/50 rounded-md flex items-center justify-between">
      <div className="h-full w-[30%] overflow-hidden rounded-md">
        <img
          className=" w-full  h-full object-cover object-center "
          src={pic}
        />
      </div>
      <div>
        <div>
          <div className="font-semibold text-2xl">
            الاسم : <span className=" font-black text-green-500">{name}</span>
          </div>
          <div className="font-semibold text-2xl ">
            الايمايل :{" "}
            <span className="font-black text-green-500">{email}</span>
          </div>
          <div className="font-black text-2xl ">
            الهاتف : <span className="text-green-500">{phone}</span>
          </div>
          {buttonsless ? null : (
            <div className="flex gap-2 mt-5 items-center justify-end">
              <Button variant={"green"} onClick={handleAccept}>
                قبول
              </Button>
              <Button variant={"destructive"} onClick={handleReject}>
                رفض
              </Button>
            </div>
          )}
        </div>
        <div>
          <Badge
            className={cn(
              " text-slate-50  bg-yellow-500",
              //@ts-ignore
              house.status == "accepted"
                ? "bg-green-500"
                : //@ts-ignore
                house.status == "declined"
                ? " bg-red-500"
                : null
            )}
          >
            {
              //@ts-ignore
              house.status
            }
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default DashItem;
