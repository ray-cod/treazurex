// securityHeaders.js
const helmet = require("helmet");

const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      "default-src": ["'self'"],

      // Scripts from your domain only
      "script-src": ["'self'"],

      // Styles from your domain + Google Fonts
      "style-src": [
        "'self'",
        "'unsafe-inline'",
        "https://fonts.googleapis.com",
      ],

      // Fonts from your domain + Google Fonts
      "font-src": ["'self'", "https://fonts.gstatic.com"],

      // Images from your domain, data URIs, and possibly other sources
      "img-src": ["'self'", "data:", "https://treazurex.vercel.app"],

      // API and WebSocket connections
      "connect-src": [
        "'self'",
        process.env.CLIENT_URL,
        "https://treazurex.vercel.app",
      ],

      // Prevent embedding in iframes
      "frame-ancestors": ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
});

module.exports = securityHeaders;
