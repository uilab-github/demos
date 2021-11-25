/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Support MDX files as pages:
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  // Support loading `.md`, `.mdx`:
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.mdx?$/,
        use: [
          // The default `babel-loader` used by Next:
          options.defaultLoaders.babel,
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              /* jsxImportSource: …, otherOptions… */
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
  images: {
    domains: ['shorturl.at'],
  },
};
