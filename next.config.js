module.exports = {
  inlineImageLimit: 8192,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpeg", "png", "svg", "webp", "gif"],
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
    preset: "default",
    quality: 75,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "en",
  },
};
