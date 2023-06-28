module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
    ".(ttf|eot|woff|woff2)$": "identity-obj-proxy",
    ".(mdx)$": "identity-obj-proxy",
    "^~(.*)$": "<rootDir>/src/$1",
  },
};
