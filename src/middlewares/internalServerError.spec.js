const httpMocks = require('node-mocks-http');
const internalServerError = require('middlewares/internalServerError');

describe('internalServerError', () => {
  let req, res, nextFn;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    nextFn = jest.fn();
  });

  it('should throw 500 with internal server error message if something breaks', () => {
    const error = 'test error';
    internalServerError(error, req, res, nextFn);
    expect(res.statusCode).toBe(500);
  });
});
