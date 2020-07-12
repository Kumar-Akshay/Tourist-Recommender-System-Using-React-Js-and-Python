const withCSS = require('@zeit/next-css');

// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://root:root@cluster0-xk6wg.mongodb.net/User_Data?retryWrites=true&w=majority",
    JWT_SECRET: "Secret",
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  }
};

// module.exports = withCSS()
