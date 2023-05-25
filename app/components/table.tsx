"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export interface TableProps {
  data: any[];
}

const Table = ({ data }: TableProps) => {
  const router = useRouter();

  const onClickRow = (id: number) => {
    router.push(`/users/${id}`);
  };

  return (
    <div>
      <div className="mb-5 font-semibold">목록</div>
      <table className="table-auto border-collapse border border-slate-500 w-full overflow-scroll">
        <thead>
          <tr>
            <th className="border border-slate-600 bg-slate-300">No</th>
            <th className="border border-slate-600 bg-slate-300">Name</th>
            <th className="border border-slate-600 bg-slate-300">Age</th>
            <th className="border border-slate-600 bg-slate-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} onClick={() => onClickRow(user.id)}>
              <td className="border border-slate-600">{user.id}</td>
              <td className="border border-slate-600">{user.name}</td>
              <td className="border border-slate-600">{user.age}</td>
              <td className="border border-slate-600">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10">
        <Link
          className="border border-gray-600 bg-gray-600 text-white px-3 py-1 rounded-md"
          href={"/users/form"}
        >
          + New
        </Link>
      </div>
    </div>
  );
};

export default Table;
