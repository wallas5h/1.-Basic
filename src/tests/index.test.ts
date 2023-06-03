import { EMAIL_PATTERN, add, daysBetween } from "..";

describe.skip('testing "add" function', () => {
  it("it should give correct addition result when passing 2 arguments", () => {
    expect(add(2, 2)).toBe(4);
    expect(add(5, 5)).toBe(10);
    expect(add(0, 0)).toBe(0);
  });

  it("Should return 0 when arguments are not passing", () => {
    expect(add()).toBe(0);
  });

  it("should return value of correct argument when second one is wrong", () => {
    let x: any;

    expect(add(x, 10)).toBe(10);
    expect(add(10, x)).toBe(10);
  });

  it("should treated wrong argument as 0", () => {
    expect(add(15, true)).toBe(15);
    expect(add(15, undefined)).toBe(15);
    expect(add(15, [])).toBe(15);
    expect(add(15, {})).toBe(15);
    expect(add(null, 15)).toBe(15);
    expect(add(NaN, 15)).toBe(15);
    expect(add(NaN, NaN)).toBe(0);
  });
});

describe.skip("testing patterns", () => {
  describe("email", () => {
    test.each([
      "aaa@wp.pl",
      "1@wp.pl",
      "asfasfassdfas@1234.com.it",
      "87654@5678.pl",
    ])("%s test should be valid", (email) => {
      expect(EMAIL_PATTERN.test(email)).toBeTruthy();
    });

    test.each(["aaawp.pl", "%%.aaawp.pl", "@123.com", "123.com.pl"])(
      "%s test should be invalid",
      (email) => {
        expect(EMAIL_PATTERN.test(email)).toBeFalsy();
      }
    );

    // it("should pattern returns valid result", () => {
    //   expect(EMAIL_PATTERN.test("aaa@wp.pl")).toBeTruthy();
    // });

    // it("should return invalid result", () => {
    //   expect(EMAIL_PATTERN.test("aaawp.pl")).toBeFalsy();
    //   expect(EMAIL_PATTERN.test("%%.aaawp.pl")).toBeFalsy();
    // });
  });
});

describe.skip("testing 'daysBetween' function", () => {
  // it("should return 0 when is given beginning and end of the same day", () => {
  //   const begin = new Date(1989, 5, 22);
  //   const end = new Date(1989, 5, 22, 23, 59, 59);

  //   expect(daysBetween(begin, end)).toBe(0);
  // });

  // it("should return 1 when is given the begining or the end of next day", () => {
  //   const day = new Date(2010, 8, 29);
  //   const begin = new Date(2010, 8, 30, 0, 0, 0);
  //   const end = new Date(2010, 8, 30, 23, 59, 59);

  //   expect(daysBetween(day, begin)).toBe(1);
  //   expect(daysBetween(day, end)).toBe(1);
  // });

  test.each`
    from                     | to                                   | result
    ${new Date(1989, 5, 22)} | ${new Date(1989, 5, 22, 23, 59, 59)} | ${0}
    ${new Date(2010, 8, 29)} | ${new Date(2010, 8, 30, 0, 0, 0)}    | ${1}
    ${new Date(2010, 8, 29)} | ${new Date(2010, 8, 30, 23, 59, 59)} | ${1}
  `(
    "should return $result when from: $from and to: $to ",
    ({ from, to, result }) => {
      expect(daysBetween(from, to)).toBe(result);
    }
  );
});
