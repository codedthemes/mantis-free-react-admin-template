/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  outputFileTracingRoot: path.join(__dirname, './')
};

module.exports = nextConfig;
