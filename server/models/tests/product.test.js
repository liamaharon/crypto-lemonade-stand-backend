'use strict';
/*
 * Product model tests
 */

const request = require('superagent');
const {endpoint} = require('../../utils');

describe('Product model', () => {
  describe('Creating new Products', () => {
    const validPayload = {
      name: 'Bitcoin',
      ticker: 'BTC',
      details: 'Cryptocurrency asset',
    };

    it('should fail if name is blank', async () => {
      const req = request
        .post(`${endpoint}/products`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, name: undefined});

      expect(() => req()).toThrowError();
    });

    it('should fail if ticker is blank', async () => {
      const req = request
        .post(`${endpoint}/products`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({...validPayload, ticker: undefined});

      expect(() => req()).toThrowError();
    });

    it('should create new products with expected properties', async () => {
      const expected = {
        ...validPayload,
        id: 3,
      };
      const res = await request
        .post(`${endpoint}/products`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(validPayload);
      expect(res.status).toEqual(200);

      expect(JSON.parse(res.text)).toEqual(expected);
    });
  });
});
