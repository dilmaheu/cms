'use strict';

/**
 * crowdfunding-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crowdfunding-payment.crowdfunding-payment');
