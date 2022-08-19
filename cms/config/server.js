module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "27255bf73c1f2c32deb2cc2ca1413c9f"),
    },
  },
});
