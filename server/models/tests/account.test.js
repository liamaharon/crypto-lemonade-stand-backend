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

  describe('POST Accounts', () => {
    it('should fail if phoneNumber is blank', async () => {
      const req = request
        .post(`${endpoint}/accounts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          email: 'acc@email.com',
          password: 'pass',
        });

      expect(() => req()).toThrowError();
    });

    it('should sucessfully create new accounts', async () => {
      const expected = {
        email: 'INTERNALTEST@INTERNALTEST.COM',
        phoneNumber: '04000',
        verificationLevel: 0,
        id: 1,
      };
      const res = await request
        .post(`${endpoint}/accounts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          email: 'INTERNALTEST@INTERNALTEST.COM',
          password: 'pass',
          phoneNumber: '04000',
        });
      expect(res.status).toEqual(200);

      expect(JSON.parse(res.text)).toEqual(expected);
    });
  });
});
