const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATH = {
    src: path.join(__dirname, "../src"),
    dist: path.join(__dirname, "../docs"),
    assets: "assets/",
};

module.exports = {
externals: {
    path: PATH
},

    entry: {
        app: PATH.src
    },
    output: {
        filename: `${PATH.assets}js/[name].js`,
        path: PATH.dist,
        // publicPath: "./"
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_loaders/"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: `${PATH.assets}/fonts`,
                            // publicPath: "../fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: {path: `${PATH.src}/js/postcss.config.js`}}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: {path: `${PATH.src}/js/postcss.config.js`}}
                    }
                ]
            },
            
        ]
    },
    
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATH.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATH.src}/index.html`,
            filename: "./index.html"
        }),
        new CopyWebpackPlugin([
            {from: `${PATH.src}/img`, to: `${PATH.assets}/img`},
            {from: `${PATH.src}/static`, to: ""},
        ])
      ],
};