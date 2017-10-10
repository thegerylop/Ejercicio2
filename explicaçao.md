# Lemoncode Exercice 2 (Pasiona Coaching)

Project will be hosted in the following [repository](https://github.com/MasterLemon2016/LeanMoodBackend).

# How to get started

Clone or download this project.

From the root folder of the project execute (command prompt) to create package.json:

```
npm init
```

Then we create the index.html and index.ts.

**HTML**

* Create a simple HTML.

**Typescript**

* Create a `file.js` to create a bundle.js.

* Link bundle.js to HTML.

# Package.json

We will install the repositories that we need with command `npm install`.

**DEPENDENCIES**

bootstrap
    : Styles library for build resposive interficies.

react
    : Javascript library to create user interfaces.

react-dom
    : Link React with Browser.

**DEPENDENCIES-DEV**

webpack
    : Manages your packages and libraries.

webpack-dev-server
    : A little Node.js server.

typescript
    : Allows programming with Ts.

awesome-typescript-loader
    : Transforms Ts code to em5 or em6 code. 

css-loader
    : interprets `@import` and `url()` like `import/require()` and will resolve them.

style-loader
    : Adds CSS to the DOM.

url-loader
    : Loads files as `base64` encoded URL.
    
file-loader
    : To interact with the size of the files.

rimraf
    : Delete directories.

webpack-merge
    : Can merge all the webpack.config

**Scripts**

We need to create a `start` script, `build:prod` and `build:dev` for the different configurations of production and development

```
 "scripts": {
    "start": "webpack-dev-server --config=webpack.config.dev.js",
    "build:prod": "rimraf dist && webpack -p --config=webpack.config.prod.js",
    "build:dev": "rimraf dist && webpack --config=webpack.config.dev.js"
  },
```
`start`: Runs the server.
`build:prod`: Assemble the project in production mode.
`build:dev`: Assemble the project in development mode.

# tsconfig.json

Default configuration for Typescript loader
```
{
  "compilerOptions": {
    "target": "es5",
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "allowJs": true,
    "outDir": "build"
  },
  "exclude": ["node_modules"]
}
```
`target`: To compile Typescript to ECM version that you want.
`allowSyntheticDefaultImports`: Allows default imports from modules with no default export
`sourceMap`: Generates correspondig .map file and you can access to the files when you debug.
`allowJs`: Allow Js to be compiled.
`outDir`: Redirect output structure to the directory.
`exclude`: Exclude the files you have specified.

# webpack.config.base.js

In this webpack.config.js we configure everything that is used in both production and development builds.

In this webpack.config we'll need webpack and path

```
var path = require('path');
var webpack = require('webpack');
```

The module _extensions_ allows the interpretate this files extensions
```
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
```

The module _app_ indicates the primary entry point, the necessary libraries for its use are described in the module _vendor_ and the styles libraries in _vendorStyles_. 
```
  entry: {
      app: './index.ts',
      vendor: [
        'react',
        'react-dom',
      ],
      vendorStyles: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      ],
  },
```
The _rules_ module indicates witch loader is used for each file extension, in this module is posible to describe witch directories will be excluded.  
```
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 
          'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
        ],
      },
       //bootstrap
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ],
  },
```

In the _plugins_ module configures the used plugins in the project
```
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
  ]
};
```
# webpack.config.dev.js


In this webpack.config we'll need CommonConfig , path and webpack-merge.
```
var path = require('path');
var commonConfig = require('./webpack.config.base');
var webpackMerge = require('webpack-merge');
```
Inicialize a variable to get the path from directories project.
```
var basePath = __dirname;
```
The _output_ module create the output points in the dist folder created.
The _devServer_ Module prepare the server configuration, in this case indicates the port used by the server.
```
module.exports = function(){
  return  webpackMerge(commonConfig,{
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[name].js',
    },
    devServer:{
      port:8080,
    },
  });
}
```

# webpack.config.prod.js

In this webpack.config we'll need commonConfig , path and webpack-merge.
```
var path = require('path');
var commonConfig = require('./webpack.config.base');
var webpackMerge = require('webpack-merge');
```
Inicialize a variable to get the path from directory's project.
```
var basePath = __dirname;
```
The _output_ module create the output points in the dist folder created.
```
module.exports = function(){
  return  webpackMerge(commonConfig,{
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[chunkhash].[name].js',
    },
  });
}
```
# Project info

Then open a browser and navigate to http://localhost:8080
