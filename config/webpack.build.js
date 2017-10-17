var merge = require("webpack-merge");
var common = require("./webpack.common");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: false,
            mangle: false,
            comments: false,
        }),
        new CopyWebpackPlugin([{
            from: "src/assets",
            to: "assets"
        }]),
        new webpack.DefinePlugin({
            'process.env': "'prod'"
        }),
    ]
})