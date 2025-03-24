module.exports = {
  siteMetadata: {
    title: 'Drop Dead Thread',
    description: 'A high-quality eCommerce site for unique clothing.',
    author: '@dropdeadthread',
    siteUrl: 'https://dropdeadthread.com',
  },
  plugins: [
    // ✅ CSS Plugins (Fixes Order Conflicts)
    'gatsby-plugin-postcss',

    // ✅ Image Handling Plugins
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // ✅ JSON Data Source (Ensures `products.json` Works)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`, // Adjust if your JSON is elsewhere
      },
    },
    'gatsby-transformer-json', // ✅ Required for JSON data querying

    // ✅ React Helmet for Managing Head Tags (SEO)
    'gatsby-plugin-react-helmet',

    // ✅ Manifest for PWA Support
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Drop Dead Thread',
        short_name: 'DDT',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#FF0000',
        display: 'minimal-ui',
        icon: 'src/images/logo-icon.png', // Update with your actual favicon
      },
    },

    // ✅ Netlify Deployment Support
    'gatsby-plugin-netlify',

    // ✅ Offline Support (Progressive Web App)
    'gatsby-plugin-offline',
  ],
};
