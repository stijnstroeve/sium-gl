const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(glsl|vs|fs)$/,
                loader: 'ts-shader-loader'
            }
        ]
    },
    target: 'web',
    node: {
        fs: "empty"
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.glsl']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist')
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9001,
        watchContentBase: true
    }
};