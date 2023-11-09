import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
<<<<<<< HEAD
  isAdmin: "admin" | "user" | "super-admin";
=======
  isAdmin: boolean;
>>>>>>> 054f6824196fc66aabdb5e70ee26520e7f776a58
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
