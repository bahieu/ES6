const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main: [      
      './src/libs/demoClass3.js' ,     
      './src/libs/demoClass2.js' ,     
      './src/libs/demoClass1.js' ,     
      './src/libs/demoClass.js',     
      './src/libs/demoArrowFunction.js'     

    ]

  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },   
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },   
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack with Ba Hieu",
      filename: "index.html",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
