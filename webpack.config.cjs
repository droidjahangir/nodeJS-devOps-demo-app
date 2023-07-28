const path = require('path');

module.exports = {
  entry: './app/server.js', // Replace './src/index.js' with the entry point of your application.
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files.
    filename: 'bundle.js', // Name of the output bundle.
  },
  // Add any additional configuration you need, such as loaders for handling different file types, plugins, etc.
};