'use strict';
/*
 * Order model tests
 */

const request = require('superagent');
const {endpoint} = require('../../utils');

describe('Order model', () => {
  describe('GET Orders', () => {
    it('returns status OK', async () => {
      const res = await request.get(`${endpoint}/orders`);

      expect(res.status).toEqual(200);
    });
  });

  describe('POST Orders', () => {
    const validPayload = {
      qty: 5,
      address: '1BTC2',
      status: 'PENDING_PAYMENT',
      productId: 1,
      accountId: 1,
    };
    it('should fail if qty is blank', async () => {
      const req = request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, qty: undefined});

      expect(() => req()).toThrowError();
    });

    it('should fail if ticker is blank', async () => {
      const req = request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, ticker: undefined});

      expect(() => req()).toThrowError();
    });

    it('should fail if accountId is blank', async () => {
      const req = request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, accountId: undefined});

      expect(() => req()).toThrowError();
    });

    it('should fail if productId is blank', async () => {
      const req = request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, productId: undefined});

      expect(() => req()).toThrowError();
    });

    it('should fail if status is blank', async () => {
      const req = request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, status: undefined});

      expect(() => req()).toThrowError();
    });

    it('should create new orders with expected properties', async () => {
      const expected = {
        ...validPayload,
        id: 3,
      };
      const res = await request
        .post(`${endpoint}/orders`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(validPayload);
      expect(res.status).toEqual(200);
      expect(JSON.parse(res.text)).toEqual(expected);
    });
  });
});
