/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: Explicitly expose env vars (not needed for NEXT_PUBLIC_*)
  env: {
    FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID,
  },
  // Add other Next.js configs here if needed
};

module.exports = nextConfig;