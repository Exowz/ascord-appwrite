/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "www.google.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.prod.website-files.com", // Add this domain
          port: "",
          pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "business-cool.com",
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "media.licdn.com",
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "scontent-cdg4-3.xx.fbcdn.net",
            port: "",
            pathname: "/**",
        },
        {
            protocol: "https",
            hostname: "aceternity.com",
            port: "",
            pathname: "/**",
        },
       {
            protocol: "https",
            hostname: "assets.aceternity.com",
            port: "",
            pathname: "/**",
       },
       {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            port: "",
            pathname: "/**",
       },
       {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
       } 

      ],
    },
  };
  
  export default nextConfig;