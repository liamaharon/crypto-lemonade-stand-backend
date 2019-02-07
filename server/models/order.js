'use strict';

module.exports = function(Order) {
  Order.validate('status', customValidator, {message: 'Invalid status'});
  function customValidator(err) {
    if
    (
      this.status !== 'PENDING_PAYMENT' &&
      this.status !== 'PENDING_FUFILMENT' &&
      this.status !== 'COMPLETED'
    ) err();
  };
};
