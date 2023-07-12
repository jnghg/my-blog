"use client";

import { signIn, signOut } from "next-auth/react";

/** 로그인 / 로그아웃 버튼 */
export const HeaderButton = ({ serverSession }: { serverSession: any }) => {
  return (
    <div className="flex items-center text-sm space-x-2">
      {serverSession ? (
        <button
          className="border border-blue-600 hover:bg-blue-600 hover:text-white duration-300 px-3 py-1 rounded-lg"
          onClick={() => signOut()}
        >
          LogOut
        </button>
      ) : (
        <button
          className="border border-blue-600 hover:bg-blue-600 hover:text-white duration-300 px-3 py-1 rounded-lg"
          onClick={() =>
            // signIn("google", { callbackUrl: "http://localhost:3000/users" })
            signIn()
          }
        >
          LogIn
        </button>
      )}
    </div>
  );
};
