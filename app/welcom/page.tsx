"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/nextjs";
import { Plus, X } from "lucide-react";
import React from "react";

export default function page() {
  const user = useUser();
  return (
    <div>
      <div className="wrapper p-10 flex flex-col justify-center items-center">
        <div className="text-5xl font-semibold">
          Hello{" "}
          <span className="font-black text-blue-500">
            {user.user?.fullName}
          </span>
        </div>
        <div className="text-sm max-w-md text-center mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          atque veritatis reiciendis eius a laborum!
        </div>
        <div className="mt-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add New House!</Button>
            </DialogTrigger>
            <DialogContent>
              <MyForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

const MyForm = () => {
  const user = useUser();
  return (
    <div>
      <div>
        <div className="font-bold text-center">Add new house</div>
        <div className="bg-black/20 h-px my-5"></div>
        <div>
          <form action="">
            <div>
              <Label>Your Full Name</Label>

              <Input
                className="mt-2"
                disabled
                //@ts-ignore
                value={user.user?.fullName}
              />
            </div>
            <div className="mt-4">
              <Label>Your email Adress</Label>
              <Input
                className="mt-2"
                disabled
                placeholder="Adress"
                //@ts-ignore
                value={user.user?.emailAddresses[0]}
              />
            </div>
            <div className="mt-4">
              <Label>Your House Adress</Label>
              <Input
                className="mt-2"
                placeholder="Adress"
                //@ts-ignore
              />
            </div>
            <div className="mt-4">
              <Label>Your House pics</Label>
              <Input
                type="file"
                className="mt-2 "
                placeholder="Adress"
                //@ts-ignore
              />
            </div>
            <div className="mt-5 flex items-center gap-2">
              <Button className="flex items-center gap-2">
                Add House <Plus size={15} />
              </Button>
              <DialogClose asChild>
                <Button
                  className="flex items-center gap-2"
                  variant={"secondary"}
                >
                  Close <X size={15} />
                </Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
