const path = require('path')

// main module that started the app - the file that did it
module.exports = path.dirname(process.mainModule.filename);