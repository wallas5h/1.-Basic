export const add = (
  firstArgument: unknown = 0,
  secondArgument: unknown = 0
): number => {
  // const isFirstArgumetCorrect = typeof firstArgument === "number";
  // const isSecondArgumentCorrect = typeof secondArgument === "number";

  // let firstValue =
  //   isFirstArgumetCorrect && !isNaN(firstArgument) ? firstArgument : 0;
  // let secondValue =
  //   isSecondArgumentCorrect && !isNaN(secondArgument) ? secondArgument : 0;
  // return firstValue + secondValue;

  return returnNumberOr0(firstArgument) + returnNumberOr0(secondArgument);
};

function returnNumberOr0(arg: unknown) {
  if (typeof arg !== "number" || isNaN(arg)) {
    return 0;
  }

  return arg;
}

export const EMAIL_PATTERN = /^([a-z0-9])(([\-.]|[_]+)?([a-z0-9]+))*(@)([a-z0-9])((([-]+)?([a-z0-9]+))?)*((.[a-z]{2,3})?(.[a-z]{2,6}))$/;

export function daysBetween(startDay, endDay) {
  const ONE_DAY_IN_MS = 86_400_000;

  return Math.floor(
    Math.abs((Number(startDay) - Number(endDay)) / ONE_DAY_IN_MS)
  );
}
