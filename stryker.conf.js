module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "html"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: ["./measuring-effectiveness/mutation/order-service.js"]
  });
};