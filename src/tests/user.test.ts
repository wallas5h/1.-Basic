import * as userApiForSpy from "../async";
import { getUserById } from "../user";
import { getUserByIdResponse } from "../user.entity";

// ten mock odnosi się do wszystkich testów, jest globalny dla wszystkich describe

jest.mock("../async", () => ({
  getUsers: jest.fn(() => [
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
  ]),
}));

//gdy test trwa powyżej niz 5s jest traktuje go jako fail, tak jak poniżej leiej nie robić
// jest.setTimeout(10000);

// klasyczny test z funkcją, gdy jest mock powyżej to dane są brane z mocka

describe.skip("Testing 'getUserById' function", () => {
  let counter = 0;
  let user = ([] as unknown) as getUserByIdResponse;

  // beforeEach(() => {
  //   counter++;
  // });

  beforeAll(() => {});

  // beforeEach przed każdyn describe w tym lokalnym

  beforeEach(async () => {
    user = await getUserById(counter++);
  });

  afterAll(() => {});

  it("should return data about test0 user with argument 0", async () => {
    // const user = await getUserById(0);

    expect(user).toStrictEqual({
      data: {
        id: 0,
        age: 12,
        firstName: "test0",
        lastName: "test0",
      },
      error: null,
    });
  });

  it("should return data about test1 user with argument 1", async () => {
    // const user = await getUserById(1);

    expect(user).toStrictEqual({
      data: {
        id: 1,
        age: 12,
        firstName: "test1",
        lastName: "test1",
      },
      error: null,
    });
  });

  it("should return data about mocked user when is called with argument 2", async () => {
    // lokalny mock
    jest.spyOn(userApiForSpy, "getUsers").mockImplementation(async () => [
      {
        id: 2,
        age: 12,
        firstName: "spy",
        lastName: "spy",
      },
    ]);

    const user = await getUserById(2);

    expect(user).toStrictEqual({
      data: {
        id: 2,
        age: 12,
        firstName: "spy",
        lastName: "spy",
      },
      error: null,
    });
  });

  it("", () => {});
});
