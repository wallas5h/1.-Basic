export function callbackCaller(callback) {
  return function (someArg) {
    return callback;
  };
}
