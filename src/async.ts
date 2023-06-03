import { User } from "./user.entity";

export async function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve([
        {
          id: 0,
          age: 12,
          firstName: "test0",
          lastName: "test0",
        },
        {
          id: 1,
          age: 12,
          firstName: "test1",
          lastName: "test1",
        },
        {
          id: 2,
          age: 12,
          firstName: "test2",
          lastName: "test2",
        },
      ]);
    }, 1000);
  });
}
