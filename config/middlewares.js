module.exports = [
  'strapi::errors',
// Cloudflare images provider as by https://github.com/mettle-studio/strapi-provider-upload-cloudflare-2#readme
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'imagedelivery.net'],
          'media-src': ["'self'", 'data:', 'blob:', 'imagedelivery.net'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
//  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
