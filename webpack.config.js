module.exports = {
  entry: './src/script1.js',
  output:{
    path: 'dist',
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude:/(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets:['es2015']
        }
      }
    ]
  }
};
