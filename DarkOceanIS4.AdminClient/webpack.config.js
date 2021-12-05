const path = require('path');
const { ManifestPlugin } = reqire('webpack-manifest-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // Combining multiple substitutions: [entry name].[hashes generated from the generated content]
        // The length of hashes ([hash], [contenthash] or [chunkhash]) can be specified using [hash:16] (defaults to 20)
        filename: '[name].[contenthash:8].bundle.js',
        // When targeting a library, especially when libraryTarget is 'umd', this option indicates what global object will be used to mount the library.
        // To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'.Defaults to self for Web - like targets.
        globalObject: 'this',
        // TODO: does dist folder need to be created or will webpack create it?
        // The output directory as an absolute path.
        path: path.resolve(__dirname, 'wwwroot/dist'),
        // server-relative
        // The value of the option is prefixed to every URL created by the runtime or loaders. Because of this the value of this option ends with / in most cases.
        publicPath: '/dist/'
    },
    // Providing the mode configuration option tells webpack to use its built-in optimizations accordingly
    mode: process.env.Node_ENV === 'production' ? 'production' : 'development',
    optimization: {
        runtimeChunk: {
            // necessary when using multiple entrypoints on the same page
            name: 'runtime'
        },
        // By default webpack v4+ provides new common chunks strategies out of the box for dynamically imported modules
        splitChunks: {
            cacheGroups: {
                // Create a custom vendor chunk, which contains certain node_modules packages matched by RegExp
                // This will result in splitting react and react-dom into a separate chunk. 
                // If you're not sure what packages have been included in a chunk you may refer to Bundle Analysis section for details
                // https://github.com/webpack/analyse
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new ManifestPlugin({
            // Specifies the file name to use for the resulting manifest.
            // By default the plugin will emit manifest.json to your output directory.
            // Passing an absolute path to the fileName option will override both the file name and path.
            fileName: 'manifest.json',
            // A custom Function to create the manifest. The passed function should match the signature of
            // (seed: Object, files: FileDescriptor[], entries: string[]) => Object and can return anything as long as it's serialisable by JSON.stringify.
            // Seed: A cache of key/value pairs to used to seed the manifest. This may include a set of custom key/value pairs to include in your manifest,
            // Seed: or may be used to combine manifests across compilations in multi - compiler mode.To combine manifests, pass a shared seed object to each compiler's WebpackManifestPlugin instance.
            generate: (seed, files) => {
                const manifestFiles = files.reduce((manifest, file) => {
                    manifest[file.name] = file.path;
                    return manifest;
                }, seed);
                // Filter: Allows filtering the files which make up the manifest. The passed function should match the signature of
                // Filter: (file: FileDescriptor) => Boolean.Return true to keep the file, false to remove the file.
                // Map: Allows modifying the files which make up the manifest. The passed function should match the signature of
                // Map: (file: FileDescriptor) => FileDescriptor where an object matching FileDescriptor is returned.
                // isInitial: Is required to run you app. Cannot be true if isChunk is false.
                const entrypointFiles = files.filter(x => x.isInitial && !x.name.endsWith('.map'))
                    .map(x => x.path);

                return {
                    files: manifestFiles,
                    entrypoints: entrypointFiles
                }
            }
        })
    ]
}