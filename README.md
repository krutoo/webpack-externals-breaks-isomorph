# Issue with using package that uses redux-saga as dependency with webpack externals

in the project I use my own package that uses redux-saga as dependency

in the webpack I specified that my package should be included in the bundle via webpack-node-externals allowList

after launching the application in Node.js it crashes with an error exactly in the place where my package uses redux-saga

at this point error is: createSagaMiddleware is not a function
