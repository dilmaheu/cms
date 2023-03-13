'use strict';

/**
 * checkout-kindness service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checkout-kindness.checkout-kindness');
