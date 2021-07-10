const request = require('supertest');
const app = require('app');
const config = require('config/service');
const timeSeries = require('routes/api/alphavantage/timeSeries');

describe('timeSeries', () => {
  let server;
  beforeAll(() => {
    server = request(app);
  });

  describe('route', () => {
    it(`should throw 400 if invalid body passed`, async () => {
      // const response = await server.post(`${config.baseApiUrl}/alphavantage/time-series`).send([]).expect(400);
      // Breaking intentionally to show code will not merge
      const response = await server.post(`${config.baseApiUrl}/alphavantage/time-series`).send([]).expect(500);
      expect(response.body.error).toEqual('Bad Request');
    });

    it('should throw 500 if invalid data passed', async () => {
      const response = await server.post(`${config.baseApiUrl}/alphavantage/time-series`).send(['1234']).expect(500);
      expect(response.text).toEqual('Internal server error');
    });

    it('should return stock close prices if valid data passed', async () => {
      const response = await server.post(`${config.baseApiUrl}/alphavantage/time-series`).send(['GOOGL']).expect(200);
      expect(response.body[0].stock).toEqual('GOOGL');
    });
  });

  describe('getTimeSeries', () => {
    it('should return axios promise for given stock', () => {
      expect(timeSeries.getTimeSeries('AMZN').constructor.name).toBe('Promise');
    });
  });

  describe('getStockClosePrice', () => {
    it('should return stock name and closing price from stockData', () => {
      const stockData = {
        'Meta Data': {
          '2. Symbol': 'AMZN',
        },
        'Time Series (Daily)': {
          '2021-03-26': {
            '4. close': '3052.0300',
          },
        },
      };

      const stockClosePrice = timeSeries.getStockClosePrice(stockData);
      expect(stockClosePrice).toEqual({
        stock: 'AMZN',
        price: '3052.0300',
      });
    });
  });
});
