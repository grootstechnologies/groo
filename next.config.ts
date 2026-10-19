import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // NOTE: X-Frame-Options intentionally removed and frame-ancestors opened:
    // the sandbox preview gateway renders the site inside a cross-origin
    // iframe, and X-Frame-Options: SAMEORIGIN made the preview show a blank
    // "refused to connect" frame.
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' https: data:; connect-src 'self' https:; frame-src 'self' https:; frame-ancestors *;",
  },
];

const nextConfig: NextConfig = {
  // Vercel handles image optimization natively — keep optimization enabled.
  // Append trailing slashes to all routes for cleaner canonical URLs.
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
