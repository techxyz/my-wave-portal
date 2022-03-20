require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/jXXgL84rJq2-W1hZ_0rgXQWzxD1r339V",
      accounts: ["30dbe0a44c2aeb738cbeb41cb0fe3c50108eb783760e9275650d85e2e11aaf44"]
    },
  },
};