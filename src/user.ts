import { getUsers } from "./async";
import { User } from "./user.entity";

export async function getUserById(id: unknown) {
  if (typeof id !== "number" || isNaN(id)) {
    return { data: null, error: "Provided argument has wrong type od data" };
  }

  const users: User[] | [] = await getUsers();

  if (!users) {
    return { data: null, error: "No users provided" };
  }

  const user = users.find((user) => user.id === id);

  if (!user) {
    return { data: null, error: `There is no user with id: ${id}` };
  }

  return { data: user, error: null };
}
