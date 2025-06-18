module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",  // Localhost
      port: 7545,         // Ganache GUI port
      network_id: "1337",   // Accept any network id
      gas: 6721975,       // Default gas limit
      gasPrice: 20000000000, // Default gas price
    },
  },
  compilers: {
    solc: {
      version: "0.8.21", // Solidity version
      settings: {
        optimizer: {
          enabled: true,
          runs: 200 // or try lower, like 50 if needed
        }
      }
    },
  },
};
