import { callbackCaller } from "../callback";

describe('testing "callbackCaller" function', () => {
  it("should be called callback with provided arguments", () => {
    const mockFn = jest.fn((args) => ++args);

    const cbCaller = callbackCaller(mockFn);

    expect(mockFn).not.toHaveBeenCalled();
    cbCaller(2);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).not.toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith(2);
    //z powodu drugiego wywołania
    expect(mockFn).toHaveBeenCalledWith(undefined);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveLastReturnedWith(5);
    // z powodu pierwszego wywołania
    expect(mockFn).toHaveLastReturnedWith(NaN);
  });
});
