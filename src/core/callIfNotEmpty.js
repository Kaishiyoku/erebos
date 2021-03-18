const callIfNotEmpty = (callbackFn, value) => value ? callbackFn(value) : null;

export default callIfNotEmpty;