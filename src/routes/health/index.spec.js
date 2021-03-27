const httpMocks = require('node-mocks-http');
const health = require('routes/health');

describe('health', () => {
  let req, res;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    res.json = jest.fn();
  });

  it(`should call res.send() with status object`, async () => {
    health(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        status: 'OK',
      }),
    );
  });
});
