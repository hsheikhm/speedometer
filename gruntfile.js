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
          src: ['public/js/*.js'],
          dest: 'dist/js/<%= pkg.name %>.js'
        }
      },

      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },

      jshint: {
        files: ['gruntfile.js', 'public/js/*.js', 'test/**/*.js'],
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
            "dist/css/<%= pkg.name %>.css" : "public/css/sass/<%= pkg.name %>.sass"
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
            'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css']
          }
        }
      },

      watch: {
        sass: {
          files: "public/css/sass/*.sass",
          tasks: ['sass']
        },
        app: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
      },

      clean: ['<%= concat.dist.dest %>', 'dist/js/<%= pkg.name %>.min.js']

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
