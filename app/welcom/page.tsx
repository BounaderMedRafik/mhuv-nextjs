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
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import React, { useState } from "react";
import supabase from "../supabase/supabaseClient";
import Link from "next/link";
import { SingleImageDropzone } from "@/components/ui/EdgeStoreComponent";
import { useEdgeStore } from "@/lib/edgestore";
import { toast } from "@/components/ui/use-toast";
import "@uploadcare/react-uploader/core.css";

export default function page() {
  const user = useUser();
  return (
    <div>
      <div className="wrapper p-10 py-32 flex flex-col justify-center items-center">
        <div className="text-5xl font-black max-w-md text-center mt-3">
          ادخل معلومات المنزل او العقار المرجو ترويجه
        </div>
        <div className="mt-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button>ادخال</Button>
            </DialogTrigger>
            <DialogContent>
              <MyForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <img src="/photo6.png" />
      </div>
    </div>
  );
}

const MyForm = () => {
  const user = useUser();
  const [name, setName] = useState(user.user?.fullName);
  const [email, setEmail] = useState(user.user?.emailAddresses[0]);
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [formerr, setForerr] = useState(false);

  return (
    <div>
      <div>
        <div className="text-2xl font-black text-center">
          ادخال عقار او منزل
        </div>
        <div className=" w-full h-px bg-black/20 my-5 "></div>
      </div>
      <div>
        <div className="mt-5">
          <Label className="">الاسم و اللقب</Label>
          <Input
            className="mt-2"
            type="text"
            //@ts-ignore
            value={name}
            disabled
          />
        </div>
        <div className="mt-5">
          <Label className="">رقم التعريف الوطني</Label>
          <Input
            className="mt-2"
            type="number"
            //@ts-ignore
          />
        </div>
        <div className="mt-5">
          <Label className="">رقم الهاتف</Label>
          <Input
            className="mt-2"
            type="number"
            placeholder="+213 0659 15 23 15 "
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <Label className="">منطقة العقار</Label>
          <Input
            className="mt-2"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="my-10">
          <Label>صور العقار</Label>
          <SingleImageDropzone
            className="mt-2"
            width={200}
            height={200}
            value={file}
            onChange={(file) => {
              setFile(file);
            }}
          />
        </div>
        <div className="my-10">
          <Label>pdf file</Label>
          <PDFuploader />
        </div>
        <Button
          onClick={async () => {
            if (file) {
              const res = await edgestore.publicFiles.upload({
                file,
              });
              console.log(res.url);
              if (
                !user.user?.fullName ||
                !user.user?.emailAddresses[0] ||
                !location
              ) {
                setForerr(true);
                return;
              }

              const { data, error } = await supabase.from("houses").insert({
                fullname: user.user.fullName,
                email: user.user.emailAddresses[0].emailAddress,
                location: location,
                picture: res.url,
                phone: phoneNum,
              });

              if (error) {
                console.error(error);
              }
              if (data) {
                toast({
                  title: "تم إضافة العقار بنجاح",
                });
              }
            }
          }}
        >
          clickme!
        </Button>
      </div>
    </div>
  );
};

const PDFuploader = () => {
  return (
    <div>
      <FileUploaderRegular
        pubkey="7e8f36d384cd7400a09b"
        maxLocalFileSizeBytes={10000000}
        sourceList="local, url, camera, dropbox"
      />
    </div>
  );
};
