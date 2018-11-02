const binance = require('node-binance-api')().options({
  APIKEY: '<key>',
  APISECRET: '<secret>',
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});

function findPriceETH(){
  binance.prices('ETHBTC', (error, ticker) => {
    console.log("The price of Ethereum is: " + ticker.ETHBTC);
  });
};

findPriceETH();

setInterval(findPriceETH, 500);
