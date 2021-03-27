const request = require('supertest');
const app = require('app');

describe('notfound', () => {
  let server;
  beforeAll(() => {
    server = request(app);
  });

  it(`should throw 404 with not found message if route not found`, async () => {
    const response = await server.get('/does/not/exist');
    expect(response.status).toBe(404);
  });
});
