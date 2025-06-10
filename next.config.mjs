import createNextIntlPlugin from 'next-intl/plugin'
import path from 'path'
// import fs from "fs"

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  skipTrailingSlashRedirect: true,
  images: {
    domains: ['cdn.acsi.eu', 'cdn.acc.acsi.eu', 'fastly.picsum.photos', 'api.tomtom.com', 'placehold.co', 'vumbnail.com'],
  },
  webpack: (config, { isServer }) => {
    config.cache = false;
    config.module.rules.push({
      test: /\.js?$/,
      include: path.resolve(process.cwd(), 'node_modules/acsi-react'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    })

    return config
  },
  reactStrictMode: false,
}

export default withNextIntl({
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/api/:path*',
        destination: '/api/:path*'
      },

      // Add other rewrite rules as needed
    ]
  }
})
// );
