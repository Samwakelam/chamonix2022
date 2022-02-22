import('next').NextConfig;
import withPWA from 'next-pwa';
import runtimeCaching from 'next';

module.exports = withPWA({
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
    env: {
        WU_API_ID: process.env.WU_API_ID,
        WU_KEY: process.env.WU_KEY,
    },
});
