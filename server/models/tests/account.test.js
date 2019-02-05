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
    const validPayload = {
      email: 'INTERNALTEST@INTERNALTEST.COM',
      password: 'pass',
      phoneNumber: '04000',
    };

    it('should fail if phoneNumber is blank', async () => {
      const req = request
        .post(`${endpoint}/accounts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, phoneNumber: undefined});

      expect(() => req()).toThrowError();
    });

    it('should create new accounts with expected properties', async () => {
      const expected = {
        ...validPayload,
        verificationLevel: 0,
        id: 1,
      };
      delete expected.password;

      const res = await request
        .post(`${endpoint}/accounts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(validPayload);

      expect(res.status).toEqual(200);
      expect(JSON.parse(res.text)).toEqual(expected);
    });
  });
});
