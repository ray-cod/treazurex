const helmet = require("helmet");

const securityHeaders = helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'"],
      "style-src": [
        "'self'",
        "'unsafe-inline'",
        "https://fonts.googleapis.com",
      ],
      "font-src": ["'self'", "https://fonts.gstatic.com"],
      "img-src": [
        "'self'",
        "data:",
        "https://treazurex.vercel.app/favicon.ico",
      ],
      "connect-src": ["'self'", process.env.CLIENT_URL],
      "frame-ancestors": ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
});

module.exports = securityHeaders;
