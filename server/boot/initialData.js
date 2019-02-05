'use strict';

module.exports = function(server) {
  // Products
  server.models.Product.create({
    name: 'Bitcoin',
    ticker: 'BTC',
    details: 'Native cryptocurrency asset',
  });

  server.models.Product.create({
    name: 'Ethereum',
    ticker: 'ETH',
    details: 'Native cryptocurrency asset',
  });

  server.models.Order.create({
    qty: 1.2,
    address: '1BTC2',
    status: 'PENDING_PAYMENT',
    productId: 2,
  });
};
