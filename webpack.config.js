const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/script.js', // Файл входа
  output: {
    path: path.resolve(__dirname, 'dist'), // Куда кладём билд
    filename: 'bundle.js',
    clean: true, // Очищает dist перед сборкой
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Указываем исходный HTML
      filename: 'index.html', // Указываем имя выходного файла
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Имя файла CSS
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }, // Копируем изображения
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  mode: 'production',
};
