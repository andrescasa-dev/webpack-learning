## CommonJS
it's a module formatting system that let developers use `require()` and `module.export`. 

# Not browser-native
It's used in node to create modules. so wee need to use babel in order to prepare our code to be used on the user side

## loaders
its an extension that help to convert languages that has similar bases:
> TypesScript ==> JavaScript

also used to provide modern functionalities trough pollyfills.
> JS(ES6 2015) ==> old JS

or even load css into JS.
```js
import './styles/styles.css' //importing css into js
```
> with loaders webpack can understand other extensions like .css, .scss, .jsx;


# Plugins
add functionalities to webpack
## HtmlWebpackPlugin
add the functionality of create an "index.html" in de "dist" directory, and inject all the bundles needed. Without this plugin it would be needed add all the "scripts" tags manually as well as the css links.


# caching
the browsers storage information in cache for better performance. But this could be in detriment to our updates.

|.|lunch| load |
|--|-----|-----|
|name:|main.js| main.js|
|description:|with modifications | without modifications|

like its the same name browsers don't download the file again.
> it's needed a way to upload files with different names every time that it's updated

for that reason we use hash content substitutions.
```js
  filename: '[name][contentHas].js',
```
# Substitutions
they are "variables" that we can use for giving a name to our files. examples:
 * [name]: the original name.
 * [contenthash]: yields a has when the content in the document changes.

# cache groups using split code
it's split the bundle, most of the time for separate the third-party code. Since this code is not going to change, it should keep the same name, that is, not apply contenthash.

a new bundle "vendors" it's created for frameworks like react (for example).

```js
optimization: {
      runtimeChunk: 'single',
     splitChunks: {
       cacheGroups: {
         vendor: {
           test: /[\\/]node_modules[\\/]/,
           name: 'vendors',
           chunks: 'all',
         },
       },
     },
    },
```

# Alias
it's like variables for paths. You can define them an using for import and exporting.

```js
//resolve section
alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
}
```

```js
import Template from '@templates/Template.js';
import '@styles/main.css';
```

# Environment variables
add the functionality to webpack to access to a ".env" file which contains all the important environment variables like the dev's API key.

> plugin used: dotEnv.

# config file for each mode
1. separate the configuration into two files:
   1. webpack.config.dev.js
   2. webpack.config.js
2. insert the mode in the webpack config file
   * mode: 'development'
3. in the package.json, set the command for execute the correspondent file
   * dev: "webpack --config webpack.config.dev.js

# clean up dist
so easy. since webpack 5 was added "output.clean = true" for that purpose.