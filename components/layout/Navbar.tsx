"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const user = useUser();
  if (user.isSignedIn) {
    router.push("/welcom");
  }
  return (
    <div className=" border-b border-black/20">
      <div className="wrapper  py-8 flex items-center justify-between">
        <a href="/" className=" font-semibold flex items-center gap-2">
          <div> مديرية السكن و العقار</div>
          <div>
            <img src="/logo.png" className="w-12" alt="" />
          </div>
        </a>
        {user.isSignedIn ? (
          <div className="p-3 flex items-center gap-3">
            <div className="text-sm font-semibold">
              <span className="font-black">{user.user?.fullName}</span> مرحبا بك
              يا
            </div>
            <UserButton />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div>
              <SignInButton mode="modal">
                <Button>تسجيل دخول</Button>
              </SignInButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
