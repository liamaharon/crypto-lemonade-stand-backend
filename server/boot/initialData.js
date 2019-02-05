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

  // Orders
  server.models.Order.create({
    qty: 5,
    address: '0x00000000',
    status: 'PENDING_PAYMENT',
    productId: 2,
    accountId: 1,
  });
  server.models.Order.create({
    qty: 1.2,
    address: '1BTC2',
    status: 'PENDING_PAYMENT',
    productId: 1,
    accountId: 1,
  });

  // Accounts
  server.models.Account.create({
    email: 'acc1@email.com',
    password: 'pass',
    phoneNumber: '0400000000',
  });
  server.models.Account.create({
    email: 'acc2@email.com',
    password: 'pass',
    phoneNumber: '0400000001',
  });
};
