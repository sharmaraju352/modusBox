const router = require('express').Router();
const axios = require('axios').default;
const validate = require('express-joi-validator');
const env = require('config/service');
const constants = require('constantsApp');
const validationSchema = require('validation/schema');

router.post('/', validate(validationSchema.timeSeries), (req, res) => {
  req.log.debug('Fetch time series for ', req.body);
  Promise.all(req.body.map((stock) => getTimeSeries(stock)))
    .then((timeSeries) => {
      const stockClosePrices = timeSeries.map(({ data }) => getStockClosePrice(data));
      req.log.debug('Time series response: ', stockClosePrices);
      res.json(stockClosePrices);
    })
    .catch((err) => {
      res.status(500).send('Internal server error');
    });
});

const getTimeSeries = (stock) => {
  const URL = `${env.alphavantage.host}/query?function=${constants.TIME_SERIES_DAILY}&symbol=${stock}&apikey=${env.alphavantage.apiKey}`;
  return axios.get(URL);
};

const getStockClosePrice = (stockData) => ({
  stock: stockData['Meta Data']['2. Symbol'],
  price: stockData['Time Series (Daily)'][Object.keys(stockData['Time Series (Daily)'])[0]]['4. close'],
});

module.exports = {
  router,
  getTimeSeries,
  getStockClosePrice,
};
