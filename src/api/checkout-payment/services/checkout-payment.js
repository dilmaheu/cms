'use strict';

/**
 * checkout-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checkout-payment.checkout-payment');
