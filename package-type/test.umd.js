(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.GreetModule = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  // Your library code goes here
  // Define your library's API
  function greet(name) {
    return `Hello, ${name}!`;
  }

  // Return the library's API
  return {
    greet: greet,
  };
});
