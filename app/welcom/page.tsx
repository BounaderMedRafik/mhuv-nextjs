"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@clerk/nextjs";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import supabase from "../supabase/supabaseClient";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/components/requirements/single-drop-comp";
import Link from "next/link";

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
  const { edgestore } = useEdgeStore();

  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);

  const handleUpload = async (file: any) => {
    const res: any = await edgestore.publicFiles.upload({
      file,
    });
    setUrl(res.url);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e: any) => handleUpload(e.target.files[0])}
      />
      <button>Upload</button>
      <div className="mt-10">
        {progress !== null && <div>Progress: {progress}%</div>}
        {url && (
          <div>
            URL: <Link href={url}>{url}</Link>
          </div>
        )}
      </div>
    </div>
  );
};
