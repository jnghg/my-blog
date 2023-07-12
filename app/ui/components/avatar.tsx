"use client";

import Image from "next/image";
import Link from "next/link";

import { useSession, signOut, signIn } from "next-auth/react";

const Avatar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        {session ? (
          <Image
            className="rounded-full hover:cursor-pointer"
            alt="avatar"
            src={session?.user?.image || ""}
            width={30}
            height={30}
            onClick={() => signOut()}
          />
        ) : session === null ? (
          <Link href={"/login"}>
            <button className="border border-blue-600 hover:bg-blue-600 text-white duration-300 px-3 h-[30px] rounded-lg">
              LogIn
            </button>
          </Link>
        ) : (
          <div className="rounded-full bg-gray-600 h-[30px] w-[30px]" />
        )}
      </div>
    </div>
  );
};

export default Avatar;
