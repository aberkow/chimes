var path = require('path');

module.exports = {
  entry: ['./js/app'],
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: 'bundle.js'
  }
}
