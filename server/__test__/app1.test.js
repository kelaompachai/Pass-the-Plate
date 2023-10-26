const request = require('supertest');
// const { TextEncoder, TextDecoder } = require('util');
const server = require('../server');


describe('post request to login', () => {
  test('should respond with status 200', async () => {
    const response = await request(server).post('/login').send({
      username: 'hello',
      password: 'world',
    });
    expect(response.statusCode).toBe(200);
  });
});
