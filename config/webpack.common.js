var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.ts",
    resolve: {
        extensions: [".ts", ".js", ".vue", ".scss"],
        alias: {
            vue: 'vue/dist/vue.js',
        }
    },
    output: {
        filename: "scripts/[name].[hash].js",
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                        ts: [{
                            loader: 'ts-loader',
                        }]
                    }
                }]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true,
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                silent: true,
                            }
                        },
                    ]
                })
            },
            {
                test: /\.(eot|woff|ttf|woff2)$/,
                exclude: [
                    path.resolve(__dirname, "node_module/webpack-material-design-icons")
                ],
                use: [{
                    loader: "file-loader",
                    options: {
                        name: `[name].[ext]`,
                    }
                }]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: false,
        }),
    ]
}