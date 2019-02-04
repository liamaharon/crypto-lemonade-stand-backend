'use strict';
/*
 * Account model tests
 */

const request = require('superagent');

describe('Account model', () => {
  describe('GET Accounts', () => {
    it('returns status OK', async () => {
      const res = await request.get('http://localhost:3000/api/accounts');

      expect(res.status).toEqual(200);
    });
  });
});
