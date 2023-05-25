import { Table } from "app/components";

export const revalidate = 10;

const UsersPage = async () => {
  const users = (await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}/api/users`
  ).then((res) => res.json())) as any[];

  return <Table data={users} />;
};

export default UsersPage;
