var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'public') + '/scripts/index.js',
    output: {
        path: path.resolve(__dirname, 'public') + '/scripts/',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'public'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
