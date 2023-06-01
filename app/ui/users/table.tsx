"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FloatButton } from "../components/float-button";

export interface TableProps {
  data: any[];
}

export const Table = ({ data }: TableProps) => {
  const router = useRouter();

  const onClickRow = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 ">
        {data.map((user) => (
          <div
            key={user.id}
            className="space-y-3 rounded-2xl bg-gray-900/80 p-4 mb-3 text-white hover:cursor-pointer hover:p-3 duration-300"
            onClick={() => onClickRow(user.id)}
          >
            <div className="w-14 rounded-3xl px-2 bg-cyan-500">
              No.{user.id}
            </div>
            <div className="border border-gray-400 p-2 rounded-2xl space-y-2">
              <div className="">
                <div className="text-sm font-semibold text-gray-400">이름</div>
                <div>{user.name}</div>
              </div>
              <div className="">
                <div className="text-sm font-semibold text-gray-400">나이</div>
                <div>{user.age}</div>
              </div>
              <div className="">
                <div className="text-sm font-semibold text-gray-400">
                  이메일
                </div>
                <div>{user.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link className="" href={"/users/form"} as={"/users/form"}>
        <FloatButton text="+ New" />
      </Link>
    </div>
  );
};
