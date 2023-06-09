import { getAllUsers, getUser } from "@libs/api/users";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const users = await getAllUsers();

  return users.map((user: any) => ({
    id: user.id.toString(),
  }));
}

const Detail = async ({ params }: { params: { id: string } }) => {
  const user = await getUser(params.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-3 rounded-2xl bg-gray-900/80 p-4 mt-5 text-white">
      <div className="rounded-3xl px-2">ID : {user?.id}</div>
      <div className="border border-gray-400 p-2 rounded-2xl space-y-2">
        <div className="">
          <div className="text-sm font-semibold text-gray-400">이름</div>
          <div>{user?.name}</div>
        </div>
        <div className="">
          <div className="text-sm font-semibold text-gray-400">이메일</div>
          <div>{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
