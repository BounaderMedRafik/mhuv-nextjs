import React from "react";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";

const SidePicStuff = () => {
  return (
    <div className=" border-t border-black/20 py-10 w-full flex justify-center items-center flex-col gap-10">
      <div className="text-5xl font-black max-w-2xl text-center leading-relaxed">
        من فضلكم سارعو الفرصة من اجل تحقيق احلاكم في كسب عقار من العقارات
        الموزعة
      </div>
      <div>
        <SignInButton mode="modal">
          <Button>تسجيل دخول</Button>
        </SignInButton>
      </div>
      <div>
        <img src="/photo5.png" alt="" />
      </div>
    </div>
  );
};

export default SidePicStuff;
