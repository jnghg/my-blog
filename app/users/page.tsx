import { getAllUsers } from "@libs/api/users";
import { Table } from "app/ui/users/table";

export const revalidate = 86400;

const UsersPage = async () => {
  const users = await getAllUsers();
  return <Table data={users} />;
};

export default UsersPage;
