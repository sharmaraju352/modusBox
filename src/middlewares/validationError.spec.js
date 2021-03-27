const httpMocks = require('node-mocks-http');
const validationError = require('middlewares/validationError');

describe('validationError', () => {
  let req, res, nextFn;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    nextFn = jest.fn();
  });

  it(`should throw 400 with error message when there is a validation error`, () => {
    const error = {
      isBoom: true,
      output: {
        statusCode: 400,
        payload: {
          statusCode: 400,
          error: 'Bad Request',
          message: 'Some Error',
        },
      },
    };
    const expectedMessage = 'Some Error';
    const errorMessage = 'Bad Request';

    validationError(error, req, res, nextFn);
    const response = JSON.parse(res._getData());

    expect(response.statusCode).toBe(400);
    expect(response.error).toBe('Bad Request');
    expect(response.message).toBe('Some Error');
  });

  it('should call next if error is not validation error', () => {
    const error = {
      error: 'Some Error',
    };
    validationError(error, req, res, nextFn);
    expect(nextFn).toHaveBeenCalledWith(error);
  });
});
