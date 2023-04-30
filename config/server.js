'use strict';

module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  emitErrors: false,
  url: env('PUBLIC_URL'),
  proxy: env.bool('IS_PROXIED', true),
  webhooks: {
    // Add this to not receive populated relations in webhooks
    populateRelations: false,
  },
});
