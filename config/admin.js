module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4f0dbbeb816561c16d8b36102bae9c09'),
  },
});
