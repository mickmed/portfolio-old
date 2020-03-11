let path = require('path')






let HtmlWebpackPlugin = require('html-webpack-plugin')
// let ExtractTextPlugin = require('extract-text-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        main: './src/js/index.js',
        uploader: './src/js/uploader.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].bundle_[chunkhash].js',
        sourceMapFilename: '[file].map'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader?retainLines=true'
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png|svg|gif|pdf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path]/[name].[ext]',
                            outputPath: '/',
                            // publicPath: 'src/img/'
                        }
                    }]
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: 'src/uploader.html',
            filename: 'uploader.html',
            chunks: ['uploader']
        }),
        new MiniCssExtractPlugin(),
    
    ]
}