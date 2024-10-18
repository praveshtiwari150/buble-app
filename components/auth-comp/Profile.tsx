"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Profile = () => {
  const {user, isLoading} = useCurrentUser();

  console.log({
    user,
    loading: isLoading
  })

  const avatarInitials = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
      : `${nameParts[0][0]}`.toUpperCase();
  };

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-blue-500 hover:bg-blue-700 border border-blue-500 cursor-pointer rounded-full p-2 ">
          <Avatar className="w-10 h-10">
            <AvatarFallback className="text-white font-bold w-10 h-10">
              {user && user.name ? avatarInitials(user.name) : <FaUser />}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-start justify-center bg-smoke-50 p-2 border border-smoke-300 shadow-lg rounded-md mt-2 mr-[64px]">
          <DropdownMenuItem className="w-full flex flex-col items-start justify-center">
            {isLoading ? (
              <span className="text-lg font-semibold">Loading...</span>
            ) : (
              <>
                <span className="text-lg font-semibold">{user?.name}</span>
                <span className="text-xs font-medium text-gray-600">
                  {user?.email}
                </span>
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full flex justify-center">
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Profile;
