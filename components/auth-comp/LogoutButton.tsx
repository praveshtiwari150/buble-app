import React, { ReactNode } from "react";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: ReactNode;
}
const LogoutButton = ({ children }: LogoutButtonProps) => {
  return (
      <span
          className="w-full bg-blue-500 hover:bg-blue-700 rounded-lg py-2 text-white text-center font-medium cursor-pointer"
          onClick={() => signOut()}
      >
      Sign Out
    </span>
  );
};

export default LogoutButton;
