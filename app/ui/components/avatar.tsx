"use client";

import { HeaderButton } from "./header-button";
import Image from "next/image";

import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-3">
        {session && (
          <Image
            className="rounded-full"
            alt="avatar"
            src={session?.user?.image || ""}
            width={30}
            height={30}
          />
        )}
        <HeaderButton serverSession={session} />
      </div>
    </div>
  );
};

export default Avatar;
