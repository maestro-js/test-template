require('dotenv').config()
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: [
    'API_URL'
  ],
  server: [
    'PORT'
  ]
})

module.exports = withPlugins([withSass, withConfig], {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    }

    return config
  }  
})

