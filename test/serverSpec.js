const supertest = require('supertest');
const server = require('../app');


describe('Testing express server', () => {
  let request;
  beforeEach(() => {
    request = supertest(server);
  });

  it('Makes a get request to "api/data"', () => {
    request
      .get('/api/data')
      .expect(200)
      .expect('Content-Type', /json/)
      .end();
  });


  it('Posts data to server route "post/form"', () => {
    request
      .post('/post/form')
      .field('target', 'Calves')
      .expect(200)
      .expect('Content-Type', /json/)
      .end();
  });
});
