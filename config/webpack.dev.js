var merge = require("webpack-merge")
var common = require("./webpack.common");
var webpack = require("webpack");
var path = require("path");

module.exports = merge(common, {
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // multiStep: false
        }),
        new webpack.DefinePlugin({
            'process.env': "'dev'"
        }),
    ],
    devServer: {
        port: process.env.PORT || 8080,
        hot: true,
        inline: true,
        host: "0.0.0.0",
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../src'),
    }
})