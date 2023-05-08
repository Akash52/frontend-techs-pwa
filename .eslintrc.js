module.exports = {
  // other rules...
  rules: {
    // other rules...
    "no-restricted-globals": ["error", "event", "fdescribe"],
    // allow "self"
    "no-restricted-globals": [
      "error",
      { name: "self", message: "Use 'global' instead." },
    ],
  },
};
