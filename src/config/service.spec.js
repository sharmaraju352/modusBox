const config = require('config/variables');
const serviceConfig = require('config/service');

describe('serviceEnvironment', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should export object with correct keys', () => {
    expect(serviceConfig).toMatchObject({
      projectName: expect.any(String),
      log: {
        level: expect.any(String),
        directory: expect.any(String),
      },
      port: expect.any(Number),
      env: expect.any(String),
      baseApiUrl: expect.any(String),
      alphavantage: {
        host: expect.any(String),
        apiKey: expect.any(String),
      },
    });
  });

  it('should throw when there is a validation error', () => {
    jest.doMock('config/variables', () => ({
      notValidKey: 'notValidKey',
    }));

    expect(() => {
      require('config/service');
    }).toThrowError();
  });
});
