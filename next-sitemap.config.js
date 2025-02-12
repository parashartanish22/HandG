module.exports = {
    siteUrl: 'https://hngproductions.in', // Your website URL
    generateRobotsTxt: true, // Generates robots.txt
    generateIndexSitemap: false, // Prevents generating index sitemap if not needed
    sitemapSize: 5000, // Limits URLs per sitemap (adjust as needed)

    exclude: ['/admin', '/private', '/dashboard', '/404'], // Exclude sensitive pages
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private', '/dashboard', '/404'], // Block unwanted pages
            },
            {
                userAgent: 'black-listed-bot',
                disallow: ['/admin', '/private', '/dashboard'],
            },
        ],
        additionalSitemaps: [
            'https://hngproductions.in/images-sitemap.xml' // Image sitemap for Google Images ranking
        ],
    },
};
