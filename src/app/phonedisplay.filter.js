angular.module("app")
  .filter("phonedisplay", () =>
    //NOTE(adam): assuming +12345678901
    /* eslint-disable no-magic-numbers */
    input => `(${input.slice(2, 5)}) ${input.slice(5, 8)}-${input.slice(8)}`
  );
