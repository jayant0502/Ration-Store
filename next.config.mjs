/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    env:{
        NEXT_PUBLIC_BACKEND_BASEURL: process.env.NEXT_PUBLIC_BACKEND_BASEURL
    },
    images:{
        domains:["192.168.0.229"]
    }

};

export default nextConfig;
