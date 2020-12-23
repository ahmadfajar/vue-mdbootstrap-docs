const webpack = require('webpack');
const mdLoaderOptions = require('./scripts/vue-markdown-loader.conf');

module.exports = {
    productionSourceMap: false,
    parallel: false,
    publicPath: '/', // process.env.NODE_ENV === 'production' ? '/mdbootstrap-docs/' : '/',
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ]
    },
    chainWebpack: (config) => {
        config.resolve.extensions.add('.md');
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
                .loader('vue-loader')
                .end()
            .use('vue-markdown-loader')
                .loader('vue-markdown-loader/lib/markdown-compiler')
                .options(mdLoaderOptions);
    }
};
