/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Commented out for Vercel deployment to enable Image Optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        // unoptimized: true, // Commented out to allow Vercel to optimize images
    },
};

export default nextConfig;
