module.exports = function(config){
  var cfg = {

    basePath : '../',

    files : [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-animate/angular-animate.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/src/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'ChromeCanary'],

    singleRun: true,

    customLaunchers: {
      Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
      }
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  };

  if (process.env.TRAVIS) {
    cfg.browsers = ['Chrome_travis_ci'];
  }

  config.set(cfg);
};
