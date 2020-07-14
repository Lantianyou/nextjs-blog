const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: false,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3,
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
  [withMDX, {
    pageExtensions: ['ts', 'tsx', 'mdx'],
    loaders: [
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          'file-loader',
          'webp-loader'
        ]
      }
    ]
  }]

]);

