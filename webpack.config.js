const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.APP_ENV)

module.exports = [
    {
        entry: "./src/index.tsx",
        mode: process.env.APP_ENV,
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'index_bundle.js',
          },
        plugins: [new HtmlWebpackPlugin()],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ],
            }, 
    },
    
    // {
    //     entry: "./runoob1.js",
    //     mode: process.env.APP_ENV,
    //     output: {
    //         filename: './test2/index.bundle.js',
    //         path: path.join(__dirname, 'dist'),
    //     }
    // },
]
