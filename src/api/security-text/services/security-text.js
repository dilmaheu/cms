'use strict';

/**
 * security-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::security-text.security-text');
