const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CURRENT_PATH = path.resolve(__dirname); // 获取到当前目录
const MODULES_PATH = path.join(__dirname, './node_modules'); // node包目录
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publicPath: 'static/',
        filename: '[name].min.js',
        chunkFilename: '[id].[chunkhash].js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
                // 如果安装了React的话
                // presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../test.html',
            template: path.resolve(__dirname, './src/html/test.html'),
            inject: true
        })
    ]
}