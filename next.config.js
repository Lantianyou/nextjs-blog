const rehypePrism = require('@mapbox/rehype-prism')


const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],
    options: {
        rehypePlugins: [rehypePrism],
    },
})
