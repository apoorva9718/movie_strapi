module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '94f2263c5d456b54f935c28aab131cb7'),
  },
});
