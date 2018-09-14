import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import DotenvPlugin from 'dotenv-webpack';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { execSync } from 'child_process';

import path from 'path';

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const resolveOptions = {
  extensions: ['*', '.js'],
  modules: [
    path.resolve(__dirname, './node_modules'),
    path.resolve(__dirname, './src'),
  ],
  // symlinks: false,
};
const webpackConfig = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: { emitWarning: true },
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
            },
          },
        ],
      },
      {
        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.css$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      // favicon: 'public/favicon.ico'
    }),
    new DotenvPlugin(),
  ],
  serve: {
    host: process.env.HOST,
    port: process.env.PORT,
    hot: true,
    on: {
      listening: () => {
        execSync('ps cax | grep "Google Chrome"');
        execSync(
          `osascript chrome.applescript "${encodeURI(
            `http://localhost:${process.env.PORT}`,
          )}"`,
          {
            cwd: __dirname,
            stdio: 'ignore',
          },
        );
      },
    },
  },
  resolve: resolveOptions,
};

export default (env, argv) => {
  if (!argv || argv.mode === 'development') {
    webpackConfig.mode = 'development';
    webpackConfig.entry.push('react-hot-loader/patch');
    webpackConfig.devtool = 'cheap-eval-source-map';
  } else if (argv || argv.mode === 'production') {
    webpackConfig.plugins.push(
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
      }),
    );
    webpackConfig.optimization = {
      minimizer: [
        new UglifyJsPlugin(),
      ],
    };
  }
  return webpackConfig;
};
