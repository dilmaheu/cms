'use strict';

/**
 * crowdfunding-email service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::crowdfunding-email.crowdfunding-email');
