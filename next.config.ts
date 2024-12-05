import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images :{
    remotePatterns :[
      {
        protocol :"https",
        hostname :'*'
      }
    ]
  }
  
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    domains: ['via.placeholder.com'], // Add the domain here
  },
};
