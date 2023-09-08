const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')['BundleAnalyzerPlugin'];

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    // Specify the target environment (web in this case)
    target: 'web',
    // Set the mode to development or production
    mode: devMode ? 'development' : 'production',
    // Define the entry point(s) for your application
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    // Configure the output for the bundled files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name][contenthash].js',
        clean: true, // Clean the output directory before each build
        assetModuleFilename: 'assets/[name][ext]',
    },
    // Generate source maps for easier debugging
    devtool: devMode ? 'source-map' : false,
    // Configure the development server
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        watchFiles: ['./src/*'],
        compress: false,
        port: 3000,
        hot: true,
    },
    module: {
        // Define rules for processing different file types
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        // Generate HTML file with injected assets
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Template',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Docs - Webpack Starter Template',
            filename: 'docs.html',
            template: 'src/docs.html',
        }),
        /*new StyleLintPlugin({
            configFile: '.stylelintrc',
            files: 'src/!**!/!*.scss',
            failOnError: true,
            quiet: true,
        }),*/
        // Extract CSS into separate files in production mode
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].css',
        }),
        // Clean the output directory before each build
        new CleanWebpackPlugin(),
        // Copy static assets from src/assets to the output directory
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
        // Analyze the bundle size
        new BundleAnalyzerPlugin(),
    ],
};