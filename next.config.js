/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        domains: [
            "links.papareact.com",
            "ui-avatars.com",
            "scontent-den4-1.xx.fbcdn.net",
            "platform-lookaside.fbsbx.com",
        ],
    },
    experimental: {
        appDir: true,
    },
};
