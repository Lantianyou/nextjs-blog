const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')
const path = require("path")
// const withCss = require('@zeit/next-css')
// const withPurgeCss = require('next-purgecss')


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: 8192,
    imagesFolder: 'images',
    imagesName: '[name]-[hash].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    removeOriginalExtension: false,
    optimizeImages: true,
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    // gifsicle: {
    //   interlaced: true,
    //   optimizationLevel: 3,
    // },
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
  }],
]);

