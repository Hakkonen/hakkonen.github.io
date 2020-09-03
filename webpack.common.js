// Imports func path
// const path = require("path")


module.exports = {
    // Stops code condensing
    // mode: "development",
    // Removes eval
    // devtool: "none",
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js"
    },
    // output: {
    //     // [contentHash] will create unique hash
    //     filename: "main.[contentHash].js",
    //     // Resolves an absolute path to dir
    //     // rather than your computer's user dir
    //     path: path.resolve(__dirname, "dist")
    // },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        output: "imgs"
                    }
                }
            },
        ],
    },
};