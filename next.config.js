/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/gAmp73RjDj",
        permanent: true,
      },
    ];
  },
};
