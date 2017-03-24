module.exports = {
  entry: './app/client/App.js',
  output: {
    path: __dirname + '/app/client/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
    ]
  }

}
