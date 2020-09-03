// Imports func path
const path = require("path")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                // If a file ends with .css
                test: /\.scss$/,
                // use style loader
                use: [
                    "style-loader", // Injects styles into dom
                    "css-loader", // Turns css into js
                    "sass-loader" // Turns sass into css
                ]
            },
        ]
    }
});