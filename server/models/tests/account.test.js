'use strict';
/*
 * Account model tests
 */

const request = require('superagent');
const {endpoint} = require('../../utils');

describe('Account model', () => {
  describe('GET Accounts', () => {
    it('returns status OK', async () => {
      const res = await request.get(`${endpoint}/accounts`);

      expect(res.status).toEqual(200);
    });
  });
});
