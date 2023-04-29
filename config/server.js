'use strict';

module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  emitErrors: false,
  url: env('PUBLIC_URL', 'https://cms.dilmahtea.me'),
  proxy: env.bool('IS_PROXIED', true),
  webhooks: {
    // Add this to not receive populated relations in webhooks
    populateRelations: false,
  },
});
