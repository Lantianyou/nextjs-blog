const purgecss = [
    "@fullhuman/postcss-purgecss",
    {
        content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
];

module.exports = {
    plugins: [
        'tailwindcss',
        "postcss-import",
        "autoprefixer",
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                stage: 3,
                features: {
                    'custom-properties': false
                }
            }
        ],
    ],
}
