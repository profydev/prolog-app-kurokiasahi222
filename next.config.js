/** @type {import('next').NextConfig} */
// !!!!! IMPORTANT !!!!!
// Solution 8: This is added after watching the solution video for footer: task 8
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    appVersion: version,
  }
};

module.exports = nextConfig;
