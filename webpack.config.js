const path = require('path');
console.log(process.env.APP_ENV)
module.exports = [
    {
        entry: "./src/index.tsx",
        mode: process.env.APP_ENV,
        output: {
            filename: './test/bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
    },
]
