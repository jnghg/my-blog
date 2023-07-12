import db from "@libs/client/db";

/** 전체 유저정보 */
export const getAllUsers = async () => {
  return (await db.users.findMany()).reverse();
};

/** 상세 유저정보 */
export const getUser = async (id: string) => {
  return await db.users.findUnique({
    where: {
      id: id.toString(),
    },
  });
};

/** 유저 등록 */
export const createUser = async (data: {
  name: string;
  age: number | string;
  email: string;
}) => {
  return await db.users.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
};
