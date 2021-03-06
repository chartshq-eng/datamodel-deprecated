const libraryName = 'DataModel';
const outFile = 'datamodel.js';

module.exports = {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: outFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'source-map',
    module: {
        rules: []
    },
    devServer: {
        inline: true,
        contentBase: './example',
    },
};
