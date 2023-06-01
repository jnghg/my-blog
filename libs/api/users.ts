import db from "@libs/client/db";

/** 전체 유저정보 */
export const getAllUsers = async () => {
  return await db.users.findMany({
    orderBy: {
      id: "desc",
    },
  });
};

/** 상세 유저정보 */
export const getUser = async (id: string) => {
  return await db.users.findUnique({
    where: {
      id: +id.toString(),
    },
  });
};
