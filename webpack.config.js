const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // favicon: './src/assets/images/ibw.svg',
      template: './src/index.html',
    }),
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

    ],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
};