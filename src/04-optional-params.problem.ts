import { expect, it } from "vitest";

<<<<<<< HEAD
export const getName = (first: string, last?: string) => {
=======
export const getName = (first: string, last: string) => {
>>>>>>> 054f6824196fc66aabdb5e70ee26520e7f776a58
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Matt");

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName("Matt", "Pocock");

  expect(name).toEqual("Matt Pocock");
});
