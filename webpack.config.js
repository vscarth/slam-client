const { VueLoaderPlugin } = require('vue-loader');

const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    mode: 'development',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js%/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /(node_modules)/
            },
            {
                test: /\.(glb|gltf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: path.resolve(__dirname, 'public')
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
};