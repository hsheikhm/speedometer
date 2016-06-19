(function(){
  "use strict";

  module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),

      concat: {
        options: {
          separator: '\n// next file:\n'
        },
        dist: {
          src: ['public/src/js/**/*.js'],
          dest: 'public/dist/js/<%= pkg.name %>.js'
        }
      },

      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'public/dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },

      jshint: {
        files: ['gruntfile.js', 'public/src/js/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },

      sass: {
        dev: {
          files: {
            "public/dist/css/<%= pkg.name %>.css" : "public/src/css/sass/<%= pkg.name %>.sass"
          }
        }
      },

      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'public/dist/css/<%= pkg.name %>.min.css': ['public/dist/css/<%= pkg.name %>.css']
          }
        }
      },

      watch: {
        sass: {
          files: "public/src/css/sass/*.sass",
          tasks: ['sass', 'cssmin']
        },
        app: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
      },

      clean: ['<%= concat.dist.dest %>', 'public/dist/js/<%= pkg.name %>.min.js']

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'sass', 'cssmin']);

  };

}());
