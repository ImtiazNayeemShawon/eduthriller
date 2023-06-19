/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    domains: ['i.ibb.co',],
  },
};

module.exports = nextConfig;
