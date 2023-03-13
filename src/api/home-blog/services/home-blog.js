'use strict';

/**
 * home-blog service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-blog.home-blog');
