const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicssExtractPlugin= require('mini-css-extract-plugin');
const DotenvWebpackPlugin=require('dotenv-webpack')
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:'/'
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [ 
            {
                loader: MinicssExtractPlugin.loader,
            },
            'css-loader',
            
        ]
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MinicssExtractPlugin({
        filename: 'assets/[name].css',
    }),
    new DotenvWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback:true,
    port: 3000,
    open: true,
    
  },
};