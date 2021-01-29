module.exports = {
  externals: {"agora-electron-sdk": "commonjs2 agora-electron-sdk"},
  target: 'electron-renderer',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.node$/,
        loader: 'node-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  // ../../build/Release/agora_node_ext
  resolveLoader: {
    extensions: ['.node']
  }
}
