module.export = {
  entry: {
    "main": "./main.js"
  },
  output: {
    filename: './build.js'
  },
  module: {
    loaders: {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  },
  watch: true,
}
