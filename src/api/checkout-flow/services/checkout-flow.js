'use strict';

/**
 * checkout-flow service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::checkout-flow.checkout-flow');
