'use strict';

/**
 * home-recipe service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-recipe.home-recipe');
