module.exports = {
  entry: './client/src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './build/bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
      {
        test: /scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file-loader',
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
};
