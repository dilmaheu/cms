// Cloudflare images provider as by https://github.com/mettle-studio/strapi-provider-upload-cloudflare-2#readme
module.exports = ({ env }) => ({
  upload: {
    config: {
//    provider: 'strapi-provider-upload-cloudflare-2',
      providerOptions: {
//      accountId: env('STRAPI_UPLOAD_CLOUDFLARE_ACCOUNT_ID'),
//      apiKey: env('STRAPI_UPLOAD_CLOUDFLARE_API_KEY'),
//      variant: 'cms',
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  graphql: {
     config: {
        defaultLimit: -1
     },
  },
});
