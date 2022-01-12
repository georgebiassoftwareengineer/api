module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '529483d9b5247b1683080721f93efb9c'),
  },
});
