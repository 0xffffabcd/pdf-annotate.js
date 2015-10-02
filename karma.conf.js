module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],
    
    files: [
      'test/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,
    
    autoWatch: true,

    browsers: ['Firefox'],

    singleRun: false,

    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      }
    },

    webpackServer: {
      stats: {
        colors: true
      }
    }

  });
};