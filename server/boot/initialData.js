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
      address: '0x650dd185744ac96c1200438c1a2b06c1eb5a0e6b',
      status: 'PENDING_PAYMENT',
      productId: 2,
      accountId: 2,
    },
    {
      qty: 1.2,
      address: '3B3qq3EAPtpkSoGHSDfY6rxpK5Bqh7zmij',
      status: 'PENDING_PAYMENT',
      productId: 1,
      accountId: 2,
    },
  ]);

  server.models.Account.create([
    {
      email: 'admin@email.com',
      password: 'pass',
      phoneNumber: '0400000000',
    },
    {
      email: 'user@email.com',
      password: 'pass',
      phoneNumber: '0400000001',
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
