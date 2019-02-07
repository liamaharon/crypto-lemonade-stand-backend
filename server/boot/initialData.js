'use strict';

module.exports = function(server) {
  server.models.Product.create([
    {
      name: 'Bitcoin',
      ticker: 'BTC',
      details: 'Native cryptocurrency asset',
    },
    {
      name: 'Ethereum',
      ticker: 'ETH',
      details: 'Native cryptocurrency asset',
    },
  ]);

  server.models.Order.create([
    {
      qty: 5,
      address: '0x00000000',
      status: 'PENDING_PAYMENT',
      productId: 2,
      accountId: 2,
    },
    {
      qty: 1.2,
      address: '1BTC2',
      status: 'PENDING_PAYMENT',
      productId: 1,
      accountId: 2,
    },
  ]);

  server.models.Account.create([
    {
      email: 'admin@email.com',
      password: 'admin',
      phoneNumber: '0400000000',
    },
    {
      email: 'user@email.com',
      password: 'pass',
      phoneNumber: '0400000001',
    },
    {
      email: 'acc2@email.com',
      password: 'pass',
      phoneNumber: '0400000002',
    },
  ], function(err, users) {
    if (err) throw err;

    // create the admin role
    server.models.Role.create({
      name: 'admin',
    }, function(err, role) {
      if (err) throw err;

      // assign admin role
      role.principals.create({
        principalType: server.models.RoleMapping.USER,
        principalId: users[0].id,
      }, function(err) {
        if (err) throw err;
      });
    });
  });
};
