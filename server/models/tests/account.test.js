'use strict';
/*
 * Account model tests
 */

const request = require('superagent');
const {endpoint} = require('../../utils');

xdescribe('Account model', () => {
  describe('an authenticated user', async () => {
    let authToken;
    const email = 'test@testing.com';
    const password = 'pass';

    // create an account
    await request
      .post(`${endpoint}/accounts`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({email, password, phoneNumber: '0400'});

    // login
    const res = await request
      .post(`${endpoint}/accounts/login`)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({email, password});
    console.log(res);

    it('should can lookup own orders', async () => {
      const res = await request
        .get(`${endpoint}/accounts/1/orders`);
      expect(res.status).toEqual(200);
    });
  });

  describe('creating new Accounts', () => {
    const validPayload = {
      email: 'test2@testing.com',
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
      };
      delete expected.password;

      const res = await request
        .post(`${endpoint}/accounts`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(validPayload);

      const createdAccount = JSON.parse(res.text);
      delete createdAccount.id;

      expect(res.status).toEqual(200);
      expect(createdAccount).toEqual(expected);
    });
  });
});
