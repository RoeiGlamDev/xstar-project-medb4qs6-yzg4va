import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Replace with your actual image domains
  },
  webpack(config) {
    
    return config;
  },
  experimental: {
    optimizeCss: true
},
  // Custom settings for dark theme
  publicRuntimeConfig: {
    themeColors: {
      primary: '#000000', // black
      secondary: '#ff69b4', // pink
    },
    brandName: 'luxery dark AirBNB'
}
});