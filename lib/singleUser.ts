import { UserType } from "@/types/usersType";
import { usersFetchApi } from "./users";

export const getSingleUser = async (id: number) => {
  const allUsers = await usersFetchApi();
  console.log("all" , allUsers);
  
  return allUsers.find((user: UserType) => Number(user.id) === id);
};
