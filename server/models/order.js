'use strict';

const validateAddress = require('wallet-address-validator').validate;

module.exports = function(Order) {
  // enforce valid status
  Order.validate('status', statusValidator, {message: 'Invalid status'});
  function statusValidator(err) {
    if
    (
      this.status !== 'PENDING_PAYMENT' &&
      this.status !== 'PENDING_FUFILMENT' &&
      this.status !== 'COMPLETED'
    ) err();
  };

  // enforce valid ETH and BTC addresses
  Order.validate('address', addressValidator, {message: 'Invalid address'});
  function addressValidator(err) {
    if (this.productId === 1 && !validateAddress(this.address, 'BTC')) {
      err();
    } else if (this.productId === 2 && !validateAddress(this.address, 'ETH')) {
      err();
    }
  };
};
