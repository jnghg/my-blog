import Link from "next/link";

const UsersPage = async () => {
  const users = (await fetch(`http://localhost:3000/api/users`, {
    next: { revalidate: 10, tags: ["users"] },
  }).then((res) => res.json())) as any[];

  return (
    <div>
      <div className="mb-5 font-semibold">목록</div>
      <table className="table-auto border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 bg-slate-300">No</th>
            <th className="border border-slate-600 bg-slate-300">Name</th>
            <th className="border border-slate-600 bg-slate-300">Age</th>
            <th className="border border-slate-600 bg-slate-300">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
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

export default UsersPage;
