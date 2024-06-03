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
      <div className="wrapper flex items-center justify-between">
        <a href="/" className=" font-semibold">
          logo/name
        </a>
        {user.isSignedIn ? (
          <div className="p-3 flex items-center gap-3">
            <UserButton />
            <div className="text-sm">{user.user?.fullName}</div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div>
              <SignInButton mode="modal">
                <Button>Signin</Button>
              </SignInButton>
            </div>
            <div>
              <SignUpButton mode="modal">
                <Button variant={"secondary"}>Regestrer</Button>
              </SignUpButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
