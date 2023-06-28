import Link from "next/link";
import { FloatButton } from "../components/float-button";
import { Users } from "@prisma/client";

export interface TableProps<T> {
  data: T[];
}

export const Table = ({ data }: TableProps<Users>) => {
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 ">
        {data?.map((user) => (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className="space-y-3 rounded-2xl bg-gray-900/80 p-4 mb-3 text-white hover:cursor-pointer hover:p-3 duration-300"
          >
            <div className="w-16 rounded-3xl px-2 bg-cyan-500">
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
          </Link>
        ))}
      </div>

      <Link className="" href={"/users/form"} as={"/users/form"}>
        <FloatButton text="+ New" />
      </Link>
    </div>
  );
};
